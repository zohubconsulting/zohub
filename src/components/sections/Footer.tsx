import {
  BiLinkAlt,
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoWhatsapp,
  BiLogoYoutube,
  BiSolidMessageRounded,
} from "react-icons/bi";
import LogoImage from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="w-full bg-zoho-black">
        <div className="max-w-screen-xl mx-auto px-5 flex flex-col items-center text-zoho-white">
          <div className="w-full flex flex-col lg:flex-row gap-[20px] md:gap-8 py-[20px] pt-[30px] md:py-[80px]">
            <div className="w-full lg:w-[40%] flex flex-col gap-5 p-[20px]">
              <div className="flex flex-col gap-3">
                <Image src={LogoImage} alt="logoImage" width={34} />
                <span className="inline-block text-[24px] font-semibold mt-[5px]">
                  Zohub Consulting
                </span>
              </div>
              <div>
                <span className="inline-block text-[16px] font-light leading-[30px]">
                  Consultoria especializada em soluções Zoho para automatizar e
                  otimizar processos empresariais.
                </span>
              </div>
              <div className="flex flex-row flex-wrap gap-4">
                <Link
                  href="/"
                  className="bg-zinc-900 hover:bg-zinc-800 px-[8px] py-[6px] rounded-3xl flex flex-row items-center"
                >
                  <BiLogoInstagramAlt size={20} />
                  <span className="ml-[5px] mr-[4px] text-[14px]">
                    Instagram
                  </span>
                </Link>

                <Link
                  href="/"
                  className="bg-zinc-900 hover:bg-zinc-800 px-[8px] py-[6px] rounded-3xl flex flex-row items-center"
                >
                  <BiLogoLinkedin size={20} />
                  <span className="ml-[5px] mr-[4px] text-[14px]">
                    LinkedIn
                  </span>
                </Link>

                <Link
                  href="/"
                  className="bg-zinc-900 hover:bg-zinc-800 px-[8px] py-[6px] rounded-3xl flex flex-row items-center"
                >
                  <BiLogoFacebook size={20} />
                  <span className="ml-[5px] mr-[4px] text-[14px]">
                    Facebook
                  </span>
                </Link>

                <Link
                  href="/"
                  className="bg-zinc-900 hover:bg-zinc-800 px-[8px] py-[6px] rounded-3xl flex flex-row items-center"
                >
                  <BiLogoWhatsapp size={20} />
                  <span className="ml-[5px] mr-[4px] text-[14px]">
                    WhatsApp
                  </span>
                </Link>

                <Link
                  href="/"
                  className="bg-zinc-900 hover:bg-zinc-800 px-[8px] py-[6px] rounded-3xl flex flex-row items-center"
                >
                  <BiLogoYoutube size={20} />
                  <span className="ml-[5px] mr-[4px] text-[14px]">YouTube</span>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-[30%] px-[25px] py-[20px] bg-zinc-900">
              <span className="font-bold text-[18px] border-b-1 border-zinc-700 border-dashed pb-[10px] mb-[15px] flex flex-row items-center justify-between">
                <span>Menu</span>
                <BiLinkAlt />
              </span>
              <ul className="flex flex-col gap-[10px] font-[14px]">
                <li>
                  <Link className="hover:underline block" href="/">
                    Início
                  </Link>
                </li>

                <li>
                  <Link className="hover:underline block" href="/">
                    Nossas soluções
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline block" href="/">
                    Sobre a empresa
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline block" href="/">
                    Como funciona
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline block" href="/">
                    Junte-se a nós
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline block" href="/">
                    Idiomas
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-[30%] px-[25px] py-[20px] bg-zoho-red">
              <span className="font-bold text-[18px] border-b-1 border-red-400 border-dashed pb-[10px] mb-[15px] flex flex-row items-center justify-between">
                <span>Fale conosco</span>
                <BiSolidMessageRounded />
              </span>
              <div className="flex flex-col gap-[5px]">
                <span className="block hover:underline font-bold text-[18px]">
                  hello@zohub.com.br
                </span>
                <span className="block hover:underline font-bold text-[18px]">
                  +55 48 9 9954-7441
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zoho-black w-full border-t-1 border-zinc-700 border-dashed py-[30px] px-[20px] text-center flex items-center justify-center font-normal text-[14px] text-zoho-white">
        © 2025 Zohub Consulting. <br className="inline-block md:hidden" /> Todos
        os direitos reservados.
      </div>
    </div>
  );
};

export default Footer;
