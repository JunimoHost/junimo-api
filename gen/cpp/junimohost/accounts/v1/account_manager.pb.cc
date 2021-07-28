// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: junimohost/accounts/v1/account_manager.proto

#include "junimohost/accounts/v1/account_manager.pb.h"

#include <algorithm>

#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/extension_set.h>
#include <google/protobuf/wire_format_lite.h>
#include <google/protobuf/descriptor.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/reflection_ops.h>
#include <google/protobuf/wire_format.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
namespace junimohost {
namespace accounts {
namespace v1 {
class CreateAccountRequestDefaultTypeInternal {
 public:
  ::PROTOBUF_NAMESPACE_ID::internal::ExplicitlyConstructed<CreateAccountRequest> _instance;
} _CreateAccountRequest_default_instance_;
class CreateAccountResponseDefaultTypeInternal {
 public:
  ::PROTOBUF_NAMESPACE_ID::internal::ExplicitlyConstructed<CreateAccountResponse> _instance;
} _CreateAccountResponse_default_instance_;
class DeleteAccountRequestDefaultTypeInternal {
 public:
  ::PROTOBUF_NAMESPACE_ID::internal::ExplicitlyConstructed<DeleteAccountRequest> _instance;
} _DeleteAccountRequest_default_instance_;
}  // namespace v1
}  // namespace accounts
}  // namespace junimohost
static void InitDefaultsscc_info_CreateAccountRequest_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::junimohost::accounts::v1::_CreateAccountRequest_default_instance_;
    new (ptr) ::junimohost::accounts::v1::CreateAccountRequest();
    ::PROTOBUF_NAMESPACE_ID::internal::OnShutdownDestroyMessage(ptr);
  }
  ::junimohost::accounts::v1::CreateAccountRequest::InitAsDefaultInstance();
}

::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<0> scc_info_CreateAccountRequest_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto =
    {{ATOMIC_VAR_INIT(::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase::kUninitialized), 0, 0, InitDefaultsscc_info_CreateAccountRequest_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto}, {}};

static void InitDefaultsscc_info_CreateAccountResponse_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::junimohost::accounts::v1::_CreateAccountResponse_default_instance_;
    new (ptr) ::junimohost::accounts::v1::CreateAccountResponse();
    ::PROTOBUF_NAMESPACE_ID::internal::OnShutdownDestroyMessage(ptr);
  }
  ::junimohost::accounts::v1::CreateAccountResponse::InitAsDefaultInstance();
}

::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<0> scc_info_CreateAccountResponse_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto =
    {{ATOMIC_VAR_INIT(::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase::kUninitialized), 0, 0, InitDefaultsscc_info_CreateAccountResponse_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto}, {}};

static void InitDefaultsscc_info_DeleteAccountRequest_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::junimohost::accounts::v1::_DeleteAccountRequest_default_instance_;
    new (ptr) ::junimohost::accounts::v1::DeleteAccountRequest();
    ::PROTOBUF_NAMESPACE_ID::internal::OnShutdownDestroyMessage(ptr);
  }
  ::junimohost::accounts::v1::DeleteAccountRequest::InitAsDefaultInstance();
}

::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<0> scc_info_DeleteAccountRequest_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto =
    {{ATOMIC_VAR_INIT(::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase::kUninitialized), 0, 0, InitDefaultsscc_info_DeleteAccountRequest_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto}, {}};

static ::PROTOBUF_NAMESPACE_ID::Metadata file_level_metadata_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto[3];
static constexpr ::PROTOBUF_NAMESPACE_ID::EnumDescriptor const** file_level_enum_descriptors_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto = nullptr;
static constexpr ::PROTOBUF_NAMESPACE_ID::ServiceDescriptor const** file_level_service_descriptors_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto = nullptr;

const ::PROTOBUF_NAMESPACE_ID::uint32 TableStruct_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::junimohost::accounts::v1::CreateAccountRequest, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::junimohost::accounts::v1::CreateAccountRequest, username_),
  PROTOBUF_FIELD_OFFSET(::junimohost::accounts::v1::CreateAccountRequest, email_),
  PROTOBUF_FIELD_OFFSET(::junimohost::accounts::v1::CreateAccountRequest, password_),
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::junimohost::accounts::v1::CreateAccountResponse, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::junimohost::accounts::v1::CreateAccountResponse, account_id_),
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::junimohost::accounts::v1::DeleteAccountRequest, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::junimohost::accounts::v1::DeleteAccountRequest, account_id_),
};
static const ::PROTOBUF_NAMESPACE_ID::internal::MigrationSchema schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::junimohost::accounts::v1::CreateAccountRequest)},
  { 8, -1, sizeof(::junimohost::accounts::v1::CreateAccountResponse)},
  { 14, -1, sizeof(::junimohost::accounts::v1::DeleteAccountRequest)},
};

