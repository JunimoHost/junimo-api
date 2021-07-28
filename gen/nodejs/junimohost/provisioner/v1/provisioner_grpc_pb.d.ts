// package: junimohost.provisioner.v1
// file: junimohost/provisioner/v1/provisioner.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as junimohost_provisioner_v1_provisioner_pb from "../../../junimohost/provisioner/v1/provisioner_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

interface IProvisionerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    provisionServer: IProvisionerServiceService_IProvisionServer;
    deleteServer: IProvisionerServiceService_IDeleteServer;
    getServersForAccount: IProvisionerServiceService_IGetServersForAccount;
    updateServerSize: IProvisionerServiceService_IUpdateServerSize;
}

interface IProvisionerServiceService_IProvisionServer extends grpc.MethodDefinition<junimohost_provisioner_v1_provisioner_pb.ProvisionServerRequest, junimohost_provisioner_v1_provisioner_pb.ProvisionServerResponse> {
    path: "/junimohost.provisioner.v1.ProvisionerService/ProvisionServer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<junimohost_provisioner_v1_provisioner_pb.ProvisionServerRequest>;
    requestDeserialize: grpc.deserialize<junimohost_provisioner_v1_provisioner_pb.ProvisionServerRequest>;
    responseSerialize: grpc.serialize<junimohost_provisioner_v1_provisioner_pb.ProvisionServerResponse>;
    responseDeserialize: grpc.deserialize<junimohost_provisioner_v1_provisioner_pb.ProvisionServerResponse>;
}
interface IProvisionerServiceService_IDeleteServer extends grpc.MethodDefinition<junimohost_provisioner_v1_provisioner_pb.DeleteServerRequest, google_protobuf_empty_pb.Empty> {
    path: "/junimohost.provisioner.v1.ProvisionerService/DeleteServer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<junimohost_provisioner_v1_provisioner_pb.DeleteServerRequest>;
    requestDeserialize: grpc.deserialize<junimohost_provisioner_v1_provisioner_pb.DeleteServerRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IProvisionerServiceService_IGetServersForAccount extends grpc.MethodDefinition<junimohost_provisioner_v1_provisioner_pb.GetServersForAccountRequest, junimohost_provisioner_v1_provisioner_pb.GetServersForAccountResponse> {
    path: "/junimohost.provisioner.v1.ProvisionerService/GetServersForAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<junimohost_provisioner_v1_provisioner_pb.GetServersForAccountRequest>;
    requestDeserialize: grpc.deserialize<junimohost_provisioner_v1_provisioner_pb.GetServersForAccountRequest>;
    responseSerialize: grpc.serialize<junimohost_provisioner_v1_provisioner_pb.GetServersForAccountResponse>;
    responseDeserialize: grpc.deserialize<junimohost_provisioner_v1_provisioner_pb.GetServersForAccountResponse>;
}
interface IProvisionerServiceService_IUpdateServerSize extends grpc.MethodDefinition<junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeRequest, junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeResponse> {
    path: "/junimohost.provisioner.v1.ProvisionerService/UpdateServerSize";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeRequest>;
    requestDeserialize: grpc.deserialize<junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeRequest>;
    responseSerialize: grpc.serialize<junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeResponse>;
    responseDeserialize: grpc.deserialize<junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeResponse>;
}

export const ProvisionerServiceService: IProvisionerServiceService;

export interface IProvisionerServiceServer extends grpc.UntypedServiceImplementation {
    provisionServer: grpc.handleUnaryCall<junimohost_provisioner_v1_provisioner_pb.ProvisionServerRequest, junimohost_provisioner_v1_provisioner_pb.ProvisionServerResponse>;
    deleteServer: grpc.handleUnaryCall<junimohost_provisioner_v1_provisioner_pb.DeleteServerRequest, google_protobuf_empty_pb.Empty>;
    getServersForAccount: grpc.handleUnaryCall<junimohost_provisioner_v1_provisioner_pb.GetServersForAccountRequest, junimohost_provisioner_v1_provisioner_pb.GetServersForAccountResponse>;
    updateServerSize: grpc.handleUnaryCall<junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeRequest, junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeResponse>;
}

export interface IProvisionerServiceClient {
    provisionServer(request: junimohost_provisioner_v1_provisioner_pb.ProvisionServerRequest, callback: (error: grpc.ServiceError | null, response: junimohost_provisioner_v1_provisioner_pb.ProvisionServerResponse) => void): grpc.ClientUnaryCall;
    provisionServer(request: junimohost_provisioner_v1_provisioner_pb.ProvisionServerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: junimohost_provisioner_v1_provisioner_pb.ProvisionServerResponse) => void): grpc.ClientUnaryCall;
    provisionServer(request: junimohost_provisioner_v1_provisioner_pb.ProvisionServerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: junimohost_provisioner_v1_provisioner_pb.ProvisionServerResponse) => void): grpc.ClientUnaryCall;
    deleteServer(request: junimohost_provisioner_v1_provisioner_pb.DeleteServerRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteServer(request: junimohost_provisioner_v1_provisioner_pb.DeleteServerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteServer(request: junimohost_provisioner_v1_provisioner_pb.DeleteServerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getServersForAccount(request: junimohost_provisioner_v1_provisioner_pb.GetServersForAccountRequest, callback: (error: grpc.ServiceError | null, response: junimohost_provisioner_v1_provisioner_pb.GetServersForAccountResponse) => void): grpc.ClientUnaryCall;
    getServersForAccount(request: junimohost_provisioner_v1_provisioner_pb.GetServersForAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: junimohost_provisioner_v1_provisioner_pb.GetServersForAccountResponse) => void): grpc.ClientUnaryCall;
    getServersForAccount(request: junimohost_provisioner_v1_provisioner_pb.GetServersForAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: junimohost_provisioner_v1_provisioner_pb.GetServersForAccountResponse) => void): grpc.ClientUnaryCall;
    updateServerSize(request: junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeRequest, callback: (error: grpc.ServiceError | null, response: junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeResponse) => void): grpc.ClientUnaryCall;
    updateServerSize(request: junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeResponse) => void): grpc.ClientUnaryCall;
    updateServerSize(request: junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeResponse) => void): grpc.ClientUnaryCall;
}

