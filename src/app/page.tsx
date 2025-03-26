import Button from "@/components/Button";
import Image from "next/image";
import HeroImage from "../../public/colaborators.svg";

export default function Home() {
  return (
    <div>
      <div className="w-full bg-zoho-light-gray h-[920px] overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-5 flex flex-col items-center">
          <h1 className="block py-4 font-normal pt-[120px] pb-[38px] text-[45px]/13 text-center w-[635px]">
            Transforme sua gestão com soluções Zoho personalizadas
          </h1>

          <p className="w-[565px] text-center text-[20px] font-normal mb-[35px]">
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
