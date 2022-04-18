import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import BaseController from '../../base/controller.base';
import { isUUID } from '../../utils/uuid';
import { UserInfoDTO } from './user.dto';
import { UserService } from './users.service';


@ApiTags('Users')
@Controller('users')
export class UserController extends BaseController {

  constructor(private userService: UserService) {
    super()
  }

  @Get(':id')
  @ApiResponse({
    type: UserInfoDTO,
    status: HttpStatus.OK,
    description: 'The record has been successfully retrieved.'
  })
  async retrieveUserInfo(@Param('id') id: string): Promise<UserInfoDTO> {
    if (isUUID(id)) {
      const user = await this.userService.findById(id);
      return UserInfoDTO.fromEntity(user);
    }
    throw new HttpException('Invalid user id is not UUID', HttpStatus.BAD_REQUEST);
  }



}
