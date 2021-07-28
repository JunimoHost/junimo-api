# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [junimohost/accounts/v1/account_manager.proto](#junimohost/accounts/v1/account_manager.proto)
    - [CreateAccountRequest](#junimohost.accounts.v1.CreateAccountRequest)
    - [CreateAccountResponse](#junimohost.accounts.v1.CreateAccountResponse)
    - [DeleteAccountRequest](#junimohost.accounts.v1.DeleteAccountRequest)
  
    - [AccountService](#junimohost.accounts.v1.AccountService)
  
- [junimohost/provisioner/v1/provisioner.proto](#junimohost/provisioner/v1/provisioner.proto)
    - [DeleteServerRequest](#junimohost.provisioner.v1.DeleteServerRequest)
    - [GetServersForAccountRequest](#junimohost.provisioner.v1.GetServersForAccountRequest)
    - [GetServersForAccountResponse](#junimohost.provisioner.v1.GetServersForAccountResponse)
    - [ProvisionServerRequest](#junimohost.provisioner.v1.ProvisionServerRequest)
    - [ProvisionServerResponse](#junimohost.provisioner.v1.ProvisionServerResponse)
    - [ProvisionedServer](#junimohost.provisioner.v1.ProvisionedServer)
    - [UpdateServerSizeRequest](#junimohost.provisioner.v1.UpdateServerSizeRequest)
    - [UpdateServerSizeResponse](#junimohost.provisioner.v1.UpdateServerSizeResponse)
  
    - [ProvisionerService](#junimohost.provisioner.v1.ProvisionerService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="junimohost/accounts/v1/account_manager.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## junimohost/accounts/v1/account_manager.proto



<a name="junimohost.accounts.v1.CreateAccountRequest"></a>

### CreateAccountRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| username | [string](#string) |  |  |
| email | [string](#string) |  |  |
| password | [string](#string) |  |  |






<a name="junimohost.accounts.v1.CreateAccountResponse"></a>

### CreateAccountResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account_id | [int64](#int64) |  |  |






<a name="junimohost.accounts.v1.DeleteAccountRequest"></a>

### DeleteAccountRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account_id | [int64](#int64) |  |  |





 

 

 


<a name="junimohost.accounts.v1.AccountService"></a>

### AccountService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateAccount | [CreateAccountRequest](#junimohost.accounts.v1.CreateAccountRequest) | [CreateAccountResponse](#junimohost.accounts.v1.CreateAccountResponse) |  |
| DeleteAccount | [DeleteAccountRequest](#junimohost.accounts.v1.DeleteAccountRequest) | [.google.protobuf.Empty](#google.protobuf.Empty) |  |

 



<a name="junimohost/provisioner/v1/provisioner.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## junimohost/provisioner/v1/provisioner.proto



<a name="junimohost.provisioner.v1.DeleteServerRequest"></a>

### DeleteServerRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| server_id | [int64](#int64) |  |  |






<a name="junimohost.provisioner.v1.GetServersForAccountRequest"></a>

### GetServersForAccountRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account_id | [int64](#int64) |  |  |






<a name="junimohost.provisioner.v1.GetServersForAccountResponse"></a>

### GetServersForAccountResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| servers | [ProvisionedServer](#junimohost.provisioner.v1.ProvisionedServer) | repeated |  |






<a name="junimohost.provisioner.v1.ProvisionServerRequest"></a>

### ProvisionServerRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin_account_id | [int64](#int64) |  |  |
| instance_size | [int32](#int32) |  |  |






<a name="junimohost.provisioner.v1.ProvisionServerResponse"></a>

### ProvisionServerResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| server | [ProvisionedServer](#junimohost.provisioner.v1.ProvisionedServer) |  |  |






<a name="junimohost.provisioner.v1.ProvisionedServer"></a>

### ProvisionedServer



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| admin_account_id | [int64](#int64) |  |  |
| server_id | [int64](#int64) |  |  |
| instance_size | [int32](#int32) |  |  |
| host_uri | [string](#string) |  |  |






<a name="junimohost.provisioner.v1.UpdateServerSizeRequest"></a>

### UpdateServerSizeRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| server_id | [int64](#int64) |  |  |
| instance_size | [int32](#int32) |  | maybe keep this and change to be a general update if more fields are added that need changed google.protobuf.FieldMask update_mask = 3; |






<a name="junimohost.provisioner.v1.UpdateServerSizeResponse"></a>

### UpdateServerSizeResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| server | [ProvisionedServer](#junimohost.provisioner.v1.ProvisionedServer) |  |  |





 

 

 


<a name="junimohost.provisioner.v1.ProvisionerService"></a>

### ProvisionerService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ProvisionServer | [ProvisionServerRequest](#junimohost.provisioner.v1.ProvisionServerRequest) | [ProvisionServerResponse](#junimohost.provisioner.v1.ProvisionServerResponse) | maybe need to return long running operation? idk how long this will take |
| DeleteServer | [DeleteServerRequest](#junimohost.provisioner.v1.DeleteServerRequest) | [.google.protobuf.Empty](#google.protobuf.Empty) |  |
| GetServersForAccount | [GetServersForAccountRequest](#junimohost.provisioner.v1.GetServersForAccountRequest) | [GetServersForAccountResponse](#junimohost.provisioner.v1.GetServersForAccountResponse) |  |
| UpdateServerSize | [UpdateServerSizeRequest](#junimohost.provisioner.v1.UpdateServerSizeRequest) | [UpdateServerSizeResponse](#junimohost.provisioner.v1.UpdateServerSizeResponse) |  |

 



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

