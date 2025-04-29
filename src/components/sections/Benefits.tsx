"use client";

import Divider from "../../../public/divider.svg";
import Image from "next/image";
import useScrollView from "@/hooks/useScrollView";
import { useRef } from "react";

const Benefits = () => {
  const animatedElementsRef = useRef<HTMLDivElement[]>([]);

  useScrollView({ animatedElementsRef });

  return (
    <div className="w-full overflow-hidden bg-zoho-beige">
      <div className="max-w-screen-xl mx-auto py-[60px] pb-[100px] sm:py-[90px] md:py-[115px] flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h2 className="benefits-title font-medium text-[14px] tracking-[5px] uppercase mb-[15px]">
            Soluções
          </h2>
          <Image src={Divider} alt="Divider" className="" />
        </div>

        <p
          ref={(el) => {
            if (el) animatedElementsRef.current.push(el);
          }}
          className="benefits-title py-4 font-normal pb-[60px] md:pb-[30px] text-[24px] sm:text-[34px] md:text-[45px]/13 text-center w-[320px] sm:w-[490px] md:w-[635px] mb-[12px] sm:mb-[52px] md:mb-[72px]"
        >
          Soluções Zoho que impulsionam o seu negócio
        </p>

        <div
          ref={(el) => {
            if (el) animatedElementsRef.current.push(el);
          }}
          className="benefits-box w-full flex flex-row flex-wrap justify-center gap-[70px] md:gap-[30px]"
        >
          <div className="w-full max-w-[400px] flex flex-col items-center gap-3 px-[30px] sm:px-[20px] md:px-[10px]">
            <Image src="/image1.svg" alt="Benefit 1" width={85} height={85} />
            <p className="text-center text-[16px] sm:text-[20px] font-medium mt-[10px] md:mt-[15px]">
              Implantação e customização
            </p>
            <p className="text-center text-[14px] sm:text-[16px] font-normal">
              Prepare sua operação com aplicativos Zoho personalizados para o
              seu segmento. Nosso time ajuda você a implantar e adaptar a Zoho
              às necessidades do seu negócio.
            </p>
          </div>

          <div className="w-full max-w-[400px] flex flex-col items-center gap-3 px-[30px] sm:px-[20px] md:px-[10px]">
            <Image src="/image2.svg" alt="Benefit 2" width={85} height={85} />
            <p className="text-center text-[16px] sm:text-[20px] font-medium mt-[10px] md:mt-[15px]">
              Automação de processos
            </p>
            <p className="text-center text-[14px] sm:text-[16px] font-normal">
              Automatize tarefas repetitivas e aumente a produtividade do seu
              time com fluxos de trabalho personalizados criados por nossos
              especialistas.
            </p>
          </div>

          <div className="w-full max-w-[400px] flex flex-col items-center gap-3 px-[30px] sm:px-[20px] md:px-[10px]">
            <Image src="/image3.svg" alt="Benefit 3" width={85} height={85} />
            <p className="text-center text-[16px] sm:text-[20px] font-medium mt-[10px] md:mt-[15px]">
              Integração com backend
            </p>
            <p className="text-center text-[14px] sm:text-[16px] font-normal">
              Integre a Zoho com outros sistemas e elimine a entrada manual de
              dados, facilitando o fluxo de dados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
