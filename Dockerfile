FROM node:15.11.0 as builder

ENV NODE_ENV production

WORKDIR /opt/app
COPY package.json package-lock.json /opt/app/

RUN npm i
RUN npm run build
COPY build /opt/app/build
#COPY server /opt/app/server

EXPOSE 8055

CMD node /opt/app/build/server.js