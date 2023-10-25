import { Image } from "@/components/ui";
import { ROUTES } from "@/const/route";
import clsx from "clsx";
import Link from "next/link";
import { AlbumSectionListProps } from "./type";
export const AlbumSectionList = async ({
  items,
}: AlbumSectionListProps) => {
  return (
    <div className={clsx("tw-flex tw-items-center", "tw-gap-3")}>
      {items.map((a) => (
        <Link
          key={`album-section-list-${a.id}`}
          className={clsx("tw-relative tw-h-32", "tw-flex-shrink-0")}
          href={ROUTES.album(a.id)}
        >
          <Image
            src={a.images[0].url}
            alt={a.name}
            className={clsx(
              "tw-rounded",
              "tw-relative tw-h-full",
              "tw-flex-shrink-0",
            )}
          />
        </Link>
      ))}
    </div>
  );
};
