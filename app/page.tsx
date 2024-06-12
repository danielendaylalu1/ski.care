import Image from 'next/image';
import medicineOne from '../assets/images/medicine1.png';
import Link from 'next/link';
import { FaArrowTrendUp } from 'react-icons/fa6';

import { FaShippingFast } from 'react-icons/fa';
import { IoWallet } from 'react-icons/io5';
import { PiKeyReturnFill } from 'react-icons/pi';
import { BiSupport } from 'react-icons/bi';

import ladyOne from '../assets/images/lady1.webp';
import testimonialOne from '../assets/images/testimonial1.jpg';
import medicineTwo from '../assets/images/medicine2.webp';

import medicineLongOne from '../assets/images/medicinelong1.webp';
import medicineLongTwo from '../assets/images/medicinelong2.png';
import medicineMiniOne from '../assets/images/medicinemini1.png';
import ladyThree from '../assets/images/lady3.jpg';

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
  const aboutUs = [
    'WE USE A NEW APPROACH TO THE INGREDNTES',
    'CLAIM NEW SAMPLES AND FREE SHIPPING',
    'WE USE A NEW APPROACH TO THE INGREDNTES',
    'CLAIM NEW SAMPLES AND FREE SHIPPING',
  ];
  return (
    <main className="min-h-[90vh] flex justify-between items-center flex-col text-center">
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
      <section className="flex items-center justify-around w-full gap-x-4 p-6 border-y border-black/50">
        {discounts.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </section>
      <section className="min-h-[90vh] flex w-full border-b border-black/50">
        <div className="min-h-[90vh] flex w-[10%] justify-center min-w-[140px] border-r border-black/50">
          <p className="VER-TEXT text-5xl">A - Superlative - Selection</p>
        </div>
        <div className="min-h-full flex flex-col w-[30%] border-r border-black/50">
          <div className="flex flex-col items-center gap-y-4 w-full border-b border-black/50 p-4">
            <Image
              src={medicineTwo}
              alt="medicine"
              className="max-w-[350px] w-full"
            />
            <p className="text-lg max-w-[800px]">
              AHAVA MINERAL BOTANIC VELVET BODY LOTION
            </p>
            <div className="rounded-full p-[2px] border border-black/50 scale-[0.7] text-center">
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
                ADD TO BAG
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center h-full gap-y-4 w-full p-4">
            <p className="text-lg max-w-[800px] text-left">
              Kahico Cosmetics offers a rurious range of skincare products
              meticulously crafted to nourish and rejuvenate your skin infused
              with potent botanical extracts and cutting edge formulations, our
              products deliver unparalleled hydration, radiance, and age-defying
              benefits, inviting you to indulge in a transformative skincare
              experience that celebrates the harmony between nature and science
            </p>

            <Link href={'/'} className=" text-black underline font-medium">
              VIEW ALL PRODUCTS
            </Link>
          </div>
        </div>
        <div className="min-h-full flex flex-col w-[30%] border-r border-black/50">
          <div className="flex flex-col items-center gap-y-4 w-full border-b border-black/50 p-4">
            <Image
              src={medicineMiniOne}
              alt="medicine"
              className="max-w-[250px] w-full"
            />
            <p className="text-lg max-w-[800px]">
              AHAVA MINERAL BOTANIC VELVET BODY LOTION
            </p>
            <div className="rounded-full p-[2px] border border-black/50 scale-[0.7] text-center">
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
                ADD TO BAG
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-4 w-full p-4">
            <Image
              src={medicineLongOne}
              alt="medicine"
              className="max-w-[400px] w-full"
            />
            <p className="text-lg max-w-[800px]">
              AHAVA MINERAL BOTANIC VELVET BODY LOTION
            </p>
            <div className="rounded-full p-[2px] border border-black/50 scale-[0.7] text-center">
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
                ADD TO BAG
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-full flex flex-col w-[30%] ">
          <div className="flex flex-col items-center gap-y-4 w-full border-b border-black/50 p-4">
            <Image
              src={medicineLongTwo}
              alt="medicine"
              className="max-w-[400px] w-full"
            />
            <p className="text-lg max-w-[800px]">
              AHAVA MINERAL BOTANIC VELVET BODY LOTION
            </p>
            <div className="rounded-full p-[2px] border border-black/50 scale-[0.7] text-center">
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
                ADD TO BAG
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-4 w-full p-4">
            <Image
              src={medicineOne}
              alt="medicine"
              className="max-w-[250px] w-full"
            />
            <p className="text-lg max-w-[800px]">
              AHAVA MINERAL BOTANIC VELVET BODY LOTION
            </p>
            <div className="rounded-full p-[2px] border border-black/50 scale-[0.7] text-center">
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
                ADD TO BAG
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[90vh] flex w-full gap-x-8 p-6">
        <div className="w-[30%] min-w-[450px] flex justify-center items-center">
          <Image src={ladyThree} alt="lady" className="w-[80%] min-w-[430px]" />
        </div>
        <div className="flex flex-col items-center justify-center w-[70%]">
          <div className="flex flex-col items-center justify-center gap-y-12 max-w-[800px]">
            <h1 className="text-[4rem] max-w-[800px] text-right">
              Becouse You Deserve To{' '}
              <span className="min-w-[140px] inline-block border-b mb-5  border-black/70"></span>{' '}
              Feel Beautiful
            </h1>

            <p className="text-lg max-w-[800px] text-right">
              Encapsulates a philosophy of skincare that harnesses the natural
              power of botanical ingredients to nourish and enhance skin health,
              promoting a holistic approach to beauty rooted in the gifts of the
              earth.
            </p>
            <div className="rounded-full p-[2px] border border-black/50 scale-[0.9] text-center self-end">
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
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-around w-full gap-x-4 p-6 border-y border-black/50">
        {aboutUs.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </section>
      <section className="min-h-[60vh] flex w-full border-b border-black/50">
        <div className="min-h-[60vh] flex w-[10%] justify-center items-center min-w-[140px] border-r border-black/50">
          <p className="VER-TEXT text-5xl">CUSTOMERS - REVIEWS</p>
        </div>
        <div className="w-[90%] flex flex-col items-center px-6">
          <div className="min-h-[200px] border-l border-black/70"></div>
          <Image
            className="w-[120px] bg-span h-[120px] rounded-full"
            src={ladyOne}
            alt="lady"
          />
          <div className="p-8 flex flex-col gap-y-8 justify-between items-center border border-black/70 mt-12">
            <p className="text-lg max-w-[800px]">
              {`I recently tried Kahico Cosmetics' revitalizing skincare product,
              and I must say, it's been a game-changer for my skin. The
              lightweight formula absorbs quickly, leaving my skin feeling
              deeply hydrated without any greasy residue. After just a few weeks
              of consistent use, I noticed a significant improvement in the
              overall texture and radiance of my complexion.`}
            </p>
            <p className="text-lg">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
            <p className="text-lg max-w-[800px] font-bold">Mike Torello</p>
          </div>
        </div>
      </section>
    </main>
  );
}
