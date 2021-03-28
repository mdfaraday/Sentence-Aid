export const REMOVE_SENTENCE = 'REMOVE_SENTENCE'
export const ADD_SENTENCE = 'ADD_SENTENCE'
export const STORE_SENTENCE = 'STORE_SENTENCE'

export const removeSentence = id => {
    return { type: REMOVE_SENTENCE, 
        info: {
            id: id
        }
    }
}

export const addSentence = text => {
    return { type: ADD_SENTENCE, 
        info: {
            text
        }
    }
}

export const storeSentence = id => {
    return { type: STORE_SENTENCE, 
        info: {
            id: id
        }}
}
