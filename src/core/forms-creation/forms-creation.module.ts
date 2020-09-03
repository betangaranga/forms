import { Module } from '@nestjs/common';
import { FormsCreationController } from './forms-creation.controller';
import { FormsCreationService } from './forms-creation.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FormCreationSchema } from 'src/core/forms-creation/schemas/form.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Form', schema: FormCreationSchema }])],
    controllers: [FormsCreationController],
    providers: [FormsCreationService],
  })
export class FormsCreationModule {}
