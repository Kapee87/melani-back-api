import { Schema, model } from "mongoose";

const collection = 'works';

let schema = new Schema({
    'name': { type: String, required: true },
    'detail': { type: String, required: true },
    'imageUrl': { type: String, required: true }
}, {
    timestamps: true
})

const Work = model(collection, schema)

export default Work;

