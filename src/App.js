import Homepage from "./Pages/Homepage";
import Homepage2 from "./Pages/Homepage2";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
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