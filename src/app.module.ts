import { Module } from '@nestjs/common';
import { BookModule } from './book/data/book.module';
import { ExceptionExampleModule } from './exceptions/exception.module';
import { GuardsModule } from './guards/guards.module';
import { InterceptorModule } from './interceptor/interceptor.module';

@Module({
  imports: [
    BookModule,
    ExceptionExampleModule,
    GuardsModule,
    InterceptorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
