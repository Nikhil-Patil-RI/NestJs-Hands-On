import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';
import { ExampleGuard } from './guards/guards.guard';

function globalMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log('Request...');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleware);
  // app.useGlobalGuards(new ExampleGuard());
  await app.listen(3000);
}
bootstrap();
