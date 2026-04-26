"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

/**
 * Count-up hook — animates a number from 0 to `to` once when the element scrolls into view.
 * Easing matches the global motion rhythm.
 */
export function useCountUp(to: number, duration = 2.2) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate(latest) {
        setValue(latest);
      },
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return { ref, value };
}
