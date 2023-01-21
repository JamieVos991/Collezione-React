// Import styling files
import "./App.scss";

// Import Routers
import { Route, Routes } from "react-router-dom";

// Import components
import Homepage from "./Pages/Homepage";
import Collezione from "./Pages/Collezione";
import Login from "./Pages/Login";

const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/Collezione" element={<Collezione />}></Route>
            </Routes>
        </>
    );

    
}

export default App;