import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
		logger: ['error', 'warn', 'log', 'debug', 'verbose'],
		cors: true,
	});
	app.enableCors();
	const options = new DocumentBuilder().addBearerAuth()
		.setTitle('general')
		.setDescription('The general API description')
		.setVersion('1.0')
		.addTag('general')
		.setBasePath('/api/')
		.build();
	//app.use(compression());
	app.setGlobalPrefix('api');
  const document = SwaggerModule.createDocument(app, options);
  app.useGlobalPipes(new ValidationPipe());
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
