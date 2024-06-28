import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para permitir solicitudes desde el frontend
  app.enableCors({
    origin: 'http://localhost:4200', // Cambiar si el frontend está en otro lugar
  });

  // Configurar validación global de DTOs
  app.useGlobalPipes(new ValidationPipe());

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Lista de Tareas API')
    .setDescription('Documentación API para la lista de tareas')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Escuchar en el puerto 3000
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
