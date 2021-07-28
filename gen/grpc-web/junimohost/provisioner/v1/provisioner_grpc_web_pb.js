/**
 * @fileoverview gRPC-Web generated client stub for junimohost.provisioner.v1
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

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')
const proto = {};
proto.junimohost = {};
proto.junimohost.provisioner = {};
proto.junimohost.provisioner.v1 = require('./provisioner_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.junimohost.provisioner.v1.ProvisionerServiceClient =
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
proto.junimohost.provisioner.v1.ProvisionerServicePromiseClient =
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
 *   !proto.junimohost.provisioner.v1.ProvisionServerRequest,
 *   !proto.junimohost.provisioner.v1.ProvisionServerResponse>}
 */
const methodDescriptor_ProvisionerService_ProvisionServer = new grpc.web.MethodDescriptor(
  '/junimohost.provisioner.v1.ProvisionerService/ProvisionServer',
  grpc.web.MethodType.UNARY,
  proto.junimohost.provisioner.v1.ProvisionServerRequest,
  proto.junimohost.provisioner.v1.ProvisionServerResponse,
  /**
   * @param {!proto.junimohost.provisioner.v1.ProvisionServerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.junimohost.provisioner.v1.ProvisionServerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.junimohost.provisioner.v1.ProvisionServerRequest,
 *   !proto.junimohost.provisioner.v1.ProvisionServerResponse>}
 */
const methodInfo_ProvisionerService_ProvisionServer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.junimohost.provisioner.v1.ProvisionServerResponse,
  /**
   * @param {!proto.junimohost.provisioner.v1.ProvisionServerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.junimohost.provisioner.v1.ProvisionServerResponse.deserializeBinary
);


/**
 * @param {!proto.junimohost.provisioner.v1.ProvisionServerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.junimohost.provisioner.v1.ProvisionServerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.junimohost.provisioner.v1.ProvisionServerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.junimohost.provisioner.v1.ProvisionerServiceClient.prototype.provisionServer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/junimohost.provisioner.v1.ProvisionerService/ProvisionServer',
      request,
      metadata || {},
      methodDescriptor_ProvisionerService_ProvisionServer,
      callback);
};


/**
 * @param {!proto.junimohost.provisioner.v1.ProvisionServerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.junimohost.provisioner.v1.ProvisionServerResponse>}
 *     Promise that resolves to the response
 */
proto.junimohost.provisioner.v1.ProvisionerServicePromiseClient.prototype.provisionServer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/junimohost.provisioner.v1.ProvisionerService/ProvisionServer',
      request,
      metadata || {},
      methodDescriptor_ProvisionerService_ProvisionServer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.junimohost.provisioner.v1.DeleteServerRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ProvisionerService_DeleteServer = new grpc.web.MethodDescriptor(
  '/junimohost.provisioner.v1.ProvisionerService/DeleteServer',
  grpc.web.MethodType.UNARY,
  proto.junimohost.provisioner.v1.DeleteServerRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.junimohost.provisioner.v1.DeleteServerRequest} request
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
 *   !proto.junimohost.provisioner.v1.DeleteServerRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ProvisionerService_DeleteServer = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.junimohost.provisioner.v1.DeleteServerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.junimohost.provisioner.v1.DeleteServerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.junimohost.provisioner.v1.ProvisionerServiceClient.prototype.deleteServer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/junimohost.provisioner.v1.ProvisionerService/DeleteServer',
      request,
      metadata || {},
      methodDescriptor_ProvisionerService_DeleteServer,
      callback);
};


/**
 * @param {!proto.junimohost.provisioner.v1.DeleteServerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.junimohost.provisioner.v1.ProvisionerServicePromiseClient.prototype.deleteServer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/junimohost.provisioner.v1.ProvisionerService/DeleteServer',
      request,
      metadata || {},
      methodDescriptor_ProvisionerService_DeleteServer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.junimohost.provisioner.v1.GetServersForAccountRequest,
 *   !proto.junimohost.provisioner.v1.GetServersForAccountResponse>}
 */
