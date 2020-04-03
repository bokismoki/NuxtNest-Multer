import * as mongoose from 'mongoose'

export const ImageSchema = new mongoose.Schema({
    original_name: {
        type: String,
        required: true
    },
    file_path: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    }
})