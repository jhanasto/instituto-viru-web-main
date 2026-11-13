"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".hero-copy",
  ".hero-foot",
  ".intro-title",
  ".intro-visual",
  ".intro > p",
  ".career-area .head",
  ".career-grid .career",
  ".news .head",
  ".news-card",
  ".contact .map",
  ".contact-copy",
  ".footer > div",
  ".foot-bottom",
].join(",");

export default function HomeMotion() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      document.documentElement.style.removeProperty("scroll-behavior");
    });
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const targets = document.querySelectorAll<HTMLElement>(revealSelectors);
    targets.forEach((element) => element.setAttribute("data-home-reveal", ""));
    document.documentElement.dataset.homeMotion = "ready";

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -48px 0px" });

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
