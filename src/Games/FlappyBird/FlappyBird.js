import { useState, useEffect } from "react";

function FlappyBird() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleJump = () => {
        setY((prevY) => {
            const nextY = prevY - 70;
            return nextY <= 0 ? 0 : nextY;
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setY((prevY) => {
                const nextY = prevY + 1;
                return nextY >= 200 ? 200 : nextY;
            });
        }, 10);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="flex flex-col items-center">
                <div className="transition-smooth relative border-solid border white px-64 py-32">
                    <img
                        src="./assets/bird.png"
                        className={`absolute`}
                        style={{
                            top: `${y}px`,
                            left: `20px`,
                            height: "50px",
                            height: "50px",
                        }}></img>
                </div>
                <button
                    className="h-16 w-64 bg-white rounded m-4"
                    onClick={handleJump}>
                    {" "}
                    Jump{" "}
                </button>
            </div>
        </div>
    );
}

export default FlappyBird;
