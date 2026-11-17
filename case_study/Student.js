const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseCode : { type: String, required: true },
  courseName : { type: String, required: true },
  grade      : { type: String, enum: ['O','A+','A','B+','B','C','F'], default: 'F' },
  credits    : { type: Number, min: 1, max: 5 }
});

const studentSchema = new mongoose.Schema({
  studentId  : { type: String, required: true, unique: true },
  name       : { type: String, required: true, trim: true },
  email      : { type: String, required: true, unique: true, lowercase: true },
  department : { type: String, required: true },
  year       : { type: Number, min: 1, max: 4 },
  courses    : [courseSchema],
  createdAt  : { type: Date, default: Date.now }
});

module.exports = mongoose.model('Student', studentSchema);
