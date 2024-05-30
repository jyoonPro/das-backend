import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Web3Service } from '../web3/web3.service';
import { App } from './developer.entity';
import { AppCreateDto, AppUpdateDto } from './developer.dto';

@Injectable()
export class DeveloperService {
  constructor(
    @InjectRepository(App) private readonly appRepository: Repository<App>,
    private readonly web3Service: Web3Service,
  ) {}

  async createApp(developer: string, dto: AppCreateDto) {
    return this.appRepository.save({
      name: dto.name,
      description: dto.description,
      developer: developer,
      metadata: dto.metadata,
    });
  }

  async getApp(uuid: string) {
    return this.appRepository.findOneBy({ uuid });
  }

  async updateApp(uuid: string, dto: AppUpdateDto) {
    return this.appRepository.update({ uuid }, { ...dto });
  }

  async getApps(developer: string) {
    return this.appRepository.findBy({ developer });
  }
}
