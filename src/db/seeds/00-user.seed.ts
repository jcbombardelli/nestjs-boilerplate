import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import User from '../../modules/users/user.entity';

export default class Users implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {

    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          id: '96db6cd8-10f2-4989-8264-c4142a0dea8c',
          email: 'michael@dundermifflin.com',
          avatar: 'https://img.ibxk.com.br/2021/11/18/18165439449019.jpg'
        }
      ])
      .execute()
  }

}
