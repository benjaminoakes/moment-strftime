FROM ubuntu:16.04

RUN echo 'apt-get update && apt-get install --no-install-recommends -y $*' > /usr/local/bin/pkg-deb
RUN echo 'gem install --no-ri --no-rdoc $*' > /usr/local/bin/pkg-gem
RUN echo 'npm install --global $*' > /usr/local/bin/pkg-npm
RUN chmod +x /usr/local/bin/pkg-*

# Install travis gem for encrypted config (`travis setup npm`)
RUN pkg-deb ruby2.3 \
  ruby2.3-dev \
  libffi-dev=3.2.1-4 \
  build-essential=12.1ubuntu2 \
  git=1:2.7.4-0ubuntu1
RUN pkg-gem travis

RUN pkg-deb \
  npm=3.5.2-0ubuntu4 \
  nodejs-legacy=4.2.6~dfsg-1ubuntu4

# I'm floored that `npm install --global` doesn't install devDependencies.  That's literally the only thing I really want.
RUN mkdir -p /usr/local/npm
ENV NODE_PATH /usr/local/npm/node_modules
ENV PATH "$PATH:/usr/local/npm/node_modules/.bin"
ADD package.json /usr/local/npm/package.json
WORKDIR /usr/local/npm/
RUN npm install

WORKDIR /src
CMD tail -f
