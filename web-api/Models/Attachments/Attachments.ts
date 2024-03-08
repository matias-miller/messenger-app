import mongoose, { Document, Schema } from 'mongoose';

// Define interface for Attachment document
interface Attachment extends Document {
    filename: string;
    contentType: string;
    size: number;
    url: string;
    createdAt: Date;
    // Add any additional fields you need for attachment management
}

// Define schema for Attachment collection
const attachmentSchema: Schema<Attachment> = new Schema({
    filename: { type: String, required: true },
    contentType: { type: String, required: true },
    size: { type: Number, required: true },
    url: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Create and export Attachment model
export default mongoose.model<Attachment>('Attachment', attachmentSchema);
