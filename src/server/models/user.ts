import mongoose, { Schema, Document } from 'mongoose';
import { Constants } from '../libs';

export interface IUser extends Document {
    createdAt: Date;
    fullName: string;
    phone: string;
    email: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    fullName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    }
});

export default mongoose.model<IUser>(Constants.Models.User, UserSchema);