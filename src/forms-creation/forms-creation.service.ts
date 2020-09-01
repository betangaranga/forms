import { Injectable } from '@nestjs/common';
import { CreateFormDTO } from './dto/CreateFormDTO.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form } from './schemas/forms.schema'


@Injectable()
export class FormsCreationService {
  constructor(@InjectModel('Form') private formModel: Model<Form>) {}
    async createForm(data: CreateFormDTO): Promise<Form>  {
        data.id = await (await this.formModel.find({})).length + 1;
        const createdForm = new this.formModel(data);
        return createdForm.save();
      
      }
}
