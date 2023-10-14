import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderer = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}/>
        </React.StrictMode>
    );
}