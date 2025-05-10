export type LinksProp = {
  id: number;
  title: string;
};

export const links: LinksProp[] = [
  {
    id: 1,
    title: "home",
  },
  {
    id: 2,
    title: "countdown",
  },
  {
    id: 3,
    title: "about",
  },
  {
    id: 4,
    title: "services",
  },
  {
    id: 5,
    title: "promo",
  },
];

export type SelmCategories = {
  id: number;
  title: string;
};

export const categories: SelmCategories[] = [
  { id: 1, title: "selm consults" },
  { id: 2, title: "selm mentors" },
  { id: 3, title: "selm dev" },
  { id: 4, title: "selm ai" },
  { id: 5, title: "selm design" },
];
