import {
  j as e,
  F as u,
  a as n,
  V as s,
  I as l,
  T as t,
  B as d,
  e as h,
  R as g,
  b as p,
  C as b,
} from "./vendor.ab638252.js";
const m = function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) c(o);
  new MutationObserver((o) => {
    for (const r of o)
      if (r.type === "childList")
        for (const a of r.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && c(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function f(o) {
    const r = {};
    return (
      o.integrity && (r.integrity = o.integrity),
      o.referrerpolicy && (r.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (r.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function c(o) {
    if (o.ep) return;
    o.ep = !0;
    const r = f(o);
    fetch(o.href, r);
  }
};
m();
var x = "./assets/icon-sedans.1b33cfa6.svg",
  y = "./assets/icon-suvs.56b747a1.svg",
  v = "./assets/icon-luxury.b6728a87.svg";
function w() {
  return e(u, {
    w: "100vw",
    minH: "100vh",
    justifyContent: "center",
    alignItems: "flex-start",
    children: n(u, {
      w: { base: "375px", lg: "1125px" },
      spacing: 0,
      wrap: "wrap",
      justifyContent: "center",
      my: 8,
      children: [
        n(s, {
          w: { base: "375px", md: "1/3%" },
          bg: "orange.400",
          p: "60px",
          borderTopLeftRadius: 10,
          borderTopRightRadius: { base: 10, lg: "none" },
          borderBottomLeftRadius: { base: "none", lg: 10 },
          alignItems: "flex-start",
          spacing: 8,
          children: [
            e(l, { src: x, alt: "sedan", w: "90px" }),
            e(t, {
              fontSize: "4xl",
              fontWeight: "bold",
              color: "white",
              children: "Sedans",
            }),
            e(t, {
              color: "white",
              lineHeight: "1.8",
              children:
                "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
            }),
            e(d, {
              variant: "outline",
              rounded: "full",
              color: "white",
              _hover: "none",
              _focus: { boxShadow: "none" },
              children: "Learn More",
            }),
          ],
        }),
        n(s, {
          w: { base: "375px", md: "1/3%" },
          bg: "green.400",
          p: "60px",
          alignItems: "flex-start",
          spacing: 8,
          children: [
            e(l, { src: y, alt: "suvs", w: "90px" }),
            e(t, {
              fontSize: "4xl",
              fontWeight: "bold",
              color: "white",
              children: "SUVs",
            }),
            e(t, {
              color: "white",
              lineHeight: "1.8",
              children:
                "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
            }),
            e(d, {
              variant: "outline",
              rounded: "full",
              color: "white",
              _hover: "none",
              _focus: { boxShadow: "none" },
              children: "Learn More",
            }),
          ],
        }),
        n(s, {
          w: { base: "375px", md: "1/3%" },
          bg: "green.700",
          p: "60px",
          borderTopRightRadius: { base: "none", lg: 10 },
          borderBottomLeftRadius: { base: 10, lg: "none" },
          borderBottomRightRadius: 10,
          alignItems: "flex-start",
          spacing: 8,
          children: [
            e(l, { src: v, alt: "luxury", w: "90px" }),
            e(t, {
              fontSize: "4xl",
              fontWeight: "bold",
              color: "white",
              children: "Luxury",
            }),
            e(t, {
              color: "white",
              lineHeight: "1.8",
              children:
                "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
            }),
            e(d, {
              variant: "outline",
              rounded: "full",
              color: "white",
              _hover: "none",
              _focus: { boxShadow: "none" },
              children: "Learn More",
            }),
          ],
        }),
      ],
    }),
  });
}
var L = h({ styles: { global: { body: { bg: "gray.100" } } } });
g.render(
  e(p.StrictMode, { children: e(b, { theme: L, children: e(w, {}) }) }),
  document.getElementById("root")
);
