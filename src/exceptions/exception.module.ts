import { Module } from '@nestjs/common';
import { ExceptionController } from './exception.controller';

@Module({
  imports: [],
  controllers: [ExceptionController],
  providers: [],
  exports: [],
})
export class ExceptionExampleModule {}
