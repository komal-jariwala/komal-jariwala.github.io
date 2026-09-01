import type { PointerEvent } from "react";

/**
 * Publishes the cursor position as `--mx` / `--my` on the hovered element so
 * `.spotlight` can paint a glow that tracks it.
 */
export const handleSpotlight = <T extends HTMLElement>(
  event: PointerEvent<T>
) => {
  const element = event.currentTarget;
  const rect = element.getBoundingClientRect();
  element.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  element.style.setProperty("--my", `${event.clientY - rect.top}px`);
};
