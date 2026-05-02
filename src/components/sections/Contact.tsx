import { FC, FormEvent, useState } from 'react';
import { useTranslation } from 'next-i18next';

const SectionLabel: FC<{ label: string }> = ({ label }) => (
    <p className="flex items-center gap-3 font-mono text-[0.75rem] tracking-[0.15em] uppercase text-color-accent mb-10">
        <span>{label}</span>
        <span className="flex-1 h-px max-w-[180px]" style={{ background: 'var(--border)' }} />
    </p>
);

const Contact: FC = () => {
    const { t } = useTranslation('common');
    const [name, setName]       = useState('');
    const [email, setEmail]     = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent]       = useState(false);
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSending(true);
        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });
        } finally {
            setSending(false);
            setSent(true);
            setName(''); setEmail(''); setMessage('');
            setTimeout(() => setSent(false), 3000);
        }
    };

    const inputStyle = {
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        color: 'var(--heading)',
        outline: 'none',
    };

    return (
        <section
            id="contact"
            style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'var(--section-gap) 0' }}
        >
            <div className="max-w-content mx-auto px-8">
                <SectionLabel label={t('section-contact')} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* Left: intro + links */}
                    <div>
                        <h2 className="font-display font-black text-color-heading leading-[1.1] mb-4" style={{ fontSize: '2.5rem' }}>
                            {t('contact-heading')}
                        </h2>
                        <p className="text-color-body mb-6">{t('contact-subtext')}</p>

                        <div className="flex flex-col gap-0">
                            {[
                                { icon: 'GH', label: 'github.com/jonathanroddev',           href: 'https://github.com/jonathanroddev' },
                                { icon: 'in', label: 'Jonathan Rodríguez Mendoza',           href: 'https://www.linkedin.com/in/jonathan-rodr%C3%ADguez-mendoza-091717191/' },
                                { icon: 'X',  label: '@jonathanrodmen',                      href: 'https://x.com/jonathanrodmen' },
                            ].map(({ icon, label, href }) => (
                                <a
                                    key={href}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 font-mono text-[0.8rem] text-color-body hover:text-color-heading transition-colors duration-200 no-underline py-3"
                                    style={{ borderBottom: '1px solid var(--border)' }}
                                >
                                    <span
                                        className="flex items-center justify-center w-7 h-7 text-[0.8rem] shrink-0"
                                        style={{ border: '1px solid var(--border)', color: 'var(--accent)' }}
                                    >
                                        {icon}
                                    </span>
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: form */}
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-[0.4rem]">
                            <label className="font-mono text-[0.7rem] text-color-muted tracking-[0.1em] uppercase">
                                {t('contact-form-name')}
                            </label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder={t('contact-form-name-placeholder')}
                                className="px-4 py-3 text-[0.9rem] font-sans transition-colors duration-200"
                                style={inputStyle}
                                onFocus={(e) => ((e.target as HTMLInputElement).style.border = '1px solid var(--accent)')}
                                onBlur={(e) => ((e.target as HTMLInputElement).style.border = '1px solid var(--border)')}
                            />
                        </div>

                        <div className="flex flex-col gap-[0.4rem]">
                            <label className="font-mono text-[0.7rem] text-color-muted tracking-[0.1em] uppercase">
                                {t('contact-form-email')}
                            </label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={t('contact-form-email-placeholder')}
                                className="px-4 py-3 text-[0.9rem] font-sans transition-colors duration-200"
                                style={inputStyle}
                                onFocus={(e) => ((e.target as HTMLInputElement).style.border = '1px solid var(--accent)')}
                                onBlur={(e) => ((e.target as HTMLInputElement).style.border = '1px solid var(--border)')}
                            />
                        </div>

                        <div className="flex flex-col gap-[0.4rem]">
                            <label className="font-mono text-[0.7rem] text-color-muted tracking-[0.1em] uppercase">
                                {t('contact-form-message')}
                            </label>
                            <textarea
                                required
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder={t('contact-form-message-placeholder')}
                                className="px-4 py-3 text-[0.9rem] font-sans resize-none transition-colors duration-200"
                                style={inputStyle}
                                onFocus={(e) => ((e.target as HTMLTextAreaElement).style.border = '1px solid var(--accent)')}
                                onBlur={(e) => ((e.target as HTMLTextAreaElement).style.border = '1px solid var(--border)')}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={sending || sent}
                            className="self-start px-8 py-[0.85rem] font-mono text-[0.85rem] tracking-[0.06em] font-medium border-none cursor-pointer transition-opacity duration-200 hover:opacity-85 disabled:cursor-default"
                            style={{ background: 'var(--accent)', color: 'var(--bg)' }}
                        >
                            {sent ? t('contact-form-sent') : t('contact-form-submit')}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
