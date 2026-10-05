// TypeScript shims for Cloudflare Workers environment used in this project
// Prevents build errors when compiling outside of Cloudflare Workers.

declare module "cloudflare:workers" {
  export const env: any;
}

declare interface Fetcher {
  fetch(request: Request): Promise<Response>;
}

declare type D1Database = any;

declare type ReadableStream = any;
