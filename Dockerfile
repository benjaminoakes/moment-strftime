FROM node:latest

# I'm floored that `npm install --global` doesn't install devDependencies.  That's literally the only thing I really want.
RUN mkdir -p /usr/local/npm
ENV NODE_PATH /usr/local/npm/node_modules
ENV PATH "$PATH:/usr/local/npm/node_modules/.bin"
COPY package.json /usr/local/npm/package.json
WORKDIR /usr/local/npm/
RUN npm install

CMD false
