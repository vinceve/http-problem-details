import { Problem } from './definitions/problem';

export class Parser {
  read<T extends Problem>(incomingData: object | string, code?: number): T {
    let data: T = typeof incomingData === 'string' ? JSON.parse(incomingData) : { ...incomingData };

    if (!data.type) {
      throw new Error("Data does not contain a problem definition.");
    }

    if (data.status || code) {
      data = { ...data, status: data.status ? data.status : code };
    }

    return data;
  }
}
