// package: junimohost.accounts.v1
// file: junimohost/accounts/v1/account_manager.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class CreateAccountRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): CreateAccountRequest;
    getEmail(): string;
    setEmail(value: string): CreateAccountRequest;
    getPassword(): string;
    setPassword(value: string): CreateAccountRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAccountRequest): CreateAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAccountRequest;
    static deserializeBinaryFromReader(message: CreateAccountRequest, reader: jspb.BinaryReader): CreateAccountRequest;
}

export namespace CreateAccountRequest {
    export type AsObject = {
        username: string,
        email: string,
        password: string,
    }
}

export class CreateAccountResponse extends jspb.Message { 
    getAccountId(): number;
    setAccountId(value: number): CreateAccountResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateAccountResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateAccountResponse): CreateAccountResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateAccountResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateAccountResponse;
    static deserializeBinaryFromReader(message: CreateAccountResponse, reader: jspb.BinaryReader): CreateAccountResponse;
}

export namespace CreateAccountResponse {
    export type AsObject = {
        accountId: number,
    }
}

export class DeleteAccountRequest extends jspb.Message { 
    getAccountId(): number;
    setAccountId(value: number): DeleteAccountRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteAccountRequest): DeleteAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteAccountRequest;
    static deserializeBinaryFromReader(message: DeleteAccountRequest, reader: jspb.BinaryReader): DeleteAccountRequest;
}

export namespace DeleteAccountRequest {
    export type AsObject = {
        accountId: number,
    }
}
