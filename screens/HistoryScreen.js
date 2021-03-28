import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useSelector } from 'react-redux'

import SentenceCard from '../components/SentenceCard'
import * as sentenceActions from '../store/actions/sentences'



const HistoryScreen = () => {
    const sentenceList = useSelector(state => state.sentences.allSentences)
    const weeklyList = useSelector(state => state.sentences.weeklySentences)
    console.log(sentenceList)

    //return statement FlatList needs the data changed to sentenceList once full functionality is implemented.
    return (
        <View>
            <Text>This is the list of all sentences</Text>
            <FlatList data={weeklyList} renderItem={itemData => 
                <SentenceCard text={itemData.item.text} />
            }/>
        </View>
    );
}

export default HistoryScreen;

//I can access this from a tab