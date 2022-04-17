import mongoose from 'mongoose';
import { teacherModel } from './teacher';

const { Schema, model } = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        default: 'Ivan',
        trim: true,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
    },
    age: {
        type: Number,
        default: 0,
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: teacherModel,
        default: null,
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
studentSchema.virtual('fullName').get(function () {
    // @ts-ignore
    // eslint-disable-next-line no-useless-concat
    return `${this.name} ` + 'Zelenskii';
});
// POPULATE
// studentSchema.pre('findOne', function () { this.populate('teacher') });

export const studentModel = model('student', studentSchema);
