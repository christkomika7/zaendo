import { useEffect, useLayoutEffect, useState } from "react";

export function useWidth() {
  const [width, setWidth] = useState(0);

  function resize() {
    setWidth(window.innerWidth);
  }

  useLayoutEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return width;
}
