import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FormsCreationModule } from './forms-creation/forms-creation.module';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [MongooseModule.forRoot(`${process.env.DATABASE_PROVIDER}://${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`,
  {
    useFindAndModify: false
  }
  ),FormsCreationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
