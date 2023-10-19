import { Schema, model, Types } from "mongoose";

const collection = 'expos';

let schema = new Schema({
    'name': { type: String, required: true },
    'image': { type: String, required: true },
    'info': { type: String, required: true },
    'date': { type: String, required: true },
    'address': { type: String }
}, {
    timestamps: true
})

const Expo = model(collection, schema)

export default Expo;

