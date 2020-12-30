import { Socks5Client } from './client';
import { toBuffer } from 'ip';

describe('test socks5 client', function () {
  it('authenticate', function (done) {
    const client = new Socks5Client({
      hostname: '::1',
    });
    client.connect({
      host: 'google.com',
      port: 443,
    });
    client.on('data', (data) => {
      console.log(data);
      done();
    });
  });

  it('ipv6 to buffer', function () {
    const buffer = toBuffer('::1');
    expect(buffer).toBeDefined();
  });

  it('ipv4 to buffer', function () {
    const buffer = toBuffer('127.0.0.1');
    expect(buffer).toBeDefined();
  });
});
