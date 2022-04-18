import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {

  constructor(@InjectRepository(UserRepository) private usersRepository: UserRepository) { }

  async findById(id: string): Promise<User> {
    return await this.usersRepository.findOne(id);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOne({ email });
  }

}
