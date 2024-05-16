import { Body, Controller, Post } from '@nestjs/common';
import { StoreService } from './store.service';
import { UserCreateDto } from './store.dto';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post('register')
  register(@Body() dto: UserCreateDto) {
    return this.storeService.register(dto);
  }
}
