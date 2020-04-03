import { Injectable } from '@nestjs/common';
import { Image } from './image.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ImageService {
    constructor(@InjectModel('Image') private imageModel: Model<Image>) { }

    async getImages(): Promise<Image[]> {
        const images = await this.imageModel.find({})
        return images
    }

    async uploadFile(file): Promise<Image> {
        const { originalname, filename, size } = file
        const newImage = new this.imageModel({
            original_name: originalname,
            file_path: filename,
            size
        })
        const image = await newImage.save()
        return image
    }
}
