import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Web3Service } from '../web3/web3.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class StoreService {
  constructor(
    private readonly web3Service: Web3Service,
  ) {}

}
