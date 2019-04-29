#!/usr/bin/env bash

if [ "$1" != "staging" ] && [ "$1" != "production" ]
then
  echo "Please specify environment"
  exit 1
fi

docker-compose -f deploy-${1}.yml down
docker-compose -f deploy-${1}.yml build
docker-compose -f deploy-${1}.yml up
