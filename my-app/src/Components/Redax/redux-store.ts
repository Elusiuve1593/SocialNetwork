import {combineReducers, createStore} from "redux";
import {postReducer} from "./post_reducer";
import {dialogsReducer} from "./dialogs_reducer";
import {usersReducer} from "./users_reducer";

export const rootReducer = combineReducers({
    postReducer,
    dialogsReducer,
    usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)