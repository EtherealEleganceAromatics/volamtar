/** @jsx h */
import { h } from "preact";
import { SocialIcon, SocialIconProps } from "./SocialIcon.tsx";
import { JSX } from "preact";

export interface FooterProps {
  social: SocialIconProps[];
  content?: JSX.Element;
  copyright?: string;
}

export function Footer({ social, content, copyright }: FooterProps) {
  return (
    <div>
      {content || null}
      <div className="footer-social-wrapper">
        {social.map((props) => <SocialIcon key={props.name} {...props} />)}
      </div>
      {copyright || null}
    </div>
  );
}
