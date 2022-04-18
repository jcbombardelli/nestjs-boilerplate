import { ApiProperty } from '@nestjs/swagger';

export class HttpExceptionDTO {

  @ApiProperty({ description: 'Status Code' })
  statusCode: number;

  @ApiProperty({ description: 'Mesage' })
  message: string;
}
