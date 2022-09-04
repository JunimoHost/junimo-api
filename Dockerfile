FROM namely/protoc-all:1.47_3

RUN apt update -y && \
    apt install -y \
    git curl unzip \
    python3 python3-pip golang-go

WORKDIR /setup

RUN pip3 install --upgrade pip

# install buf https://buf.build/
ENV PREFIX="/usr/local"  \
    BUF_VERSION="1.7.0"

RUN curl -sSL \
    "https://github.com/bufbuild/buf/releases/download/v${BUF_VERSION}/buf-$(uname -s)-$(uname -m).tar.gz" | \
    tar -xvzf - -C "${PREFIX}" --strip-components 1

# install python-betterproto
RUN pip install betterproto==2.0.0b5

# install protoc-gen-doc
RUN curl -sSL \
    "https://github.com/pseudomuto/protoc-gen-doc/releases/download/v1.5.1/protoc-gen-doc_1.5.1_linux_amd64.tar.gz" | \
    tar -xvzf - -C "/usr/local/bin" --strip-components 1

# install grpc-web
RUN curl -sSL "https://github.com/grpc/grpc-web/releases/download/1.3.1/protoc-gen-grpc-web-1.3.1-linux-x86_64" -o ./protoc-gen-grpc-web \
    && mv ./protoc-gen-grpc-web /usr/local/bin/protoc-gen-grpc-web \
    && chmod +x /usr/local/bin/protoc-gen-grpc-web

RUN go get github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway

# install npm grpc-tools & ts
RUN npm install grpc-tools@1.11.2 grpc_tools_node_protoc_ts@5.3.2 --global

# install c#
RUN curl -sSL https://storage.googleapis.com/junimo-protoc/grpc_csharp_plugin -o ./protoc-gen-grpc-csharp \
    && chmod +x ./protoc-gen-grpc-csharp \
    && mv ./protoc-gen-grpc-csharp /usr/local/bin/

# Setup for makefile usage
WORKDIR /defs
ENTRYPOINT [ "buf" ]
CMD [ "generate" ]
