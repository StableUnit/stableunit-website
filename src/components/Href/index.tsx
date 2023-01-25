import React from 'react';
import './styles.scss';
import cn from "classnames";

type HrefProps = {
  className?: string
  target?: string;
  href: string;
  text: string;
}

const Href = ({ target = "_blank", href, text, className }: HrefProps) => {
  return (
    <a target={target} href={href} className={cn("href", className)}>{text}</a>
  );
};

export default Href;
