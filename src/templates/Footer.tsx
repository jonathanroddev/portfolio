import { FC } from 'react';
import { useTranslation, Trans } from 'next-i18next';
import { SocialMedia } from '../models';
import { linkedinLogo, githubLogo, twitterLogo } from '../assets/footer';
import Image from 'next/image';

const Footer: FC = () => {
  const { t }: { t: Function } = useTranslation('common');
  const socialMediaList: SocialMedia[] = [
    new SocialMedia("Linkedin", "https://www.linkedin.com/in/jonathan-rodr%C3%ADguez-mendoza-091717191/", linkedinLogo, "alt-linkedin"),
    new SocialMedia("GitHub", "https://github.com/jonathanroddev", githubLogo, "alt-github"),
    new SocialMedia("Twitter", "https://twitter.com/jonathanrodmen", twitterLogo, "alt-twitter")
  ];
  return (
    <footer className="container w-full bg-slate-700 md:pb-4 pb-8">
      <div className="md:w-9/12 px-2 sm:px-4 mx-auto flex justify-between md:justify-center items-center">
        {socialMediaList.map((socialMedia, index) => (
          <a href={socialMedia.getUrl} target="_blank" rel="noreferrer" key={index} className="flex justify-center items-center text-slate-200 md:w-1/6">
            <span>{socialMedia.getName}</span>
            <div className="ml-2 w-8 flex items-center">
              <Image src={socialMedia.getLogo} alt={t(socialMedia.getAltLogo)} layout="intrinsic" />
            </div>
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer;
