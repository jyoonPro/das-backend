import { Module } from '@nestjs/common';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Web3Module } from '../web3/web3.module';
import { DeveloperModule } from '../developer/developer.module';

@Module({
  imports: [TypeOrmModule.forFeature([]), Web3Module, DeveloperModule],
  controllers: [StoreController],
  providers: [StoreService],
  exports: [StoreService],
})
export class StoreModule {}