static ::PROTOBUF_NAMESPACE_ID::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::junimohost::accounts::v1::_CreateAccountRequest_default_instance_),
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::junimohost::accounts::v1::_CreateAccountResponse_default_instance_),
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::junimohost::accounts::v1::_DeleteAccountRequest_default_instance_),
};

const char descriptor_table_protodef_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) =
  "\n,junimohost/accounts/v1/account_manager"
  ".proto\022\026junimohost.accounts.v1\032\034google/a"
  "pi/annotations.proto\032\033google/protobuf/em"
  "pty.proto\"d\n\024CreateAccountRequest\022\032\n\010use"
  "rname\030\001 \001(\tR\010username\022\024\n\005email\030\002 \001(\tR\005em"
  "ail\022\032\n\010password\030\003 \001(\tR\010password\"6\n\025Creat"
  "eAccountResponse\022\035\n\naccount_id\030\001 \001(\003R\tac"
  "countId\"5\n\024DeleteAccountRequest\022\035\n\naccou"
  "nt_id\030\001 \001(\003R\taccountId2\217\002\n\016AccountServic"
  "e\022\202\001\n\rCreateAccount\022,.junimohost.account"
  "s.v1.CreateAccountRequest\032-.junimohost.a"
  "ccounts.v1.CreateAccountResponse\"\024\202\323\344\223\002\016"
  "\"\014/v1/accounts\022x\n\rDeleteAccount\022,.junimo"
  "host.accounts.v1.DeleteAccountRequest\032\026."
  "google.protobuf.Empty\"!\202\323\344\223\002\033*\031/v1/accou"
  "nts/{account_id}B@Z>github.com/junimohos"
  "t/junimo-api/gen/go/junimohost/accounts/"
  "v1b\006proto3"
  ;
static const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable*const descriptor_table_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto_deps[2] = {
  &::descriptor_table_google_2fapi_2fannotations_2eproto,
  &::descriptor_table_google_2fprotobuf_2fempty_2eproto,
};
static ::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase*const descriptor_table_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto_sccs[3] = {
  &scc_info_CreateAccountRequest_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto.base,
  &scc_info_CreateAccountResponse_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto.base,
  &scc_info_DeleteAccountRequest_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto.base,
};
static ::PROTOBUF_NAMESPACE_ID::internal::once_flag descriptor_table_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto_once;
const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto = {
  false, false, descriptor_table_protodef_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto, "junimohost/accounts/v1/account_manager.proto", 690,
  &descriptor_table_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto_once, descriptor_table_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto_sccs, descriptor_table_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto_deps, 3, 2,
  schemas, file_default_instances, TableStruct_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto::offsets,
  file_level_metadata_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto, 3, file_level_enum_descriptors_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto, file_level_service_descriptors_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto,
};

// Force running AddDescriptors() at dynamic initialization time.
static bool dynamic_init_dummy_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto = (static_cast<void>(::PROTOBUF_NAMESPACE_ID::internal::AddDescriptors(&descriptor_table_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto)), true);
namespace junimohost {
namespace accounts {
namespace v1 {

// ===================================================================

void CreateAccountRequest::InitAsDefaultInstance() {
}
class CreateAccountRequest::_Internal {
 public:
};

CreateAccountRequest::CreateAccountRequest(::PROTOBUF_NAMESPACE_ID::Arena* arena)
  : ::PROTOBUF_NAMESPACE_ID::Message(arena) {
  SharedCtor();
  RegisterArenaDtor(arena);
  // @@protoc_insertion_point(arena_constructor:junimohost.accounts.v1.CreateAccountRequest)
}
CreateAccountRequest::CreateAccountRequest(const CreateAccountRequest& from)
  : ::PROTOBUF_NAMESPACE_ID::Message() {
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  username_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_username().empty()) {
    username_.Set(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from._internal_username(),
      GetArena());
  }
  email_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_email().empty()) {
    email_.Set(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from._internal_email(),
      GetArena());
  }
  password_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_password().empty()) {
    password_.Set(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from._internal_password(),
      GetArena());
  }
  // @@protoc_insertion_point(copy_constructor:junimohost.accounts.v1.CreateAccountRequest)
}

