import { Body, Controller, Get, Param, Post, Put, Delete, Req, UseGuards } from '@nestjs/common';
import { StoreService, ResellStoreService } from './store.service';
import { LicenseCreateDto, LicenseUpdateDto, ResellCreateDto } from './store.dto';
import { Web3Guard } from '../web3/web3.guard';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get('apps')
  getApps() {
    return this.storeService.getApps();
  }

  @Get('licenses/:user')
  getLicenses(@Param('user') user: string) {
    return this.storeService.getLicenses(user);
  }

  @Post('buy')
  @UseGuards(Web3Guard)
  createLicense(@Req() req, @Body() dto: LicenseCreateDto) {
    return this.storeService.createLicense(dto);
  }

  @Put('licenses/:uuid')
  @UseGuards(Web3Guard)
  updateLicense(@Req() req, @Param('uuid') uuid: string, @Body() dto: LicenseCreateDto) {
    return this.storeService.updateLicense(uuid, dto);
  }
}

@Controller('resell-store')
export class ResellStoreController {
  constructor(private readonly resellStoreService: ResellStoreService) {}

  @Post('resell')
  @UseGuards(Web3Guard)
  createResell(@Req() req, @Body() dto: ResellCreateDto) {
    return this.resellStoreService.createResell(dto);
  }

  @Get('resell/:to')
  getResell(@Param('to') to: string) {
    return this.resellStoreService.getResell(to);
  }
}
