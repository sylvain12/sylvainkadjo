import { INavigationLinkItem } from "./interfaces";

export const navMenuItems: INavigationLinkItem[] = [
  {
    name: "Home",
    url: "/",
    isActive: true,
  },
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "About",
    url: "/about",
  },
];

export const socialsLinks = [
  {
    label: "Github",
    icon: "uit:github-alt",
    link: "https://github.com/sylvain12",
  },
  {
    label: "Linkedin",
    icon: "iconoir:linkedin",
    link: "https://www.linkedin.com/in/sylvain-kadjo-374a4911b/",
  },
  {
    label: "Instagram",
    icon: "ph:instagram-logo-thin",
    link: "https://www.instagram.com/sylvainka12/",
  },
  {
    label: "Dribble",
    icon: "ph:dribbble-logo-thin",
    link: "https://dribbble.com/sylvain12",
  },
];

export const navSocialsLinks = [
  {
    label: "Github",
    icon: "uit:github-alt",
    link: "https://github.com/sylvain12",
  },
  {
    label: "Linkedin",
    icon: "iconoir:linkedin",
    link: "https://www.linkedin.com/in/sylvain-kadjo-374a4911b/",
  },
];

export const supabaseErrorMessage = {
  "23505": "You're already subscribed! Thanks for your interest.",
};

export const supabaseDuplicateValueCode = "23505";
