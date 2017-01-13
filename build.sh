#!/bin/bash
_tag=$1

if [ -z "${_tag}" ]; then
    source _VERSION
    _tag=${_VERSION}
fi

docker build --tag "ng2-admin:${_tag}"  --no-cache=true .


    "postcss-load-config": "^1.1.0",
    "postcss-loader": "^1.2.2",

    "ng2-slim-loading-bar": "^2.0.7",
    "ts-md5": "^1.2.0",
    "ng2-toasty": "^2.2.2",
    "angular2-cool-storage": "^1.2.1",
    "ng2-http": "0.0.3",
