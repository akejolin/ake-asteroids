import {randomNumBetween} from './helpers';

describe('randomNumBetween', () => {
  it('should generate a number', () => {
    expect(randomNumBetween(1, 1)).toBeGreaterThan(1);
    expect(randomNumBetween(1, 1)).toBeLessThan(2);
  });
});
