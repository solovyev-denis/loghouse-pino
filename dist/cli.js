#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pump_1 = __importDefault(require("pump"));
const split2_1 = __importDefault(require("split2"));
const through2_1 = __importDefault(require("through2"));
const options_1 = require("./options");
const logHandler_1 = __importDefault(require("./logHandler"));
options_1.loadOptions();
pump_1.default(process.stdin, split2_1.default((src) => JSON.parse(src)), through2_1.default.obj((log, _enc, callback) => {
    logHandler_1.default(log, callback);
}));
//# sourceMappingURL=cli.js.map