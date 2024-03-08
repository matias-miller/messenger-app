import mongoose, { Document, Schema } from 'mongoose';

// Define interface for GroupChat document
interface GroupChat extends Document {
    name: string;
    participants: Schema.Types.ObjectId[]; // Array of user IDs participating in the group chat
    createdAt: Date;
    updatedAt: Date;
    // Add any additional fields you need for group chat management
}

// Define schema for GroupChat collection
const groupChatSchema: Schema<GroupChat> = new Schema({
    name: { type: String, required: true },
    participants: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Create and export GroupChat model
export default mongoose.model<GroupChat>('GroupChat', groupChatSchema);
