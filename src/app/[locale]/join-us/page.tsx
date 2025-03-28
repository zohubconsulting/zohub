import Link from "next/link";

export default function JoinUs() {
  return (
    <div className="w-full bg-zoho-light-gray overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-5 py-10 flex flex-col ">
        <h1 className="block py-4 text-4xl font-medium">
          Junte-se a nós
        </h1>
        
        <div>
          <span ><Link href="/" className="hover:underline">Início</Link> / <Link href="/about" className="hover:underline">Junte-se a nós</Link></span>
        </div>
      </div>
    </div>
  );
}