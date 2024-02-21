import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AccountProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AccountProvider>

    <BrowserRouter>
    <App />
    </BrowserRouter>
    
    </AccountProvider>
);
