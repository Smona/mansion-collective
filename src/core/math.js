// returns a random int between min (inclusive) and max (exclusive)
function randInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min) + min);
}

export {
  randInt,
};
