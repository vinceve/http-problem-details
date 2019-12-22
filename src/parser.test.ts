import { Parser } from './parser';

describe('parser', () => {
  describe('read', () => {
    it('throws an error when no type is present', () => {
      expect(() => new Parser().read({})).toThrowError('Data does not contain a problem definition.');
    });

    it('parses a type from an incoming object', () => {
      expect(new Parser().read({ type: 'https://verberckt.io/problem-type' })).toEqual({ type: 'https://verberckt.io/problem-type' });
    });

    it('parses a type from an incoming string', () => {
      expect(new Parser().read(`{ "type": "https://verberckt.io/problem-type" }`)).toEqual({ type: 'https://verberckt.io/problem-type' });
    });

    it('parses a optional title from an incoming string', () => {
      expect(new Parser().read(`{ "type": "https://verberckt.io/problem-type", "title": "a test" }`)).toEqual({ type: 'https://verberckt.io/problem-type', title: 'a test' });
    });

    it('parses a optional detail from an incoming object', () => {
      expect(new Parser().read({ type: 'https://verberckt.io/problem-type', detail: 'test' })).toEqual({ type: 'https://verberckt.io/problem-type', detail: 'test' });
    });

    it('parses a optional instance from an incoming object', () => {
      expect(new Parser().read({ type: 'https://verberckt.io/problem-type', instance: 'https://verberckt.io/error/1234' })).toEqual({ type: 'https://verberckt.io/problem-type', instance: 'https://verberckt.io/error/1234' });
    });

    it('parses a status code from an incoming object', () => {
      expect(new Parser().read({ type: 'https://verberckt.io/problem-type', status: 400 })).toEqual({ type: 'https://verberckt.io/problem-type', status: 400 });
    });

    it('parses a status code from the response itself', () => {
      expect(new Parser().read({ type: 'https://verberckt.io/problem-type' }, 400)).toEqual({ type: 'https://verberckt.io/problem-type', status: 400 });
    });

    it('takes the object status over the response status', () => {
      expect(new Parser().read({ type: 'https://verberckt.io/problem-type', status: 422 }, 400)).toEqual({ type: 'https://verberckt.io/problem-type', status: 422 });
    });
  });
});
