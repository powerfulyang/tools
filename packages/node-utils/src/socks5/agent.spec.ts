import { AgentFactory } from './Agent';
import { request } from 'http';

describe('test agent', function () {
  it('https agent', function (done) {
    const agent = AgentFactory.create({ type: 'http' });
    request(
      {
        agent,
        host: 'twitter.com',
      },
      (res) => {
        res.on('data', (data) => {
          const dataStr = data.toString();
          expect(dataStr).toBeDefined();
          done();
        });
      },
    ).end();
  });
});
