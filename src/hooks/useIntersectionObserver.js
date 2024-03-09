import React from "react";

export default function useIntersectionObserver({
  root,
  target,
  onIntersect,
  threshold = 0.0,
  rootMargin = "0px",
  enabled = true,
}) {
  React.useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        root: root && root.current,
        rootMargin,
        threshold,
      }
    );

    const el = target && target.current;
    // console.log("el", el);
    if (!el) {
      return;
    }

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [enabled, root, rootMargin, threshold, target, onIntersect]);
}