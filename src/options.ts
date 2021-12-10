import yargs from 'yargs';

export interface ILoghousePinoOptions {
  access_token: string;
  bucket_id: string;
}

export let options: ILoghousePinoOptions;

export function loadOptions(): ILoghousePinoOptions {
  options = yargs
    .usage('@loghouse/pino [options]')
    .option('access_token', {
      type: 'string',
      alias: 'a',
      require: true,
      desc: 'Team access token',
    })
    .option('bucket_id', {
      type: 'string',
      alias: 'b',
      require: true,
      desc: 'Bucket id in team',
    })
    .parse();

  return options;
}

export function setOptions(_options: ILoghousePinoOptions): void {
  options = _options;
}
