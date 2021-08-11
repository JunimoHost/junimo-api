// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package v1

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion7

// GameServerServiceClient is the client API for GameServerService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type GameServerServiceClient interface {
	// maybe need to return long running operation? idk how long this will take
	CreateServer(ctx context.Context, in *CreateServerRequest, opts ...grpc.CallOption) (GameServerService_CreateServerClient, error)
	DeleteServer(ctx context.Context, in *DeleteServerRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	GetServers(ctx context.Context, in *GetServersRequest, opts ...grpc.CallOption) (*GetServersResponse, error)
	UpdateServer(ctx context.Context, in *UpdateServerRequest, opts ...grpc.CallOption) (*UpdateServerResponse, error)
}

type gameServerServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewGameServerServiceClient(cc grpc.ClientConnInterface) GameServerServiceClient {
	return &gameServerServiceClient{cc}
}

func (c *gameServerServiceClient) CreateServer(ctx context.Context, in *CreateServerRequest, opts ...grpc.CallOption) (GameServerService_CreateServerClient, error) {
	stream, err := c.cc.NewStream(ctx, &_GameServerService_serviceDesc.Streams[0], "/junimohost.game_server.v1.GameServerService/CreateServer", opts...)
	if err != nil {
		return nil, err
	}
	x := &gameServerServiceCreateServerClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type GameServerService_CreateServerClient interface {
	Recv() (*CreateServerResponse, error)
	grpc.ClientStream
}

type gameServerServiceCreateServerClient struct {
	grpc.ClientStream
}

func (x *gameServerServiceCreateServerClient) Recv() (*CreateServerResponse, error) {
	m := new(CreateServerResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *gameServerServiceClient) DeleteServer(ctx context.Context, in *DeleteServerRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, "/junimohost.game_server.v1.GameServerService/DeleteServer", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameServerServiceClient) GetServers(ctx context.Context, in *GetServersRequest, opts ...grpc.CallOption) (*GetServersResponse, error) {
	out := new(GetServersResponse)
	err := c.cc.Invoke(ctx, "/junimohost.game_server.v1.GameServerService/GetServers", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *gameServerServiceClient) UpdateServer(ctx context.Context, in *UpdateServerRequest, opts ...grpc.CallOption) (*UpdateServerResponse, error) {
	out := new(UpdateServerResponse)
	err := c.cc.Invoke(ctx, "/junimohost.game_server.v1.GameServerService/UpdateServer", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// GameServerServiceServer is the server API for GameServerService service.
// All implementations must embed UnimplementedGameServerServiceServer
// for forward compatibility
type GameServerServiceServer interface {
	// maybe need to return long running operation? idk how long this will take
	CreateServer(*CreateServerRequest, GameServerService_CreateServerServer) error
	DeleteServer(context.Context, *DeleteServerRequest) (*emptypb.Empty, error)
	GetServers(context.Context, *GetServersRequest) (*GetServersResponse, error)
	UpdateServer(context.Context, *UpdateServerRequest) (*UpdateServerResponse, error)
	mustEmbedUnimplementedGameServerServiceServer()
}

// UnimplementedGameServerServiceServer must be embedded to have forward compatible implementations.
type UnimplementedGameServerServiceServer struct {
}

func (UnimplementedGameServerServiceServer) CreateServer(*CreateServerRequest, GameServerService_CreateServerServer) error {
	return status.Errorf(codes.Unimplemented, "method CreateServer not implemented")
}
func (UnimplementedGameServerServiceServer) DeleteServer(context.Context, *DeleteServerRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteServer not implemented")
}
func (UnimplementedGameServerServiceServer) GetServers(context.Context, *GetServersRequest) (*GetServersResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetServers not implemented")
}
func (UnimplementedGameServerServiceServer) UpdateServer(context.Context, *UpdateServerRequest) (*UpdateServerResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateServer not implemented")
}
func (UnimplementedGameServerServiceServer) mustEmbedUnimplementedGameServerServiceServer() {}

// UnsafeGameServerServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to GameServerServiceServer will
// result in compilation errors.
type UnsafeGameServerServiceServer interface {
	mustEmbedUnimplementedGameServerServiceServer()
}

func RegisterGameServerServiceServer(s grpc.ServiceRegistrar, srv GameServerServiceServer) {
	s.RegisterService(&_GameServerService_serviceDesc, srv)
}

func _GameServerService_CreateServer_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(CreateServerRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(GameServerServiceServer).CreateServer(m, &gameServerServiceCreateServerServer{stream})
}

type GameServerService_CreateServerServer interface {
	Send(*CreateServerResponse) error
	grpc.ServerStream
}

type gameServerServiceCreateServerServer struct {
	grpc.ServerStream
}

func (x *gameServerServiceCreateServerServer) Send(m *CreateServerResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _GameServerService_DeleteServer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteServerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServerServiceServer).DeleteServer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/junimohost.game_server.v1.GameServerService/DeleteServer",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServerServiceServer).DeleteServer(ctx, req.(*DeleteServerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GameServerService_GetServers_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetServersRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServerServiceServer).GetServers(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/junimohost.game_server.v1.GameServerService/GetServers",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServerServiceServer).GetServers(ctx, req.(*GetServersRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _GameServerService_UpdateServer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateServerRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GameServerServiceServer).UpdateServer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/junimohost.game_server.v1.GameServerService/UpdateServer",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GameServerServiceServer).UpdateServer(ctx, req.(*UpdateServerRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _GameServerService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "junimohost.game_server.v1.GameServerService",
	HandlerType: (*GameServerServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "DeleteServer",
			Handler:    _GameServerService_DeleteServer_Handler,
		},
		{
			MethodName: "GetServers",
			Handler:    _GameServerService_GetServers_Handler,
		},
		{
			MethodName: "UpdateServer",
			Handler:    _GameServerService_UpdateServer_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "CreateServer",
			Handler:       _GameServerService_CreateServer_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "junimohost/game_server/v1/game_server.proto",
}
