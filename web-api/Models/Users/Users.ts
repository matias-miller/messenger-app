import mongoose, {Document, Schema} from "mongoose";
export interface User extends Document {
    username: string;
    password: string;
    email: string;
    twoFactorAuthCode: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema: Schema<User> = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    twoFactorAuthCode: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model<User>('User', userSchema);
