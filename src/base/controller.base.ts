import { HttpStatus } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { HttpExceptionDTO } from './dto.base';

@ApiResponse({
  type: HttpExceptionDTO,
  status: HttpStatus.BAD_REQUEST,
  description: 'A description of the error.'
})
export default class BaseController {

}
