export type Problem<P> = {
  type: string;
  title?: string;
  detail?: string;
  instance?: string;
  status?: number;
} & P;
