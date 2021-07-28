// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var junimohost_accounts_v1_account_manager_pb = require('../../../junimohost/accounts/v1/account_manager_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_junimohost_accounts_v1_CreateAccountRequest(arg) {
  if (!(arg instanceof junimohost_accounts_v1_account_manager_pb.CreateAccountRequest)) {
    throw new Error('Expected argument of type junimohost.accounts.v1.CreateAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_junimohost_accounts_v1_CreateAccountRequest(buffer_arg) {
  return junimohost_accounts_v1_account_manager_pb.CreateAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_junimohost_accounts_v1_CreateAccountResponse(arg) {
  if (!(arg instanceof junimohost_accounts_v1_account_manager_pb.CreateAccountResponse)) {
    throw new Error('Expected argument of type junimohost.accounts.v1.CreateAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_junimohost_accounts_v1_CreateAccountResponse(buffer_arg) {
  return junimohost_accounts_v1_account_manager_pb.CreateAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_junimohost_accounts_v1_DeleteAccountRequest(arg) {
  if (!(arg instanceof junimohost_accounts_v1_account_manager_pb.DeleteAccountRequest)) {
    throw new Error('Expected argument of type junimohost.accounts.v1.DeleteAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_junimohost_accounts_v1_DeleteAccountRequest(buffer_arg) {
  return junimohost_accounts_v1_account_manager_pb.DeleteAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var AccountServiceService = exports.AccountServiceService = {
  createAccount: {
    path: '/junimohost.accounts.v1.AccountService/CreateAccount',
    requestStream: false,
    responseStream: false,
    requestType: junimohost_accounts_v1_account_manager_pb.CreateAccountRequest,
    responseType: junimohost_accounts_v1_account_manager_pb.CreateAccountResponse,
    requestSerialize: serialize_junimohost_accounts_v1_CreateAccountRequest,
    requestDeserialize: deserialize_junimohost_accounts_v1_CreateAccountRequest,
    responseSerialize: serialize_junimohost_accounts_v1_CreateAccountResponse,
    responseDeserialize: deserialize_junimohost_accounts_v1_CreateAccountResponse,
  },
  deleteAccount: {
    path: '/junimohost.accounts.v1.AccountService/DeleteAccount',
    requestStream: false,
    responseStream: false,
    requestType: junimohost_accounts_v1_account_manager_pb.DeleteAccountRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_junimohost_accounts_v1_DeleteAccountRequest,
    requestDeserialize: deserialize_junimohost_accounts_v1_DeleteAccountRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.AccountServiceClient = grpc.makeGenericClientConstructor(AccountServiceService);
