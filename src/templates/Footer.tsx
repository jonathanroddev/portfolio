import { FC } from 'react';
import { useTranslation } from 'next-i18next';

const Footer: FC = () => {
    const { t } = useTranslation('common');

    return (
        <footer
            className="flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-8 text-center md:text-left"
            style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)' }}
        >
            <p className="font-mono text-[0.72rem] text-color-muted">{t('footer-copy')}</p>
            <div className="flex gap-6">
                {[
                    { label: 'GitHub',   href: 'https://github.com/jonathanroddev' },
                    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jonathan-rodr%C3%ADguez-mendoza-091717191/' },
                    { label: 'X',        href: 'https://x.com/jonathanrodmen' },
                ].map(({ label, href }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-[0.72rem] text-color-muted hover:text-color-heading transition-colors duration-200 no-underline"
                    >
                        {label}
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
