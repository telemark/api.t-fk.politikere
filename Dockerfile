# Setting the base to nodejs 8.4.0
FROM node:8.15.1-alpine@sha256:523c0aea6d26d146c9dfe909dc11e6b97882c6c1f93c91f2807cf56338a20cf3

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update --no-cache git

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Expose 3000
EXPOSE 3000

# Startup
ENTRYPOINT npm start