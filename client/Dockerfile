FROM node:18-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install 

FROM base
COPY --from=deps /app/node_modules /app/node_modules
COPY --from=deps /app /app
EXPOSE 5173
CMD [ "pnpm", "run", "dev" ]