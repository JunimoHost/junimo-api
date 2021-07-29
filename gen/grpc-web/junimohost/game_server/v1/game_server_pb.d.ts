import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class GameServer extends jspb.Message {
  getServerId(): string;
  setServerId(value: string): GameServer;

  getInstanceSize(): GameServerSize;
  setInstanceSize(value: GameServerSize): GameServer;

  getHostUri(): string;
  setHostUri(value: string): GameServer;

  getStatus(): GameServerStatus;
  setStatus(value: GameServerStatus): GameServer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameServer.AsObject;
  static toObject(includeInstance: boolean, msg: GameServer): GameServer.AsObject;
  static serializeBinaryToWriter(message: GameServer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameServer;
  static deserializeBinaryFromReader(message: GameServer, reader: jspb.BinaryReader): GameServer;
}

export namespace GameServer {
  export type AsObject = {
    serverId: string,
    instanceSize: GameServerSize,
    hostUri: string,
    status: GameServerStatus,
  }
}

export class UpdateServerRequest extends jspb.Message {
  getServerId(): string;
  setServerId(value: string): UpdateServerRequest;

  getInstanceSize(): GameServerSize;
  setInstanceSize(value: GameServerSize): UpdateServerRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateServerRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateServerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServerRequest): UpdateServerRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServerRequest;
  static deserializeBinaryFromReader(message: UpdateServerRequest, reader: jspb.BinaryReader): UpdateServerRequest;
}

export namespace UpdateServerRequest {
  export type AsObject = {
    serverId: string,
    instanceSize: GameServerSize,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateServerResponse extends jspb.Message {
  getServer(): GameServer | undefined;
  setServer(value?: GameServer): UpdateServerResponse;
  hasServer(): boolean;
  clearServer(): UpdateServerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServerResponse): UpdateServerResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServerResponse;
  static deserializeBinaryFromReader(message: UpdateServerResponse, reader: jspb.BinaryReader): UpdateServerResponse;
}

export namespace UpdateServerResponse {
  export type AsObject = {
    server?: GameServer.AsObject,
  }
}

export class CreateServerRequest extends jspb.Message {
  getInstanceSize(): GameServerSize;
  setInstanceSize(value: GameServerSize): CreateServerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServerRequest): CreateServerRequest.AsObject;
  static serializeBinaryToWriter(message: CreateServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServerRequest;
  static deserializeBinaryFromReader(message: CreateServerRequest, reader: jspb.BinaryReader): CreateServerRequest;
}

export namespace CreateServerRequest {
  export type AsObject = {
    instanceSize: GameServerSize,
  }
}

export class CreateServerResponse extends jspb.Message {
  getServerId(): string;
  setServerId(value: string): CreateServerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServerResponse): CreateServerResponse.AsObject;
  static serializeBinaryToWriter(message: CreateServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServerResponse;
  static deserializeBinaryFromReader(message: CreateServerResponse, reader: jspb.BinaryReader): CreateServerResponse;
}

export namespace CreateServerResponse {
  export type AsObject = {
    serverId: string,
  }
}

export class DeleteServerRequest extends jspb.Message {
  getServerId(): number;
  setServerId(value: number): DeleteServerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServerRequest): DeleteServerRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServerRequest;
  static deserializeBinaryFromReader(message: DeleteServerRequest, reader: jspb.BinaryReader): DeleteServerRequest;
}

export namespace DeleteServerRequest {
  export type AsObject = {
    serverId: number,
  }
}

export class GetServersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServersRequest): GetServersRequest.AsObject;
  static serializeBinaryToWriter(message: GetServersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServersRequest;
  static deserializeBinaryFromReader(message: GetServersRequest, reader: jspb.BinaryReader): GetServersRequest;
}

export namespace GetServersRequest {
  export type AsObject = {
  }
}

export class GetServersResponse extends jspb.Message {
  getServersList(): Array<GameServer>;
  setServersList(value: Array<GameServer>): GetServersResponse;
  clearServersList(): GetServersResponse;
  addServers(value?: GameServer, index?: number): GameServer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetServersResponse): GetServersResponse.AsObject;
  static serializeBinaryToWriter(message: GetServersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServersResponse;
  static deserializeBinaryFromReader(message: GetServersResponse, reader: jspb.BinaryReader): GetServersResponse;
}

export namespace GetServersResponse {
  export type AsObject = {
    serversList: Array<GameServer.AsObject>,
  }
}

export enum GameServerStatus { 
  UNKNOWN_STATUS = 0,
  PROVISIONING = 1,
  PAUSED = 2,
  ERRORED = 3,
  CONNECTABLE = 4,
  TERMINATED = 5,
}
export enum GameServerSize { 
  UNKNOWN_SIZE = 0,
  SMALL = 1,
}
