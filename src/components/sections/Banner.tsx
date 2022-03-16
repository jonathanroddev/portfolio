import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import banner from '../../assets/banner/banner.png';

const Banner: FC = () => {
  const { t }: { t: Function } = useTranslation('common');

  return (
    <section id="banner" className="h-screen-minus-navbar overflow-hidden relative" >
      <div className="w-full h-full filter-custom scale-105">
        <Image src={banner} alt={t("alt-banner")} layout="fill" />
      </div>
      <div className="w-full h-full absolute inset-0">
        <div className="container h-full flex flex-wrap flex-col justify-center items-center mx-auto">
          <h2
            className="w-full md:mt-0 md:mb-3 mb-16 font-recursive md:text-6xl text-5xl text-slate-200 font-light text-center">
            {t("full-stack-developer")}
          </h2>
          <h1
            className="hidden md:block w-auto typewriter my-3 font-recursive text-6xl text-slate-200 font-normal text-center overflow-hidden pb-2">
            Jonathan Rodríguez
          </h1>
          <h1
            className="flex flex-col items-center md:hidden w-full mt-6 mb-12 font-recursive text-5xl text-slate-200 font-normal text-center overflow-hidden">
            <span className="typewriter-line-1">Jonathan</span>
            <span className="typewriter-line-2 pb-2">Rodríguez</span>
          </h1>
          <p
            className="md:mt-12 md:mb-0 mt-12 font-inter italic md:text-3xl text-2xl text-slate-200 font-extralight text-right w-full md:px-0 px-3">
            {`${t("imagine-it")}. ${t("design-it")}. ${t("create-it")}.`}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Banner;