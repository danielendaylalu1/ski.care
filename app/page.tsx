import Image from 'next/image';
import medicineOne from '../assets/images/medicine1.png';
import Link from 'next/link';
import { FaArrowTrendUp } from 'react-icons/fa6';

import { FaShippingFast } from 'react-icons/fa';
import { IoWallet } from 'react-icons/io5';
import { PiKeyReturnFill } from 'react-icons/pi';
import { BiSupport } from 'react-icons/bi';

import ladyOne from '../assets/images/lady1.webp';
import ladyTwo from '../assets/images/lady2.webp';
import medicineTwo from '../assets/images/medicine2.webp';

export default function Home() {
  const brandLinks = [
    { title: 'ELLE', link: '/' },
    { title: 'EVON', link: '/' },
    { title: 'LOREL', link: '/' },
    { title: 'CLINIQUE', link: '/' },
    { title: 'OLAY', link: '/' },
  ];

  const customerImages = [
    {
      title: 'Fre Shipping',
      icon: <FaShippingFast size={22} color="black" className="min-w-[50px]" />,
    },
    {
      title: 'Return Delivery',
      icon: (
        <PiKeyReturnFill size={22} color="black" className="min-w-[50px]" />
      ),
    },
    {
      title: 'Online Support',
      icon: <BiSupport size={22} color="black" className="min-w-[50px]" />,
    },
    {
      title: 'Flexible Payment',
      icon: <IoWallet size={22} color="black" className="min-w-[50px]" />,
    },
  ];
  const discounts = [
    'GET DISCOUNT UP 25 %',
    'GET DISCOUNT UP 25 %',
    'GET DISCOUNT UP 25 %',
    'GET DISCOUNT UP 25 %',
    'GET DISCOUNT UP 25 %',
  ];
  return (
    <main className="min-h-[90vh] flex justify-between items-center flex-col gap-y-8 py-6 text-center">
      <section className="w-full flex justify-between items-center flex-col gap-y-8 p-6">
        <h1 className="text-[4rem] max-w-[800px]">
          Parsley Seed Anti-Oxidant Intense Serum
        </h1>
        <Image
          src={medicineOne}
          alt="Parsley Seed Anti-Oxidant Intense Serum"
        />
        <p className="text-lg max-w-[800px]">
          Parsley Seed Anti-Oxidant Intense Serum is a potent formulation
          crafted to deliver powerful antioxidant protection and hydration for
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
      </section>
      <div className="w-full mt-6">
        <section className="flex items-center justify-around w-full p-6 border-y border-black/50">
          {brandLinks.map((item) => (
            <Link key={item.title} href={item.link}>
              {item.title}
            </Link>
          ))}
        </section>
        <section className="flex items-center justify-around w-full p-6 border-b border-black/50">
          {customerImages.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-y-4 items-center"
            >
              <div className="w-[45px] h-[45px] bg-secondary flex justify-center items-center rounded-full">
                {item.icon}
              </div>
              <h2>{item.title}</h2>
            </div>
          ))}
        </section>
      </div>
      <section className="min-h-[70vh] w-full flex justify-center items-center flex-col gap-y-8 p-6 relative">
        <h1 className="text-[4rem] max-w-[800px]">
          Treat Your Skin With Nature
        </h1>
        <p className="text-lg max-w-[800px]">
          Encapsulates a philosophy of skincare that harnesses the natural power
          of botanical ingredients to nourish and enhance skin health, promoting
          a holistic approach to beauty rooted in the gifts of the earth.
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
        <Image
          className="w-[120px] absolute left-[10%] top-1/4 bg-span h-[120px] rounded-full"
          src={medicineOne}
          alt="medicine"
        />
        <Image
          className="w-[120px] absolute right-[20%] top-[70%] bg-span h-[120px] rounded-full"
          src={medicineTwo}
          alt="medicine"
        />
        <Image
          className="w-[120px] absolute left-[20%] top-[70%] bg-span h-[120px] rounded-full"
          src={ladyOne}
          alt="lady"
        />
        <Image
          className="w-[120px] absolute right-[10%] top-1/4 bg-span h-[120px] rounded-full"
          src={ladyOne}
          alt="lady"
        />
      </section>
      <section className="flex items-center justify-around w-full p-6 border-y border-black/50">
        {discounts.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </section>
    </main>
  );
}
