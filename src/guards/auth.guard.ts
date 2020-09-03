
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TokenValidationService } from 'src/guards/token/token.service';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const token_validation_service = new TokenValidationService;
    const request = context.switchToHttp().getRequest();
    return token_validation_service.validateToken(request.headers.token);
  }
}