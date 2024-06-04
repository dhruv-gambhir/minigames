function Computer(boxStatus) {
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
