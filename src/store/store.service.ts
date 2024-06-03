import { BadRequestException, Injectable } from '@nestjs/common';
import { IsNull, Not, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Web3Service } from '../web3/web3.service';
import { App } from '../developer/developer.entity';
import { ResellStoreApp, StoreApp } from '../store/store.entity';
import { LicenseCreateDto, LicenseUpdateDto, ResellCreateDto } from './store.dto';

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

  async updateLicense(uuid: string, dto: LicenseCreateDto) {
    return this.storeAppRepository.update({ uuid }, { ...dto });
  }
}

@Injectable()
export class ResellStoreService {
  constructor(
    @InjectRepository(StoreApp) private readonly storeAppRepository: Repository<StoreApp>,
    @InjectRepository(ResellStoreApp) private readonly resellStoreAppRepository: Repository<ResellStoreApp>,
    private readonly web3Service: Web3Service,
  ) {}

  async createResell(dto: ResellCreateDto) {
    return this.resellStoreAppRepository.save({
      from: dto.from,
      to: dto.to,
      contract: dto.contract,
      tokenId: dto.tokenId,
      price: dto.price,
    })
  }

  async getResell(to: string) {
    return this.resellStoreAppRepository.findBy({ to });
  }

  async acceptResell(uuid: string) {
    const resellInfo = await this.resellStoreAppRepository.findOneBy({ uuid });
    if (!resellInfo) {
      throw new BadRequestException('Resell not found');
    }

    const storeApp = await this.storeAppRepository.findOneBy({ contract: resellInfo.contract, tokenId: resellInfo.tokenId });
    if (!storeApp) {
      throw new BadRequestException('License not found');
    }

    await this.storeAppRepository.update(
      { uuid: storeApp.uuid },
      { user: resellInfo.to, isResell: false },
    );

    return this.resellStoreAppRepository.delete({ uuid });
  }
}
