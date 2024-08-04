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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = setupPrometheus;
const promMid = require("express-prometheus-middleware");
function setupPrometheus(app) {
    return __awaiter(this, void 0, void 0, function* () {
        app.use(promMid({
            metricsPath: "/metrics",
            collectDefaultMetrics: true,
            requestDurationBuckets: [0.1, 0.5, 1, 1.5],
            requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
            responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
            /**
             * Uncomenting the `authenticate` callback will make the `metricsPath` route
             * require authentication. This authentication callback can make a simple
             * basic auth test, or even query a remote server to validate access.
             * To access /metrics you could do:
             * curl -X GET user:password@localhost:9091/metrics
             */
            // authenticate: req => req.headers.authorization === 'Basic dXNlcjpwYXNzd29yZA==',
            /**
             * Uncommenting the `extraMasks` config will use the list of regexes to
             * reformat URL path names and replace the values found with a placeholder value
             */
            // extraMasks: [/..:..:..:..:..:../],
            /**
             * The prefix option will cause all metrics to have the given prefix.
             * E.g.: `app_prefix_http_requests_total`
             */
            // prefix: 'app_prefix_',
            /**
             * Can add custom labels with customLabels and transformLabels options
             */
            // customLabels: ['contentType'],
            // transformLabels(labels, req) {
            //   // eslint-disable-next-line no-param-reassign
            //   labels.contentType = req.headers['content-type'];
            // },
        }));
    });
}
