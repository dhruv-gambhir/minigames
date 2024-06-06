function Control() {
    return (
        <div className="flex flex-row">
            <div className="flex flex-col">
                <div className="p-1 bg-black rounded w-16 h-16 flex items-center justify-center m-1" />
                <button className="p-1 bg-white rounded w-16 h-16 flex items-center justify-center m-1">
                    <i
                        className="material-icons"
                        style={{ fontSize: "50px", color: "black" }}>
                        arrow_left
                    </i>
                </button>
            </div>
            <div className="flex flex-col">
                <button className="p-1 bg-white rounded w-16 h-16 flex items-center justify-center m-1">
                    <i
                        className="material-icons"
                        style={{ fontSize: "50px", color: "black" }}>
                        arrow_drop_up
                    </i>
                </button>
                <button className="p-1 bg-white rounded w-16 h-16 flex items-center justify-center m-1">
                    <i
                        className="material-icons"
                        style={{ fontSize: "50px", color: "black" }}>
                        arrow_drop_down
                    </i>
                </button>
            </div>
            <div className="flex flex-col">
                <div className="p-1 bg-black rounded w-16 h-16 flex items-center justify-center m-1" />
                <button className="p-1 bg-white rounded w-16 h-16 flex items-center justify-center m-1">
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
