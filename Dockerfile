# Setting the base to nodejs 8.4.0
FROM node:8.4.0-alpine@sha256:613685c22f65d01f2264bdd49b8a336488e14faf29f3ff9b6bf76a4da23c4700

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