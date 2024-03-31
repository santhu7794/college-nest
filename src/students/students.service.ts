import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './schemas/student.schema';
import { studentDto } from './dtos/student.dto';

@Injectable()
export class StudentsService {
    constructor(@InjectModel('Student')private studentModel:Model<Student>){}

    async create(studentDto: studentDto): Promise<Student> {
        const createdBook = new this.studentModel(studentDto);
        return createdBook.save();
      }
      async findOne(id: string): Promise<Student> {
        return this.studentModel.findById(id).exec();
      }
      async update(id: string, studentDto: studentDto): Promise<Student> {
        return this.studentModel.findByIdAndUpdate(id, studentDto, { new: true }).exec();
      }
    
      async remove(id: string): Promise<void> {
        await this.studentModel.findByIdAndDelete(id).exec();
      }
}
