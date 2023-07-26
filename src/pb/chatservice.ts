/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const protobufPackage = 'chatservice';

export interface NewConversationRequest {
  memberIds: string[];
}

export interface NewConversationResponse {
  id: string;
}

export interface ChatMessage {
  message: string;
}

export interface Chat {
  timestamp: number;
  payload: string;
  sender: string;
}

export interface FetchPostRequest {
  conversationId: string[];
  UserId: string;
}

export interface FetchPostResponse {
  code: number;
  success: boolean;
  data: FetchPostResponse_Data | undefined;
}

export interface FetchPostResponse_Data {}

export interface Pagination {
  timestamp: string;
  min: string;
}

export interface FetchOnePostRequest {
  id: string;
  timestamp: number;
  min: number;
  UserId: string;
}

export interface FetchOnePostResponse {
  code: number;
  success: boolean;
  data: FetchOnePostResponse_Data | undefined;
}

export interface FetchOnePostResponse_Data {
  chats: Chat[];
}

export interface SendPostRequest {
  UserId: string;
  payload: string;
  id: string;
}

export interface SendPostResponse {
  code: number;
  success: boolean;
  data: SendPostResponse_Data | undefined;
}

export interface SendPostResponse_Data {}

function createBaseNewConversationRequest(): NewConversationRequest {
  return { memberIds: [] };
}

