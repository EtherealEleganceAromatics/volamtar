/** @jsx h */
import { h } from "preact";
import { MenuEntry, MenuEntryProps } from "./MenuEntry.tsx";

export interface PopUpMenuProps {
  entries: MenuEntryProps[];
}

export function PopUpMenu({ entries }: PopUpMenuProps) {
  const menuEntries = entries.map(MenuEntry);

  return (
    <div class="pop-up-menu-wrapper">
      {menuEntries}
    </div>
  );
}
