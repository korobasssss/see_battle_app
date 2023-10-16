import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reduxStore from "./redux/reduxStore";

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderer = (state) => {
    root.render(
        <React.StrictMode>
            <App store={reduxStore} state={state.game}/>
        </React.StrictMode>
    );
}

renderer(reduxStore.getState())

reduxStore.subscribe(() => {
    let state = reduxStore.getState()
    renderer(state)
})

reportWebVitals();
