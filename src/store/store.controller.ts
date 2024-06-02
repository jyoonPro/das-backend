import { Body, Controller, Get, Param, Post, Put, Delete, Req, UseGuards } from '@nestjs/common';
import { StoreService } from './store.service';
import { LicenseCreateDto } from './store.dto';
import { Web3Guard } from '../web3/web3.guard';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get('apps')
  getApps() {
    return this.storeService.getApps();
  }

  @Post('buy')
  @UseGuards(Web3Guard)
  createLicense(@Req() req, @Body() dto: LicenseCreateDto) {
    return this.storeService.createLicense(dto);
  }
}
