/** @jsx h */
import { h } from "preact";
import { RenderableProps } from "preact";
import { Footer, FooterProps } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";
import { LogoProps } from "../components/Logo.tsx";
import { PopUpMenuProps } from "../components/PopUpMenu.tsx";

const LOGO_CONFIGURATION: LogoProps = {
  imgUrl: "",
  alt: "Ethereal Elegance Design",
};

const MENU_CONFIGURATION: PopUpMenuProps = {
  entries: [{
    link: {
      internal: true,
      target: "/",
    },
    name: "Home",
  }, {
    link: {
      internal: true,
      target: "/about",
    },
    name: "About",
  }, {
    link: {
      internal: true,
      target: "/portfolio",
    },
    name: "Portfolio",
  }],
};

const FOOTER_CONFIGURATION: FooterProps = {
  social: [],
};

export default function DefaultPageContainer(
  { children }: RenderableProps<unknown>,
) {
  return (
    <div>
      <Header logo={LOGO_CONFIGURATION} menu={MENU_CONFIGURATION} />
      {children}
      <Footer {...FOOTER_CONFIGURATION} />
    </div>
  );
}
