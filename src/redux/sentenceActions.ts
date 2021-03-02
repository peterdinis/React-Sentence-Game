import {
    combineReducers,
    configureStore,
    createSlice,
    getDefaultMiddleware,
    PayloadAction
  } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {Sentence} from './sentenceTypes';

const sentencesInitialState: Sentence[] = [
    {
        what: '', 
        who: '',
        when: '',
        where: ''
    }
]

const sentencesSlice = createSlice({
    name: "todos",
    initialState: sentencesInitialState,
    reducers: {
      create: {
        reducer: (
          state,
          {
            payload
          }: PayloadAction<{ what: string; where: string; when: string; who: string}>
        ) => {
          state.push(payload);
        },

        prepare: ({ what, when, who, where }: { what: string; when: string; who: string; where: string }) => ({
            payload: {
             what,
             where,
             who,
             when
            }
          })
      }
    }
  });

export const {
    create: createSentenceActionCreator,
} = sentencesSlice.actions

const reducer = combineReducers({
    sentences: sentencesSlice.reducer,
})

const middleware = [...getDefaultMiddleware(), logger];
export default configureStore({
    reducer,
    middleware
})

