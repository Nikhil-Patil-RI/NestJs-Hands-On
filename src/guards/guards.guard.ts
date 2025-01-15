import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { Request } from 'express';
@Injectable()
export class ExampleGuard implements CanActivate {
  public key: string = '1234567890';

  public userName: string = 'admin';
  public password: string = 'admin';

  canActivate(context: ExecutionContext): boolean {
    // does not allow anyone to access the route
    // we need to manage auth to give access to the route
    // return false;
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();

    // if(request.header('key') == undefined) return false;

    // return request.header('key') === this.key;

    // if (context.switchToHttp().getRequest().headers.key === this.key) {
    //   return true;
    // }

    if (
      request.header('userName') === this.userName &&
      request.header('password') === this.password
    ) {
      return true;
    }
  }
}
