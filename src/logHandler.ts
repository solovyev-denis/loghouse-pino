import {TransformCallback} from 'through2';
import {LoghouseClient} from "@loghouse/http-transport";
import {options} from "./options"

interface ILogEvent {
  time: number
  level: number
  msg?: string

  [key: string]: any
}

interface ILogEntry {
  message: string
  timestamp: number
  metadata?: Object
}

export default function (
  log: Record<string, unknown>,
  callback?: TransformCallback,
): void {

  const client = new LoghouseClient({
    accessToken: options.access_token,
    bucketId: options.bucket_id
  })

  client.log(logEventFormatter(log as ILogEvent))

  callback?.();
}

function logEventFormatter(logEvent: ILogEvent): ILogEntry {
  let metadata = (({msg, time, level, ...o}) => o)(logEvent)
  metadata.level = logEvent.level

  let message: string

  if (logEvent.msg) {
    if (typeof logEvent.msg === 'object') {
      message = JSON.stringify(logEvent.msg)
    } else {
      message = logEvent.msg
    }
  } else {
    message = 'N/A'
  }

  return {
    message,
    timestamp: logEvent.time,
    metadata
  }
}
