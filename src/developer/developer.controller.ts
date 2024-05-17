import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { DeveloperService } from './developer.service';
import { AppCreateDto, AppUpdateDto } from './developer.dto';

@Controller('dev')
export class DeveloperController {
  constructor(private readonly developerService: DeveloperService) {}

  @Post('app/create')
  createApp(@Body() dto: AppCreateDto) {
    return this.developerService.createApp(dto);
  }

  @Get('app/:uuid')
  getApp(@Param('uuid') uuid: string) {
    return this.developerService.getApp(uuid);
  }

  @Put('app/:uuid')
  updateApp(
    @Param('uuid') uuid: string,
    @Body() dto: AppUpdateDto
  ) {
    return this.developerService.updateApp(uuid, dto);
  }

  @Get('developer/:developer')
  getApps(@Param('developer') developer: string) {
    return this.developerService.getApps(developer);
  }
}