void CreateAccountRequest::SharedCtor() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&scc_info_CreateAccountRequest_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto.base);
  username_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  email_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  password_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}

CreateAccountRequest::~CreateAccountRequest() {
  // @@protoc_insertion_point(destructor:junimohost.accounts.v1.CreateAccountRequest)
  SharedDtor();
  _internal_metadata_.Delete<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

void CreateAccountRequest::SharedDtor() {
  GOOGLE_DCHECK(GetArena() == nullptr);
  username_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  email_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  password_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}

void CreateAccountRequest::ArenaDtor(void* object) {
  CreateAccountRequest* _this = reinterpret_cast< CreateAccountRequest* >(object);
  (void)_this;
}
void CreateAccountRequest::RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena*) {
}
void CreateAccountRequest::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const CreateAccountRequest& CreateAccountRequest::default_instance() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&::scc_info_CreateAccountRequest_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto.base);
  return *internal_default_instance();
}


void CreateAccountRequest::Clear() {
// @@protoc_insertion_point(message_clear_start:junimohost.accounts.v1.CreateAccountRequest)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  username_.ClearToEmpty(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArena());
  email_.ClearToEmpty(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArena());
  password_.ClearToEmpty(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArena());
  _internal_metadata_.Clear<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

const char* CreateAccountRequest::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  ::PROTOBUF_NAMESPACE_ID::Arena* arena = GetArena(); (void)arena;
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    CHK_(ptr);
    switch (tag >> 3) {
      // string username = 1[json_name = "username"];
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 10)) {
          auto str = _internal_mutable_username();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "junimohost.accounts.v1.CreateAccountRequest.username"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // string email = 2[json_name = "email"];
      case 2:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 18)) {
          auto str = _internal_mutable_email();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "junimohost.accounts.v1.CreateAccountRequest.email"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // string password = 3[json_name = "password"];
      case 3:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 26)) {
          auto str = _internal_mutable_password();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "junimohost.accounts.v1.CreateAccountRequest.password"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      default: {
      handle_unusual:
        if ((tag & 7) == 4 || tag == 0) {
          ctx->SetLastTag(tag);
          goto success;
        }
        ptr = UnknownFieldParse(tag,
            _internal_metadata_.mutable_unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(),
            ptr, ctx);
        CHK_(ptr != nullptr);
        continue;
      }
    }  // switch
  }  // while
success:
  return ptr;
failure:
  ptr = nullptr;
  goto success;
#undef CHK_
}

::PROTOBUF_NAMESPACE_ID::uint8* CreateAccountRequest::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:junimohost.accounts.v1.CreateAccountRequest)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // string username = 1[json_name = "username"];
  if (this->username().size() > 0) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_username().data(), static_cast<int>(this->_internal_username().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "junimohost.accounts.v1.CreateAccountRequest.username");
    target = stream->WriteStringMaybeAliased(
        1, this->_internal_username(), target);
  }

  // string email = 2[json_name = "email"];
  if (this->email().size() > 0) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_email().data(), static_cast<int>(this->_internal_email().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "junimohost.accounts.v1.CreateAccountRequest.email");
    target = stream->WriteStringMaybeAliased(
        2, this->_internal_email(), target);
  }

  // string password = 3[json_name = "password"];
  if (this->password().size() > 0) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_password().data(), static_cast<int>(this->_internal_password().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "junimohost.accounts.v1.CreateAccountRequest.password");
    target = stream->WriteStringMaybeAliased(
        3, this->_internal_password(), target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(::PROTOBUF_NAMESPACE_ID::UnknownFieldSet::default_instance), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:junimohost.accounts.v1.CreateAccountRequest)
  return target;
}

