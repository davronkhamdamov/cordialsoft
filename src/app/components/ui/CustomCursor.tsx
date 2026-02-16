import React, { useEffect, useRef } from "react";

type Point = { x: number; y: number };

export default function Cursor(): React.ReactElement {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const outlineRef = useRef<HTMLDivElement | null>(null);

  const rafRef = useRef<number | null>(null);
  const targetRef = useRef<Point>({ x: 0, y: 0 });
  const posRef = useRef<Point>({ x: 0, y: 0 });

  const visibleRef = useRef(false);
  const enlargedRef = useRef(false);

  const setVisibility = (visible: boolean) => {
    visibleRef.current = visible;
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    dot.style.opacity = visible ? "1" : "0";
    outline.style.opacity = visible ? "1" : "0";
  };

  const setSize = (enlarged: boolean) => {
    enlargedRef.current = enlarged;
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    if (enlarged) {
      dot.style.transform = "translate(-50%, -50%) scale(0.7)";
      outline.style.transform = "translate(-50%, -50%) scale(2.2)";
    } else {
      dot.style.transform = "translate(-50%, -50%) scale(1)";
      outline.style.transform = "translate(-50%, -50%) scale(1)";
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    // start from center
    const start = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    targetRef.current = start;
    posRef.current = start;

    const onMove = (e: MouseEvent) => {
      // IMPORTANT for position: fixed
      targetRef.current = { x: e.clientX, y: e.clientY };

      const dot = dotRef.current;
      if (dot) {
        dot.style.left = `${targetRef.current.x}px`;
        dot.style.top = `${targetRef.current.y}px`;
      }

      if (!visibleRef.current) setVisibility(true);
    };

    const onEnter = () => setVisibility(true);
    const onLeave = () => setVisibility(false);
    const onDown = () => setSize(true);
    const onUp = () => setSize(false);

    const animate = () => {
      const outline = outlineRef.current;
      if (outline) {
        const { x, y } = posRef.current;
        const { x: tx, y: ty } = targetRef.current;

        const nx = x + (tx - x) * 0.18;
        const ny = y + (ty - y) * 0.18;

        posRef.current = { x: nx, y: ny };
        outline.style.left = `${nx}px`;
        outline.style.top = `${ny}px`;
      }
      rafRef.current = window.requestAnimationFrame(animate);
    };

    // Link hover enlarge (and cleanup)
    const linkOver = () => setSize(true);
    const linkOut = () => setSize(false);
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("a"));
    links.forEach((a) => {
      a.addEventListener("mouseover", linkOver);
      a.addEventListener("mouseout", linkOut);
    });

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);

      links.forEach((a) => {
        a.removeEventListener("mouseover", linkOver);
        a.removeEventListener("mouseout", linkOut);
      });

      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={outlineRef} id="cursor-dot-outline" />
      <div ref={dotRef} id="cursor-dot" />
    </>
  );
}
