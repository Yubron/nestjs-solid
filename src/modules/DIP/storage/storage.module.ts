import { Module } from '@nestjs/common';
import { StorageController } from './storage.controller';
import { StorageFetcher, StorageService } from './storage.service';
import { StorageS3FetcherService } from './storage-s3-fetcher.service';

@Module({
  controllers: [StorageController],
  providers: [
    StorageService,
    {
      provide: StorageFetcher,
      useClass: StorageS3FetcherService,
    },
  ],
})
export class StorageModule {}
