import { plainToClass } from '@nestjs/class-transformer';
import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { Book } from '././book.dto';
import { validate } from '@nestjs/class-validator';

export class BookPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    // with the help of class transformer object convert class
    const bookClass = plainToClass(Book, value);
    // class validation
    const errors = await validate(bookClass);

    if (errors.length > 0) {
      throw new BadRequestException(
        'validation error' + JSON.stringify(errors),
      );
    }

    // prints type of value
    console.log('type of value', typeof(value));
    return value;
    // predefined pipes implementation
    // if (value.id == 1) return value;
    // else throw new BadRequestException('Book id should be 1');
    // return value.id == 1;
  }
}
