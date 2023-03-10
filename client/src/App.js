import './App.css';
import Main from "./components/Main";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/sign_up" element={<SignUp />} />
                <Route path="/sign_in" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
