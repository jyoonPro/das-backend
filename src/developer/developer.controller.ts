import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { DeveloperService } from './developer.service';
import { AppCreateDto, AppUpdateDto } from './developer.dto';
import { Web3Guard } from '../web3/web3.guard';

@Controller('dev')
export class DeveloperController {
  constructor(private readonly developerService: DeveloperService) {}

  @Post('app/create')
  @UseGuards(Web3Guard)
  createApp(@Body() dto: AppCreateDto) {
    return this.developerService.createApp(dto);
  }

  @Get('app/:uuid')
  @UseGuards(Web3Guard)
  getApp(@Param('uuid') uuid: string) {
    return this.developerService.getApp(uuid);
  }

  @Put('app/:uuid')
  @UseGuards(Web3Guard)
  updateApp(
    @Param('uuid') uuid: string,
    @Body() dto: AppUpdateDto
  ) {
    return this.developerService.updateApp(uuid, dto);
  }

  @Get('developer/:developer')
  @UseGuards(Web3Guard)
  getApps(@Param('developer') developer: string) {
    return this.developerService.getApps(developer);
  }
}
