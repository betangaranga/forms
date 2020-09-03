
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TokenValidationService } from 'src/helpers/token/token.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly token_validation_service: TokenValidationService) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.token_validation_service.validateToken(request.headers.token);
  }
}