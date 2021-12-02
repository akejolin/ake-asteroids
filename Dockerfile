FROM node:15.11.0 as builder

ENV PORT 3000

WORKDIR /opt/app

# Installing dependencies
COPY package.json yarn.lock /opt/app/
RUN npm i

# Copying source files
COPY . /opt/app/

# Building app
RUN npm run build

RUN npm prune --production

EXPOSE 3000

# Running the app
CMD npm run start

