import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./state";

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderer = (state) => {
    root.render(
        <React.StrictMode>
            <App store={store} state={state}/>
        </React.StrictMode>
    );
}

renderer(store.getState())

store.subscriber(renderer)

reportWebVitals();
