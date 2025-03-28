import Button from "@/components/Button";
import Image from "next/image";
import HeroImage from "../../../public/colaborators.svg";

export default function Home() {
  
  return (
    <div>
      <div className="w-full bg-zoho-light-gray h-[720px] md:h-screen overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-5 flex flex-col items-center">
          <h1 className="block py-4 font-normal pt-[100px] md:pt-[120px] pb-[20px] md:pb-[30px] text-[28px] sm:text-[34px] md:text-[45px]/13 text-center w-[450px] sm:w-[550px] md:w-[635px]">
            Transforme sua gestão com soluções Zoho personalizadas
          </h1>

          <p className="w-[450px] md:w-[565px] text-center text-[16px] md:text-[20px] font-normal mb-[35px]">
            Consultoria especializada para implementar, automatizar e escalar sua operação com as <span className="underline decoration-dotted text-zoho-black">ferramentas Zoho</span>.
          </p>

          <Button to="/">Fale com um especialista</Button>

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
