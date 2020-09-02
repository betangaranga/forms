import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as compression from 'compression';
import * as dotenv from 'dotenv';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
		logger: ['error', 'warn', 'log', 'debug', 'verbose'],
		cors: true,
	});
	app.enableCors();
	const options = new DocumentBuilder().addBearerAuth()
		.setTitle('Forms microservice')
		.setDescription('Creation, assignation and responses of forms')
		.setVersion('1.0')
		.addTag('jobapp')
		.setBasePath('/api/')
		.build();
	app.use(compression());
	app.setGlobalPrefix('api');
  const document = SwaggerModule.createDocument(app, options);
  app.useGlobalPipes(new ValidationPipe());
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT);
}
dotenv.config();
console.log(`Running on port: ${process.env.PORT}`);
bootstrap();
