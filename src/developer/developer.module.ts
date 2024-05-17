import { Module } from '@nestjs/common';
import { DeveloperService } from './developer.service';
import { DeveloperController } from './developer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Web3Module } from '../web3/web3.module';
import { App } from './developer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([App]), Web3Module],
  controllers: [DeveloperController],
  providers: [DeveloperService],
  exports: [DeveloperService],
})
export class DeveloperModule {}
