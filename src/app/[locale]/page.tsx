import Image from "next/image";
import Button from "../../components/Button";
import HeroImage from "../../../public/colaborators.svg";
import { texts } from "./localeData";
import Divider from "../../../public/divider.svg";

const supportedLocales = ['pt-br', 'en', 'es', 'hi', 'ja'] as const;
type Locale = typeof supportedLocales[number];

interface LayoutProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Home({
  params
}: LayoutProps) {
  // Adicionando await mesmo que não seja necessário
  // Isso resolve o problema de tipagem no Next.js 15
  const { locale } = await params;

  return (
    <div>
      {/* Hero */}
      <div className="w-full bg-zoho-light-gray h-[590px] sm:h-[720px] md:h-screen overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-5 flex flex-col items-center">
          <h1 className="block py-4 font-normal pt-[80px] sm:pt-[100px] md:pt-[120px] pb-[20px] md:pb-[30px] text-[24px] sm:text-[34px] md:text-[45px]/13 text-center w-[400px] sm:w-[550px] md:w-[635px]">
            {texts[locale].hero.title}
          </h1>

          <p className="w-[350px] sm:w-[450px] md:w-[565px] text-center text-[14px] sm:text-[16px] md:text-[20px] font-normal mb-[35px]">
            {texts[locale].hero.description} <span className="underline decoration-dotted text-zoho-black">{texts[locale].hero.descriptionHighlight}</span>.
          </p>

          <Button to="/">{texts[locale].hero.button}</Button>

          <Image src={HeroImage} alt="Hero" className="mt-[80px]" />
        </div>
      </div>
      {/* End hero */}

      {/* Benefits */}
      <div className="w-full overflow-hidden bg-zoho-beige">
        <div className="max-w-screen-xl mx-auto py-[60px] sm:py-[90px] md:py-[115px] flex flex-col items-center">

          <div className="flex flex-col items-center">
            <h2 className="font-medium text-[14px] tracking-[5px] uppercase mb-[15px]">Benefícios</h2>
            <Image src={Divider} alt="Divider" className="" />
          </div>

          <p className="block py-4 font-normal pb-[20px] md:pb-[30px] text-[24px] sm:text-[34px] md:text-[45px]/13 text-center w-[320px] sm:w-[490px] md:w-[635px] mb-[12px] sm:mb-[52px] md:mb-[72px]">
            Soluções Zoho que impulsionam o seu negócio
          </p>

          <div className="w-full flex flex-row flex-wrap justify-center gap-[30px]">
            <div className="w-full max-w-[400px] flex flex-col items-center gap-3 px-[30px] sm:px-[20px] md:px-[10px]">
              <Image src="/image1.png" alt="Benefit 1" width={140} height={133} />
              <p className="text-center text-[16px] sm:text-[20px] font-medium">Implantação e customização Zoho</p>
              <p className="text-center text-[14px] sm:text-[16px] font-normal">
                Prepare sua operação com o Zoho personalizada para o seu segmento.
                Nosso time ajuda você a implantar e adaptar a Zoho às necessidades do seu negócio.
              </p>
            </div>

            <div className="w-full max-w-[400px] flex flex-col items-center gap-3 px-[30px] sm:px-[20px] md:px-[10px]">
              <Image src="/image2.png" alt="Benefit 2" width={140} height={133} />
              <p className="text-center text-[16px] sm:text-[20px] font-medium">Automação de processos</p>
              <p className="text-center text-[14px] sm:text-[16px] font-normal">
                Automatize tarefas repetitivas e aumente a produtividade do seu time com fluxos de trabalho personalizados criados por nossos especialistas.
              </p>
            </div>

            <div className="w-full max-w-[400px] flex flex-col items-center gap-3 px-[30px] sm:px-[20px] md:px-[10px]">
              <Image src="/image3.png" alt="Benefit 3" width={140} height={133} className="mt-[20px] md:mt-0" />
              <p className="text-center text-[16px] sm:text-[20px] font-medium">Integração com backend</p>
              <p className="text-center text-[14px] sm:text-[16px] font-normal">
                Integre a Zoho com outros sistemas e elimine a entrada manual de dados, facilitando o fluxo de informações.
              </p>
            </div>
          </div>

        </div>
      </div>
      {/* End benefits */}

      {/* Zohub */}
      <div className="w-full bg-zoho-white overflow-hidden">
        <div className="max-w-screen-xl gap-6 mx-auto px-5 flex flex-col md:flex-row items-center py-[60px] sm:py-[90px] md:py-[115px] pb-0">
          <div className="w-full md:max-w-[50%] flex flex-col gap-[30px]">
            <div className="w-full mx-auto">
              <h3 className="block font-normal pb-[10px] md:pb-[30px] text-[24px] sm:text-[34px] md:text-[45px]/13 text-center md:text-left">
                Por que escolher a <span className="font-bold">Zohub</span>?
              </h3>
              <p className="text-center md:text-left text-[14px] sm:text-[16px]">
                Ajudamos empresas a obter o máximo das soluções Zoho, com consultoria estratégica, implementação eficiente e foco em resultados reais.
              </p>
            </div>

            <div className="w-full mx-auto">
              <ul className="flex flex-col gap-4 mx-[10px]">
                <li>
                  <div className="flex flex-row gap-[15px] items-top">
                    <div>
                      <Image src="/check-icon.svg" alt="Check icon" width={34} height={26.31} className="mt-[3px] md:mt-[1px]" />
                    </div>
                    <div>
                      <span className="block mb-[5px] font-medium">Especialistas em soluções Zoho</span>
                      <p className="text-[14px] sm:text-[16px]">Consultoria focada em ajudar você a explorar todo o potencial da Zoho.</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex flex-row gap-[15px] items-top">
                    <div>
                      <Image src="/check-icon.svg" alt="Check icon" width={34} height={26.31} className="mt-[3px] md:mt-[1px]" />
                    </div>
                    <div>
                      <span className="block mb-[5px] font-medium">Atendimento direto e personalizado</span>
                      <p className="text-[14px] sm:text-[16px]">Você fala direto com quem cuida do seu projeto do início ao fim.</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="flex flex-row gap-[15px] items-top">
                    <div>
                      <Image src="/check-icon.svg" alt="Check icon" width={34} height={26.31} className="mt-[3px] md:mt-[1px]" />
                    </div>
                    <div>
                      <span className="block mb-[5px] font-medium">Soluções práticas para sua empresa</span>
                      <p className="text-[14px] sm:text-[16px]">Automação e organização para facilitar sua rotina de trabalho.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative w-full md:max-w-[50%] pt-[20px] flex flex-row items-center justify-center h-[320px]">
            <Image src="/image4.png" alt="Zohub" width={437} height={470} className="absolute  bottom-[-40px] md:top-[-60px]" />

            <Image src="/image5.png" alt="Zohub" width={239} height={307} className="absolute  bottom-[-20px] md:bottom-0" />
          </div>
        </div>
      </div>
      {/* End Zohub */}

      {/* Step-by-step */}
      <div className="w-full overflow-hidden bg-zoho-black">
        <div className="max-w-screen-xl mx-auto py-[60px] sm:py-[90px] md:py-[115px] flex flex-col items-center">

          <div className="flex flex-col items-center">
            <h2 className="font-medium text-[14px] tracking-[5px] uppercase mb-[15px] text-zoho-white">Step by step</h2>
            <Image src={Divider} alt="Divider" className="" />
          </div>

          <p className="block py-4 font-normal pb-[20px] md:pb-[30px] text-[24px] sm:text-[34px] md:text-[45px]/13 text-center w-[320px] sm:w-[490px] md:w-[635px] mb-[12px] sm:mb-[52px] md:mb-[72px] text-zoho-white">
            Nosso <span className="inline-block font-bold">Workflow</span>
          </p>
        </div>
      </div>
       {/* End step-by-step */}

    </div>
  );
}
