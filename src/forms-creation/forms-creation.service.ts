import { Injectable } from '@nestjs/common';
import { CreateFormDTO } from './dto/CreateFormDTO.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form } from './schemas/forms.schema'


@Injectable()
export class FormsCreationService {
  constructor(@InjectModel('Form') private formModel: Model<Form>) {}
    async createForm(data: CreateFormDTO): Promise<Form>  {
        //id incremented by one
        data.id =  (await this.formModel.find({})).length + 1;
        const createdForm = new this.formModel(data);
        return createdForm.save();
      }

      async getForms(): Promise<Form[]> {
        return this.formModel.find().exec();
      }

      async updateForm(formId: number, data: CreateFormDTO): Promise<Form> {
        const updatedForm = await this.formModel
            .findByIdAndUpdate(formId, data, { new: true });
        return updatedForm;
      }

      async deleteForm(formId: number): Promise<any> {
        const deletedForm = await this.formModel.findByIdAndRemove(formId);
        return deletedForm;
      }
    
}
