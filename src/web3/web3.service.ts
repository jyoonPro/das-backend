import { Inject, Injectable } from '@nestjs/common';
import Web3 from 'web3';

@Injectable()
export class Web3Service {
  constructor(@Inject('Web3') private readonly web3: Web3) {}

  async verifySignature(message: string, signature: string) {
    return this.web3.eth.accounts.recover(message, signature);
  }
}