size_t CreateAccountRequest::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:junimohost.accounts.v1.CreateAccountRequest)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // string username = 1[json_name = "username"];
  if (this->username().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_username());
  }

  // string email = 2[json_name = "email"];
  if (this->email().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_email());
  }

  // string password = 3[json_name = "password"];
  if (this->password().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_password());
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void CreateAccountRequest::MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:junimohost.accounts.v1.CreateAccountRequest)
  GOOGLE_DCHECK_NE(&from, this);
  const CreateAccountRequest* source =
      ::PROTOBUF_NAMESPACE_ID::DynamicCastToGenerated<CreateAccountRequest>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:junimohost.accounts.v1.CreateAccountRequest)
    ::PROTOBUF_NAMESPACE_ID::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:junimohost.accounts.v1.CreateAccountRequest)
    MergeFrom(*source);
  }
}

void CreateAccountRequest::MergeFrom(const CreateAccountRequest& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:junimohost.accounts.v1.CreateAccountRequest)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (from.username().size() > 0) {
    _internal_set_username(from._internal_username());
  }
  if (from.email().size() > 0) {
    _internal_set_email(from._internal_email());
  }
  if (from.password().size() > 0) {
    _internal_set_password(from._internal_password());
  }
}

void CreateAccountRequest::CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:junimohost.accounts.v1.CreateAccountRequest)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void CreateAccountRequest::CopyFrom(const CreateAccountRequest& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:junimohost.accounts.v1.CreateAccountRequest)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool CreateAccountRequest::IsInitialized() const {
  return true;
}

void CreateAccountRequest::InternalSwap(CreateAccountRequest* other) {
  using std::swap;
  _internal_metadata_.Swap<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(&other->_internal_metadata_);
  username_.Swap(&other->username_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArena());
  email_.Swap(&other->email_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArena());
  password_.Swap(&other->password_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArena());
}

::PROTOBUF_NAMESPACE_ID::Metadata CreateAccountRequest::GetMetadata() const {
  return GetMetadataStatic();
}


// ===================================================================

void CreateAccountResponse::InitAsDefaultInstance() {
}
class CreateAccountResponse::_Internal {
 public:
};

CreateAccountResponse::CreateAccountResponse(::PROTOBUF_NAMESPACE_ID::Arena* arena)
  : ::PROTOBUF_NAMESPACE_ID::Message(arena) {
  SharedCtor();
  RegisterArenaDtor(arena);
  // @@protoc_insertion_point(arena_constructor:junimohost.accounts.v1.CreateAccountResponse)
}
CreateAccountResponse::CreateAccountResponse(const CreateAccountResponse& from)
  : ::PROTOBUF_NAMESPACE_ID::Message() {
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  account_id_ = from.account_id_;
  // @@protoc_insertion_point(copy_constructor:junimohost.accounts.v1.CreateAccountResponse)
}

void CreateAccountResponse::SharedCtor() {
  account_id_ = PROTOBUF_LONGLONG(0);
}

CreateAccountResponse::~CreateAccountResponse() {
  // @@protoc_insertion_point(destructor:junimohost.accounts.v1.CreateAccountResponse)
  SharedDtor();
  _internal_metadata_.Delete<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

void CreateAccountResponse::SharedDtor() {
  GOOGLE_DCHECK(GetArena() == nullptr);
}

void CreateAccountResponse::ArenaDtor(void* object) {
  CreateAccountResponse* _this = reinterpret_cast< CreateAccountResponse* >(object);
  (void)_this;
}
void CreateAccountResponse::RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena*) {
}
void CreateAccountResponse::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const CreateAccountResponse& CreateAccountResponse::default_instance() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&::scc_info_CreateAccountResponse_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto.base);
  return *internal_default_instance();
}


void CreateAccountResponse::Clear() {
// @@protoc_insertion_point(message_clear_start:junimohost.accounts.v1.CreateAccountResponse)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  account_id_ = PROTOBUF_LONGLONG(0);
  _internal_metadata_.Clear<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

const char* CreateAccountResponse::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  ::PROTOBUF_NAMESPACE_ID::Arena* arena = GetArena(); (void)arena;
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    CHK_(ptr);
    switch (tag >> 3) {
      // int64 account_id = 1[json_name = "accountId"];
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 8)) {
          account_id_ = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint64(&ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      default: {
      handle_unusual:
        if ((tag & 7) == 4 || tag == 0) {
          ctx->SetLastTag(tag);
          goto success;
        }
        ptr = UnknownFieldParse(tag,
            _internal_metadata_.mutable_unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(),
            ptr, ctx);
        CHK_(ptr != nullptr);
        continue;
      }
    }  // switch
  }  // while
