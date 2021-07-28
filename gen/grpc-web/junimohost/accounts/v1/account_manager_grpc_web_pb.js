/**
 * @fileoverview gRPC-Web generated client stub for junimohost.accounts.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../../google/api/annotations_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.junimohost = {};
proto.junimohost.accounts = {};
proto.junimohost.accounts.v1 = require('./account_manager_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.junimohost.accounts.v1.AccountServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.junimohost.accounts.v1.AccountServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.junimohost.accounts.v1.CreateAccountRequest,
 *   !proto.junimohost.accounts.v1.CreateAccountResponse>}
 */
const methodDescriptor_AccountService_CreateAccount = new grpc.web.MethodDescriptor(
  '/junimohost.accounts.v1.AccountService/CreateAccount',
  grpc.web.MethodType.UNARY,
  proto.junimohost.accounts.v1.CreateAccountRequest,
  proto.junimohost.accounts.v1.CreateAccountResponse,
  /**
   * @param {!proto.junimohost.accounts.v1.CreateAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.junimohost.accounts.v1.CreateAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.junimohost.accounts.v1.CreateAccountRequest,
 *   !proto.junimohost.accounts.v1.CreateAccountResponse>}
 */
const methodInfo_AccountService_CreateAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.junimohost.accounts.v1.CreateAccountResponse,
  /**
   * @param {!proto.junimohost.accounts.v1.CreateAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.junimohost.accounts.v1.CreateAccountResponse.deserializeBinary
);


/**
 * @param {!proto.junimohost.accounts.v1.CreateAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.junimohost.accounts.v1.CreateAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.junimohost.accounts.v1.CreateAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.junimohost.accounts.v1.AccountServiceClient.prototype.createAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/junimohost.accounts.v1.AccountService/CreateAccount',
      request,
      metadata || {},
      methodDescriptor_AccountService_CreateAccount,
      callback);
};


/**
 * @param {!proto.junimohost.accounts.v1.CreateAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.junimohost.accounts.v1.CreateAccountResponse>}
 *     Promise that resolves to the response
 */
proto.junimohost.accounts.v1.AccountServicePromiseClient.prototype.createAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/junimohost.accounts.v1.AccountService/CreateAccount',
      request,
      metadata || {},
      methodDescriptor_AccountService_CreateAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.junimohost.accounts.v1.DeleteAccountRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AccountService_DeleteAccount = new grpc.web.MethodDescriptor(
  '/junimohost.accounts.v1.AccountService/DeleteAccount',
  grpc.web.MethodType.UNARY,
  proto.junimohost.accounts.v1.DeleteAccountRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.junimohost.accounts.v1.DeleteAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.junimohost.accounts.v1.DeleteAccountRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AccountService_DeleteAccount = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.junimohost.accounts.v1.DeleteAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.junimohost.accounts.v1.DeleteAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.junimohost.accounts.v1.AccountServiceClient.prototype.deleteAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/junimohost.accounts.v1.AccountService/DeleteAccount',
      request,
      metadata || {},
      methodDescriptor_AccountService_DeleteAccount,
      callback);
};


/**
 * @param {!proto.junimohost.accounts.v1.DeleteAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.junimohost.accounts.v1.AccountServicePromiseClient.prototype.deleteAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/junimohost.accounts.v1.AccountService/DeleteAccount',
      request,
      metadata || {},
      methodDescriptor_AccountService_DeleteAccount);
};


module.exports = proto.junimohost.accounts.v1;

