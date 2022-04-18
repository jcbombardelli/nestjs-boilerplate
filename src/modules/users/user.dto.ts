import { ApiProperty } from '@nestjs/swagger';
import User from './user.entity';


export class UserExistsDTO {
  @ApiProperty({
    description: 'User really exists ?',
    default: false,
  })
  exists: boolean
}

export class UserInfoDTO {
  @ApiProperty({
    description: 'User id',
  })
  id: string;

  @ApiProperty({
    description: 'User email',
  })
  email: string;

  @ApiProperty({
    description: 'User avatar',
  })
  avatar: string;

  static fromEntity(user: User): UserInfoDTO {
    const userInfoDTO = new UserInfoDTO();
    userInfoDTO.id = user.id;
    userInfoDTO.email = user.email;
    userInfoDTO.avatar = user.avatar;
    return userInfoDTO
  }
}
