import { Injectable } from '@nestjs/common';

const s3: any = {
  getObject: (filename: string) => {
    return 'bad s3: ' + filename;
  },
};
const cloudStorage: any = {
  getObject: (filename: string) => {
    return 'bad cs: ' + filename;
  },
};

@Injectable()
export class StorageService {
  public findAmazonS3File(filename: string) {
    const file = s3.getObject(filename);
    return file;
  }

  public findGoggleCloudStorageFile(filename: string) {
    const file = cloudStorage.getObject(filename);
    return file;
  }
}

export abstract class StorageFetcher {
  abstract findFile(filename: string): any;
}
