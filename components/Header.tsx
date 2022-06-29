/** @jsx h */
import { h } from "preact";
import { Logo, LogoProps } from "./Logo.tsx";
import { PopUpMenuProps } from "./PopUpMenu.tsx";
import { PopUpMenuButton } from "./PopUpMenuButton.tsx";

export interface HeaderProps {
  logo: LogoProps;
  menu: PopUpMenuProps;
}

export function Header({ logo, menu }: HeaderProps) {
  return (
    <div className="header-wrapper">
      <Logo {...logo} />
      <PopUpMenuButton menu={menu} />
    </div>
  );
}
