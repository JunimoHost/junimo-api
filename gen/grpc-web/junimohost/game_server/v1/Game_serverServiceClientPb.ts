/**
 * @fileoverview gRPC-Web generated client stub for junimohost.game_server.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as junimohost_game_server_v1_game_server_pb from '../../../junimohost/game_server/v1/game_server_pb';


export class GameServerServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreateServer = new grpcWeb.AbstractClientBase.MethodInfo(
    junimohost_game_server_v1_game_server_pb.CreateServerResponse,
    (request: junimohost_game_server_v1_game_server_pb.CreateServerRequest) => {
      return request.serializeBinary();
    },
    junimohost_game_server_v1_game_server_pb.CreateServerResponse.deserializeBinary
  );

  createServer(
    request: junimohost_game_server_v1_game_server_pb.CreateServerRequest,
    metadata: grpcWeb.Metadata | null): Promise<junimohost_game_server_v1_game_server_pb.CreateServerResponse>;

  createServer(
    request: junimohost_game_server_v1_game_server_pb.CreateServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: junimohost_game_server_v1_game_server_pb.CreateServerResponse) => void): grpcWeb.ClientReadableStream<junimohost_game_server_v1_game_server_pb.CreateServerResponse>;

  createServer(
    request: junimohost_game_server_v1_game_server_pb.CreateServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: junimohost_game_server_v1_game_server_pb.CreateServerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/junimohost.game_server.v1.GameServerService/CreateServer',
        request,
        metadata || {},
        this.methodInfoCreateServer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/junimohost.game_server.v1.GameServerService/CreateServer',
    request,
    metadata || {},
    this.methodInfoCreateServer);
  }

  methodInfoDeleteServer = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: junimohost_game_server_v1_game_server_pb.DeleteServerRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  deleteServer(
    request: junimohost_game_server_v1_game_server_pb.DeleteServerRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  deleteServer(
    request: junimohost_game_server_v1_game_server_pb.DeleteServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteServer(
    request: junimohost_game_server_v1_game_server_pb.DeleteServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/junimohost.game_server.v1.GameServerService/DeleteServer',
        request,
        metadata || {},
        this.methodInfoDeleteServer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/junimohost.game_server.v1.GameServerService/DeleteServer',
    request,
    metadata || {},
    this.methodInfoDeleteServer);
  }

  methodInfoGetServers = new grpcWeb.AbstractClientBase.MethodInfo(
    junimohost_game_server_v1_game_server_pb.GetServersResponse,
    (request: junimohost_game_server_v1_game_server_pb.GetServersRequest) => {
      return request.serializeBinary();
    },
    junimohost_game_server_v1_game_server_pb.GetServersResponse.deserializeBinary
  );

  getServers(
    request: junimohost_game_server_v1_game_server_pb.GetServersRequest,
    metadata: grpcWeb.Metadata | null): Promise<junimohost_game_server_v1_game_server_pb.GetServersResponse>;

  getServers(
    request: junimohost_game_server_v1_game_server_pb.GetServersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: junimohost_game_server_v1_game_server_pb.GetServersResponse) => void): grpcWeb.ClientReadableStream<junimohost_game_server_v1_game_server_pb.GetServersResponse>;

  getServers(
    request: junimohost_game_server_v1_game_server_pb.GetServersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: junimohost_game_server_v1_game_server_pb.GetServersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/junimohost.game_server.v1.GameServerService/GetServers',
        request,
        metadata || {},
        this.methodInfoGetServers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/junimohost.game_server.v1.GameServerService/GetServers',
    request,
    metadata || {},
    this.methodInfoGetServers);
  }

  methodInfoUpdateServer = new grpcWeb.AbstractClientBase.MethodInfo(
    junimohost_game_server_v1_game_server_pb.UpdateServerResponse,
    (request: junimohost_game_server_v1_game_server_pb.UpdateServerRequest) => {
      return request.serializeBinary();
    },
    junimohost_game_server_v1_game_server_pb.UpdateServerResponse.deserializeBinary
  );

  updateServer(
    request: junimohost_game_server_v1_game_server_pb.UpdateServerRequest,
    metadata: grpcWeb.Metadata | null): Promise<junimohost_game_server_v1_game_server_pb.UpdateServerResponse>;

  updateServer(
    request: junimohost_game_server_v1_game_server_pb.UpdateServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: junimohost_game_server_v1_game_server_pb.UpdateServerResponse) => void): grpcWeb.ClientReadableStream<junimohost_game_server_v1_game_server_pb.UpdateServerResponse>;

  updateServer(
    request: junimohost_game_server_v1_game_server_pb.UpdateServerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: junimohost_game_server_v1_game_server_pb.UpdateServerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/junimohost.game_server.v1.GameServerService/UpdateServer',
        request,
        metadata || {},
        this.methodInfoUpdateServer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/junimohost.game_server.v1.GameServerService/UpdateServer',
    request,
    metadata || {},
    this.methodInfoUpdateServer);
  }

}

