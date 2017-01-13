FROM node:latest

#//sudo npm install -g cnpm --registry=https://registry.npm.taobao.org

RUN git clone https://github.com/akveo/ng2-admin.git /var/www \
    && cd /var/www \
    && sudo cnpm install --global rimraf \
    && sudo cnpm run clean \
    && sudo cnpm install --global webpack webpack-dev-server typescript@beta \
    && sudo cnpm install \
    && sudo cnpm run prebuild:prod && cnpm run build:prod

EXPOSE 8080

WORKDIR /var/www
ENTRYPOINT ["cnpm", "run", "server:prod"]


sudo cnpm install ng2-slim-loading-bar