const methodDescriptor_ProvisionerService_GetServersForAccount = new grpc.web.MethodDescriptor(
  '/junimohost.provisioner.v1.ProvisionerService/GetServersForAccount',
  grpc.web.MethodType.UNARY,
  proto.junimohost.provisioner.v1.GetServersForAccountRequest,
  proto.junimohost.provisioner.v1.GetServersForAccountResponse,
  /**
   * @param {!proto.junimohost.provisioner.v1.GetServersForAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.junimohost.provisioner.v1.GetServersForAccountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.junimohost.provisioner.v1.GetServersForAccountRequest,
 *   !proto.junimohost.provisioner.v1.GetServersForAccountResponse>}
 */
const methodInfo_ProvisionerService_GetServersForAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.junimohost.provisioner.v1.GetServersForAccountResponse,
  /**
   * @param {!proto.junimohost.provisioner.v1.GetServersForAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.junimohost.provisioner.v1.GetServersForAccountResponse.deserializeBinary
);


/**
 * @param {!proto.junimohost.provisioner.v1.GetServersForAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.junimohost.provisioner.v1.GetServersForAccountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.junimohost.provisioner.v1.GetServersForAccountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.junimohost.provisioner.v1.ProvisionerServiceClient.prototype.getServersForAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/junimohost.provisioner.v1.ProvisionerService/GetServersForAccount',
      request,
      metadata || {},
      methodDescriptor_ProvisionerService_GetServersForAccount,
      callback);
};


/**
 * @param {!proto.junimohost.provisioner.v1.GetServersForAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.junimohost.provisioner.v1.GetServersForAccountResponse>}
 *     Promise that resolves to the response
 */
proto.junimohost.provisioner.v1.ProvisionerServicePromiseClient.prototype.getServersForAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/junimohost.provisioner.v1.ProvisionerService/GetServersForAccount',
      request,
      metadata || {},
      methodDescriptor_ProvisionerService_GetServersForAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.junimohost.provisioner.v1.UpdateServerSizeRequest,
 *   !proto.junimohost.provisioner.v1.UpdateServerSizeResponse>}
 */
const methodDescriptor_ProvisionerService_UpdateServerSize = new grpc.web.MethodDescriptor(
  '/junimohost.provisioner.v1.ProvisionerService/UpdateServerSize',
  grpc.web.MethodType.UNARY,
  proto.junimohost.provisioner.v1.UpdateServerSizeRequest,
  proto.junimohost.provisioner.v1.UpdateServerSizeResponse,
  /**
   * @param {!proto.junimohost.provisioner.v1.UpdateServerSizeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.junimohost.provisioner.v1.UpdateServerSizeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.junimohost.provisioner.v1.UpdateServerSizeRequest,
 *   !proto.junimohost.provisioner.v1.UpdateServerSizeResponse>}
 */
const methodInfo_ProvisionerService_UpdateServerSize = new grpc.web.AbstractClientBase.MethodInfo(
  proto.junimohost.provisioner.v1.UpdateServerSizeResponse,
  /**
   * @param {!proto.junimohost.provisioner.v1.UpdateServerSizeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.junimohost.provisioner.v1.UpdateServerSizeResponse.deserializeBinary
);


/**
 * @param {!proto.junimohost.provisioner.v1.UpdateServerSizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.junimohost.provisioner.v1.UpdateServerSizeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.junimohost.provisioner.v1.UpdateServerSizeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.junimohost.provisioner.v1.ProvisionerServiceClient.prototype.updateServerSize =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/junimohost.provisioner.v1.ProvisionerService/UpdateServerSize',
      request,
      metadata || {},
      methodDescriptor_ProvisionerService_UpdateServerSize,
      callback);
};


/**
 * @param {!proto.junimohost.provisioner.v1.UpdateServerSizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.junimohost.provisioner.v1.UpdateServerSizeResponse>}
 *     Promise that resolves to the response
 */
proto.junimohost.provisioner.v1.ProvisionerServicePromiseClient.prototype.updateServerSize =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/junimohost.provisioner.v1.ProvisionerService/UpdateServerSize',
      request,
      metadata || {},
      methodDescriptor_ProvisionerService_UpdateServerSize);
};


module.exports = proto.junimohost.provisioner.v1;

