# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [junimohost/game_server/v1/game_server.proto](#junimohost/game_server/v1/game_server.proto)
    - [CreateServerRequest](#junimohost.game_server.v1.CreateServerRequest)
    - [CreateServerResponse](#junimohost.game_server.v1.CreateServerResponse)
    - [DeleteServerRequest](#junimohost.game_server.v1.DeleteServerRequest)
    - [GameServer](#junimohost.game_server.v1.GameServer)
    - [GetServersRequest](#junimohost.game_server.v1.GetServersRequest)
    - [GetServersResponse](#junimohost.game_server.v1.GetServersResponse)
    - [UpdateServerRequest](#junimohost.game_server.v1.UpdateServerRequest)
    - [UpdateServerResponse](#junimohost.game_server.v1.UpdateServerResponse)
  
    - [GameServerSize](#junimohost.game_server.v1.GameServerSize)
    - [GameServerStatus](#junimohost.game_server.v1.GameServerStatus)
  
    - [GameServerService](#junimohost.game_server.v1.GameServerService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="junimohost/game_server/v1/game_server.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## junimohost/game_server/v1/game_server.proto



<a name="junimohost.game_server.v1.CreateServerRequest"></a>

### CreateServerRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| instance_size | [GameServerSize](#junimohost.game_server.v1.GameServerSize) |  |  |
| server_name | [string](#string) |  |  |






<a name="junimohost.game_server.v1.CreateServerResponse"></a>

### CreateServerResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| server_id | [string](#string) |  |  |






<a name="junimohost.game_server.v1.DeleteServerRequest"></a>

### DeleteServerRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| server_id | [int64](#int64) |  |  |






<a name="junimohost.game_server.v1.GameServer"></a>

### GameServer



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| server_id | [string](#string) |  |  |
| instance_size | [GameServerSize](#junimohost.game_server.v1.GameServerSize) |  |  |
| host_uri | [string](#string) |  |  |
| server_name | [string](#string) |  |  |
| status | [GameServerStatus](#junimohost.game_server.v1.GameServerStatus) |  |  |






<a name="junimohost.game_server.v1.GetServersRequest"></a>

### GetServersRequest







<a name="junimohost.game_server.v1.GetServersResponse"></a>

### GetServersResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| servers | [GameServer](#junimohost.game_server.v1.GameServer) | repeated |  |






<a name="junimohost.game_server.v1.UpdateServerRequest"></a>

### UpdateServerRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| server_id | [string](#string) |  |  |
| instance_size | [GameServerSize](#junimohost.game_server.v1.GameServerSize) |  |  |
| update_mask | [google.protobuf.FieldMask](#google.protobuf.FieldMask) |  |  |






<a name="junimohost.game_server.v1.UpdateServerResponse"></a>

### UpdateServerResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| server | [GameServer](#junimohost.game_server.v1.GameServer) |  |  |





 


<a name="junimohost.game_server.v1.GameServerSize"></a>

### GameServerSize


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN_SIZE | 0 |  |
| SMALL | 1 |  |



<a name="junimohost.game_server.v1.GameServerStatus"></a>

### GameServerStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN_STATUS | 0 |  |
| PROVISIONING | 1 |  |
| PAUSED | 2 |  |
| ERRORED | 3 |  |
| CONNECTABLE | 4 |  |
| TERMINATED | 5 |  |


 

 


<a name="junimohost.game_server.v1.GameServerService"></a>

### GameServerService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateServer | [CreateServerRequest](#junimohost.game_server.v1.CreateServerRequest) | [CreateServerResponse](#junimohost.game_server.v1.CreateServerResponse) | maybe need to return long running operation? idk how long this will take |
| DeleteServer | [DeleteServerRequest](#junimohost.game_server.v1.DeleteServerRequest) | [.google.protobuf.Empty](#google.protobuf.Empty) |  |
| GetServers | [GetServersRequest](#junimohost.game_server.v1.GetServersRequest) | [GetServersResponse](#junimohost.game_server.v1.GetServersResponse) |  |
| UpdateServer | [UpdateServerRequest](#junimohost.game_server.v1.UpdateServerRequest) | [UpdateServerResponse](#junimohost.game_server.v1.UpdateServerResponse) |  |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

