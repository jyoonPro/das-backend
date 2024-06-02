import { Module } from '@nestjs/common';
import { StoreController, ResellStoreController } from './store.controller';
import { StoreService, ResellStoreService } from './store.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Web3Module } from '../web3/web3.module';
import { DeveloperModule } from '../developer/developer.module';
import { App } from '../developer/developer.entity';
import { StoreApp, ResellStoreApp } from '../store/store.entity';

@Module({
  imports: [TypeOrmModule.forFeature([App]), TypeOrmModule.forFeature([StoreApp]), TypeOrmModule.forFeature([ResellStoreApp]), Web3Module, DeveloperModule],
  controllers: [StoreController, ResellStoreController],
  providers: [StoreService, ResellStoreService],
  exports: [StoreService, ResellStoreService],
})
export class StoreModule {}
