/**
 * Random Interger between 2 numbers
 */
 export const randomInterger = (min: number, max: number): number => {
    return Math.floor(Math.random()*(max-min+1)+min);
}

/**
 * Random Number between 2 numbers
 */
export const randomNumBetween = (min: number, max: number): number  => {
  return Math.random() * (max - min + 1) + min;
};

/**
 * Random Number between 2 numbers excluding a certain range
 */
export const randomNumBetweenExcluding = (min: number, max: number, exMin: number, exMax: number): number => {
  let random = randomNumBetween(min, max);
  while (random > exMin && random < exMax) {
    random = Math.random() * (max - min + 1) + min;
  }
  return random;
}