import { Schema, model } from "mongoose";

const collection = 'user';

let schema = new Schema({
    'email': { type: String, required: true },
    'password': { type: String, required: true },
    'name': { type: String, required: true },
    'profileImage': { type: String, required: true },
    'info': { type: String },
    'role': { type: String, default: 'user' },
    'online': { type: Boolean, default: false }
}, {
    timestamps: true
})

const User = model(collection, schema)

export default User;

