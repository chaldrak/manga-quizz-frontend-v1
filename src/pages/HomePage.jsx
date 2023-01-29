import React from "react";
import BaseCard from "../components/BaseCard";

const menu = [
  {
    id: 1,
    name: "naruto",
    image:
      "https://res.cloudinary.com/dumxkdcvd/image/upload/v1673436818/anime_logo_naruto_en_wxn0f9.webp",
  },
  {
    id: 2,
    name: "naruto-shippuden",
    image:
      "https://res.cloudinary.com/dumxkdcvd/image/upload/v1673437369/anime_logo_naruto_s_en_exnp65.webp",
  },
  {
    id: 3,
    name: "boruto",
    image:
      "https://res.cloudinary.com/dumxkdcvd/image/upload/v1673437370/anime_logo_boruto_en_ftmqjh.webp",
  },
];

const HomePage = () => {
  return (
    <div className="h-[calc(100vh_-_58px)] w-full bg-[#101529]">
      <div className="flex h-full w-full items-center justify-evenly">
        {menu.map((item, index) => (
          <BaseCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
