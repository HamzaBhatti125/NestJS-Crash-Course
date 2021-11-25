import { Injectable } from '@nestjs/common';
import { students } from '../db';
import {
  IStudent,
  ICreateStudent,
  IupdateStudent,
} from './interfaces/student.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  private students = students;
  getStudents(): IStudent[] {
    return this.students;
  }

  getStudentById(studentId: string): IStudent {
    return this.students.find((student) => {
      return student.id === studentId;
    });
  }

  createStudent(payload: ICreateStudent): IStudent {
    const newStudent = {
      id: uuid(),
      ...payload,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(payload: IupdateStudent, studentId: string): IStudent {
    let updatedStudent: IStudent;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          id: studentId,
          ...payload,
        };
        return updatedStudent;
      } else {
        return student;
      }
    });

    this.students = updatedStudentList;

    return updatedStudent;
  }

  getStudentsByTeacherId(teacherId: string): IStudent[] {
    console.log('this is working: ', this.students);
    return this.students.filter((student) => {
      return student.teacher === teacherId;
    });
  }

  updateStudentTeacher(teacherId: string, studentId: string): IStudent {
    let updatedStudent: IStudent;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          ...student,
          teacher: teacherId,
        };
        return updatedStudent;
      } else {
        return student;
      }
    });

    this.students = updatedStudentList;

    return updatedStudent;
  }
}
