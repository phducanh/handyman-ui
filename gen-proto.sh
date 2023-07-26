#!/bin/bash
protoc -I ./proto --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_opt=esModuleInterop=true --ts_proto_out=src/pb proto/apiservice.proto
protoc -I ./proto --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_opt=esModuleInterop=true --ts_proto_out=src/pb proto/chatservice.proto