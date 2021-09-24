#!/bin/bash

SSH_USER=$1
SSH_IP=$1
SERVICE_NAME=$2

yarn
yarn build
yarn bundle
yarn compress

ARTIFACT=$(ls bundle/*.tar.gz)

scp $ARTIFACT $SSH_USER@$SSH_IP:/tmp
yarn 