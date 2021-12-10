"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setOptions = exports.loadOptions = exports.options = void 0;
const yargs_1 = __importDefault(require("yargs"));
function loadOptions() {
    exports.options = yargs_1.default
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
    return exports.options;
}
exports.loadOptions = loadOptions;
function setOptions(_options) {
    exports.options = _options;
}
exports.setOptions = setOptions;
//# sourceMappingURL=options.js.map