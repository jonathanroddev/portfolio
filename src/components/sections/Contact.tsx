import { FC, FormEvent, useState } from "react";
import { useTranslation, Trans } from "next-i18next";
import ContactForm from "../ContactForm";
import { Email } from "../../models/Email";

const Contact: FC = () => {
    const { t }: { t: Function } = useTranslation("common");
    const [email, setEmail] = useState<Email | null>(null);
    const [isSent, setIsSent] = useState<boolean>(true);

    const setEmailProperty = (property: any, value: string) => {
        const emailToSent: Email = JSON.parse(JSON.stringify(email)) || {};
        emailToSent[property as keyof Email] = value;
        setEmail(emailToSent);
    };

    const handleSubmit = (e: FormEvent<HTMLElement>) => {
        e.preventDefault()
        console.log(email);
        fetch("/api/contact", {
            method: "POST",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(email)
        }).then((res) => {
            if (res.status === 200) {
                setEmail(null);
                setIsSent(true);
            }
        })
    };

    return (
        <section id="contact" className="bg-slate-200 w-full">
            <div className="container flex flex-col justify-center items-center mx-auto md:pb-22 pb-16">
                <h3 className="font-recursive text-5xl text-sky-700 font-normal text-center mb-4 mt-6">{t("contact-title")}</h3>
                <div className="flex items-center md:flex-row flex-col">
                    <article className="md:w-1/2 w-full px-2 sm:px-4">
                        <p className="font-inter text-2xl text-slate-700 md:font-extralight font-light text-justify md:mt-0 mt-2 sm:w-9/12 mx-auto">
                            <Trans>{t("contact-text")}</Trans>
                        </p>
                    </article>
                    <div className="md:w-1/2 w-full px-2">
                        {!isSent ? (
                            <ContactForm handleSubmit={handleSubmit} onChange={setEmailProperty} />
                        ) : (
                            <div />
                        )}

                    </div>
                </div>
            </div>
            <div className="relative md:h-28 h-24">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 left-0 h-full w-full">
                    <path fill="#334155" fillOpacity="1" d="M0,224L80,229.3C160,235,320,245,480,229.3C640,213,800,171,960,165.3C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    )
}

export default Contact;