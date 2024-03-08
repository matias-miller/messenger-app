import mongoose, { Document, Schema } from 'mongoose';

// Define interface for GroupMessage document
interface GroupMessage extends Document {
    groupId: Schema.Types.ObjectId; // ID of the group chat
    senderId: Schema.Types.ObjectId; // ID of the message sender
    content: string; // Message content
    timestamp: Date; // Timestamp of when the message was sent
    // Add any additional fields you need for group message management
}

// Define schema for GroupMessage collection
const groupMessageSchema: Schema<GroupMessage> = new Schema({
    groupId: { type: Schema.Types.ObjectId, ref: 'GroupChat', required: true },
    senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

// Create and export GroupMessage model
export default mongoose.model<GroupMessage>('GroupMessage', groupMessageSchema);
