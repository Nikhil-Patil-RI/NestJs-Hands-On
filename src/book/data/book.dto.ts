import { IsInt, IsString } from '@nestjs/class-validator';

export class Book {
  @IsInt()
  id: string;
  @IsString()
  title: string;
  author: string;
  published: string;
}
