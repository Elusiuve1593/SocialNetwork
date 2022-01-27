import {combineReducers, createStore} from "redux";
import {postReducer} from "./post_reducer";
import {dialogsReducer} from "./dialogs_reducer";

export const rootReducer = combineReducers({
    postReducer,
    dialogsReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export type reduxStoreType = typeof store
export const store = createStore(rootReducer)