// components/CardSubtopico.tsx
"use client";

import { Button } from "@nextui-org/button";
import { FiArrowUpRight } from "react-icons/fi";
import { IconType } from "react-icons";

interface CardSubtopicoProps {
  icon: IconType;
  title: string;
  onClick: () => void;
}

export default function CardSubtopico({
  icon: Icon,
  title,
  onClick,
}: CardSubtopicoProps) {
  return (
    <div className="flex flex-col justify-between w-[280px] h-[280px] bg-baseBlue rounded-3xl p-4">
      <div className="flex items-center">
        <div className="w-[50px] h-[50px] bg-white rounded-[10px] flex items-center justify-center">
          <Icon className="text-black text-2xl" />
        </div>
      </div>
      <div className="flex flex-col flex-grow items-start justify-center">
        <p className="text-xl text-white font-extrabold text-start">{title}</p>
      </div>
      <div className="flex justify-center mt-4">
        <Button
          className="w-[240px] h-[48px] bg-baseGreen text-black font-semibold flex items-center justify-center"
          onClick={onClick}
        >
          <FiArrowUpRight className="mr-2 text-black text-2xl" />
          Aprender
        </Button>
      </div>
    </div>
  );
}
