"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = setupCors;
const cors_1 = __importDefault(require("cors"));
function setupCors(app) {
    return __awaiter(this, void 0, void 0, function* () {
        let allowedOrigins = ["http://localhost:8800", "http://localhost:5500", "http://127.0.0.1:5500"];
        const config = {
            origin: (origin, callback) => {
                if (!origin) {
                    return callback(null, true);
                }
                if (allowedOrigins.indexOf(origin) === -1) {
                    const msg = "The CORS policy for this site does not allow access from the specified Origin.";
                    return callback(new Error(msg), false);
                }
                return callback(null, true);
            },
        };
        const cors_supercharged = (0, cors_1.default)(config);
        app.use(cors_supercharged);
    });
}
;
