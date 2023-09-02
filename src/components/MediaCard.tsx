import { MediaCardProps, SocialMedias } from "@/types/general";
import { formatNumber } from "@/utils/helpers";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";

const MediaCard = ({ count, name, username }: MediaCardProps) => {
  const getCardDetails = (name: SocialMedias) => {
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

  return (
    <div className="w-full h-auto relative overflow-hidden min-w-[12rem] max-w-[14rem] p-6 py-6.5 bg-gray-two gap-4 flex items-center justify-center flex-col rounded-lg">
      <div
        className={`w-full absolute p-0.5 top-0 ${getCardDetails(name)[0]}`}
      ></div>

      <div className="flex items-center justify-center gap-2">
        <Icon name={name} />
        <p className="text-gray-one">@{username}</p>
      </div>

      <div className="flex items-center justify-center flex-col">
        <p className="text-white font-bold text-2xl md:text-3xl">
          {formatNumber(parseInt(count))}
        </p>
        <p className="text-gray-one tracking-[0.3rem]">
          {getCardDetails(name)[1]}
        </p>
      </div>
    </div>
  );
};

const Icon = ({ name }: { name: SocialMedias }) => {
  if (name === "facebook")
    return <AiFillFacebook className="w-5 h-5 text-facebook" />;
  if (name === "youtube")
    return <AiFillYoutube className={`w-5 h-5 text-youtube`} />;
  if (name === "twitter")
    return <AiOutlineTwitter className="w-5 h-5 text-twitter" />;
  if (name === "instagram")
    return (
      <AiFillInstagram className="w-5 h-5 rounded-md bg-gradient-to-r from-instagram-one to-instagram-two" />
    );
  if (name === "tiktok")
    return (
      <BiLogoTiktok className="w-5 h-5 rounded-md bg-gradient-to-br from-tiktok-one to-tiktok-two" />
    );

  return <></>;
};

export default MediaCard;
