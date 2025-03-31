import Image from "next/image";
import Button from "../../components/Button";
import HeroImage from "../../../public/colaborators.svg";
import { texts } from "./localeData";

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

      <div className="w-full bg-zoho-beige h-[680px] overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-5 flex flex-col items-center">
         
        </div>
      </div>
    </div>
  );
}
