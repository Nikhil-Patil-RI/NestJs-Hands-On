import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor() {
    super('This is my custom book exception...', HttpStatus.BAD_REQUEST);
  }
}
