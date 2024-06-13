import React, { useState } from "react";
import Control from "./Control";
import Grid from "./Grid";

function Snake() {
    const [dir, setDir] = useState(null);

    return (
        <div className=" flex flex-row min-h-screen bg-black flex items-center justify-center">
            <Grid dir={dir} />
            <div className="w-16" />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-white text-center">Snake</h1>
                <Control setDir={setDir} />
            </div>
        </div>
    );
}

export default Snake;
