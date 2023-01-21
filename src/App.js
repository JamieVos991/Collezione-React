// Import styling files
import "./App.scss";

// Import Routers
import { Route, Routes } from "react-router-dom";

// Import components
import Homepage from "./Pages/Homepage";
import Homepage2 from "./Pages/Homepage2";
import Login from "./Pages/Login";

const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/Homepage2" element={<Homepage2 />}></Route>
            </Routes>
        </>
    );

    
}

export default App;