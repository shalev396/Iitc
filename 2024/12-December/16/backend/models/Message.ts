import { Schema, model, Document } from 'mongoose';
import { IMessage } from '../../shared/types';

export interface IMessageDocument extends Omit<IMessage, '_id'>, Document {}

const messageSchema = new Schema<IMessageDocument>({
  room: { type: String, required: true },
  username: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  system: { type: Boolean, default: false }
});

export default model<IMessageDocument>('Message', messageSchema); 