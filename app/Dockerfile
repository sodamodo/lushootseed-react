FROM node:alpine

# Install google tools
ARG CLOUD_SDK_VERSION=160.0.0
ENV PATH /google-cloud-sdk/bin:$PATH
RUN apk --no-cache add curl python py-crcmod bash libc6-compat && \
    curl -O https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-sdk-${CLOUD_SDK_VERSION}-linux-x86_64.tar.gz && \
    tar xzf google-cloud-sdk-${CLOUD_SDK_VERSION}-linux-x86_64.tar.gz && \
    rm google-cloud-sdk-${CLOUD_SDK_VERSION}-linux-x86_64.tar.gz && \
    ln -s /lib /lib64 && \
    gcloud config set core/disable_usage_reporting true && \
    gcloud config set component_manager/disable_update_check true && \
    gcloud config set metrics/environment github_docker_image

# Install NPM Dependencies
ARG APP=/app
RUN mkdir ${APP}
COPY package.json ${APP}/
WORKDIR ${APP}
RUN npm install