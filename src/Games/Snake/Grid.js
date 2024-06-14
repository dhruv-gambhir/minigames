import { useEffect, useState } from "react";

function Grid({ dir }) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [foodX, setFoodX] = useState(Math.floor(Math.random() * 40));
    const [foodY, setFoodY] = useState(Math.floor(Math.random() * 40));
    const [score, setScore] = useState(0);

    useEffect(() => {
        setFoodX(Math.floor(Math.random() * 40));
        setFoodY(Math.floor(Math.random() * 40));
    }, [score]);

    useEffect(() => {
        if (x == foodX && y == foodY) {
            setScore((prevScore) => prevScore + 1);
        }
    }, [x, y]);

    useEffect(() => {
        let interval = setInterval(() => {
            if (dir === "up") {
                setY((prevY) => {
                    const nextY = prevY - 10;
                    return nextY < 0 ? 390 : nextY;
                });
            } else if (dir === "down") {
                setY((prevY) => {
                    const nextY = prevY + 10;
                    return nextY > 390 ? 0 : nextY;
                });
            } else if (dir === "right") {
                setX((prevX) => {
                    const nextX = prevX - 10;
                    return nextX < 0 ? 390 : nextX;
                });
            } else if (dir === "left") {
                setX((prevX) => {
                    const nextX = prevX + 10;
                    return nextX > 390 ? 0 : nextX;
                });
            }
        }, 500);
        return () => clearInterval(interval);
    }, [dir]);

    return (
        <div className="flex flex-col m-2">
            <h3 className="text-white">Score: {score}</h3>
            <div
                className="border-solid border white relative"
                style={{ width: "400px", height: "400px" }}>
                <div
                    className="absolute bg-white"
                    style={{
                        width: "10px",
                        height: "10px",
                        top: `${y}px`,
                        right: `${x}px`,
                    }}></div>
                <img
                    src="./assets/apple.png"
                    className="absolute"
                    style={{
                        width: "10px",
                        height: "10px",
                        top: `${foodX}px`,
                        right: `${foodY}px`,
                    }}
                />
            </div>
        </div>
    );
}

export default Grid;
