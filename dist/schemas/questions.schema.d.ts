import { General } from "./general.schema";
import { Document } from 'mongoose';
export declare class Question extends Document {
    qr_question: General;
    photo_question: General[];
}
export declare const QuestionSchema: import("mongoose").Schema<any>;
