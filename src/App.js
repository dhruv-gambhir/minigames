import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Home'
import Snake from './Games/Snake/Snake'
import TicTacToe from './Games/TicTacToe/TicTacToe';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path='/Snake' element={<Snake />} />
        <Route path='/TicTacToe' element={<TicTacToe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
