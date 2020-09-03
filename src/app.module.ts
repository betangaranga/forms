import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FormsCreationModule } from './core/forms-creation/forms-creation.module';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [MongooseModule.forRoot(`${process.env.NOSQLDATABASE_PROVIDER}://${process.env.NOSQLDATABASE_HOST}/${process.env.NOSQLDATABASE_NAME}`,
  {
    useFindAndModify: false
  }
  ),FormsCreationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
