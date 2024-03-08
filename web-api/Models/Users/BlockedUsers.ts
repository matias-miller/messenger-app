import mongoose, { Document, Schema } from 'mongoose';

// Define interface for BlockedUser document
interface BlockedUser extends Document {
    userId: Schema.Types.ObjectId; // ID of the user who has been blocked
    blockedBy: Schema.Types.ObjectId; // ID of the user who blocked the other user
    createdAt: Date; // Timestamp of when the user was blocked
    // Add any additional fields you need for blocked user management
}

// Define schema for BlockedUser collection
const blockedUserSchema: Schema<BlockedUser> = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    blockedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now }
});

// Create and export BlockedUser model
export default mongoose.model<BlockedUser>('BlockedUser', blockedUserSchema);
