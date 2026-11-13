"use client";

import { useEffect } from "react";

const homeRevealSelector = [
  ".hero-copy",
  ".hero-foot",
  ".intro h2",
  ".intro-visual",
  ".intro > p",
  ".career-area .head",
  ".career-grid .career",
  ".benefit-copy",
  ".benefit-grid .benefit",
  ".contact-copy",
  ".contact .map",
].join(",");

export default function HomeMotion() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(homeRevealSelector);
    if (!targets.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    targets.forEach((element) => element.setAttribute("data-home-reveal", ""));
    document.documentElement.dataset.homeMotion = "ready";

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -32px 0px" });

    targets.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      delete document.documentElement.dataset.homeMotion;
      targets.forEach((element) => {
        element.removeAttribute("data-home-reveal");
        element.classList.remove("is-visible");
      });
    };
  }, []);

  return null;
}
