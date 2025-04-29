import Button from "../Button";
import GrowthImage from "../../../public/growth.svg";
import Image from "next/image";

const JoinUs = () => {
  return (
    <div className="w-full bg-zoho-light-yellow sm:h-[790px] md:h-[910px] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-5 flex flex-col items-center">
        <h1 className="block py-4 font-normal pt-[80px] sm:pt-[100px] md:pt-[120px] pb-[20px] md:pb-[30px] text-[24px] sm:text-[34px] md:text-[45px]/13 text-center w-[400px] sm:w-[550px] md:w-[635px]">
          Junte-se a nós!
        </h1>

        <p className="w-[350px] sm:w-[450px] md:w-[665px] text-center text-[14px] sm:text-[16px] md:text-[20px] font-normal mb-[15px] px-[30px] md:px-[20px]">
          Faça parte dessa comunidade que só cresce! entre em contato e agende
          uma conversa, ficaremos felizes em ouvi-lo!
        </p>

        <p className="w-[350px] sm:w-[450px] md:w-[665px] text-center text-[14px] sm:text-[16px] md:text-[20px] font-normal mb-[35px] px-[30px] md:px-[20px]">
          Vamos juntos transformar a gestão da sua empresa com soluções práticas
          e personalizadas em Zoho.
        </p>

        <Button to="/">FALE COM UM ESPECIALISTA</Button>

        <Image
          src={GrowthImage}
          alt="Hero"
          className="mt-[60px] md:mt-[100px]"
        />
      </div>
    </div>
  );
};

export default JoinUs;
