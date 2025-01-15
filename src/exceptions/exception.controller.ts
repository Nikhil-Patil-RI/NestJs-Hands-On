import {
  BadRequestException,
  Controller,
  Get,
  UseFilters,
} from '@nestjs/common';
import { CustomException } from './custom.exception';
import { CustomExceptionFilter } from './exception.filter';

@Controller('exception')
export class ExceptionController {
  @Get('')
  helloWorld() {
    throw new BadRequestException({
      message: 'This is a bad request',
      status: 400,
    });
    return 'hello word';
  }

  // custom exception
  @Get('custom')
  customException(): string {
    throw new CustomException();
    return 'this is the get api for custom exception';
  }

  // custom exception with filter
  @Get('custom-filter')
  @UseFilters(CustomExceptionFilter)
  customExceptionWithFilter(): string {
    throw new BadRequestException();
    return 'this is the get api for custom exception with filter';
  }
}
