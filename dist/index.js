"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWriteStream = void 0;
const pumpify_1 = __importDefault(require("pumpify"));
const split2_1 = __importDefault(require("split2"));
const through2_1 = __importDefault(require("through2"));
const options_1 = require("./options");
const logHandler_1 = __importDefault(require("./logHandler"));
function createWriteStream(options) {
    if (!options.access_token) {
        throw new Error('Access token is required');
    }
    if (!options.bucket_id) {
        throw new Error('Bucket id is required');
    }
    options_1.setOptions(options);
    return new pumpify_1.default(split2_1.default((src) => JSON.parse(src)), through2_1.default.obj((log, _enc, callback) => {
        logHandler_1.default(log, callback);
    }));
}
exports.createWriteStream = createWriteStream;
//# sourceMappingURL=index.js.map