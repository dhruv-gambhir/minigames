import React, { useState } from "react";
import Control from "./Control";

function Snake() {
    const [direction, setDirection] = useState();

    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div>
                <h1 className="text-white text-center mb-8">Snake</h1>
            </div>
            <Control />
        </div>
    );
}

export default Snake;
