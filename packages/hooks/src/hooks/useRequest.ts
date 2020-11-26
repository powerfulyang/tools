import { ReqOptions } from '../type/ReqOptions';

export class UseRequest {
  static baseUrl: string = '';
}

export const useRequest = (reqOptions: ReqOptions) => {
  let { url } = reqOptions;
  if (!url.startsWith('http')) {
    url = `${UseRequest.baseUrl}${url}`;
  }
  console.log(url);
};
