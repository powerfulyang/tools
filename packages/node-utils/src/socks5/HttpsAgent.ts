import { Agent } from 'http';
import { connect } from 'tls';
import { CreateConnectionOptions, Socks5Client } from './client';
import { AgentOptions } from './HttpAgent';

export class HttpsAgent extends Agent {
  private socket;

  constructor(options: AgentOptions = {}) {
    super();
    const { proxyHost, proxyPort } = options;
    this.socket = new Socks5Client({
      host: proxyHost,
      port: proxyPort,
    });
  }

  createConnection(options: CreateConnectionOptions) {
    this.socket.proxy(options, () => {
      this.socket = connect({
        servername: options.host,
        socket: this.socket,
      }) as any;
    });
    return this.socket;
  }
}
