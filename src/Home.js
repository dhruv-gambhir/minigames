import { Link } from 'react-router-dom';

function Home() {
    return (
      <div className=' min-h-screen bg-black'>
        <h1 className = "text-5xl text-white text-center">hello</h1>
        <button className="bg-red-500 py-10 px-20 text-white rounded m-10">
             <Link to="/Snake">Snake </Link> 
        </button>
        <button className="bg-green-500 py-10 px-20 text-white rounded m-10">
          <Link to='/TicTacToe'>TicTacToe</Link>
        </button>
      </div>
    );
  }

export default Home;