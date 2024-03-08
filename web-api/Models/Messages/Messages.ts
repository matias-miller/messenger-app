import mongoose, { Document, Schema } from 'mongoose';

interface Message extends Document {
    senderId: Schema.Types.ObjectId;
    receiverId: Schema.Types.ObjectId;
    content: string;
    timestamp: Date;
    read: boolean; // New field to track message read status
}

const messageSchema: Schema<Message> = new Schema({
    senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    receiverId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    read: { type: Boolean, default: false } // Default value is false indicating the message is unread
});

export default mongoose.model<Message>('Message', messageSchema);
