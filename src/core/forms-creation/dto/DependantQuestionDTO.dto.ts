import { ApiProperty } from '@nestjs/swagger';
import { ValidateIf, IsNotEmpty } from 'class-validator';
export class DependantQuestionDTO {
    @ApiProperty()
    question: string;
    @ApiProperty()
    @ValidateIf(o => o.question)
    @IsNotEmpty()
    yes: string;
    @ApiProperty()
    @ValidateIf(o => o.question)
    @IsNotEmpty()
    no: string;
}