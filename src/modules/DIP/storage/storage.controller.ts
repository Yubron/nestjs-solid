import { Controller, Get, Param } from '@nestjs/common';
import { StorageFetcher, StorageService } from './storage.service';

@Controller('storage')
export class StorageController {
  constructor(
    private readonly badStorageService: StorageService,
    private readonly goodStorageService: StorageFetcher,
  ) {}

  // ❌ BAD
  @Get('/bad-file/:filename')
  public badGetFile(@Param('filename') filename: string) {
    const file = this.badStorageService.findAmazonS3File(filename);
    return file;
  }

  // ✅ GOOD
  @Get('/good-file/:filename')
  public goodGetFile(@Param('filename') filename: string) {
    const file = this.goodStorageService.findFile(filename);
    return file;
  }
}
