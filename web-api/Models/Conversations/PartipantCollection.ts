import mongoose, { Document, Schema } from 'mongoose';

// Define interface for Participant document
interface Participant extends Document {
    conversationId: Schema.Types.ObjectId; // ID of the conversation or group chat
    userId: Schema.Types.ObjectId; // ID of the user participating in the conversation or group chat
    // Add any additional fields you need for participant management
}

// Define schema for ParticipantCollection collection
const participantSchema: Schema<Participant> = new Schema({
    conversationId: { type: Schema.Types.ObjectId, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    // Add any additional fields if needed
});

// Create and export ParticipantCollection model
export default mongoose.model<Participant>('Participant', participantSchema);
