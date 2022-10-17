import { FC } from "react";

type LinkProps = {
  children: string;
  href: string;
};

export const Link: FC<LinkProps> = ({ children, href }) => (
  <a className="hover:underline cursor-pointer" href={href}>
    {children}
  </a>
);
