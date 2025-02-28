import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_B3FZv4Gz.mjs';
import { manifest } from './manifest_BY7OIg0u.mjs';

const serverIslandMap = new Map([
	['BuyButton', () => import('./chunks/BuyButton_BxpFgHkG.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.4.0_jiti@2.4.2_ligh_cc198972f92d20707f07364359ed2888/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/libro/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3aa8c87c-0e52-4ea4-9214-11893e8a6d68",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
