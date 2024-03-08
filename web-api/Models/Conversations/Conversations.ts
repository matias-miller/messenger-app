import mongoose, { Document, Schema } from 'mongoose';

// Define interface for Conversation document
interface Conversation extends Document {
    participants: Schema.Types.ObjectId[]; // Array of user IDs participating in the conversation
    isGroup: boolean; // Indicates whether the conversation is a group conversation
    groupName?: string; // Optional group name if it's a group conversation
    createdAt: Date;
    updatedAt: Date;
    // Add any additional fields you need for conversation management
}

// Define schema for Conversation collection
const conversationSchema: Schema<Conversation> = new Schema({
    participants: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    isGroup: { type: Boolean, default: false },
    groupName: { type: String }, // Optional field for group name
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Create and export Conversation model
export default mongoose.model<Conversation>('Conversation', conversationSchema);
