import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Web3Service } from './web3.service';

@Injectable()
export class Web3Guard implements CanActivate {
  constructor(
    private readonly web3Service: Web3Service,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const message = request.headers.message;
    const signature = request.headers.signature;
    const address = request.headers.address;

    if (!message || !signature || !address) {
      return false;
    }

    const signer = await this.web3Service.verifySignature(message, signature);
    return signer === address;
  }
}