export class ProvisionerServiceClient extends grpc.Client implements IProvisionerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public provisionServer(request: junimohost_provisioner_v1_provisioner_pb.ProvisionServerRequest, callback: (error: grpc.ServiceError | null, response: junimohost_provisioner_v1_provisioner_pb.ProvisionServerResponse) => void): grpc.ClientUnaryCall;
    public provisionServer(request: junimohost_provisioner_v1_provisioner_pb.ProvisionServerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: junimohost_provisioner_v1_provisioner_pb.ProvisionServerResponse) => void): grpc.ClientUnaryCall;
    public provisionServer(request: junimohost_provisioner_v1_provisioner_pb.ProvisionServerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: junimohost_provisioner_v1_provisioner_pb.ProvisionServerResponse) => void): grpc.ClientUnaryCall;
    public deleteServer(request: junimohost_provisioner_v1_provisioner_pb.DeleteServerRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteServer(request: junimohost_provisioner_v1_provisioner_pb.DeleteServerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteServer(request: junimohost_provisioner_v1_provisioner_pb.DeleteServerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getServersForAccount(request: junimohost_provisioner_v1_provisioner_pb.GetServersForAccountRequest, callback: (error: grpc.ServiceError | null, response: junimohost_provisioner_v1_provisioner_pb.GetServersForAccountResponse) => void): grpc.ClientUnaryCall;
    public getServersForAccount(request: junimohost_provisioner_v1_provisioner_pb.GetServersForAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: junimohost_provisioner_v1_provisioner_pb.GetServersForAccountResponse) => void): grpc.ClientUnaryCall;
    public getServersForAccount(request: junimohost_provisioner_v1_provisioner_pb.GetServersForAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: junimohost_provisioner_v1_provisioner_pb.GetServersForAccountResponse) => void): grpc.ClientUnaryCall;
    public updateServerSize(request: junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeRequest, callback: (error: grpc.ServiceError | null, response: junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeResponse) => void): grpc.ClientUnaryCall;
    public updateServerSize(request: junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeResponse) => void): grpc.ClientUnaryCall;
    public updateServerSize(request: junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: junimohost_provisioner_v1_provisioner_pb.UpdateServerSizeResponse) => void): grpc.ClientUnaryCall;
}
