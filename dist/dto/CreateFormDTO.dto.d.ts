import { QuestionDTO } from './QuestionDTO.dto';
export declare class CreateFormDTO {
    created_at: Date;
    updated_at: Date;
    title: string;
    enterprise_id: number;
    status: boolean;
    creation_user: string;
    update_user: string;
    active: boolean;
    visible: boolean;
    of_system: boolean;
    questions: QuestionDTO;
}
