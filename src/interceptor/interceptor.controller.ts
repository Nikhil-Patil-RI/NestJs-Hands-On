import { Controller, Post, Req, Res, UseInterceptors } from '@nestjs/common';
import { ExampleInterceptor } from './example.interceptor';
import { Request, Response } from 'express';
@Controller('interceptor')
@UseInterceptors(ExampleInterceptor)
export class InterceptorController {
  @Post('')
  helloWorld(@Req() req: Request, @Res() res: Response): any {
    // we are intercepting the request and modifying the request body
    return res.json(req.body);
  }
}
