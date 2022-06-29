/** @jsx h */
import { h } from "preact";

export interface LogoProps {
  imgUrl: string;
  alt: string;
}

export function Logo({ alt, imgUrl }: LogoProps) {
  return (
    <div className="logo-wrapper">
      <img src={imgUrl} alt={alt}></img>
    </div>
  );
}
