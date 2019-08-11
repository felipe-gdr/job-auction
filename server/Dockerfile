FROM node:10

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY src/ ./src

RUN yarn --prod

ENV PORT 4000

CMD [ "yarn", "start" ]