export const NewConversationRequest = {
  encode(
    message: NewConversationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.memberIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NewConversationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewConversationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewConversationRequest {
    return {
      memberIds: Array.isArray(object?.memberIds)
        ? object.memberIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: NewConversationRequest): unknown {
    const obj: any = {};
    if (message.memberIds) {
      obj.memberIds = message.memberIds.map((e) => e);
    } else {
      obj.memberIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NewConversationRequest>, I>>(
    object: I
  ): NewConversationRequest {
    const message = createBaseNewConversationRequest();
    message.memberIds = object.memberIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseNewConversationResponse(): NewConversationResponse {
  return { id: '' };
}

export const NewConversationResponse = {
  encode(
    message: NewConversationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NewConversationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewConversationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewConversationResponse {
    return {
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: NewConversationResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NewConversationResponse>, I>>(
    object: I
  ): NewConversationResponse {
    const message = createBaseNewConversationResponse();
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseChatMessage(): ChatMessage {
  return { message: '' };
}

export const ChatMessage = {
  encode(
    message: ChatMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.message !== '') {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChatMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChatMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChatMessage {
    return {
      message: isSet(object.message) ? String(object.message) : '',
    };
  },

  toJSON(message: ChatMessage): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChatMessage>, I>>(
    object: I
  ): ChatMessage {
    const message = createBaseChatMessage();
    message.message = object.message ?? '';
    return message;
  },
};

function createBaseChat(): Chat {
  return { timestamp: 0, payload: '', sender: '' };
}

export const Chat = {
  encode(message: Chat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.payload !== '') {
      writer.uint32(18).string(message.payload);
    }
    if (message.sender !== '') {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Chat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.payload = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Chat {
    return {
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      payload: isSet(object.payload) ? String(object.payload) : '',
      sender: isSet(object.sender) ? String(object.sender) : '',
    };
  },

  toJSON(message: Chat): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp));
    message.payload !== undefined && (obj.payload = message.payload);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Chat>, I>>(object: I): Chat {
    const message = createBaseChat();
    message.timestamp = object.timestamp ?? 0;
    message.payload = object.payload ?? '';
    message.sender = object.sender ?? '';
    return message;
  },
};

function createBaseFetchPostRequest(): FetchPostRequest {
  return { conversationId: [], UserId: '' };
}

export const FetchPostRequest = {
  encode(
    message: FetchPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.conversationId) {
      writer.uint32(10).string(v!);
    }
    if (message.UserId !== '') {
      writer.uint32(18).string(message.UserId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conversationId.push(reader.string());
          break;
        case 2:
          message.UserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FetchPostRequest {
    return {
      conversationId: Array.isArray(object?.conversationId)
        ? object.conversationId.map((e: any) => String(e))
        : [],
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
    };
  },

  toJSON(message: FetchPostRequest): unknown {
    const obj: any = {};
    if (message.conversationId) {
      obj.conversationId = message.conversationId.map((e) => e);
    } else {
      obj.conversationId = [];
    }
    message.UserId !== undefined && (obj.UserId = message.UserId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FetchPostRequest>, I>>(
    object: I
  ): FetchPostRequest {
    const message = createBaseFetchPostRequest();
    message.conversationId = object.conversationId?.map((e) => e) || [];
    message.UserId = object.UserId ?? '';
    return message;
  },
};

function createBaseFetchPostResponse(): FetchPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const FetchPostResponse = {
  encode(
    message: FetchPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      FetchPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = FetchPostResponse_Data.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FetchPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? FetchPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: FetchPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? FetchPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FetchPostResponse>, I>>(
    object: I
  ): FetchPostResponse {
    const message = createBaseFetchPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? FetchPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseFetchPostResponse_Data(): FetchPostResponse_Data {
  return {};
}

export const FetchPostResponse_Data = {
  encode(
    _: FetchPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FetchPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): FetchPostResponse_Data {
    return {};
  },

  toJSON(_: FetchPostResponse_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FetchPostResponse_Data>, I>>(
    _: I
  ): FetchPostResponse_Data {
    const message = createBaseFetchPostResponse_Data();
    return message;
  },
};

function createBasePagination(): Pagination {
  return { timestamp: '', min: '' };
}

export const Pagination = {
  encode(
    message: Pagination,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timestamp !== '') {
      writer.uint32(10).string(message.timestamp);
    }
    if (message.min !== '') {
      writer.uint32(18).string(message.min);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pagination {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePagination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = reader.string();
          break;
        case 2:
          message.min = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pagination {
    return {
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : '',
      min: isSet(object.min) ? String(object.min) : '',
    };
  },

  toJSON(message: Pagination): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.min !== undefined && (obj.min = message.min);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pagination>, I>>(
    object: I
  ): Pagination {
    const message = createBasePagination();
    message.timestamp = object.timestamp ?? '';
    message.min = object.min ?? '';
    return message;
  },
};

function createBaseFetchOnePostRequest(): FetchOnePostRequest {
  return { id: '', timestamp: 0, min: 0, UserId: '' };
}

export const FetchOnePostRequest = {
  encode(
    message: FetchOnePostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).int64(message.timestamp);
    }
    if (message.min !== 0) {
      writer.uint32(24).int32(message.min);
    }
    if (message.UserId !== '') {
      writer.uint32(34).string(message.UserId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchOnePostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchOnePostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.timestamp = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.min = reader.int32();
          break;
        case 4:
          message.UserId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FetchOnePostRequest {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      min: isSet(object.min) ? Number(object.min) : 0,
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
    };
  },

  toJSON(message: FetchOnePostRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp));
    message.min !== undefined && (obj.min = Math.round(message.min));
    message.UserId !== undefined && (obj.UserId = message.UserId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FetchOnePostRequest>, I>>(
    object: I
  ): FetchOnePostRequest {
    const message = createBaseFetchOnePostRequest();
    message.id = object.id ?? '';
    message.timestamp = object.timestamp ?? 0;
    message.min = object.min ?? 0;
    message.UserId = object.UserId ?? '';
    return message;
  },
};

function createBaseFetchOnePostResponse(): FetchOnePostResponse {
  return { code: 0, success: false, data: undefined };
}

export const FetchOnePostResponse = {
  encode(
    message: FetchOnePostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      FetchOnePostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FetchOnePostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchOnePostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = FetchOnePostResponse_Data.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FetchOnePostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? FetchOnePostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: FetchOnePostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? FetchOnePostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FetchOnePostResponse>, I>>(
    object: I
  ): FetchOnePostResponse {
    const message = createBaseFetchOnePostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? FetchOnePostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseFetchOnePostResponse_Data(): FetchOnePostResponse_Data {
  return { chats: [] };
}

export const FetchOnePostResponse_Data = {
  encode(
    message: FetchOnePostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.chats) {
      Chat.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FetchOnePostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchOnePostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chats.push(Chat.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FetchOnePostResponse_Data {
    return {
      chats: Array.isArray(object?.chats)
        ? object.chats.map((e: any) => Chat.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FetchOnePostResponse_Data): unknown {
    const obj: any = {};
    if (message.chats) {
      obj.chats = message.chats.map((e) => (e ? Chat.toJSON(e) : undefined));
    } else {
      obj.chats = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FetchOnePostResponse_Data>, I>>(
    object: I
  ): FetchOnePostResponse_Data {
    const message = createBaseFetchOnePostResponse_Data();
    message.chats = object.chats?.map((e) => Chat.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSendPostRequest(): SendPostRequest {
  return { UserId: '', payload: '', id: '' };
}

export const SendPostRequest = {
  encode(
    message: SendPostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.UserId !== '') {
      writer.uint32(10).string(message.UserId);
    }
    if (message.payload !== '') {
      writer.uint32(18).string(message.payload);
    }
    if (message.id !== '') {
      writer.uint32(26).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendPostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendPostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.UserId = reader.string();
          break;
        case 2:
          message.payload = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendPostRequest {
    return {
      UserId: isSet(object.UserId) ? String(object.UserId) : '',
      payload: isSet(object.payload) ? String(object.payload) : '',
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: SendPostRequest): unknown {
    const obj: any = {};
    message.UserId !== undefined && (obj.UserId = message.UserId);
    message.payload !== undefined && (obj.payload = message.payload);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendPostRequest>, I>>(
    object: I
  ): SendPostRequest {
    const message = createBaseSendPostRequest();
    message.UserId = object.UserId ?? '';
    message.payload = object.payload ?? '';
    message.id = object.id ?? '';
    return message;
  },
};

function createBaseSendPostResponse(): SendPostResponse {
  return { code: 0, success: false, data: undefined };
}

export const SendPostResponse = {
  encode(
    message: SendPostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.success === true) {
      writer.uint32(16).bool(message.success);
    }
    if (message.data !== undefined) {
      SendPostResponse_Data.encode(
        message.data,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendPostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendPostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.success = reader.bool();
          break;
        case 3:
          message.data = SendPostResponse_Data.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendPostResponse {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      success: isSet(object.success) ? Boolean(object.success) : false,
      data: isSet(object.data)
        ? SendPostResponse_Data.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: SendPostResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.success !== undefined && (obj.success = message.success);
    message.data !== undefined &&
      (obj.data = message.data
        ? SendPostResponse_Data.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendPostResponse>, I>>(
    object: I
  ): SendPostResponse {
    const message = createBaseSendPostResponse();
    message.code = object.code ?? 0;
    message.success = object.success ?? false;
    message.data =
      object.data !== undefined && object.data !== null
        ? SendPostResponse_Data.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseSendPostResponse_Data(): SendPostResponse_Data {
  return {};
}

export const SendPostResponse_Data = {
  encode(
    _: SendPostResponse_Data,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SendPostResponse_Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendPostResponse_Data();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SendPostResponse_Data {
    return {};
  },

  toJSON(_: SendPostResponse_Data): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendPostResponse_Data>, I>>(
    _: I
  ): SendPostResponse_Data {
    const message = createBaseSendPostResponse_Data();
    return message;
  },
};

export interface ChatService {
  Chat(request: Observable<ChatMessage>): Observable<ChatMessage>;
  NewConversation(
    request: NewConversationRequest
  ): Promise<NewConversationResponse>;
}

export class ChatServiceClientImpl implements ChatService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Chat = this.Chat.bind(this);
    this.NewConversation = this.NewConversation.bind(this);
  }
  Chat(request: Observable<ChatMessage>): Observable<ChatMessage> {
    const data = request.pipe(
      map((request) => ChatMessage.encode(request).finish())
    );
    const result = this.rpc.bidirectionalStreamingRequest(
      'chatservice.ChatService',
      'Chat',
      data
    );
    return result.pipe(map((data) => ChatMessage.decode(new _m0.Reader(data))));
  }

  NewConversation(
    request: NewConversationRequest
  ): Promise<NewConversationResponse> {
    const data = NewConversationRequest.encode(request).finish();
    const promise = this.rpc.request(
      'chatservice.ChatService',
      'NewConversation',
      data
    );
    return promise.then((data) =>
      NewConversationResponse.decode(new _m0.Reader(data))
    );
  }
}

export interface ChatHTTP {
  FetchPost(request: FetchPostRequest): Promise<FetchPostResponse>;
  FetchOnePost(request: FetchOnePostRequest): Promise<FetchOnePostResponse>;
  SendPost(request: SendPostRequest): Promise<SendPostResponse>;
}

export class ChatHTTPClientImpl implements ChatHTTP {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.FetchPost = this.FetchPost.bind(this);
    this.FetchOnePost = this.FetchOnePost.bind(this);
    this.SendPost = this.SendPost.bind(this);
  }
  FetchPost(request: FetchPostRequest): Promise<FetchPostResponse> {
    const data = FetchPostRequest.encode(request).finish();
    const promise = this.rpc.request('chatservice.ChatHTTP', 'FetchPost', data);
    return promise.then((data) =>
      FetchPostResponse.decode(new _m0.Reader(data))
    );
  }

  FetchOnePost(request: FetchOnePostRequest): Promise<FetchOnePostResponse> {
    const data = FetchOnePostRequest.encode(request).finish();
    const promise = this.rpc.request(
      'chatservice.ChatHTTP',
      'FetchOnePost',
      data
    );
    return promise.then((data) =>
      FetchOnePostResponse.decode(new _m0.Reader(data))
    );
  }

  SendPost(request: SendPostRequest): Promise<SendPostResponse> {
    const data = SendPostRequest.encode(request).finish();
    const promise = this.rpc.request('chatservice.ChatHTTP', 'SendPost', data);
    return promise.then((data) =>
      SendPostResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
  clientStreamingRequest(
    service: string,
    method: string,
    data: Observable<Uint8Array>
  ): Promise<Uint8Array>;
  serverStreamingRequest(
    service: string,
    method: string,
    data: Uint8Array
  ): Observable<Uint8Array>;
  bidirectionalStreamingRequest(
    service: string,
    method: string,
    data: Observable<Uint8Array>
  ): Observable<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
