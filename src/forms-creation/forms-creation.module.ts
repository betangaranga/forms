import { Module } from '@nestjs/common';
import { FormsCreationController } from './forms-creation.controller';
import { FormsCreationService } from './forms-creation.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HelpersModule } from '../helpers/helpers.module';
import { FormCreationSchema } from 'src/forms-creation/schemas/form.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Form', schema: FormCreationSchema }]), HelpersModule],
    controllers: [FormsCreationController],
    providers: [FormsCreationService, HelpersModule],
  })
export class FormsCreationModule {}
