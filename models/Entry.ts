import mongoose, { Schema, Model } from 'mongoose';

export interface IEntry {
  _id?: mongoose.Types.ObjectId | string;
  userId: mongoose.Types.ObjectId;
  content: string;
  mood: string;
  attachments: string[];
  createdAt: Date;
  updatedAt: Date;
}

const EntrySchema = new Schema<IEntry>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  mood: { type: String, required: true },
  attachments: { type: [String], default: [] },
}, { timestamps: true });

// Prevent model overwrite during hot reload
const Entry: Model<IEntry> = mongoose.models.Entry || mongoose.model<IEntry>('Entry', EntrySchema);

export default Entry;
