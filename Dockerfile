# syntax=docker/dockerfile:1

FROM node:20-alpine

WORKDIR /app

# https://github.com/traPtitech/NeoShowcase/issues/489
ARG NEXT_PUBLIC_API_BASE_URL
ARG NEXT_PUBLIC_ORIGIN
ENV NEXT_PUBLIC_API_BASE_URL ${NEXT_PUBLIC_API_BASE_URL:-https://mission.trap.games/api/v1}
ENV NEXT_PUBLIC_ORIGIN ${NEXT_PUBLIC_ORIGIN:-https://mission.trap.games}
RUN echo "NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL"
RUN echo "NEXT_PUBLIC_ORIGIN=$NEXT_PUBLIC_ORIGIN"

RUN npm i -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm i --frozen-lockfile

COPY . .
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
