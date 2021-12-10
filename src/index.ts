import Pumpify from 'pumpify';
import split from 'split2';
import through from 'through2';

import { ILoghousePinoOptions, setOptions } from './options';
import logHandler  from './logHandler';

export function createWriteStream(options: ILoghousePinoOptions): Pumpify {
  if (!options.access_token) {
    throw new Error('Access token is required');
  }

  if (!options.bucket_id) {
    throw new Error('Bucket id is required');
  }

  setOptions(options);

  return new Pumpify(split((src: string) => JSON.parse(src)), through.obj((log, _enc, callback) => {
    logHandler(log, callback);
  }));
}
