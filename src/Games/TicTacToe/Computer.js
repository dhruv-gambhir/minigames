function Computer(boxStatus) {
    const winningCombinations = [
        ["box1", "box2", "box3"],
        ["box4", "box5", "box6"],
        ["box7", "box8", "box9"],
        ["box1", "box4", "box7"],
        ["box2", "box5", "box8"],
        ["box3", "box6", "box9"],
        ["box1", "box5", "box9"],
        ["box3", "box5", "box7"],
    ];

    // Ensure boxStatus is a Map
    if (!(boxStatus instanceof Map)) {
        throw new Error("boxStatus must be a Map");
    }

    const freeTiles = Array.from(boxStatus.keys()).filter(
        (key) => boxStatus.get(key) === 0
    );

    if (freeTiles.length === 0) {
        throw new Error("No free tiles available");
    }

    const randomIndex = Math.floor(Math.random() * freeTiles.length);

    return freeTiles[randomIndex];
}

export default Computer;
