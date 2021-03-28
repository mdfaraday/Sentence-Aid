import React from 'react';
import { View, StyleSheet } from 'react-native';

const SentenceCard = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 5,
        backgroundColor: 'white',
        margin: 20,
        //minHeight: 120
    },
    
    
})

export default SentenceCard;