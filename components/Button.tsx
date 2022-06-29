/** @jsx h */
import { h } from "preact";

export interface ButtonProps {
  action: () => unknown;
  iconUrl: string;
}

export function Button({ action, iconUrl }: ButtonProps) {
  return (
    <div onClick={action}>
      <img src={iconUrl}></img>
    </div>
  );
}
