"use client";

import Image from "next/image";
import Button from "../Button";
import { useRef } from "react";
import useScrollView from "@/hooks/useScrollView";

const Zohub = () => {
  const animatedElementsRef = useRef<HTMLDivElement[]>([]);

  useScrollView({ animatedElementsRef });

  return (
    <div className="w-full bg-zoho-white overflow-hidden">
      <div className="max-w-screen-xl gap-6 mx-auto px-5 flex flex-col md:flex-row items-center py-[60px] sm:py-[90px] md:py-[115px]">
        <div className="w-full md:max-w-[50%] flex flex-row justify-start">
          <div className="w-full mx-auto flex flex-col justify-start">
            <h3 className="block font-normal pb-[10px] md:pb-[20px] text-[24px] sm:text-[34px] md:text-[45px]/13 text-center md:text-left">
              Por que nos <span className="font-semibold">escolher</span>?
            </h3>
            <p className="text-center md:text-left text-[14px] sm:text-[16px] md:max-w-[550px] leading-[30px] mb-[20px]">
              Ajudamos empresas a obter o máximo das soluções Zoho, com
              consultoria estratégica, implementação eficiente e foco em
              resultados reais.
            </p>
            <div className="w-full flex flex-row justify-center md:justify-start mb-[10px] md:mb-[0px]">
              <Button to="/">Entre em contato</Button>
            </div>
          </div>
        </div>

        <div
          ref={(el) => {
            if (el) animatedElementsRef.current.push(el);
          }}
          className="zohub-box w-full md:max-w-[50%] md:pt-[20px] flex flex-row items-start"
        >
          <div className="w-full mx-auto">
            <ul className="flex flex-col gap-8 mx-[10px]">
              <li>
                <div className="flex flex-row gap-[15px] items-top">
                  <div>
                    <Image
                      src="/check-icon.svg"
                      alt="Check icon"
                      width={34}
                      height={26.31}
                      className="mt-[3px] md:mt-[1px]"
                    />
                  </div>
                  <div>
                    <span className="block mb-[5px] font-medium">
                      Especialistas em soluções Zoho
                    </span>
                    <p className="text-[14px] sm:text-[16px]">
                      Consultoria focada em ajudar você a explorar todo o
                      potencial da Zoho.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex flex-row gap-[15px] items-top">
                  <div>
                    <Image
                      src="/check-icon.svg"
                      alt="Check icon"
                      width={34}
                      height={26.31}
                      className="mt-[3px] md:mt-[1px]"
                    />
                  </div>
                  <div>
                    <span className="block mb-[5px] font-medium">
                      Atendimento direto e personalizado
                    </span>
                    <p className="text-[14px] sm:text-[16px]">
                      Você fala direto com quem cuida do seu projeto do início
                      ao fim.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex flex-row gap-[15px] items-top">
                  <div>
                    <Image
                      src="/check-icon.svg"
                      alt="Check icon"
                      width={34}
                      height={26.31}
                      className="mt-[3px] md:mt-[1px]"
                    />
                  </div>
                  <div>
                    <span className="block mb-[5px] font-medium">
                      Soluções práticas para sua empresa
                    </span>
                    <p className="text-[14px] sm:text-[16px]">
                      Automação e organização para facilitar sua rotina de
                      trabalho.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex flex-row gap-[15px] items-top">
                  <div>
                    <Image
                      src="/check-icon.svg"
                      alt="Check icon"
                      width={34}
                      height={26.31}
                      className="mt-[3px] md:mt-[1px]"
                    />
                  </div>
                  <div>
                    <span className="block mb-[5px] font-medium">
                      Soluções práticas para sua empresa
                    </span>
                    <p className="text-[14px] sm:text-[16px]">
                      Automação e organização para facilitar sua rotina de
                      trabalho.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zohub;
