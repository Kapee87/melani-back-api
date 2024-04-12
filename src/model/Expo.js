import { Schema, model, Types } from "mongoose";

const collection = 'expos';

let schema = new Schema({
    'name': { type: String, required: true },
    'image': { type: String },
    'info': { type: String },
    'date': { type: String },
    'address': { type: String },
    'website': { type: String }
}, {
    timestamps: true
})

const Expo = model(collection, schema)

export default Expo;

