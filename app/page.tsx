import Image from 'next/image';
import medicineOne from '../assets/images/medicine1.png';
import Link from 'next/link';
import { FaArrowTrendUp } from 'react-icons/fa6';

export default function Home() {
  return (
    <main className="min-h-[90vh] flex justify-between items-center flex-col gap-y-8 p-6 text-center">
      <h1 className="text-[4rem] max-w-[800px]">
        Parsley Seed Anti-Oxidant Intense Serum
      </h1>
      <Image src={medicineOne} alt="Parsley Seed Anti-Oxidant Intense Serum" />
      <p className="text-lg max-w-[800px]">
        Parsley Seed Anti-Oxidant Intense Serum is a potent formulation crafted
        to deliver powerful antioxidant protection and hydration for
        revitalized, radiant skin
      </p>
      <div className="rounded-full p-[2px] border border-black/50">
        {' '}
        <Link
          href={'/'}
          className="flex justify-center items-center bg-black text-white gap-x-4 py-3 px-6 rounded-full"
        >
          <span className="rounded-full p-[2px] border border-white/50">
            <FaArrowTrendUp
              size={18}
              className="w-[30px] h-[30px] rounded-full bg-white/90 text-black p-2"
            />
          </span>{' '}
          VIEW PRODUCTS
        </Link>
      </div>
    </main>
  );
}
