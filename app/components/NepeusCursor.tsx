"use client";

import { useEffect, useRef, useState } from "react";

const interactiveSelector =
  "a, button, input, textarea, select, summary, [role='button'], [data-cursor-interactive]";

export default function NepeusCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorImage, setCursorImage] = useState("");

  useEffect(() => {
    const source = new Image();

    source.onload = () => {
      const size = 96;
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d", { willReadFrequently: true });

      if (!context) return;

      canvas.width = size;
      canvas.height = size;
      context.drawImage(source, 0, 0, size, size);

      const pixels = context.getImageData(0, 0, size, size);

      for (let index = 0; index < pixels.data.length; index += 4) {
        const red = pixels.data[index];
        const green = pixels.data[index + 1];
        const blue = pixels.data[index + 2];
        const luminance = red * 0.2126 + green * 0.7152 + blue * 0.0722;
        const opacity = Math.max(0, Math.min(255, (237 - luminance) * 1.8));

        pixels.data[index] = 255;
        pixels.data[index + 1] = 255;
        pixels.data[index + 2] = 255;
        pixels.data[index + 3] = opacity;
      }

      context.putImageData(pixels, 0, 0);
      setCursorImage(canvas.toDataURL("image/png"));
    };

    source.src = "/nepeus-logo.png";
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const precisePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!cursor || !cursorImage || !precisePointer.matches) return;

    let frame = 0;
    let x = -40;
    let y = -40;

    document.body.classList.add("nepeus-cursor-enabled");

    const render = () => {
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      frame = 0;
    };

    const moveCursor = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      cursor.dataset.visible = "true";
      cursor.dataset.interactive = String(
        event.target instanceof Element && Boolean(event.target.closest(interactiveSelector))
      );

      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const hideCursor = () => {
      cursor.dataset.visible = "false";
    };

    const pressCursor = () => {
      cursor.dataset.pressed = "true";
    };

    const releaseCursor = () => {
      cursor.dataset.pressed = "false";
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });
    document.documentElement.addEventListener("mouseleave", hideCursor);
    window.addEventListener("blur", hideCursor);
    window.addEventListener("pointerdown", pressCursor, { passive: true });
    window.addEventListener("pointerup", releaseCursor, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      document.body.classList.remove("nepeus-cursor-enabled");
      window.removeEventListener("pointermove", moveCursor);
      document.documentElement.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("blur", hideCursor);
      window.removeEventListener("pointerdown", pressCursor);
      window.removeEventListener("pointerup", releaseCursor);
    };
  }, [cursorImage]);

  return (
    <div ref={cursorRef} className="nepeus-cursor" aria-hidden="true">
      {cursorImage ? <img src={cursorImage} alt="" draggable="false" /> : null}
    </div>
  );
}
