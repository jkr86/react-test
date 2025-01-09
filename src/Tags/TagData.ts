import { TagType } from "./TagType";

export const summer: TagType = {
  id: "summer",
  name: {
    fr: "été",
    en: "summer",
  },
  type: "saison",
  color: "yellow",
};

export const vegan: TagType = {
  id: "vegan",
  name: {
    fr: "vegan",
    en: "vegan",
  },
  type: "diet",
  color: "green",
};

export const appetizer: TagType = {
  id: "appetizer",
  name: {
    fr: "entrée",
    en: "appetizer",
  },
  type: "plateType",
  color: "purple",
};

export const dessert: TagType = {
  id: "dessert",
  name: {
    fr: "dessert",
    en: "dessert",
  },
  type: "plateType",
  color: "#e320bd",
};

export const autumn: TagType = {
  id: "autumn",
  name: {
    fr: "automne",
    en: "autumn",
  },
  type: "saison",
  color: "orange",
};

export const winter: TagType = {
  id: "winter",
  name: {
    fr: "hiver",
    en: "winter",
  },
  type: "saison",
  color: "blue",
};

export const drink: TagType = {
  id: "drink",
  name: {
    fr: "boisson",
    en: "drink",
  },
  type: "plateType",
  color: "#0074D9",
};

export const healthy: TagType = {
  id: "healthy",
  name: {
    fr: "sain",
    en: "healthy",
  },
  type: "diet",
  color: "#2ECC40",
};

export const tropical: TagType = {
  id: "tropical",
  name: {
    fr: "tropical",
    en: "tropical",
  },
  type: "flavor",
  color: "#FF851B",
};


export const tagList: TagType[] = [
  summer,
  winter,
  dessert,
  appetizer,
  autumn,
  vegan,
  drink,
  healthy,
];
