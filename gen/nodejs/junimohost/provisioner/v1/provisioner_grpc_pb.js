// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var junimohost_provisioner_v1_provisioner_pb = require('../../../junimohost/provisioner/v1/provisioner_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_junimohost_provisioner_v1_DeleteServerRequest(arg) {
  if (!(arg instanceof junimohost_provisioner_v1_provisioner_pb.DeleteServerRequest)) {
    throw new Error('Expected argument of type junimohost.provisioner.v1.DeleteServerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_junimohost_provisioner_v1_DeleteServerRequest(buffer_arg) {
  return junimohost_provisioner_v1_provisioner_pb.DeleteServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_junimohost_provisioner_v1_GetServersForAccountRequest(arg) {
  if (!(arg instanceof junimohost_provisioner_v1_provisioner_pb.GetServersForAccountRequest)) {
    throw new Error('Expected argument of type junimohost.provisioner.v1.GetServersForAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_junimohost_provisioner_v1_GetServersForAccountRequest(buffer_arg) {
  return junimohost_provisioner_v1_provisioner_pb.GetServersForAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_junimohost_provisioner_v1_GetServersForAccountResponse(arg) {
  if (!(arg instanceof junimohost_provisioner_v1_provisioner_pb.GetServersForAccountResponse)) {
    throw new Error('Expected argument of type junimohost.provisioner.v1.GetServersForAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_junimohost_provisioner_v1_GetServersForAccountResponse(buffer_arg) {
  return junimohost_provisioner_v1_provisioner_pb.GetServersForAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_junimohost_provisioner_v1_ProvisionServerRequest(arg) {
  if (!(arg instanceof junimohost_provisioner_v1_provisioner_pb.ProvisionServerRequest)) {
    throw new Error('Expected argument of type junimohost.provisioner.v1.ProvisionServerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_junimohost_provisioner_v1_ProvisionServerRequest(buffer_arg) {
  return junimohost_provisioner_v1_provisioner_pb.ProvisionServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_junimohost_provisioner_v1_ProvisionServerResponse(arg) {
  if (!(arg instanceof junimohost_provisioner_v1_provisioner_pb.ProvisionServerResponse)) {
    throw new Error('Expected argument of type junimohost.provisioner.v1.ProvisionServerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_junimohost_provisioner_v1_ProvisionServerResponse(buffer_arg) {
  return junimohost_provisioner_v1_provisioner_pb.ProvisionServerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_junimohost_provisioner_v1_UpdateServerSizeRequest(arg) {
  if (!(arg instanceof junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeRequest)) {
    throw new Error('Expected argument of type junimohost.provisioner.v1.UpdateServerSizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_junimohost_provisioner_v1_UpdateServerSizeRequest(buffer_arg) {
  return junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_junimohost_provisioner_v1_UpdateServerSizeResponse(arg) {
  if (!(arg instanceof junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeResponse)) {
    throw new Error('Expected argument of type junimohost.provisioner.v1.UpdateServerSizeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_junimohost_provisioner_v1_UpdateServerSizeResponse(buffer_arg) {
  return junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProvisionerServiceService = exports.ProvisionerServiceService = {
  // maybe need to return long running operation? idk how long this will take
provisionServer: {
    path: '/junimohost.provisioner.v1.ProvisionerService/ProvisionServer',
    requestStream: false,
    responseStream: false,
    requestType: junimohost_provisioner_v1_provisioner_pb.ProvisionServerRequest,
    responseType: junimohost_provisioner_v1_provisioner_pb.ProvisionServerResponse,
    requestSerialize: serialize_junimohost_provisioner_v1_ProvisionServerRequest,
    requestDeserialize: deserialize_junimohost_provisioner_v1_ProvisionServerRequest,
    responseSerialize: serialize_junimohost_provisioner_v1_ProvisionServerResponse,
    responseDeserialize: deserialize_junimohost_provisioner_v1_ProvisionServerResponse,
  },
  deleteServer: {
    path: '/junimohost.provisioner.v1.ProvisionerService/DeleteServer',
    requestStream: false,
    responseStream: false,
    requestType: junimohost_provisioner_v1_provisioner_pb.DeleteServerRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_junimohost_provisioner_v1_DeleteServerRequest,
    requestDeserialize: deserialize_junimohost_provisioner_v1_DeleteServerRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getServersForAccount: {
    path: '/junimohost.provisioner.v1.ProvisionerService/GetServersForAccount',
    requestStream: false,
    responseStream: false,
    requestType: junimohost_provisioner_v1_provisioner_pb.GetServersForAccountRequest,
    responseType: junimohost_provisioner_v1_provisioner_pb.GetServersForAccountResponse,
    requestSerialize: serialize_junimohost_provisioner_v1_GetServersForAccountRequest,
    requestDeserialize: deserialize_junimohost_provisioner_v1_GetServersForAccountRequest,
    responseSerialize: serialize_junimohost_provisioner_v1_GetServersForAccountResponse,
    responseDeserialize: deserialize_junimohost_provisioner_v1_GetServersForAccountResponse,
  },
  updateServerSize: {
    path: '/junimohost.provisioner.v1.ProvisionerService/UpdateServerSize',
    requestStream: false,
    responseStream: false,
    requestType: junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeRequest,
    responseType: junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeResponse,
    requestSerialize: serialize_junimohost_provisioner_v1_UpdateServerSizeRequest,
    requestDeserialize: deserialize_junimohost_provisioner_v1_UpdateServerSizeRequest,
    responseSerialize: serialize_junimohost_provisioner_v1_UpdateServerSizeResponse,
    responseDeserialize: deserialize_junimohost_provisioner_v1_UpdateServerSizeResponse,
  },
};

exports.ProvisionerServiceClient = grpc.makeGenericClientConstructor(ProvisionerServiceService);
