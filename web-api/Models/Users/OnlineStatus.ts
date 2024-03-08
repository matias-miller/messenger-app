import mongoose, { Document, Schema } from 'mongoose';

export interface OnlineStatus extends Document {
    userId: Schema.Types.ObjectId;
    status: 'online' | 'offline' | 'away';
    lastSeen?: Date;
}

const onlineStatusSchema: Schema<OnlineStatus> = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['online', 'offline', 'away'], required: true },
    lastSeen: { type: Date }
});

export default mongoose.model<OnlineStatus>('OnlineStatus', onlineStatusSchema);
