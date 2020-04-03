import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { ImageModule } from './image/image.module';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), MongooseModule.forRoot(`mongodb+srv://bokismoki:${process.env.DB_PASSWORD}@cluster0-jxyh3.mongodb.net/nuxtnest-multer?retryWrites=true&w=majority`), ImageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
