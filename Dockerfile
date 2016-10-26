FROM node:7.0-slim

RUN mkdir -p /src
WORKDIR /src
ADD package.json /src/package.json

# I'm having issues with getting this to work as I expect.  It doesn't seem to be installing jasmine-node globally, and it's not clear to me what magic incantation will make this work.  In the meantime, Travis CI installs the `node_modules` into a sub-directory, as it seems intent on doing.
#
#     RUN npm install --global

CMD tail -f
