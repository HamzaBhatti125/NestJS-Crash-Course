import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';

import { ITeacher } from './interfaces/teacher.interface';
import { TeacherService } from './teacher.service';

//starts with /students/
@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}
  @Get()
  getTeachers(): ITeacher[] {
    return this.teacherService.getTeachers();
  }
  @Get('/:teacherId')
  getTeacherById(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): ITeacher {
    return this.teacherService.getTeacherById(teacherId);
  }
}
