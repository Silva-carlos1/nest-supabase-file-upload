import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadAudioService } from './upload-audio.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller({ path: '/uploads/audio' })
export class UploadAudioController {
  constructor(private readonly uploadAudioService: UploadAudioService) {}
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: Express.Multer.File) {
    return this.uploadAudioService.execute(file);
  }
}
