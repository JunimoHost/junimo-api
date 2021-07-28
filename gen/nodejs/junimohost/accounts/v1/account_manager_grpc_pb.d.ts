// package: junimohost.accounts.v1
// file: junimohost/accounts/v1/account_manager.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as junimohost_accounts_v1_account_manager_pb from "../../../junimohost/accounts/v1/account_manager_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IAccountServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createAccount: IAccountServiceService_ICreateAccount;
    deleteAccount: IAccountServiceService_IDeleteAccount;
}

interface IAccountServiceService_ICreateAccount extends grpc.MethodDefinition<junimohost_accounts_v1_account_manager_pb.CreateAccountRequest, junimohost_accounts_v1_account_manager_pb.CreateAccountResponse> {
    path: "/junimohost.accounts.v1.AccountService/CreateAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<junimohost_accounts_v1_account_manager_pb.CreateAccountRequest>;
    requestDeserialize: grpc.deserialize<junimohost_accounts_v1_account_manager_pb.CreateAccountRequest>;
    responseSerialize: grpc.serialize<junimohost_accounts_v1_account_manager_pb.CreateAccountResponse>;
    responseDeserialize: grpc.deserialize<junimohost_accounts_v1_account_manager_pb.CreateAccountResponse>;
}
interface IAccountServiceService_IDeleteAccount extends grpc.MethodDefinition<junimohost_accounts_v1_account_manager_pb.DeleteAccountRequest, google_protobuf_empty_pb.Empty> {
    path: "/junimohost.accounts.v1.AccountService/DeleteAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<junimohost_accounts_v1_account_manager_pb.DeleteAccountRequest>;
    requestDeserialize: grpc.deserialize<junimohost_accounts_v1_account_manager_pb.DeleteAccountRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const AccountServiceService: IAccountServiceService;

export interface IAccountServiceServer extends grpc.UntypedServiceImplementation {
    createAccount: grpc.handleUnaryCall<junimohost_accounts_v1_account_manager_pb.CreateAccountRequest, junimohost_accounts_v1_account_manager_pb.CreateAccountResponse>;
    deleteAccount: grpc.handleUnaryCall<junimohost_accounts_v1_account_manager_pb.DeleteAccountRequest, google_protobuf_empty_pb.Empty>;
}

export interface IAccountServiceClient {
    createAccount(request: junimohost_accounts_v1_account_manager_pb.CreateAccountRequest, callback: (error: grpc.ServiceError | null, response: junimohost_accounts_v1_account_manager_pb.CreateAccountResponse) => void): grpc.ClientUnaryCall;
    createAccount(request: junimohost_accounts_v1_account_manager_pb.CreateAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: junimohost_accounts_v1_account_manager_pb.CreateAccountResponse) => void): grpc.ClientUnaryCall;
    createAccount(request: junimohost_accounts_v1_account_manager_pb.CreateAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: junimohost_accounts_v1_account_manager_pb.CreateAccountResponse) => void): grpc.ClientUnaryCall;
    deleteAccount(request: junimohost_accounts_v1_account_manager_pb.DeleteAccountRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteAccount(request: junimohost_accounts_v1_account_manager_pb.DeleteAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteAccount(request: junimohost_accounts_v1_account_manager_pb.DeleteAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class AccountServiceClient extends grpc.Client implements IAccountServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createAccount(request: junimohost_accounts_v1_account_manager_pb.CreateAccountRequest, callback: (error: grpc.ServiceError | null, response: junimohost_accounts_v1_account_manager_pb.CreateAccountResponse) => void): grpc.ClientUnaryCall;
    public createAccount(request: junimohost_accounts_v1_account_manager_pb.CreateAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: junimohost_accounts_v1_account_manager_pb.CreateAccountResponse) => void): grpc.ClientUnaryCall;
    public createAccount(request: junimohost_accounts_v1_account_manager_pb.CreateAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: junimohost_accounts_v1_account_manager_pb.CreateAccountResponse) => void): grpc.ClientUnaryCall;
    public deleteAccount(request: junimohost_accounts_v1_account_manager_pb.DeleteAccountRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteAccount(request: junimohost_accounts_v1_account_manager_pb.DeleteAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteAccount(request: junimohost_accounts_v1_account_manager_pb.DeleteAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
