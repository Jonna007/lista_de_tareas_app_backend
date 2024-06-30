import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Task } from './entities/task.entity';

@ApiTags('tasks') // Añade una etiqueta para Swagger
@Controller('tasks')  // Usualmente se utiliza el plural para la ruta
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new task' }) // Documenta la operación
  @ApiResponse({ status: 201, description: 'The task has been successfully created.' }) // Documenta las respuestas
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tasks' }) // Documenta la operación
  @ApiResponse({ status: 200, description: 'Return all tasks.' }) // Documenta las respuestas
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a task by id' }) // Documenta la operación
  @ApiResponse({ status: 200, description: 'Return the task.' }) // Documenta las respuestas
  @ApiResponse({ status: 404, description: 'Task not found.' })
  findOne(@Param('id') id: string): Promise<Task> {
    return this.taskService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a task by id' }) // Documenta la operación
  @ApiResponse({ status: 200, description: 'The task has been successfully updated.' }) // Documenta las respuestas
  @ApiResponse({ status: 404, description: 'Task not found.' })
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto): Promise<Task> {
    return this.taskService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task by id' }) // Documenta la operación
  @ApiResponse({ status: 200, description: 'The task has been successfully deleted.' }) // Documenta las respuestas
  @ApiResponse({ status: 404, description: 'Task not found.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.taskService.remove(+id);
  }
}
