import { ApiProperty } from '@nestjs/swagger';
import { ValidateIf, IsNotEmpty, ArrayMinSize } from 'class-validator';
export class MultipleOptionsDTO {
    @ApiProperty()
    question: string;
    @ApiProperty()
    @ValidateIf(o => o.question)
    @ArrayMinSize(2)
    options: [];
}