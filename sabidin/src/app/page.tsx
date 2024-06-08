import Image from "next/image";
import Link from "next/link";
import { Button, ButtonGroup } from "@nextui-org/button";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 justify-center items-center w-screen h-screen font-sora">
      <span className="text-center font-black text-5xl">
        Tudo pronto para iniciar o{" "}
        <span className="text-baseGreen">SabiDin!</span>
      </span>
      <Link href="/content">
        <Button className="bg-baseYellow text-white px-8 py-2 rounded-full">
          Ir para conteúdo
        </Button>
      </Link>
    </main>
  );
}
