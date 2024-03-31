import { Body, Controller, Get, Param, Post, Put ,Delete} from '@nestjs/common';
import { StudentsService } from './students.service';
import { studentDto} from './dtos/student.dto';
import { Student } from './schemas/student.schema';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentService:StudentsService){}
    @Post()
    async create(@Body() studentDto: studentDto): Promise<Student> {
      return this.studentService.create(studentDto);
    }
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Student> {
      return this.studentService.findOne(id);
    }
    @Put(':id')
  async update(@Param('id') id: string, @Body() bookDto: studentDto): Promise<Student> {
    return this.studentService.update(id, bookDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.studentService.remove(id);
  }
  
}
