import { Module } from '@nestjs/common';
import { Web3Service } from './web3.service';
import Web3 from 'web3';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: 'Web3',
      useFactory: () => {
        return new Web3(process.env.BLOCKCHAIN_URL);
      },
    },
    Web3Service,
  ],
  exports: [Web3Service],
})
export class Web3Module {}
