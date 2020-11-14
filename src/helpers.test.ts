import { readProblem } from './helpers';

interface ExtraParameters {
  aParameter: boolean;
}

describe('helpers', () => {
  describe('.readProblem', () => {
    it('Processes the input and returns the extensions', () => {
      const [, extensions] = readProblem<ExtraParameters>({ type: 'test', aParameter: true });
      expect(extensions.aParameter).toEqual(true);
    });

    it('Processes the input and returns the extensions with no problem data', () => {
      const [, extensions] = readProblem<ExtraParameters>({ type: 'test', aParameter: true });
      // @ts-ignore
      expect(extensions.type).toEqual(undefined);
    });

    it('Processes the input and returns the problem', () => {
      const [problem] = readProblem<ExtraParameters>({ type: 'test', aParameter: true });
      expect(problem.type).toEqual('test');
    });
  });
});
