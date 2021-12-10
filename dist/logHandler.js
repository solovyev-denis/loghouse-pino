"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_transport_1 = require("@loghouse/http-transport");
const options_1 = require("./options");
function default_1(log, callback) {
    const client = new http_transport_1.LoghouseClient({
        accessToken: options_1.options.access_token,
        bucketId: options_1.options.bucket_id
    });
    client.log(logEventFormatter(log));
    callback === null || callback === void 0 ? void 0 : callback();
}
exports.default = default_1;
function logEventFormatter(logEvent) {
    let metadata = (({ msg, time, level, ...o }) => o)(logEvent);
    metadata.level = logEvent.level;
    let message;
    if (logEvent.msg) {
        if (typeof logEvent.msg === 'object') {
            message = JSON.stringify(logEvent.msg);
        }
        else {
            message = logEvent.msg;
        }
    }
    else {
        message = 'N/A';
    }
    return {
        message,
        timestamp: logEvent.time,
        metadata
    };
}
//# sourceMappingURL=logHandler.js.map