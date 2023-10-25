import React, { useEffect } from "react";

/**縦スクロールを横スクロールに変換するhooks */
export const useHorizontalScroll = ({
  ref,
}: {
  ref: React.RefObject<HTMLElement>;
}) => {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const scrollHandler = (e: WheelEvent) => {
      // Note: 縦スクロールの場合は何もしない
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;

      e.preventDefault();
      element.scrollLeft += e.deltaY;
    };

    element.addEventListener("wheel", scrollHandler, {
      passive: false,
    });

    return () => {
      element.removeEventListener("wheel", scrollHandler);
    };
  }, []);
};
