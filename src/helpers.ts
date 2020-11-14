import { Problem } from './parser';
import { Problem as ProblemType } from '../types/definitions/problem';

const PROBLEM_DEFAULTS = [
  'type',
  'title',
  'detail',
  'instance',
  'status',
];

export function readProblem<E>(data: ProblemType | object | string, code?: number): [ProblemType, E] {
  const response: ProblemType = Problem.read<E>(data, code);

  const extensionKeys = Object.keys(response).filter(key => PROBLEM_DEFAULTS.indexOf(key) === -1);
  const problemKeys = Object.keys(response).filter(key => PROBLEM_DEFAULTS.indexOf(key) !== -1);

  const extensions = {};
  const problem = {};

  extensionKeys.forEach(key => {
    // @ts-ignore
    extensions[key] = response[key];
  });

  problemKeys.forEach(key => {
    // @ts-ignore
    problem[key] = response[key];
  });

  return [problem as ProblemType, extensions as E];
}
