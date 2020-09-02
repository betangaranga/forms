import { CreateFormDTO } from './dto/CreateFormDTO.dto';
import { Model } from 'mongoose';
import { Form } from './schemas/forms.schema';
export declare class FormsCreationService {
    private formModel;
    constructor(formModel: Model<Form>);
    createForm(data: CreateFormDTO): Promise<Form>;
    getForms(): Promise<Form[]>;
    updateForm(formId: number, data: CreateFormDTO): Promise<Form>;
    deleteForm(formId: number): Promise<any>;
}
