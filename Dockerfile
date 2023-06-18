# syntax=docker/dockerfile:1

FROM node:20-alpine

WORKDIR /app

ARG NEXT_PUBLIC_API_BASE_URL

RUN npm i -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm i --frozen-lockfile

COPY . .
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
