import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Snake from "./Games/Snake/Snake";
import TicTacToe from "./Games/TicTacToe/TicTacToe";
import FlappyBird from "./Games/FlappyBird/FlappyBird";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path="/Snake" element={<Snake />} />
                <Route path="/TicTacToe" element={<TicTacToe />} />
                <Route path="/FlappyBird" element={<FlappyBird />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
