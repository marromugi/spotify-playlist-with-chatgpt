"use client";

import { Card } from "@/components/ui";
import { AlbumSectionContainerProps } from "./type";
import clsx from "clsx";
import { useHorizontalScroll } from "@/hooks/utils/elements";
import { useRef } from "react";
export const AlbumSectionConrainer = ({
  children,
}: AlbumSectionContainerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useHorizontalScroll({ ref });

  return (
    <Card className={clsx("tw-h-40", "tw-flex-shrink-0")}>
      <div
        className={clsx("tw-overflow-x-auto", "tw-scrollbar-hidden")}
        ref={ref}
      >
        {children}
      </div>
    </Card>
  );
};
