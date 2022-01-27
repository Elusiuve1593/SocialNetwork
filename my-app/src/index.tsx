import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {stateRootType, messagesDataType, store} from './Components/Redax/redax';

export function reRenderEntireTree(state: stateRootType) {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} store={store} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRenderEntireTree(store.getState(store))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
