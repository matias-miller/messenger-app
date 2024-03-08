import mongoose, { Document, Schema } from 'mongoose';

// Define interface for Reaction document
interface Reaction extends Document {
    messageId: Schema.Types.ObjectId; // ID of the message to which the reaction belongs
    userId: Schema.Types.ObjectId; // ID of the user who reacted
    emoji: string; // Emoji representing the reaction
    // Add any additional fields you need for reaction management
}

// Define schema for Reaction collection
const reactionSchema: Schema<Reaction> = new Schema({
    messageId: { type: Schema.Types.ObjectId, ref: 'Message', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    emoji: { type: String, required: true },
});

// Create and export Reaction model
export default mongoose.model<Reaction>('Reaction', reactionSchema);
