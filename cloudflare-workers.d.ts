// Shim for Cloudflare Workers environment used in db/index.ts
// This declaration prevents TypeScript errors when building for non‑Cloudflare targets.
declare module "cloudflare:workers" {
  export const env: any;
}
