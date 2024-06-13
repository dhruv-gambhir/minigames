import { useEffect, useState, useRef } from "react";

function Grid({ dir }) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        clearInterval(intervalRef.current);

        const intervalId = setInterval(() => {
            if (dir === "up") {
                setY((prevY) => {
                    const nextY = prevY - 10;
                    return nextY < 0 ? 0 : nextY;
                });
            } else if (dir === "down") {
                setY((prevY) => {
                    const nextY = prevY + 10;
                    return nextY > 390 ? 390 : nextY;
                });
            } else if (dir === "right") {
                setX((prevX) => {
                    const nextX = prevX - 10;
                    return nextX < 0 ? 0 : nextX;
                });
            } else if (dir === "left") {
                setX((prevX) => {
                    const nextX = prevX + 10;
                    return nextX > 390 ? 390 : nextX;
                });
            }

            intervalRef.current = intervalId;

            return () => clearInterval(intervalId);
        }, 1000);
    }, [dir]);

    return (
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
        </div>
    );
}

export default Grid;
