/**
 * Generate a random decimal value in the given range
 * @param min Minimum random value, inclusive
 * @param max Maximum random value, exclusive
 * @returns Random value in the range [min, max)
 */
const randomFloat = (min: number, max: number): number =>
  min + (max - min) * Math.random();
