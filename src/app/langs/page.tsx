import Link from "next/link";

export default function Langs() {
  return (
    <div>
      <div className="w-full bg-zoho-light-gray overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-5 py-10 flex flex-col ">
          <h1 className="block py-4 text-4xl font-medium">
            Idiomas
          </h1>

          <div>
            <span ><Link href="/" className="hover:underline">Início</Link> / <Link href="/about" className="hover:underline">Idiomas</Link></span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-screen-xl mx-auto px-5 py-5 flex flex-col ">
          <ul className="flex flex-col space-y-1">
            <li>
              <Link href="/langs/pt-br" className="hover:underline">Português</Link>
            </li>
            <li>
              <Link href="/langs/en" className="hover:underline">Inglês</Link>
            </li>
            <li>
              <Link href="/langs/es" className="hover:underline">Espanhol</Link>
            </li>
            <li>
              <Link href="/langs/fr" className="hover:underline">Francês</Link>
            </li>
            <li>
              <Link href="/langs/de" className="hover:underline">Alemão</Link>
            </li>
            <li>
              <Link href="/langs/it" className="hover:underline">Italiano</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}