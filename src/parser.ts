import { Problem } from './types/problem';

export class Parser {

  read(data: any, status: number): Problem {
    if (!data.type) {
      throw new Error("Data does not contain a problem definition.");
    }
  }

}
