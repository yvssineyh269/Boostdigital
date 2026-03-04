import { Check } from "lucide-react";
import { LogoProps, MentuItem } from "./nav-types";

// NavBar
export const navbarLogo: LogoProps = {
  url: "/",
  src: "/bd-logo.png",
  alt: "BosstDigital-Logo",
  title: "BoostDigital",
};

export const navbarMenu: MentuItem[] = [
  { title: "Accueil", url: "/", id: "hero" },
  { title: "aboutus", url: "#", id: "aboutus" },
  { title: "mission", url: "#", id: "mission" },
  { title: "whatwecan", url: "#", id: "whatwecan" },
  { title: "completion", url: "#", id: "completion" },
];

// -- Hero Data
export const hero = [
  {
    title: "BoostDigital",
    description: "",
  },
];

// -- Contact Data
export const contact = [
  {
    title: "",
    description: "",
    phone: "+269 XXX XX XX",
    email: "",
    address: "Moroni, Ngazidja, Comores",
  },
];


export const pricing = [
  {
    title: "",
    description: "",
    price: "",
    // icon: <Check />
  }
]
