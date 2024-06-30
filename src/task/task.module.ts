import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module'; // Asegúrate de que la ruta es correcta
import { TaskService } from './task.service';
import { TaskController } from './task.controller';

@Module({
  imports: [PrismaModule], // Importa el módulo de Prisma
  controllers: [TaskController], // Registra el controlador de tareas
  providers: [TaskService], // Registra el servicio de tareas
})
export class TaskModule {}
