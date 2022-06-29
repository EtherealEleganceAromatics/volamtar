/** @jsx h */
import { h } from "preact";
import { useCallback, useState } from "preact/hooks";
import { PopUpMenuProps } from "./PopUpMenu.tsx";

export interface PopUpMenuButtonProps {
  menu: PopUpMenuProps;
}

export function PopUpMenuButton({ menu }: PopUpMenuButtonProps) {
  const [showPopUp, setShowPopUp] = useState(false);

  const clickHandler = useCallback(() => setShowPopUp(!showPopUp), [showPopUp]);

  const buttonSrc = showPopUp ? "closed" : "open";

  return (
    <div class="pop-up-menu-button">
      <button onClick={clickHandler}>
        <img src={buttonSrc}></img>
      </button>
    </div>
  );
}
