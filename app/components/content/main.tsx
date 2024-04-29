"use client";

import { Box, Wrap } from "@chakra-ui/react";
import { Options } from "./options";
import {
  ArrowUpChart,
  Attendant,
  BarCodeScan,
  CheckedSheet,
  CircledQuestMark,
  ClockCalendar,
  FolderArrowDown,
  GraduationCap,
  MinusBalloonChat,
  Person,
  WritingSheet,
} from "@/app/assets/SVGsAssets";
import { useEffect, useState } from "react";
import { CalendarItem } from "../calendario/item";
import VLibras from "@djpfs/react-vlibras";

/* eslint-disable @next/next/no-img-element */
export function Main() {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(!isHover);
  };

  return (
    <main className="flex pt-44 flex-col gap-12 justify-center items-center h-full w-full px-9 py-4 ">
      <VLibras forceOnload />
      <div className="h-max w-full bg-gray-100 rounded-md flex flex-col gap-4 border-2 border-gray-300 drop-shadow-md shadow-[#5e5e5e58] md:flex-row md:gap-0 ">
        <div className="transition-all duration-1000">
          <div className="w-full h-18 text-white bg-[rgb(78,183,141)] rounded-t-md px-4 py-4 flex items-center md:rounded-tr-none">
            <p className="text-lg font-bold">Acesso rápido</p>
          </div>
          <Box className="w-full flex px-4 py-8 justify-center items-center">
            <Wrap
              spacing={4}
              justify={"center"}
              className="flex flex-col"
              gridColumn={"repeat(3, 1fr)"}
            >
              <Options
                Icon={MinusBalloonChat}
                href="https://www.vestibulinhoetec.com.br/reducao-resultado-e-recurso/"
                texto={"Redução - Resultado e Recurso"}
              />
              <Options
                Icon={WritingSheet}
                href="https://www.vestibulinhoetec.com.br/candidato/dados-acesso.asp"
                texto={"Iniciar Inscrição"}
              />
              <Options
                Icon={BarCodeScan}
                href="https://www.vestibulinhoetec.com.br/candidato/"
                texto={"2ª Via do Boleto"}
              />

              <Options
                Icon={Person}
                href="https://www.vestibulinhoetec.com.br/candidato/"
                texto={"Área do Candidato"}
              />

              <Options
                Icon={CheckedSheet}
                href="https://www.vestibulinhoetec.com.br/provas-gabaritos/"
                texto={"Provas e Gabaritos"}
              />

              <Options
                Icon={ClockCalendar}
                href="https://www.vestibulinhoetec.com.br/calendario/"
                texto={"Programação e Calendário"}
              />

              <Options
                Icon={GraduationCap}
                href="https://www.vestibulinhoetec.com.br/unidades-cursos/"
                texto={"Unidades e Cursos"}
              />

              <Options
                Icon={FolderArrowDown}
                href="https://www.vestibulinhoetec.com.br/documentos/"
                texto={"Manual do Candidato e Portarias"}
              />

              <Options
                Icon={CircledQuestMark}
                href="https://www.vestibulinhoetec.com.br/duvidas-frequentes/"
                texto={"Dúvidas Frequentes"}
              />

              <Options
                Icon={ArrowUpChart}
                href="https://www.vestibulinhoetec.com.br/demanda/"
                texto={"Demandas dos Cursos"}
              />

              <Options
                Icon={Attendant}
                href="https://www.vestibulinhoetec.com.br/fale-conosco/"
                texto={"Fale Conosco"}
              />
            </Wrap>
          </Box>
        </div>

        <div className="bg-[#f5f5f57d]">
          <div className="h-18 md:rounded-tr border-none bg-[#41a17b] rounded-none text-white p-4 flex flex-1 items-center">
            <p className="text-lg font-bold">Datas do Calendário</p>
          </div>
          <div className="w-max flex-1 flex flex-col py-8 px-5 gap-y-5">
            <CalendarItem
              isCurrent
              title="16/04/2024, a partir das 15h"
              content="Resultado Recursos Redução"
            />
            <CalendarItem
              isCurrent={false}
              label="16/04/2024, a partir das 15h"
              title="Divulgação dos locais de Exame"
              content="(vestibulinhoetec.com.br)"
            />
            <CalendarItem
              isCurrent={false}
              label="09/06/2024 às 13h30"
              title="Exame - Provas do Vestibulinho 2º SEMESTRE 2024"
            />
            <CalendarItem
              isCurrent={false}
              label="12/06/2024 a partir das 15h"
              title="Divulgação dos gabaritos oficiais"
            />
            <a
              className="hover:cursor-pointer text-[#4eb78d] text-xs font-semibold hover:text-purple-800"
              href="/calendario"
            >
              <span>Programação Completa</span>
            </a>
          </div>
        </div>
      </div>

      <div className="h-max w-full bg-gray-100 rounded-md drop-shadow-md shadow-[#5e5e5e58] border-2 border-gray-300 md:flex-row">
        <div className="w-full h-28 flex justify-center px-2 items-center">
          <p className="text-lg font-bold md:text-2xl">
            Saiba mais sobre as Etecs e o Centro Paula Souza
          </p>
        </div>
        <div className="w-full h-full p-4 flex items-center justify-center md:h-80 md:w-full">
          <div className="w-full h-full flex justify-center items-center text-white md:h-72 md:w-[32rem]">
            <iframe
            className="w-full h-full"
              src="https://www.youtube.com/embed/0CrI4vSHbFs"
              title="Conheça o Centro Paula Souza (CPS)."
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
