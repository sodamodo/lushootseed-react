#!/bin/sh

KEYFILE="auth/al-static-hosting.json"
PROJECT="al-static-hosting"
BUCKET="gs://staticstaging.animallabs.co"
if [ $1 == "production" ]
then
  BUCKET="gs://statictest.animallabs.co"
fi

gcloud auth activate-service-account --key-file $KEYFILE
gcloud config set project $PROJECT
gsutil rm ${BUCKET}/**
if [ $1 == "production" ]
then
  gsutil cp -Z -r ./dist/** $BUCKET
  gsutil cp -Z -r ./webUtils/production/** $BUCKET
else
  gsutil -h Cache-Control:no-cache cp -Z -r ./dist/** $BUCKET
  gsutil -h Cache-Control:no-cache cp -Z -r ./webUtils/staging/** $BUCKET
fi
gsutil iam ch allUsers:objectViewer $BUCKET
