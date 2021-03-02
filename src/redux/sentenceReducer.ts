import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {Sentence} from './sentenceTypes';

const CREATE_SENTENCE = "CREATE_SENTENCE";

interface CreateTodoActionType {
    type: typeof CREATE_SENTENCE;
    payload: Sentence;
  }
  export const createSentenceActionCreator = ({
    what, where, who, when
  }: {
    what: string; where: string; who: string; when: string
  }): CreateTodoActionType => {
    return {
      type: CREATE_SENTENCE,
      payload: {
        what: '',
        where: '',
        when: '',
        who: ''
      }
    };
  };

const sentencesInitialState: Sentence[] = [
    {
        what: '',
        where: '',
        when: '',
        who: ''
    }
]

type SentenceActionTypes = | CreateTodoActionType;

const sentencesReducer = (state: Sentence[] = sentencesInitialState, action: SentenceActionTypes) => {
    switch(action.type) {
        case CREATE_SENTENCE: {
            const {payload} = action;
            return [
                ...state,
                payload
            ]
        }
    }
}

const reducers = combineReducers({
    sentences: sentencesReducer
})

export default createStore(
    reducers,
    applyMiddleware(thunk, logger)
)