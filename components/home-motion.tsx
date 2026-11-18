"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

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
  ".news-empty-card",
  ".contact .map",
  ".contact-copy",
  ".footer > div",
  ".foot-bottom",
  "main:not(.career-detail) > section",
  "main:not(.career-detail) > article",
  "main:not(.career-detail) > article > img",
  "main:not(.career-detail) > article > div > *",
  "main:not(.career-detail) > div[class] > header",
  "main:not(.career-detail) > div[class] > section",
  "main:not(.career-detail) > div[class] > article",
  "main:not(.career-detail) > div[class] > div[class]",
  "main:not(.career-detail) > div[class] > ul > li",
  "main:not(.career-detail) > section > ul > li",
].join(",");

export default function HomeMotion() {
  const pathname = usePathname();

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
  }, [pathname]);

  return null;
}
