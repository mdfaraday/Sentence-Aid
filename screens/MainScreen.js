import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, TextInput, View, Button, StyleSheet, Text, Alert, ScrollView, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment';

import SentenceCard from '../components/SentenceCard'
import * as sentenceActions from '../store/actions/sentences'

const MainScreen = () => {
    const weeklyList = useSelector(state => state.sentences.weeklySentences)
    const [currentText, setCurrentText] = useState('')
    const dispatch = useDispatch()

    //const newDate1 = new Date().getTime()
    //const newDate2 = new Date().getTime()
    //moment().format('MMMM Do YYYY, h:mm:ss a'); // December 13th 2018, 5:25:14 pm

    const sentenceInputHandler = useCallback((enteredText) => {
        if (enteredText.length >= 100) {
            return
        } else {
            setCurrentText(enteredText)
        }
    }, [setCurrentText])

    function dateDiffInDays(date1, date2) {
        // round to the nearest whole number
        return Math.round((date2-date1)/(1000*60*60*24));
    }

    //this needs the 'if' statement changed to '> 7' once full functionality is implemented.
    useEffect(() => {
        for (const index in weeklyList) {
            const currentDate = new Date().getTime()
            const daysDifferent = dateDiffInDays(weeklyList[index].time, currentDate);
            if (daysDifferent === 7) {
                dispatch(sentenceActions.storeSentence(weeklyList[index].id))
            }
        }
    }, [weeklyList])

    const saveHandler = () => {
        dispatch(sentenceActions.addSentence(currentText))
        setCurrentText('')
    }
    
    const deleteHandler = (id) => {
        Alert.alert('Confirmation', 'Are you sure you want to delete this sentence?', [
            {text: 'No', style: 'default'},
            {text: 'Yes', style: 'destructive', onPress: () => {
                dispatch(sentenceActions.removeSentence(id))
            }}
        ])
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputCard}>
                <View style={styles.titleContainer}>
                    <Text style={styles.headerText}>Enter a sentence below to get started</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        onChangeText={sentenceInputHandler} 
                        placeholder='Enter a sentence'
                        value={currentText}
                        multiline
                    />
                </View>
                <View style={styles.saveContainer}>
                    <Button color='white' title='save' onPress={() => {saveHandler()}}/>
                </View>
            </View>
            
            <SafeAreaView style={styles.listStyle}>
                <ScrollView>
                    {weeklyList.map((item, index) => 
                    (
                        <SentenceCard key={index}>
                            <View style={styles.textContainer}>
                                <Text style={styles.text}>{item.text}</Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <View style={styles.button}>
                                    <Button title='delete' color='red' onPress={() => deleteHandler(item.id)} />
                                </View>
                                <View style={styles.button}>
                                    <Button title='translate' />
                                </View>
                            </View>
                        </SentenceCard>
                    ))
                    }
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

{/* <FlatList data={weeklyList} keyExtractor={item => item.id} renderItem={itemData => 
                (
                    <SentenceCard>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>{itemData.item.text}</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <Button title='delete' color='red' onPress={deleteHandler(itemData.item.id)} />
                            </View>
                            <View style={styles.button}>
                                <Button title='translate' />
                            </View>
                        </View>
                    </SentenceCard>
                    )
                }/> */}

MainScreen.navigationOptions = {
    headerTitle: 'Welcome to Sentence-Aid'
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputCard: {
        height: '40%'
    },
    titleContainer: {
        height: '10%',
    },
    inputContainer: {
        height: '60%',
        borderBottomColor: 'black',
        // shadowColor: 'black',
        // shadowOpacity: 0.5,
        // shadowRadius: 10,
        // shadowOffset: {width: 0, height: 3},
    },
    saveContainer: {
        height: '30%',
        width: '100%',
        justifyContent: 'center',
        //paddingBottom: 20,
        //marginBottom: 10,
        padding: 0,
        borderWidth: 1,
        backgroundColor: '#5B9EFF',
    },
    input: {
        fontSize: 20,
        height: '100%',
        margin: 10,
    },
    listStyle: {
        height: '60%'
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        width: '50%',
        justifyContent: 'center'
    },
    textContainer: {
        padding: 10,
    },
    text: {
        fontSize: 20,
        textAlign: 'center'
    },
})

export default MainScreen;