import { sum } from './math';
import { Parser } from './parser';

describe('parser', () => {
  describe('read', () => {
    it('throws an error when no type is present', () => {
      expect(() => new Parser().read({}, 400)).toThrowError('Data does not contain a problem definition.');
    });

    it('sums 2 numbers', () => {
      expect(sum(1, 1)).toBe(2);
    });

    it('sums n numbers', () => {
      expect(sum(1, 2, 3, 4)).toBe(10);
    });

    it('returns a number if it is provided by itself', () => {
      expect(sum(10)).toBe(10);
    });

    it('returns 0 if no numbers are provided', () => {
      expect(sum()).toBe(0);
    });
  });
});
