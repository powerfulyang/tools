export type ReqOptions = {
  url: string;
  immediately: boolean;
  body: BodyInit;
  query: Record<string, string>;
};
