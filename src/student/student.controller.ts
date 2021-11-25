import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  ICreateStudent,
  IupdateStudent,
  IStudent,
} from './interfaces/student.dto';
import { StudentService } from './student.service';
//starts with /students/
@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(): IStudent[] {
    return this.studentService.getStudents();
  }
  @Get('/:studentId')
  getStudentById(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): IStudent {
    return this.studentService.getStudentById(studentId);
  }
  @Post()
  createStudent(@Body() body: ICreateStudent): IStudent {
    return this.studentService.createStudent(body);
  }

  @Put('/:studentId')
  updateStudent(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Body() body: IupdateStudent,
  ) {
    return this.studentService.updateStudent(body, studentId);
  }
}
