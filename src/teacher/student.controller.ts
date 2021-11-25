import { Controller, Get, Put, Param, ParseUUIDPipe } from '@nestjs/common';
import { IStudent } from 'src/student/interfaces/student.dto';
import { StudentService } from 'src/student/student.service';

//starts with /students/
@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): IStudent[] {
    return this.studentService.getStudentsByTeacherId(teacherId);
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): IStudent {
    return this.studentService.updateStudentTeacher(teacherId, studentId);
  }
}
