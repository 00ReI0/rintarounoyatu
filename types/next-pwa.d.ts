// types/next-pwa.d.ts
declare module "next-pwa" {
  import type { NextConfig } from "next";

  /** Minimal PWA configuration options used in this project */
  interface PWAConfig {
    /** Destination folder for generated assets (default: "public") */
    dest?: string;
    /** Whether to automatically register the service worker */
    register?: boolean;
    /** Call skipWaiting on the service worker */
    skipWaiting?: boolean;
    /** Runtime caching rules – any shape accepted */
    runtimeCaching?: any[];
    // Add other fields you use if needed
  }

  /**
   * `withPWA` is a higher‑order function.
   * Usage: `export default withPWA(pwaConfig)(nextConfig);`
   */
  function withPWA(pwaConfig?: PWAConfig): (nextConfig?: NextConfig) => NextConfig;
  export default withPWA;
}
