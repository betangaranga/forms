import { Controller, Get, Body, Post, Put, Param, Delete, Headers, UseGuards } from '@nestjs/common';
import { FormsCreationService } from './forms-creation.service';
import { CreateFormDTO } from './dto/CreateFormDTO.dto'
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';
@ApiTags('Forms CRUD')
@Controller('forms-creation')
@UseGuards(AuthGuard)
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
