import { Schema, Document } from 'mongoose';
export const StudentSchema = new Schema({
  fullname: String,
  mobileno: String,
  email: String,
  admno: String,
});

export interface Student extends Document {
  fullname: string;
  mobileno: string;
  email: string;
  admno: string;
}
