"use client";

import Image from "next/image";
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = () => {
    setModalContent(
      "Por enquanto estamos na versão de demonstração, mas em breve você poderá criar sua propria conta!"
    );
    onOpen();
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username === "usuario" && password === "12345") {
      router.push("/content");
    } else {
      alert("Nome de usuário ou senha incorretos");
    }
  };

  return (
    <main className="flex flex-col items-center w-full h-screen px-10 lg:px-28 py-4 md:py-8 lg:py-8 bg-baseWhite">
      <div className="w-full flex justify-start">
        <Image
          src="/img/logo-sabidin-horizontal.svg"
          alt="Logo"
          width={176}
          height={32}
        />
      </div>

      <div className="w-full flex flex-col md:flex-row gap-4 flex-grow justify-center items-center md:px-16 xl:px-56">
        <div className="w-full md:w-1/2 p-4">
          <Image
            src="/img/ilustracao-login.svg"
            alt="Ilustração de login"
            width={390}
            height={246}
          />
        </div>

        <div className="w-full md:w-1/2 p-4 flex flex-col items-center gap-5">
          <p className="text-center font-semibold text-xl sora">
            O jeito mais prático e rápido de entrar no mundo da economia!{" "}
          </p>
          <Input
            variant="flat"
            label="usuário"
            placeholder="insira aqui seu nome de usuário"
            onChange={(e) => setUsername(e.target.value)}
            classNames={{
              label: "text-white",
              inputWrapper: "bg-white",
              input: [],
            }}
          />

          <Input
            type="password"
            variant="flat"
            label="senha"
            placeholder="insira aqui sua senha"
            onChange={(e) => setPassword(e.target.value)}
            classNames={{
              label: "text-white",
              inputWrapper: "bg-white",
              input: [],
            }}
          />
          <Button
            className="w-full sm:w-72 bg-baseYellow h-12 text-white font-semibold"
            onClick={handleLogin}
          >
            Entrar
          </Button>
          <p className="text-center text-xs">
            ainda não tá aprendendo?{" "}
            <span
              className="cursor-pointer font-bold text-baseGreen"
              onClick={handleOpenModal}
            >
              se inscreva agora
            </span>
          </p>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} backdrop="blur">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">se liga ai!</ModalHeader>
          <ModalBody className="flex flex-row gap-4">
            <Image
              src="img/betinho-perfil/mao-pra-cima.svg"
              alt="Betinho"
              width={130}
              height={130}
            />
            <div className="flex flex-col">
              <p
                className="font-xs font-black text-baseBlue"
                style={{ fontSize: "10px" }}
              >
                BETINHO:
              </p>
              <p>{modalContent}</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={onClose}>
              ah, então beleza 🤨
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </main>
  );
}
