import Link from 'next/link';

interface ButtonProps {
  to: string;
  children: React.ReactNode;
};

export default function Button({ to, children }: ButtonProps) {

  return (
    <Link href={to} className='bg-zoho-red text-white px-[30px] py-[18px] rounded-[2px] text-[14px] font-medium uppercase'>
      {children}
    </Link>
  );
}
