import { ipV4ToLong } from './ipv4';

describe('ip convert test', function () {
  it('ip地址转long', function () {
    const ipLong = ipV4ToLong('127.0.0.1');
    expect(ipLong).toBe(2130706433);
  });
});
