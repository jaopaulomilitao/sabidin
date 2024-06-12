"use client";

import { useRef, useState } from "react";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { LuDoorOpen } from "react-icons/lu";
import FlashCard from "../../components/FlashCard/FlashCard";
import flashcardsData from "../../../public/data/flashcard.json";
import NavBar from "@/components/NavBar/NavBar";

export default function Modules() {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // multiplicador para velocidade de rolagem
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleClickBack = () => {
    router.push("/modules");
  };

  return (
    <>
      <main className="flex flex-col items-center w-full h-screen px-10 lg:px-28 py-4 md:py-8 lg:py-8 bg-baseWhite">
        <NavBar></NavBar>
        <div
          className="w-full flex justify-start"
          style={{ marginLeft: "60px" }}
        >
          <Button
            className="w-[240px] h-[48px] bg-baseGreen text-white font-semibold flex items-center"
            onClick={handleClickBack}
          >
            <LuDoorOpen className="mr-2 text-sm" />
            Voltar para o módulo
          </Button>
        </div>

        <div className="flex flex-col gap-4 items-center bg-baseWhite p-4 rounded-3xl">
          <div className="flex flex-col gap-4 items-center bg-baseWhite p-4">
            <p className="font-semibold text-baseBlue tracking-wider text-lg">
              APRENDA OS PRINCIPAIS CONCEITOS SOBRE
            </p>
            <div className="font-extrabold text-baseBlue text-3xl mt-0">
              O QUE É DINHEIRO?
            </div>
            <p className="font-semibold text-baseBlue tracking-wider text-lg">
              COM OS SEUS FLASHCARDS
            </p>
          </div>
        </div>

        <div
          className="w-full overflow-x-auto"
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex gap-8" style={{ minWidth: "fit-content" }}>
            {flashcardsData.map((flashcard, index) => (
              <FlashCard
                key={index}
                imageSrc={flashcard.imageSrc}
                imageAlt={`Ilustração de ${flashcard.title}`}
                backText={flashcard.backText}
                title={flashcard.title}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
