import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getCharacters } from "../services/mangaServices";
import useAuth from "../hooks/useAuth";
import { Button, Input } from "@material-tailwind/react";

const GamePage = () => {
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const id = location?.state?.id;
  const [characters, setCharacters] = useState([]);
  const [time, setTime] = useState(10);
  const [score, setScore] = useState(10);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    getCharcatersByManga();
    // timer();
  }, []);

  const getCharcatersByManga = async () => {
    const response = await getCharacters(auth?.token, id);
    if (response?.error) {
      console.log(response?.error);
    }
    setCharacters(response?.characters);
    console.log(characters);
  };
  const timer = () => {
    var t = 10;
    setInterval(() => {
      t > 0 ? t-- : (t = 10);
      setTime(t);
    }, 1000);
  };
  return (
    <div className="flex h-[calc(100vh_-_58px)] w-full flex-col items-center justify-center bg-[#101529]">
      <div className="mb-10 flex h-20 w-full items-center justify-between">
        <p className="flex h-full w-24 flex-col items-center justify-center text-2xl">
          <span>Time</span>
          <span onClick={() => alert(time)}>{time}</span>
        </p>
        <p className="flex h-full w-24 flex-col items-center justify-center text-2xl">
          <span>score</span>
          <span>100</span>
        </p>
      </div>
      <div className="h-[50vh] w-full px-10">
        <div className="mx-auto flex h-full w-4/5 space-x-5 bg-transparent">
          <div className="min-w-96 h-full w-1/3 bg-black">
            <img
              src="https://res.cloudinary.com/dumxkdcvd/image/upload/v1675443425/characters_naruto/Naruto_Partie_I_fscskh.webp"
              alt=""
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="flex w-2/3 flex-col justify-evenly py-10 pr-5">
            <div className="">
              <h3 className="text-2xl font-black">Description</h3>
              <p className="text-justify">{characters[current]?.description}</p>
            </div>
            <div className="flex w-full space-x-5">
              <Input label="Enter the chararcter's name" />
              <Button onClick={() => setCurrent((c) => c + 1)}>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
