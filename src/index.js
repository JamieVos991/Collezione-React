// Import React
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Import ReactDOM
import ReactDOM from "react-dom/client";

// Import Redux components
import { Provider } from 'react-redux';
import store from './Helpers/store';

// Import components
import App from "./App";

// Renderen de root
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
