import * as mongoose from 'mongoose'

export interface Image extends mongoose.Document {
    original_name: string
    file_path: boolean
    size: number
}