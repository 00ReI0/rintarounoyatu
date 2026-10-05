import type { NextConfig } from "next";
import withPWA from "next-pwa";

/* -------------------------------------------------
   PWA の基本設定
   - `dest` : ビルド後の静的ファイルを置くフォルダ
   - `register` と `skipWaiting` で Service Worker の自動更新
   - `runtimeCaching` はデフォルトで OK（必要に応じて調整可）
   ------------------------------------------------- */
const pwaConfig = {
  dest: "public",
  register: true,
  skipWaiting: true,
  // 例：画像やフォントのキャッシュ戦略を追加したいときは以下を参考に
  // runtimeCaching: [
  //   {
  //     urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
  //     handler: "CacheFirst",
  //     options: {
  //       cacheName: "images",
  //       expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
  //     },
  //   },
  // ],
};

const nextConfig: NextConfig = {
  /* ここに既存の Next.js 設定があれば残す */
  // 例: reactStrictMode: true,
  // 例: images: { domains: ["example.com"] },
};

/* -------------------------------------------------
   withPWA を最外層でラップしてエクスポート
   ------------------------------------------------- */
export default withPWA(pwaConfig)(nextConfig);
