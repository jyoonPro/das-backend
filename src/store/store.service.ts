import { BadRequestException, Injectable } from '@nestjs/common';
import { IsNull, Not, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Web3Service } from '../web3/web3.service';
import { App } from '../developer/developer.entity';
import { StoreApp } from '../store/store.entity';
import { LicenseCreateDto } from './store.dto';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(App) private readonly appRepository: Repository<App>,
    @InjectRepository(StoreApp) private readonly storeAppRepository: Repository<StoreApp>,
    private readonly web3Service: Web3Service,
  ) {}

  async getApps() {
    return this.appRepository.findBy({ contract: Not(IsNull()) });
  }

  async getLicenses(user: string) {
    return this.storeAppRepository.findBy({ user });
  }
  
  async createLicense(dto: LicenseCreateDto) {
    return this.storeAppRepository.save({
      user: dto.user,
      name: dto.name,
      contract: dto.contract,
      tokenId: dto.tokenId,
      isResell: dto.isResell,
    });
  }
}
