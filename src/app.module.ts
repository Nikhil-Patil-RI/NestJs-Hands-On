import { Module } from '@nestjs/common';
import { BookModule } from './book/data/book.module';

@Module({
  imports: [BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
