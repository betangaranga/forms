import { Document } from 'mongoose';
import { Question } from './questions.schema';
export declare class Form extends Document {
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
    questions: Question;
}
export declare const FormSchema: import("mongoose").Schema<any>;
