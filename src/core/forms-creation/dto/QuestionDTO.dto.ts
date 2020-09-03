import { ApiProperty } from '@nestjs/swagger';
import { MultipleOptionsDTO } from './MultipleOptionsDTO.dto';
import { DependantQuestionDTO } from './DependantQuestionDTO.dto';
import { SeparatorDTO } from './SeparatorDTO.dto';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { GeneralDTO } from './GeneralDTO.dto';
export class QuestionDTO {
    @ApiProperty()
    qr_question: GeneralDTO[];
    @ApiProperty()
    bar_code_question: GeneralDTO[];
    @ApiProperty()
    photo_question: GeneralDTO[];
    @ApiProperty()
    @Type(() => MultipleOptionsDTO)
    @ValidateNested({ each: true })
    multiple_options_question: MultipleOptionsDTO[];
    @ApiProperty()
    @Type(() => DependantQuestionDTO)
    @ValidateNested({ each: true })
    dependant_question: DependantQuestionDTO[];
    @ApiProperty()
    date_question: GeneralDTO[];
    @ApiProperty()
    hour_question: GeneralDTO[];
    @ApiProperty()
    open_question: GeneralDTO[];
    @ApiProperty()
    separator: SeparatorDTO[];
    @ApiProperty()
    ranking_question: GeneralDTO[];
    @ApiProperty()
    true_or_false_question: GeneralDTO[];


}
