FROM node:10 as builder
WORKDIR /usr/src/app
# Leverage Docker layer caching by copying and installing dependencies first.
# This layer will only be invalidaded if there are changes in dependencies.
COPY package.json yarn.lock ./
RUN yarn
COPY public ./public
COPY src ./src
RUN yarn build

FROM nginx:1.12-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
