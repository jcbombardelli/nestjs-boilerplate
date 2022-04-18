import { Column, Entity, Index } from 'typeorm';
import { EntityBase } from '../../base/entity.base';

@Entity('users')
class User extends EntityBase {


  @Column({ unique: true })
  @Index('user_email_idx')
  public email: string;

  @Column({ nullable: true, unique: false })
  public avatar: string;

}


export default User;
