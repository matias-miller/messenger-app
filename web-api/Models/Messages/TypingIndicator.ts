import mongoose, { Document, Schema } from 'mongoose';

// Define interface for TypingIndicator document
interface TypingIndicator extends Document {
    conversationId: Schema.Types.ObjectId; // ID of the conversation where typing is happening
    userId: Schema.Types.ObjectId; // ID of the user who is typing
    isTyping: boolean; // Indicates whether the user is currently typing
    // Add any additional fields you need for typing indicator management
}

// Define schema for TypingIndicator collection
const typingIndicatorSchema: Schema<TypingIndicator> = new Schema({
    conversationId: { type: Schema.Types.ObjectId, required: true },
    userId: { type: Schema.Types.ObjectId, required: true },
    isTyping: { type: Boolean, default: false }
});

// Create and export TypingIndicator model
export default mongoose.model<TypingIndicator>('TypingIndicator', typingIndicatorSchema);
