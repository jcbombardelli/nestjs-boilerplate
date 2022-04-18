import { EntityRepository } from 'typeorm';
import { BaseRepository } from '../../base/repository.base';
import User from './user.entity';

@EntityRepository(User)
export class UserRepository extends BaseRepository<User> { }
