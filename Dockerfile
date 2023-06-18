# syntax=docker/dockerfile:1

FROM node:20-alpine

WORKDIR /app

ARG NEXT_PUBLIC_API_BASE_URL

RUN npm i -g pnpm && pnpm i && pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
