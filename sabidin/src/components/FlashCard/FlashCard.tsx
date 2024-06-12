// components/FlashCard.tsx
import React, { useState } from "react";
import Image from "next/image";

interface FlashCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  backText: string; // Nova propriedade para o texto na parte de trás do flashcard
}

export default function FlashCard({
  imageSrc,
  imageAlt,
  title,
  backText,
}: FlashCardProps) {
  const [isFrontVisible, setIsFrontVisible] = useState(true);

  const toggleCardSide = () => {
    setIsFrontVisible(!isFrontVisible);
  };
  return (
    <>
      <div
        className={`cursor-pointer flex-col w-80 h-[448px] bg-baseBlue rounded-3xl p-6 front ${
          isFrontVisible ? "flex" : "hidden"
        }`}
        onClick={toggleCardSide}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={331}
          height={280}
          className="rounded-3xl"
        />
        <p className="text-2xl text-white font-extrabold flex items-center justify-center h-full">
          {title}
        </p>
      </div>
      <div
        className={`w-80 h-[448px] bg-white rounded-3xl p-6 back ${
          isFrontVisible ? "hidden" : "flex"
        }`}
        onClick={toggleCardSide}
      >
        <div className="text-base text-baseBlack font-medium flex items-start justify-center h-full leading-loose">
          <p>{backText}</p> {/* Utilize a propriedade backText aqui */}
        </div>
      </div>
    </>
  );
}
