import { ApiProperty } from '@nestjs/swagger';
export class GeneralDTO {
    @ApiProperty()
    question: string;
}