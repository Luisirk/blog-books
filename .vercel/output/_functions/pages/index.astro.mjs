import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderTransition } from '../chunks/astro/server_K-WvYpO4.mjs';
import { g as getCollection, $ as $$Layout } from '../chunks/Layout_CKXWXiC9.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const books = await getCollection("books");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mis libros" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mt-120"> <h1 class="text-center text-7xl font-extrabold mb-24"> Toda mi lectura :📖 </h1> </main> <section aria-label="Libros leidos" class="max-w-7xl mx-auto px-8"> <div class="px-4 mx-auto max-w-screen-xl"> <div class="grid gap-6 md:grid-cols-2"> ${books.map((book) => {
    const { slug, data } = book;
    const { title, author, img, pages, description, buy } = data;
    return renderTemplate`<article class="flex"> <a${addAttribute(`/libro/${slug}`, "href")} class="mb-2 xl:mb-0 transition duration-210 ease-out group"> <img${addAttribute(`/${img}`, "src")}${addAttribute(title, "alt")} class="mr-5 w-58 rounded transition-transform  duration-90 ease-in  group-hover:scale-130 group-hover:duration-210 relative group-hover:z-50 "${addAttribute(renderTransition($$result2, "7ki7bcvh", "", `img-${slug}`), "data-astro-transition-scope")}> </a> <div class="flex flex-col justify-center "> <h2 class="ml-4 mb-2 text-2xl font-bold leading-tight text-white"${addAttribute(renderTransition($$result2, "5bsqwlbb", "", `img-${title}`), "data-astro-transition-scope")}> ${title} </h2> <p class="ml-4 mb-4 text-gray-300 max-w-sm"> ${description}</p> <span class="text-xs ml-4 text-gray-200"> 📄 ${pages} hojas</span> </div> </article>`;
  })} </div> </div> </section> ` })}`;
}, "C:/Users/luisi/blog-books/src/pages/index.astro", "self");

const $$file = "C:/Users/luisi/blog-books/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
