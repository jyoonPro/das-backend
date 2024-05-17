import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeveloperModule } from './developer/developer.module';
import { StoreModule } from './store/store.module';
import { Web3Module } from './web3/web3.module';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CacheModule.register(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }),
    DeveloperModule,
    StoreModule,
    Web3Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
