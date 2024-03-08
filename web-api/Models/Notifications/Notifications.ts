import mongoose, { Document, Schema } from 'mongoose';

// Define interface for Notification document
interface Notification extends Document {
    userId: Schema.Types.ObjectId; // ID of the user receiving the notification
    content: string; // Notification content
    timestamp: Date; // Timestamp of when the notification was sent
    // Add any additional fields you need for notification management
}

// Define schema for Notification collection
const notificationSchema: Schema<Notification> = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

// Create and export Notification model
export default mongoose.model<Notification>('Notification', notificationSchema);
