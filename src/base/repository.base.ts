import { NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EntityBase } from './entity.base';

export class BaseRepository<T extends EntityBase> extends Repository<T> {
  async exists(id: string, errorMessage: string): Promise<boolean> {
    const found = await this.findOne(id, {
      select: ['id'],
    });

    if (!found) throw new NotFoundException(errorMessage);

    return true;
  }
}
