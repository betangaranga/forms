import { Controller, Get, Body, Post, Put, Param, Delete, Headers } from '@nestjs/common';
import { FormsCreationService } from './forms-creation.service';
import { CreateFormDTO } from './dto/CreateFormDTO.dto'
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Forms CRUD')
@Controller('forms-creation')
export class FormsCreationController {
    constructor(private formsCreationService: FormsCreationService) {}
    @Post()
    createForm(@Headers('token') token: string,@Body() data: CreateFormDTO) {
    return  this.formsCreationService.createForm(data, token);
    }

    @Get()
    getForms(@Headers('token') token: string){
      return this.formsCreationService.getForms(token);
    }

    @Get(':formId')
    getForm(@Headers('token') token: string, @Param('formId') formId: number){
      return this.formsCreationService.getForm(token, formId);
    }

    @Put(':formId')
    updateForm(@Headers('token') token: string, @Param('formId') formId: number, @Body() data: CreateFormDTO){
      return this.formsCreationService.updateForm(token, formId, data);
    }

    @Delete(':formId')
    deleteForm(@Headers('token') token: string, @Param('formId') formId: number){
      return this.formsCreationService.deleteForm(token, formId);
    }

}
