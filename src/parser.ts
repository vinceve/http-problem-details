import { Problem } from './types/problem';

export class Parser {
  read(incomingData: object | string, code?: number): Problem {
    const data = typeof incomingData === 'string' ? JSON.parse(incomingData) : incomingData;

    if (!data.type) {
      throw new Error("Data does not contain a problem definition.");
    }

    const { type, title, detail, instance, status } = data;

    let outgoingMessage: Problem = {
      type,
      title,
      detail,
      instance
    };

    if (status || code) {
      outgoingMessage = { ...outgoingMessage, status: status ? status : code };
    }

    return outgoingMessage;
  }
}
