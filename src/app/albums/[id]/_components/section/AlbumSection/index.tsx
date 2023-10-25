import { AlbumSectionProps } from "./type";
import { AlbumSectionConrainer } from "./AlbumContainer";
import { AlbumSectionList } from "./AlbumList";
export const AlbumSection = ({ albums }: AlbumSectionProps) => {
  return (
    <AlbumSectionConrainer>
      {/** render as server-component */}
      <AlbumSectionList items={albums.items} />
    </AlbumSectionConrainer>
  );
};