success:
  return ptr;
failure:
  ptr = nullptr;
  goto success;
#undef CHK_
}

::PROTOBUF_NAMESPACE_ID::uint8* CreateAccountResponse::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:junimohost.accounts.v1.CreateAccountResponse)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // int64 account_id = 1[json_name = "accountId"];
  if (this->account_id() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteInt64ToArray(1, this->_internal_account_id(), target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(::PROTOBUF_NAMESPACE_ID::UnknownFieldSet::default_instance), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:junimohost.accounts.v1.CreateAccountResponse)
  return target;
}

size_t CreateAccountResponse::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:junimohost.accounts.v1.CreateAccountResponse)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // int64 account_id = 1[json_name = "accountId"];
  if (this->account_id() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::Int64Size(
        this->_internal_account_id());
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void CreateAccountResponse::MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:junimohost.accounts.v1.CreateAccountResponse)
  GOOGLE_DCHECK_NE(&from, this);
  const CreateAccountResponse* source =
      ::PROTOBUF_NAMESPACE_ID::DynamicCastToGenerated<CreateAccountResponse>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:junimohost.accounts.v1.CreateAccountResponse)
    ::PROTOBUF_NAMESPACE_ID::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:junimohost.accounts.v1.CreateAccountResponse)
    MergeFrom(*source);
  }
}

void CreateAccountResponse::MergeFrom(const CreateAccountResponse& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:junimohost.accounts.v1.CreateAccountResponse)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (from.account_id() != 0) {
    _internal_set_account_id(from._internal_account_id());
  }
}

void CreateAccountResponse::CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:junimohost.accounts.v1.CreateAccountResponse)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void CreateAccountResponse::CopyFrom(const CreateAccountResponse& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:junimohost.accounts.v1.CreateAccountResponse)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool CreateAccountResponse::IsInitialized() const {
  return true;
}

void CreateAccountResponse::InternalSwap(CreateAccountResponse* other) {
  using std::swap;
  _internal_metadata_.Swap<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(&other->_internal_metadata_);
  swap(account_id_, other->account_id_);
}

::PROTOBUF_NAMESPACE_ID::Metadata CreateAccountResponse::GetMetadata() const {
  return GetMetadataStatic();
}


// ===================================================================

void DeleteAccountRequest::InitAsDefaultInstance() {
}
class DeleteAccountRequest::_Internal {
 public:
};

DeleteAccountRequest::DeleteAccountRequest(::PROTOBUF_NAMESPACE_ID::Arena* arena)
  : ::PROTOBUF_NAMESPACE_ID::Message(arena) {
  SharedCtor();
  RegisterArenaDtor(arena);
  // @@protoc_insertion_point(arena_constructor:junimohost.accounts.v1.DeleteAccountRequest)
}
DeleteAccountRequest::DeleteAccountRequest(const DeleteAccountRequest& from)
  : ::PROTOBUF_NAMESPACE_ID::Message() {
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  account_id_ = from.account_id_;
  // @@protoc_insertion_point(copy_constructor:junimohost.accounts.v1.DeleteAccountRequest)
}

void DeleteAccountRequest::SharedCtor() {
  account_id_ = PROTOBUF_LONGLONG(0);
}

DeleteAccountRequest::~DeleteAccountRequest() {
  // @@protoc_insertion_point(destructor:junimohost.accounts.v1.DeleteAccountRequest)
  SharedDtor();
  _internal_metadata_.Delete<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

void DeleteAccountRequest::SharedDtor() {
  GOOGLE_DCHECK(GetArena() == nullptr);
}

void DeleteAccountRequest::ArenaDtor(void* object) {
  DeleteAccountRequest* _this = reinterpret_cast< DeleteAccountRequest* >(object);
  (void)_this;
}
void DeleteAccountRequest::RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena*) {
}
void DeleteAccountRequest::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const DeleteAccountRequest& DeleteAccountRequest::default_instance() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&::scc_info_DeleteAccountRequest_junimohost_2faccounts_2fv1_2faccount_5fmanager_2eproto.base);
  return *internal_default_instance();
}


void DeleteAccountRequest::Clear() {
// @@protoc_insertion_point(message_clear_start:junimohost.accounts.v1.DeleteAccountRequest)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  account_id_ = PROTOBUF_LONGLONG(0);
  _internal_metadata_.Clear<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>();
}

