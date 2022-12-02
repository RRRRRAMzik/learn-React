import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const rootHtmlElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootHtmlElement);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
