import { Calendario } from "../components/calendario/calendario";
import { CalendarItem } from "../components/calendario/item";
import { Header } from "../components/header/header";

export default function CalendarPage() {
  return (
    <div className="w-full flex flex-col h-full">
      <Header />
      <main className="flex flex-1 justify-center items-center w-full h-full px-9 py-4 pt-5">
        <div className="bg-gray-100 w-full h-full rounded-t-md flex flex-col gap-4 border-2 border-gray-300 md:flex-row md:gap-0 ">
          <div className="w-full h-full transition-all duration-1000">
            <div className="w-full h-18 text-white bg-[rgb(78,183,141)] rounded-t-md p-4 flex items-center">
              <p className="text-lg font-bold">Calendário</p>
            </div>
            <Calendario>
              <CalendarItem
                isCurrent={false}
                title={"De 20/03 até as 15h do dia 02/04/2024"}
                content={
                  "Solicitação para redução da taxa do Vestibulinho e envio por meio digital, via upload, da documentação comprobatória (vestibulinhoetec.com.br)"
                }
                size={"full"}
              />
              <CalendarItem
                title={"De 04/04 até as 15h do dia 09/05/2024"}
                content={
                  "Inscrições para o Processo Seletivo (vestibulinhoetec.com.br) - Valor da taxa R$40,00"
                }
                size={"full"}
              />

              <CalendarItem
                title={"09/04/2024, a partir das 15h"}
                content={
                  "Divulgação do resultado da solicitação de redução da taxa de inscrição (vestibulinhoetec.com.br)"
                }
                size={"full"}
              />
              <CalendarItem
                title={
                  "De 09/04, a partir das 15h até as 15h do dia 09/05/2024"
                }
                content={
                  "Inscrição para o candidato beneficiado com a redução da taxa de inscrição (vestibulinhoetec.com.br)"
                }
                size={"full"}
              />
              <CalendarItem
                isCurrent={false}
                title={"De 10/04 até 11/04/2024"}
                content={
                  "Prazo para interposição de recurso para os candidatos que tiveram a solicitação de redução da taxa de inscrição indeferida (vestibulinhoetec.com.br)"
                }
                size={"full"}
              />
              <CalendarItem
                title={"16/04/2024, a partir das 15h"}
                content={
                  "Divulgação da análise dos recursos de redução da taxa de inscrição (vestibulinhoetec.com.br)"
                }
                size={"full"}
              />
              <CalendarItem
                isCurrent={false}
                title={"05/06/2024, a partir das 15h"}
                content={
                  "Divulgação dos locais de Exame (vestibulinhoetec.com.br)"
                }
                size={"full"}
              />
              <CalendarItem
                isCurrent={false}
                title={"09/06/2024 às 13h30"}
                content={
                  "Exame - Provas do Vestibulinho 2º SEMESTRE 2024 às 13h30"
                }
                size={"full"}
              />
              <CalendarItem
                isCurrent={false}
                title={"12/06/2024, a partir das 15h"}
                content={
                  "Divulgação dos gabaritos oficiais no site vestibulinhoetec.com.br"
                }
                size={"full"}
              />

              <CalendarItem
                isCurrent={false}
                title={"28/06/2024, a partir das 15h"}
                content={
                  "Divulgação da classificação geral dos cursos com prova de aptidão e da convocação para a prova de aptidão (vestibulinhoetec.com.br) Fase específica para os cursos com prova de aptidão (Canto, Dança, Regência e Teatro)"
                }
                size={"full"}
              />
              <CalendarItem
                isCurrent={false}
                title={"10/07/2024, a partir das 15h"}
                content={
                  "Divulgação da lista de classificação geral dos demais cursos e do resultado da prova de aptidão"
                }
                size={"full"}
              />
              <CalendarItem
                title={"Valor da taxa de inscrição"}
                content={"R$ 40,00 (quarenta reais)"}
                size={"full"}
              />
            </Calendario>
          </div>
        </div>
      </main>
    </div>
  );
}
