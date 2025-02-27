import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CTlI_5GG.mjs';
import { manifest } from './manifest_OIIIRtrN.mjs';

const serverIslandMap = new Map([
	['BuyButton', () => import('./chunks/BuyButton_DOl8p63y.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.3.1_jiti@2.4.2_ligh_0071d12fd0f09ef4854b0bd69339054b/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
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
    "middlewareSecret": "0dc331dc-bfac-4ba4-b3c4-65d27563aaeb",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
