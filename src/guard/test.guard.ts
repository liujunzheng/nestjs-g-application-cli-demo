import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class TestGuard implements CanActivate {
  constructor(
    private reflector: Reflector
  ){}
  /**
   * 守卫在每个中间件之后执行，但在任何拦截器或管道之前执行。
   * @param context 上下文
   */
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // console.log('TestGuard canActivate : context', context);
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log('TestGuard canActivate : roles', roles);
    const request = context.switchToHttp().getRequest();
    // console.log('TestGuard canActivate : request', request);
    console.log('TestGuard canActivate : request.query', request.query);
    const role = request.query.role;
    if (!role || role !== 'admin') {
      throw new UnauthorizedException();
    }
    return true;
  }
}
