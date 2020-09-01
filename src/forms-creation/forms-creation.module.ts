import { Module } from '@nestjs/common';
import { FormsCreationController } from './forms-creation.controller';
import { FormsCreationService } from './forms-creation.service';
import { MongooseModule } from '@nestjs/mongoose';
import * as AutoIncrementFactory from 'mongoose-sequence';
import { FormSchema } from 'src/forms-creation/schemas/forms.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Form', schema: FormSchema }])],
    controllers: [FormsCreationController],
    providers: [FormsCreationService],
  })
export class FormsCreationModule {}
