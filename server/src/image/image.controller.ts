import { Controller, Post, UseInterceptors, UploadedFile, Param, Res, Get } from '@nestjs/common';
import { ImageService } from './image.service';
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { imageFileFilter, editFileName } from 'src/utils/file-uploading.utils';
import { Image } from './image.interface';

@Controller('image')
export class ImageController {
    constructor(private readonly imageService: ImageService) { }

    @Get()
    getImages(): Promise<Image[]> {
        return this.imageService.getImages()
    }

    @Get(':imgpath')
    seeUploadedFile(@Param('imgpath') image, @Res() res) {
        return res.sendFile(image, { root: './files' });
    }

    @Post()
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './files',
            filename: editFileName
        }),
        fileFilter: imageFileFilter
    }))
    async uploadedFile(@UploadedFile() file): Promise<Image> {
        return this.imageService.uploadFile(file)
    }
}
