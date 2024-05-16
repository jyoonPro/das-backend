import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './store.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCreateDto } from './store.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async register(dto: UserCreateDto) {
    try {
      const salt = await bcrypt.genSalt();
      const password = await bcrypt.hash(dto.password, salt);
      await this.userRepository.save({
        username: dto.username,
        password: password,
      });
    } catch (error) {
      throw new BadRequestException(error);
    }
    return 'success';
  }
}
