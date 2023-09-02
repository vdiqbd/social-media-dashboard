import { SocialMedias } from "@/types/general";

export const formatNumber = (number: number): string => {
  const formatter = new Intl.NumberFormat();

  return formatter.format(number);
};

export const getCardDetails = (name: SocialMedias) => {
  if (name === "youtube") return ["bg-youtube", "SUBSCRIBERS"];
  else if (name === "facebook") return ["bg-facebook", "FOLLOWERS"];
  else if (name === "twitter") return ["bg-twitter", "FOLLOWERS"];
  else if (name === "instagram")
    return [
      "bg-gradient-to-r from-instagram-one to-instagram-two",
      "FOLLOWERS",
    ];
  else if (name === "tiktok")
    return ["bg-gradient-to-r from-tiktok-one to-tiktok-two", "FOLLOWERS"];

  return [""];
};
