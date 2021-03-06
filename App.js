//Packages used
//moment, react navigation, redux, react navigation tabs, react navigation tabs



import React from 'react';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import sentencesReducer from './store/reducers/sentences'
import SentenceProNavigator from './navigation/SentenceProNavigator'

//main reducer
const rootReducer = combineReducers({
  sentences: sentencesReducer
})

//creating redux store
const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <SentenceProNavigator />
    </Provider>
  );
}
