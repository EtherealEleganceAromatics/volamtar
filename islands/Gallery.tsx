/** @jsx h */
/** @jsxFrag h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

function NoImageFound() {
  return <div>No image found</div>;
}

interface GalleryImageProps {
  url: string;
}

function GalleryImage({ url }: GalleryImageProps) {
  return (
    <div class="photo-wrapper">
      <img src={url}></img>
    </div>
  );
}

export interface GalleryProps {
  urls: string[];
}

export default function Gallery({ urls }: GalleryProps) {
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const nextPhoto = () =>
    setPhotoIndex(photoIndex + 1 >= urls.length ? 0 : photoIndex + 1);
  const prevPhoto = () =>
    setPhotoIndex(photoIndex - 1 < 0 ? urls.length - 1 : photoIndex - 1);
  const hasPhotos = urls.length > 0;

  return (
    <div className="gallery-wrapper">
      {urls.length > 0
        ? (
          <>
            <GalleryImage url={urls[photoIndex]} />
            <Button action={nextPhoto} iconUrl={""} />
            <Button action={prevPhoto} iconUrl={""} />
          </>
        )
        : <NoImageFound />}
    </div>
  );
}
