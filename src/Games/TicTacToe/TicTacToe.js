import { useState, useEffect } from "react";

function TicTacToe() {
  const [alt, setAlt] = useState(1);

  const [win, setWin] = useState(0);

  const initialBoxState = new Map([
    ["box1", 0],
    ["box2", 0],
    ["box3", 0],
    ["box4", 0],
    ["box5", 0],
    ["box6", 0],
    ["box7", 0],
    ["box8", 0],
    ["box9", 0],
  ]);

  const [boxStatus, setBoxStatus] = useState(initialBoxState);

  const Box = ({ id }) => (
    <div
      id={id}
      onClick={() => handleClick(id)}
      className="h-32 w-32 bg-white border-black border-2 flex justify-center items-center"
    >
      {boxStatus.get(id) == 1 && (
        <img
          className="bg-white w-28 h-28 inset-0"
          src="./assets/x.png"
          alt="x"
        />
      )}
      {boxStatus.get(id) == 2 && (
        <img className="bg-white w-28 h-28" src="./assets/o.png" alt="o" />
      )}
    </div>
  );

  const handleClick = (id) => {
    if (win !== 0 || boxStatus.get(id) !== 0) return;

    const newBoxStatus = new Map(boxStatus);
    newBoxStatus.set(id, alt);
    setBoxStatus(newBoxStatus);

    setAlt(alt === 1 ? 2 : 1);
  };

  useEffect(() => {
    checkWin();
  }, [boxStatus]);

  const checkWin = () => {
    const winningCombinations = [
      // Rows
      ["box1", "box2", "box3"],
      ["box4", "box5", "box6"],
      ["box7", "box8", "box9"],
      // Columns
      ["box1", "box4", "box7"],
      ["box2", "box5", "box8"],
      ["box3", "box6", "box9"],
      // Diagonals
      ["box1", "box5", "box9"],
      ["box3", "box5", "box7"],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;

      if (
        boxStatus.get(a) !== 0 &&
        boxStatus.get(a) == boxStatus.get(b) &&
        boxStatus.get(b) == boxStatus.get(c)
      ) {
        setWin(boxStatus.get(a));
        return;
      }
    }

    if (!Array.from(boxStatus.values()).includes(0)) {
      setWin(-1);
    }
  };

  const resetGame = () => {
    setBoxStatus(initialBoxState);
    setWin(0);
    setAlt(1);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-white">TicTacToe</h1>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <Box id="box1" />
          <Box id="box2" />
          <Box id="box3" />
        </div>
        <div className="flex row">
          <Box id="box4" />
          <Box id="box5" />
          <Box id="box6" />
        </div>
        <div className="flex row">
          <Box id="box7" />
          <Box id="box8" />
          <Box id="box9" />
        </div>
      </div>
      <button
        className="bg-red-500 px-8 py-2 text-white rounded m-4"
        onClick={resetGame}
      >
        Reset
      </button>

      {win == -1 && <h1 className="text-white"> DRAW </h1>}
      {win == 1 && <h1 className="text-white"> X WINS </h1>}
      {win == 2 && <h1 className="text-white"> O WINS </h1>}
    </div>
  );
}

export default TicTacToe;
