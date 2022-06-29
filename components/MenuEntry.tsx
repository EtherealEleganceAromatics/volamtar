/** @jsx h */
import { h } from "preact";
import { useMemo } from "preact/hooks";

export interface MenuEntryProps {
  name: string;
  link: {
    target: string;
    internal: boolean;
  };
  subItems?: MenuEntryProps[];
}

export function MenuEntry({ name, link, subItems }: MenuEntryProps) {
  const subItemsCmp = useMemo(() => subItems?.map(MenuEntry) ?? [], subItems);

  return (
    <div class="menu-entry-wrapper">
      <a href={link.target}>{name}</a>
    </div>
  );
}
