import { UNSAFE_withComponentProps, Link } from "react-router";
import { jsx, jsxs } from "react/jsx-runtime";
const _index01 = UNSAFE_withComponentProps(function HomePage() {
  return /* @__PURE__ */ jsx("main", {
    className: "min-h-screen bg-slate-950 text-white px-6 py-20",
    children: /* @__PURE__ */ jsxs("section", {
      className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center",
      children: [/* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-sm uppercase tracking-[0.3em] text-slate-400",
          children: "AI Engineer • Full Stack Developer • ML Researcher"
        }), /* @__PURE__ */ jsx("h1", {
          className: "mt-6 text-5xl md:text-7xl font-bold leading-tight",
          children: "Hi, I’m AbhiDev."
        }), /* @__PURE__ */ jsx("p", {
          className: "mt-3 text-xl text-slate-300 font-medium",
          children: "Enlighten Me"
        }), /* @__PURE__ */ jsx("p", {
          className: "mt-6 max-w-3xl text-lg text-slate-300 leading-8",
          children: "I design intelligent AI systems, scalable full-stack applications, and immersive digital experiences that combine performance, aesthetics, and real-world impact."
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-10",
          children: /* @__PURE__ */ jsx(Link, {
            to: "/blog",
            className: "rounded-xl bg-white text-black px-6 py-3 font-semibold inline-block",
            children: "Blog"
          })
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "flex justify-center",
        children: /* @__PURE__ */ jsx("img", {
          src: "/images/abhidev-profile.jpg",
          alt: "AbhiDev",
          className: "w-[320px] md:w-[420px] rounded-3xl shadow-2xl border border-slate-800"
        })
      })]
    })
  });
});
export {
  _index01 as default
};
//# sourceMappingURL=_index01-Cj6tYcIX.js.map
