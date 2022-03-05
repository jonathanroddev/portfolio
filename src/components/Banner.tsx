import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import banner from '../assets/banner.png';

const Banner: FC = () => {
  const { t }: { t: Function } = useTranslation('common');

  return (
    <section id="banner" className="h-screen-minus-navbar overflow-hidden" >
      <div className="w-full h-full filter-custom scale-105">
        <Image src={banner} alt={t("alt-banner")} layout="fill" />
      </div>
    </section>
  )
}

export default Banner;