const char* DeleteAccountRequest::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  ::PROTOBUF_NAMESPACE_ID::Arena* arena = GetArena(); (void)arena;
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    CHK_(ptr);
    switch (tag >> 3) {
      // int64 account_id = 1[json_name = "accountId"];
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 8)) {
          account_id_ = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint64(&ptr);
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      default: {
      handle_unusual:
        if ((tag & 7) == 4 || tag == 0) {
          ctx->SetLastTag(tag);
          goto success;
        }
        ptr = UnknownFieldParse(tag,
            _internal_metadata_.mutable_unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(),
            ptr, ctx);
        CHK_(ptr != nullptr);
        continue;
      }
    }  // switch
  }  // while
success:
  return ptr;
failure:
  ptr = nullptr;
  goto success;
#undef CHK_
}

::PROTOBUF_NAMESPACE_ID::uint8* DeleteAccountRequest::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:junimohost.accounts.v1.DeleteAccountRequest)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // int64 account_id = 1[json_name = "accountId"];
  if (this->account_id() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteInt64ToArray(1, this->_internal_account_id(), target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(::PROTOBUF_NAMESPACE_ID::UnknownFieldSet::default_instance), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:junimohost.accounts.v1.DeleteAccountRequest)
  return target;
}

size_t DeleteAccountRequest::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:junimohost.accounts.v1.DeleteAccountRequest)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // int64 account_id = 1[json_name = "accountId"];
  if (this->account_id() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::Int64Size(
        this->_internal_account_id());
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void DeleteAccountRequest::MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:junimohost.accounts.v1.DeleteAccountRequest)
  GOOGLE_DCHECK_NE(&from, this);
  const DeleteAccountRequest* source =
      ::PROTOBUF_NAMESPACE_ID::DynamicCastToGenerated<DeleteAccountRequest>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:junimohost.accounts.v1.DeleteAccountRequest)
    ::PROTOBUF_NAMESPACE_ID::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:junimohost.accounts.v1.DeleteAccountRequest)
    MergeFrom(*source);
  }
}

void DeleteAccountRequest::MergeFrom(const DeleteAccountRequest& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:junimohost.accounts.v1.DeleteAccountRequest)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(from._internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (from.account_id() != 0) {
    _internal_set_account_id(from._internal_account_id());
  }
}

void DeleteAccountRequest::CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:junimohost.accounts.v1.DeleteAccountRequest)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void DeleteAccountRequest::CopyFrom(const DeleteAccountRequest& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:junimohost.accounts.v1.DeleteAccountRequest)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool DeleteAccountRequest::IsInitialized() const {
  return true;
}

void DeleteAccountRequest::InternalSwap(DeleteAccountRequest* other) {
  using std::swap;
  _internal_metadata_.Swap<::PROTOBUF_NAMESPACE_ID::UnknownFieldSet>(&other->_internal_metadata_);
  swap(account_id_, other->account_id_);
}

::PROTOBUF_NAMESPACE_ID::Metadata DeleteAccountRequest::GetMetadata() const {
  return GetMetadataStatic();
}


// @@protoc_insertion_point(namespace_scope)
}  // namespace v1
}  // namespace accounts
}  // namespace junimohost
PROTOBUF_NAMESPACE_OPEN
template<> PROTOBUF_NOINLINE ::junimohost::accounts::v1::CreateAccountRequest* Arena::CreateMaybeMessage< ::junimohost::accounts::v1::CreateAccountRequest >(Arena* arena) {
  return Arena::CreateMessageInternal< ::junimohost::accounts::v1::CreateAccountRequest >(arena);
}
template<> PROTOBUF_NOINLINE ::junimohost::accounts::v1::CreateAccountResponse* Arena::CreateMaybeMessage< ::junimohost::accounts::v1::CreateAccountResponse >(Arena* arena) {
  return Arena::CreateMessageInternal< ::junimohost::accounts::v1::CreateAccountResponse >(arena);
}
template<> PROTOBUF_NOINLINE ::junimohost::accounts::v1::DeleteAccountRequest* Arena::CreateMaybeMessage< ::junimohost::accounts::v1::DeleteAccountRequest >(Arena* arena) {
  return Arena::CreateMessageInternal< ::junimohost::accounts::v1::DeleteAccountRequest >(arena);
}
PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>
