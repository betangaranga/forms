import { Module, HttpModule } from '@nestjs/common';
import { TokenValidationService } from './token/token.service';

@Module({
	providers: [TokenValidationService],
	exports: [TokenValidationService],
})
export class HelpersModule { }