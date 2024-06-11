import { useState, useEffect } from "react";

function FlappyBird() {
    const [x, setX] = useState(0);
    const [x2, setX2] = useState(-1);

    const [y, setY] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    const [topBarHeight, setTopBarHeight] = useState(10);
    const [botBarHeight, setBotBarHeight] = useState(10);

    const pickBarHeight = () => {
        const rnd1 = Math.floor(Math.random() * 10);
        const rnd2 = Math.floor(Math.random() * 10);
        console.log(`rnd1 ${rnd1}`);
        console.log(`rnd2 ${rnd2}`);
        setTopBarHeight(rnd1 * 4);
        setBotBarHeight(rnd2 * 4);
    };

    const handleJump = () => {
        setY((prevY) => {
            const nextY = prevY - 100;
            return nextY <= 0 ? 0 : nextY;
        });
    };

    const resetGame = () => {
        setY(0);
        setX(0);
        pickBarHeight();
    };

    useEffect(() => {
        if (x >= 380) {
            setIsGameOver(true);
        }
    }, [x]);

    useEffect(() => {
        const interval = setInterval(() => {
            setY((prevY) => {
                const nextY = prevY + 1;
                return nextY >= 150 ? 150 : nextY;
            });
        }, 10);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setX((prevX) => {
                const nextX = prevX + 1;
                return nextX > 400 ? 400 : nextX;
            });
        }, 10);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setX2((prevX2) => {
                const nextX2 = prevX2 + 1;
                return nextX2 > 400 ? 400 : nextX2;
            });
        }, 10);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="flex flex-col items-center">
                <div
                    className="relative border-solid border white"
                    style={{ height: "200px", width: "400px" }}>
                    <img
                        src="./assets/bird.png"
                        className="absolute smooth-transition"
                        style={{
                            top: `${y}px`,
                            left: `20px`,
                            height: "50px",
                            transition: "top 0.2s ease",
                        }}></img>
                    <div
                        className="absolute"
                        style={{
                            top: "0",
                            right: `${x}px`,
                            height: `${topBarHeight}%`,
                            width: "10px",
                            background: "white",
                        }}
                    />
                    <div
                        className="absolute"
                        style={{
                            bottom: "0px",
                            right: `${x}px`,
                            height: `${botBarHeight}%`,
                            width: "10px",
                            background: "white",
                        }}
                    />
                    <div
                        className="absolute"
                        style={{
                            top: "0",
                            right: `${x2}px`,
                            height: `${topBarHeight}%`,
                            width: "10px",
                            background: "white",
                        }}
                    />
                    <div
                        className="absolute"
                        style={{
                            bottom: "0px",
                            right: `${x2}px`,
                            height: `${botBarHeight}%`,
                            width: "10px",
                            background: "white",
                        }}
                    />
                </div>
                <button
                    className="h-16 w-64 bg-white rounded m-4"
                    onClick={handleJump}>
                    {" "}
                    Jump{" "}
                </button>
                <button
                    className="h-8 w-32 bg-red-500 text-white rounded m-4"
                    onClick={resetGame}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default FlappyBird;
