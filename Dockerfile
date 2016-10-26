FROM node:7.0-slim

RUN mkdir -p /src
WORKDIR /src
ADD package.json /src/package.json
RUN npm install

CMD tail -f
