import { PartialType } from '@nestjs/swagger';
import { CreateTaskDto } from './create-task.dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    @IsString()
    @IsOptional()
    title?: string;
  
    @IsString()
    @IsOptional()
    description?: string;
  
    @IsBoolean()
    @IsOptional()
    completed?: boolean;
  }