import { BadRequestException, Injectable } from '@nestjs/common';
import { IsNull, Not, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Web3Service } from '../web3/web3.service';
import { App } from '../developer/developer.entity';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(App) private readonly appRepository: Repository<App>,
    private readonly web3Service: Web3Service,
  ) {}

  async getApps() {
    return this.appRepository.findBy({ contract: Not(IsNull()) });
  }
}
