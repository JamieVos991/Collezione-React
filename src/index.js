// Importeren React
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Importren ReactDOM
import ReactDOM from "react-dom/client";

// Importeren App
import App from "./App";

// Renderen de root
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
