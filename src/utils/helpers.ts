import { SocialMedias } from "@/types/general";

export const formatNumber = (number: number): string => {
  const formatter = new Intl.NumberFormat();

  return formatter.format(number);
};
