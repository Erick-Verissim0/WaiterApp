import { model, Schema } from 'mongoose';

export const Order = model('Order', new Schema({
    table: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
        default: 'WAITING'
    },
    createAt: {
        type: Date,
        default: Date.now
    }
}));
