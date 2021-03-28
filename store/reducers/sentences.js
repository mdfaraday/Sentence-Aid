import { REMOVE_SENTENCE, ADD_SENTENCE, STORE_SENTENCE } from '../actions/sentences'
import Sentence from '../../models/sentence'

const initialState = {
    weeklySentences: [],
    allSentences: []
}

export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_SENTENCE:
            const newDate = new Date()
            const newSentence = new Sentence(
                newDate.toString(),
                action.info.text,
                newDate.getTime()
            )
            return {
                ...state,
                weeklySentences: state.weeklySentences.concat(newSentence)
            }
        case STORE_SENTENCE:
            const thisSentence = state.weeklySentences.find(item => item.id === action.info.id)
            return {
                ...state,
                allSentences: state.allSentences.concat(thisSentence)
            }
        case REMOVE_SENTENCE:
            const newAll = state.allSentences.filter(item => item.id !== action.info.id)
            const newWeekly = state.weeklySentences.filter(item => item.id !== action.info.id)
            return {
                ...state,
                weeklySentences: newWeekly,
                allSentences: newAll
            }
    }
    return state
}