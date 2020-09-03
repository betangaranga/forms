import { ApiProperty } from '@nestjs/swagger';
import { QuestionDTO } from './QuestionDTO.dto';

export class SeparatorDTO {
    @ApiProperty()
    questions: QuestionDTO
}