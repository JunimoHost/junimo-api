// package: junimohost.provisioner.v1
// file: junimohost/provisioner/v1/provisioner.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class ProvisionedServer extends jspb.Message { 
    getAdminAccountId(): number;
    setAdminAccountId(value: number): ProvisionedServer;
    getServerId(): number;
    setServerId(value: number): ProvisionedServer;
    getInstanceSize(): number;
    setInstanceSize(value: number): ProvisionedServer;
    getHostUri(): string;
    setHostUri(value: string): ProvisionedServer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProvisionedServer.AsObject;
    static toObject(includeInstance: boolean, msg: ProvisionedServer): ProvisionedServer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProvisionedServer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProvisionedServer;
    static deserializeBinaryFromReader(message: ProvisionedServer, reader: jspb.BinaryReader): ProvisionedServer;
}

export namespace ProvisionedServer {
    export type AsObject = {
        adminAccountId: number,
        serverId: number,
        instanceSize: number,
        hostUri: string,
    }
}

export class UpdateServerSizeRequest extends jspb.Message { 
    getServerId(): number;
    setServerId(value: number): UpdateServerSizeRequest;
    getInstanceSize(): number;
    setInstanceSize(value: number): UpdateServerSizeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateServerSizeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateServerSizeRequest): UpdateServerSizeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateServerSizeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateServerSizeRequest;
    static deserializeBinaryFromReader(message: UpdateServerSizeRequest, reader: jspb.BinaryReader): UpdateServerSizeRequest;
}

export namespace UpdateServerSizeRequest {
    export type AsObject = {
        serverId: number,
        instanceSize: number,
    }
}

export class UpdateServerSizeResponse extends jspb.Message { 

    hasServer(): boolean;
    clearServer(): void;
    getServer(): ProvisionedServer | undefined;
    setServer(value?: ProvisionedServer): UpdateServerSizeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateServerSizeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateServerSizeResponse): UpdateServerSizeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateServerSizeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateServerSizeResponse;
    static deserializeBinaryFromReader(message: UpdateServerSizeResponse, reader: jspb.BinaryReader): UpdateServerSizeResponse;
}

export namespace UpdateServerSizeResponse {
    export type AsObject = {
        server?: ProvisionedServer.AsObject,
    }
}

export class ProvisionServerRequest extends jspb.Message { 
    getAdminAccountId(): number;
    setAdminAccountId(value: number): ProvisionServerRequest;
    getInstanceSize(): number;
    setInstanceSize(value: number): ProvisionServerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProvisionServerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProvisionServerRequest): ProvisionServerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProvisionServerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProvisionServerRequest;
    static deserializeBinaryFromReader(message: ProvisionServerRequest, reader: jspb.BinaryReader): ProvisionServerRequest;
}

export namespace ProvisionServerRequest {
    export type AsObject = {
        adminAccountId: number,
        instanceSize: number,
    }
}

export class ProvisionServerResponse extends jspb.Message { 

    hasServer(): boolean;
    clearServer(): void;
    getServer(): ProvisionedServer | undefined;
    setServer(value?: ProvisionedServer): ProvisionServerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProvisionServerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ProvisionServerResponse): ProvisionServerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProvisionServerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProvisionServerResponse;
    static deserializeBinaryFromReader(message: ProvisionServerResponse, reader: jspb.BinaryReader): ProvisionServerResponse;
}

export namespace ProvisionServerResponse {
    export type AsObject = {
        server?: ProvisionedServer.AsObject,
    }
}

export class DeleteServerRequest extends jspb.Message { 
    getServerId(): number;
    setServerId(value: number): DeleteServerRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteServerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteServerRequest): DeleteServerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteServerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteServerRequest;
    static deserializeBinaryFromReader(message: DeleteServerRequest, reader: jspb.BinaryReader): DeleteServerRequest;
}

export namespace DeleteServerRequest {
    export type AsObject = {
        serverId: number,
    }
}

export class GetServersForAccountRequest extends jspb.Message { 
    getAccountId(): number;
    setAccountId(value: number): GetServersForAccountRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServersForAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetServersForAccountRequest): GetServersForAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServersForAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServersForAccountRequest;
    static deserializeBinaryFromReader(message: GetServersForAccountRequest, reader: jspb.BinaryReader): GetServersForAccountRequest;
}

export namespace GetServersForAccountRequest {
    export type AsObject = {
        accountId: number,
    }
}

export class GetServersForAccountResponse extends jspb.Message { 
    clearServersList(): void;
    getServersList(): Array<ProvisionedServer>;
    setServersList(value: Array<ProvisionedServer>): GetServersForAccountResponse;
    addServers(value?: ProvisionedServer, index?: number): ProvisionedServer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServersForAccountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetServersForAccountResponse): GetServersForAccountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServersForAccountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServersForAccountResponse;
    static deserializeBinaryFromReader(message: GetServersForAccountResponse, reader: jspb.BinaryReader): GetServersForAccountResponse;
}

export namespace GetServersForAccountResponse {
    export type AsObject = {
        serversList: Array<ProvisionedServer.AsObject>,
    }
}
