// Import styling files
import "./App.scss";

import {useState} from "react";

// Import Routers
import { Route, Routes } from "react-router-dom";

// Import components
import Homepage from "./Pages/Homepage";
import Collezione from "./Pages/Collezione";
import Login from "./Pages/Login";
import ProductBL from "./Pages/ProductBL";

const App = () => {
    
    const [cardClicked, setCardClicked] = useState({});

    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Login" element={<Login />} />
            <Route cardClicked={cardClicked} setCardclicked={setCardClicked} path="/Collezione" element={<Collezione />} />
            <Route cardClicked={cardClicked} setCardclicked={setCardClicked} path="/Products" element={<ProductBL />} />
        </Routes>
    );
}

export default App;