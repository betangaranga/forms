import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FormsCreationModule } from './forms-creation/forms-creation.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/jobapp'),FormsCreationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
