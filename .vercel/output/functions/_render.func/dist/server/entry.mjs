import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DxOaqgbO.mjs';
import { manifest } from './manifest_UYiDWPvs.mjs';

const serverIslandMap = new Map([
	['BuyButton', () => import('./chunks/BuyButton_Bpp5nhs2.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
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
    "middlewareSecret": "19e4115d-cb52-4c89-9151-01f4cb81a3d4",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
