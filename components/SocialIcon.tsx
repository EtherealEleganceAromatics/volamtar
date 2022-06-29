/** @jsx h */
import { h } from "preact";

export interface SocialIconProps {
  icon: string;
  name: string;
  target: string;
}

export function SocialIcon({ icon, name, target }: SocialIconProps) {
  return (
    <a href={target}>
      <img src={icon} alt={name}></img>
    </a>
  );
}
