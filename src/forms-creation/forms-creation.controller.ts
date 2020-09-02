import { Controller, Get, Body, Post } from '@nestjs/common';
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
}
