import { Injectable } from '@nestjs/common';
import { teachers } from '../db';
import { ITeacher } from './interfaces/teacher.interface';

@Injectable()
export class TeacherService {
  private teachers = teachers;

  getTeachers(): ITeacher[] {
    return teachers;
  }

  getTeacherById(teacherId: string): ITeacher {
    return this.teachers.find((teacher) => {
      return teacher.id === teacherId;
    });
  }
}
