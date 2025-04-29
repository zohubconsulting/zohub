import Image from "next/image";
import Divider from "../../../public/divider.svg";
import { Check } from "lucide-react";

const StepByStep = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full p-6 py-[60px] sm:py-[90px] md:py-[120px] pb-0 md:pb-0 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="flex flex-col items-center">
          <h2 className="font-medium text-[14px] tracking-[5px] uppercase mb-[15px] text-zoho-white">
            Step by step
          </h2>
          <Image src={Divider} alt="Divider" className="" />
        </div>

        <p className="w-full py-4 font-normal pb-[20px] md:pb-[30px] text-[24px] sm:text-[34px] md:text-[45px]/13 text-center mb-[50px] sm:mb-[52px] md:mb-[72px] text-zoho-white">
          Nosso <span className="inline-block font-bold">Workflow</span>
        </p>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-dashed border-l-1 border-gray-700 z-0"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start mb-24">
            <div className="order-2 md:order-1 md:w-1/2 md:text-right md:pr-12 md:mt-0">
              <div className="hidden md:block">&nbsp;</div>
            </div>
            <div className="order-1 md:order-2 flex-shrink-0 bg-red-600 w-16 h-16 flex items-center justify-center text-2xl font-bold">
              1
            </div>
            <div className="order-3 md:w-1/2 md:pl-12 mt-6 md:mt-0">
              <h3 className="text-xl md:text-[20px] font-semibold mb-3 text-center md:text-left bg-black">
                Diagnóstico/orçamento gratuito
              </h3>
              <p className="text-gray-300 text-[14px] md:text-[16px] max-w-[420px] text-center md:text-left bg-black pb-1">
                Entendemos sua empresa e mapeamos suas necessidades, processos e
                objetivos antes de qualquer proposta.
              </p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start mb-24">
            <div className="order-3 md:order-1 md:w-1/2 md:text-right md:pr-12 mt-6 md:mt-0">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-center md:text-right bg-black">
                Proposta sob medida
              </h3>
              <p className="text-gray-300 md:text-right max-w-[420px] ml-auto text-center bg-black pb-1 text-[14px] md:text-[16px]">
                Montamos uma proposta personalizada com base no diagnóstico, com
                as ferramentas Zoho mais adequadas para seu cenário.
              </p>
            </div>
            <div className="order-1 md:order-2 flex-shrink-0 bg-yellow-400 w-16 h-16 flex items-center justify-center text-2xl font-bold text-white">
              2
            </div>
            <div className="order-2 md:order-3 md:w-1/2 md:pl-12">
              <div className="hidden md:block">&nbsp;</div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start mb-24">
            <div className="order-2 md:order-1 md:w-1/2 md:text-right md:pr-12 md:mt-0">
              <div className="hidden md:block">&nbsp;</div>
            </div>
            <div className="order-1 md:order-2 flex-shrink-0 bg-blue-600 w-16 h-16 flex items-center justify-center text-2xl font-bold">
              3
            </div>
            <div className="order-3 md:w-1/2 md:pl-12 mt-6 md:mt-0">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-center md:text-left bg-black">
                Implantação e configuração
              </h3>
              <p className="text-gray-300 max-w-[420px] text-center md:text-left bg-black pb-1 text-[14px] md:text-[16px]">
                Cuidamos da implementação do Zoho, configurando de forma
                alinhada ao seu negócio e integrando com outros sistemas se
                necessário.
              </p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start mb-24">
            <div className="order-3 md:order-1 md:w-1/2 md:text-right md:pr-12 mt-6 md:mt-0">
              <h3 className="text-xl md:text-2xl font-semibold mb-3  text-center md:text-right bg-black">
                Treinamento e suporte
              </h3>
              <p className="text-gray-300  max-w-[420px] ml-auto text-center md:text-right bg-black pb-1 text-[14px] md:text-[16px]">
                Treinamos você e sua equipe para utilizar o Zoho no dia a dia e
                oferecemos suporte para garantir que tudo funcione como
                esperado.
              </p>
            </div>
            <div className="order-1 md:order-2 flex-shrink-0 bg-green-600 w-16 h-16 flex items-center justify-center text-2xl font-bold">
              4
            </div>
            <div className="order-2 md:order-3 md:w-1/2 md:pl-12">
              <div className="hidden md:block">&nbsp;</div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start pb-[120px]">
            <div className="order-2 md:order-1 md:w-1/2 md:text-right md:pr-12 md:mt-0">
              <div className="hidden md:block">&nbsp;</div>
            </div>
            <div className="order-1 md:order-2 flex-shrink-0 bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
              <Check className="w-8 h-8" />
            </div>
            <div className="order-3 md:w-1/2 md:pl-12 mt-6 md:mt-0">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-center md:text-left bg-black">
                Conclusão final
              </h3>
              <p className="text-gray-300 max-w-[420px] text-center md:text-left bg-black pb-1 text-[14px] md:text-[16px]">
                Entregamos seus projeto elencando todos os pontos levantados no
                início finalizando a implementação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepByStep;
