import { ApiProperty } from '@nestjs/swagger';
import { QuestionDTO } from './QuestionDTO.dto';
import { IsDefined, ValidateNested, IsNotEmptyObject, IsObject, IsNumber, IsString, isNotEmpty, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';


export class CreateFormDTO {
    @ApiProperty()
    created_at: string;
    @ApiProperty()
    updated_at: string;
    @ApiProperty()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    title: string;
    @ApiProperty({ required: true })
    enterprise_id: number;
    @ApiProperty()
    status: boolean;
    @ApiProperty()
    @IsDefined()
    @IsNumber()
    creation_user: string;
    @ApiProperty()
    update_user: string;
    @ApiProperty()
    active: boolean;
    @ApiProperty()
    visible: boolean;
    @ApiProperty()
    of_system: boolean;
    @ApiProperty()
    @ValidateNested({ each: true })
    @Type(() => QuestionDTO)
    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    questions: QuestionDTO;
    _id: number;
    

    
}