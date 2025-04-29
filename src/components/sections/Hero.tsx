import Button from "../Button";
import HeroImage from "../../../public/colaborators.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full bg-zoho-light-gray h-[590px] sm:h-[720px] md:h-[1020px] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-5 flex flex-col items-center">
        <h1 className="hero-title block py-4 font-normal pt-[30px] sm:pt-[100px] md:pt-[120px] pb-[20px] md:pb-[30px] text-[24px] sm:text-[34px] md:text-[45px]/13 text-center w-[400px] sm:w-[550px] md:w-[635px]">
          Transforme sua gestão com soluções Zoho personalizadas
        </h1>

        <p className="hero-description w-[350px] sm:w-[450px] md:w-[565px] text-center text-[14px] sm:text-[16px] md:text-[20px] font-normal mb-[35px]">
          Consultoria especializada para implementar, automatizar e escalar sua
          operação com as{" "}
          <span className="underline decoration-dotted text-zoho-black">
            ferramentas Zoho
          </span>
          .
        </p>

        <Button to="/" className="hero-btn">
          Fale com um especialista
        </Button>

        <Image
          src={HeroImage}
          alt="Hero"
          className="mt-[60px] sm:mt-[80px] hero-image"
        />
      </div>
    </div>
  );
};

export default Hero;
