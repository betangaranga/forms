import { FormsCreationService } from './forms-creation.service';
import { CreateFormDTO } from './dto/CreateFormDTO.dto';
export declare class FormsCreationController {
    private formsCreationService;
    constructor(formsCreationService: FormsCreationService);
    getForm(data: CreateFormDTO): Promise<import("./schemas/forms.schema").Form>;
}
