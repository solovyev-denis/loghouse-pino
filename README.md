# loghouse-pino

A transmit for pino that sends logs to the Loghouse.io

## Installation

```console
$ npm i @loghouse/pino
```

## Usage

```console
$ loghouse-pino --help
@loghouse/pino [options]

Options:
  --help              Show help                                        [boolean]
  --version           Show version number                              [boolean]
  --access_token, -a  Team access token                      [string] [required]
  --bucket_id, -b     Bucket id in team                      [string] [required]
```

**Example**

```console
$ node ${your package} | loghouse-pino --access_token=${ACCESS_TOKEN} --bucket_id=${BUCKET_ID}
```

## Functions

### createWriteStream

```ts
import { createWriteStream } from '@loghouse/pino';

const stream = createWriteStream({
  access_token: "${ACCESS_TOKEN}",
  bucket_id: "${BUCKET_ID}"
});

const logger = pino(
  ...{ pino options },
  stream,
);

logger.info('test log!');
```