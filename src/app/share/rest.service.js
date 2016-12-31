"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var util_1 = require("./util");
/**
 * Angular 2 RESTClient class.
 *
 * @class RESTClient
 * @constructor
 */
var RESTClient = (function () {
    function RESTClient(http) {
        this.http = http;
    }
    RESTClient.prototype.getBaseUrl = function () {
        return null;
    };
    ;
    RESTClient.prototype.getDefaultHeaders = function () {
        return null;
    };
    ;
    /**
     * Request Interceptor
     *
     * @method requestInterceptor
     * @param {Request} req - request object
     */
    RESTClient.prototype.requestInterceptor = function (req) {
        return req;
    };
    /**
     * Response Interceptor
     *
     * @method responseInterceptor
     * @param {Response} res - response object
     * @returns {Response} res - transformed response object
     */
    RESTClient.prototype.responseInterceptor = function (res) {
        return res;
    };
    return RESTClient;
}());
RESTClient = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(http_1.Http))
], RESTClient);
exports.RESTClient = RESTClient;
/**
 * Set the base URL of REST resource
 * @param {String} url - base URL
 */
function BaseUrl(url) {
    return function (Target) {
        Target.prototype.getBaseUrl = function () {
            return url;
        };
        return Target;
    };
}
exports.BaseUrl = BaseUrl;
/**
 * Set default headers for every method of the RESTClient
 * @param {Object} headers - deafult headers in a key-value pair
 */
function DefaultHeaders(headers) {
    return function (Target) {
        Target.prototype.getDefaultHeaders = function () {
            return headers;
        };
        return Target;
    };
}
exports.DefaultHeaders = DefaultHeaders;
/**
 * Set custom headers for a REST method
 * @param {Object} headersDef - custom headers in a key-value pair
 */
function Headers(headersDef) {
    return function (target, propertyKey, descriptor) {
        descriptor.headers = headersDef;
        return descriptor;
    };
}
exports.Headers = Headers;
/**
 * Defines the type(s) that the responses can produce
 */
function Produces(interceptor) {
    return function (target, propertyKey, descriptor) {
        descriptor.producer = function (res) {
            if (interceptor) {
                interceptor(res);
            }
            return res.json();
        };
        return descriptor;
    };
}
exports.Produces = Produces;
/**
 * Path variable of a method's url, type: string
 * @param {string} key - path key to bind value
 */
exports.Path = util_1.Builder.param('Path');
/**
 * Query value of a method's url, type: string
 * @param {string} key - query key to bind value
 */
exports.Query = util_1.Builder.param('Query');
/**
 * Body of a REST method, type: key-value pair object
 * Only one body per method!
 */
exports.Body = util_1.Builder.param('Body')('Body');
/**
 * Custom header of a REST method, type: string
 * @param {string} key - header key to bind value
 */
exports.Header = util_1.Builder.param('Header');
/**
 * GET method
 * @param {string} url - resource url of the method
 */
exports.GET = util_1.Builder.method(http_1.RequestMethod.Get);
/**
 * POST method
 * @param {string} url - resource url of the method
 */
exports.POST = util_1.Builder.method(http_1.RequestMethod.Post);
/**
 * PUT method
 * @param {string} url - resource url of the method
 */
exports.PUT = util_1.Builder.method(http_1.RequestMethod.Put);
/**
 * DELETE method
 * @param {string} url - resource url of the method
 */
exports.DELETE = util_1.Builder.method(http_1.RequestMethod.Delete);
/**
 * HEAD method
 * @param {string} url - resource url of the method
 */
exports.HEAD = util_1.Builder.method(http_1.RequestMethod.Head);
