export type SocialMedias =
  | "facebook"
  | "twitter"
  | "youtube"
  | "instagram"
  | "tiktok";

export type MediaCardProps = {
  username: string;
  name: SocialMedias;
  count: string;
};
