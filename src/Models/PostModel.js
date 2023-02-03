import { model, Schema, SchemaTypes } from "mongoose";

export const Post = model('posts', new Schema({
    titulo: { type: SchemaTypes.String, unique: true },
    categoria: { type: SchemaTypes.String },
    descricao: { type: SchemaTypes.String },
    image: { type: SchemaTypes.String }
}, { timestamps: true }))