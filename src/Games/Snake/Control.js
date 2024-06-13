import { useState, useEffect } from "react";

function Control({ setDir }) {
    const [clickedButton, setClickedButton] = useState(null);

    const handleClick = (buttonId) => {
        setClickedButton(buttonId);
        setTimeout(() => {
            setClickedButton(null);
        }, 200);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    handleClick("left");
                    setDir("left");
                    break;
                case "ArrowUp":
                    handleClick("up");
                    setDir("up");
                    break;
                case "ArrowDown":
                    handleClick("down");
                    setDir("down");
                    break;
                case "ArrowRight":
                    handleClick("right");
                    setDir("right");
                    break;
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="flex flex-row">
            <div className="flex flex-col">
                <div
                    className={`p-1 bg-black rounded w-16 h-16 flex items-center justify-center m-1`}
                />
                <button
                    className={`p-1 ${
                        clickedButton === "left" ? "bg-gray-500" : "bg-white"
                    } rounded w-16 h-16 flex items-center justify-center m-1`}
                    onClick={() => handleClick("left")}>
                    <i
                        className="material-icons"
                        style={{ fontSize: "50px", color: "black" }}>
                        arrow_left
                    </i>
                </button>
            </div>
            <div className="flex flex-col">
                <button
                    className={`p-1 ${
                        clickedButton === "up" ? "bg-gray-500" : "bg-white"
                    } rounded w-16 h-16 flex items-center justify-center m-1`}
                    onClick={() => handleClick("up")}>
                    <i
                        className="material-icons"
                        style={{ fontSize: "50px", color: "black" }}>
                        arrow_drop_up
                    </i>
                </button>
                <button
                    className={`p-1 ${
                        clickedButton === "down" ? "bg-gray-500" : "bg-white"
                    } rounded w-16 h-16 flex items-center justify-center m-1`}
                    onClick={() => handleClick("down")}>
                    <i
                        className="material-icons"
                        style={{ fontSize: "50px", color: "black" }}>
                        arrow_drop_down
                    </i>
                </button>
            </div>
            <div className="flex flex-col">
                <div
                    className={`p-1 bg-black rounded w-16 h-16 flex items-center justify-center m-1`}
                />
                <button
                    className={`p-1 ${
                        clickedButton === "right" ? "bg-gray-500" : "bg-white"
                    } rounded w-16 h-16 flex items-center justify-center m-1`}
                    onClick={() => handleClick("right")}>
                    <i
                        className="material-icons"
                        style={{ fontSize: "50px", color: "black" }}>
                        arrow_right
                    </i>
                </button>
            </div>
        </div>
    );
}

export default Control;
