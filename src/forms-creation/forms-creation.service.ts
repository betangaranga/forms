import { Injectable } from '@nestjs/common';
import { CreateFormDTO } from './dto/CreateFormDTO.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form } from './schemas/form.schema'
import { TokenValidationService } from '../helpers/token/token.service';
import * as moment from 'moment-timezone';


@Injectable()
export class FormsCreationService {
  constructor(@InjectModel('Form') private formModel: Model<Form>,
    private readonly token_validation_service: TokenValidationService) { }
  async createForm(data: CreateFormDTO, token: string): Promise<any> {
    const code_token = await this.token_validation_service.validateToken(token)
    if (code_token > 0) {
      //id incremented by one
      data._id = (await this.formModel.find({})).length + 1;
      const createdForm = new this.formModel(data);
      return createdForm.save();
    }
    else {
      return { "response": "Token Invalido" };
    }
  }

  async getForms(token: string): Promise<any> {
    const code_token = await this.token_validation_service.validateToken(token);
    if (code_token > 0) {
      return this.formModel.find().exec();
    }
    else {
      return { "response": "Token Invalido" };
    }
  }

  async getForm(token: string, formId: number): Promise<any> {
    const code_token = await this.token_validation_service.validateToken(token);
    if (code_token > 0) {
      const form = await this.formModel.findById(formId).exec();
      return form;
    }
    else {
      return { "response": "Token Invalido" };
    }
  }

  async updateForm(token: string, formId: number, data: CreateFormDTO): Promise<any> {
    const code_token = await this.token_validation_service.validateToken(token);
    if (code_token > 0) {
      data.updated_at = moment().tz('America/Mexico_City').format('DD/MM/YYYY HH:mm');
      const updatedForm = await this.formModel
        .findByIdAndUpdate(formId, data, { new: true });
      return updatedForm;
    }
    else {
      return { "response": "Token Invalido" };
    }

  }

  async deleteForm(token: string, formId: number): Promise<any> {
    const code_token = await this.token_validation_service.validateToken(token);
    if (code_token > 0) {
      const deletedForm = await this.formModel.findByIdAndDelete(formId);
      return deletedForm;
    }
    else {
      return { "response": "Token Invalido" };
    }
  }

}
