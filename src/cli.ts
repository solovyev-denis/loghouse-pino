#!/usr/bin/env node
import pump from 'pump';
import split from 'split2';
import through from 'through2';

import { loadOptions } from './options';
import logHandler from './logHandler';

loadOptions();

pump(process.stdin, split((src: string) => JSON.parse(src)), through.obj(
  (log: Record<string, unknown>, _enc, callback) => {
    logHandler(log, callback);
  },
));
