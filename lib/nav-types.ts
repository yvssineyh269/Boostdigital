import { JSX } from "react";

export interface MentuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  item?: MentuItem[];
  id?: string;
}

export interface LogoProps {
  url: string;
  src: string;
  alt: string;
  title: string;
}
