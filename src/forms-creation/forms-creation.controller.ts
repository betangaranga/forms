import { Controller, Get, Body, Post, Put, Param, Delete } from '@nestjs/common';
import { FormsCreationService } from './forms-creation.service';
import { CreateFormDTO } from './dto/CreateFormDTO.dto'
@Controller('forms-creation')
export class FormsCreationController {
    constructor(private formsCreationService: FormsCreationService) {}
    @Post()
    createForm(@Body() data: CreateFormDTO) {
    return  this.formsCreationService.createForm(data);
    }

    @Get()
    getForms(){
      return this.formsCreationService.getForms();
    }

    @Get(':formId')
    getForm(@Param('formId') formId: number){
      return this.formsCreationService.getForm(formId);
    }

    @Put(':formId')
    updateForm(@Param('formId') formId: number, @Body() data: CreateFormDTO){
      return this.formsCreationService.updateForm(formId, data);
    }

    @Delete(':formId')
    deleteForm(@Param('formId') formId: number){
      return this.formsCreationService.deleteForm(formId);
    }

}
