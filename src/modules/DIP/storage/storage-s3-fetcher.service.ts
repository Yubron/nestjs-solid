import { StorageFetcher } from './storage.service';

const s3: any = {
  getObject: (filename: string) => {
    return 'good s3: ' + filename;
  },
};

//Good ✅
export class StorageS3FetcherService implements StorageFetcher {
  public findFile(filename: string) {
    const file = s3.getObject(filename);
    return file;
  }
}
