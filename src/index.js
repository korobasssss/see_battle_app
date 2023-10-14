import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {renderer} from "./render";
import state from "./state";

const root = ReactDOM.createRoot(document.getElementById('root'));

// let renderer = () => {
//     root.render(
//         <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     );
// }
//
// renderer()

renderer(state)

reportWebVitals();
