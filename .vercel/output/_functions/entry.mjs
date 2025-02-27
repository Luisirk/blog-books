import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BBTpzr-w.mjs';
import { manifest } from './manifest_DGe1XxHx.mjs';

const serverIslandMap = new Map([
	['BuyButton', () => import('./chunks/BuyButton_C1mzf-Ji.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["../AppData/Local/pnpm/global/5/.pnpm/astro@5.4.0_rollup@4.34.8_typescript@5.7.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
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
    "middlewareSecret": "1d66978a-035f-4897-9694-8eeb0c0b8767",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
