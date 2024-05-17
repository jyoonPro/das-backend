import { Module } from '@nestjs/common';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Web3Module } from '../web3/web3.module';

@Module({
  imports: [TypeOrmModule.forFeature([]), Web3Module],
  controllers: [StoreController],
  providers: [StoreService],
  exports: [StoreService],
})
export class StoreModule {}
