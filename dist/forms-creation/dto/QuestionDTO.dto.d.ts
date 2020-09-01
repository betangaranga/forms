import { MultipleOptionsDTO } from './MultipleOptionsDTO.dto';
import { DependantQuestionDTO } from './DependantQuestionDTO.dto';
import { SeparatorDTO } from './SeparatorDTO.dto';
import { GeneralDTO } from './GeneralDTO.dto';
export declare class QuestionDTO {
    qr_question: GeneralDTO[];
    bar_code_question: GeneralDTO[];
    photo_question: GeneralDTO[];
    multiple_options_question: MultipleOptionsDTO[];
    dependant_question: DependantQuestionDTO[];
    date_question: GeneralDTO[];
    hour_question: GeneralDTO[];
    open_question: GeneralDTO[];
    separator: SeparatorDTO[];
    ranking_question: GeneralDTO[];
    true_or_false_question: GeneralDTO[];
}
