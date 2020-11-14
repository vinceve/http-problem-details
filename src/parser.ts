import { Problem as ProblemType } from './definitions/problem';

export class Problem {
  public static read<P>(incomingData: object | string, code?: number): ProblemType<P> {
    let data: ProblemType<P> = typeof incomingData === 'string' ? JSON.parse(incomingData) : { ...incomingData };

    if (!data.type) {
      throw new Error("Data does not contain a problem definition.");
    }

    if (data.status || code) {
      data = { ...data, status: data.status ? data.status : code };
    }

    return data;
  }
}
