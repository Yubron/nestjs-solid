import { Injectable } from '@nestjs/common';
import { StorageFetcher } from './storage.service';

const cloudStorage: any = {
  getObject: (filename: string) => {
    return 'good cs: ' + filename;
  },
};

//Good ✅
@Injectable()
export class StorageCSFetcherService implements StorageFetcher {
  public async findFile(filename: string) {
    const file = cloudStorage.getObject(filename);
    return file;
  }
}
