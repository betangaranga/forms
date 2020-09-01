import { Controller, Get, Body } from '@nestjs/common';
import { FormsCreationService } from './forms-creation.service';
import { CreateFormDTO } from './dto/CreateFormDTO.dto'
@Controller('forms-creation')
export class FormsCreationController {
    constructor(private formsCreationService: FormsCreationService) {}
    @Get()
  getForm(@Body() data: CreateFormDTO) {
    return  this.formsCreationService.createForm(data);
  }
}
