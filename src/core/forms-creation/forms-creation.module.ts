import { Module } from '@nestjs/common';
import { FormsCreationController } from './forms-creation.controller';
import { FormsCreationService } from './forms-creation.service';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { FormCreationSchema } from 'src/core/forms-creation/schemas/form.schema';
import { Connection } from 'mongoose';
import * as AutoIncrementFactory from 'mongoose-sequence';
@Module({
    imports: [ MongooseModule.forFeatureAsync([
      {
        name: 'Form',
        useFactory: async (connection: Connection) => {
          const schema = FormCreationSchema;
          const AutoIncrement = AutoIncrementFactory(connection);
          schema.plugin(AutoIncrement, {inc_field: '_id'});
          return schema;
        },
        inject: [getConnectionToken()],
      },
    ]),],
    controllers: [FormsCreationController],
    providers: [FormsCreationService],
  })
export class FormsCreationModule {}
