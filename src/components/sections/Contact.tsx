import { FC, FormEvent, useState } from "react";
import { useTranslation, Trans } from "next-i18next";

const Contact: FC = () => {
    const { t }: { t: Function } = useTranslation("common");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLElement>) => {
        e.preventDefault()
        const data = {
            name,
            email,
            subject,
            message
        };
        console.log(data);
        fetch("/api/contact", {
            method: "POST",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if (res.status === 200) {
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
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
                        <form onSubmit={e => handleSubmit(e)} className="mx-auto w-full font-bold flex flex-col justify-between items-stretch p-2 sm:p-4 mt-4 bg-slate-300 rounded-xl focus:outline-none border border-sky-600 font-recursive my-2 text-slate-700">
                            <label>
                                {t("name")}*
                                <input
                                    type="text"
                                    className="w-full p-1 rounded focus:outline-none border border-sky-600 font-normal"
                                    placeholder={t("name")}
                                    onChange={e => setName(e.target.value)}
                                    required
                                    minLength={2}
                                />
                            </label>
                            <label className="my-2">
                                {t("email")}*
                                <input
                                    type="email"
                                    className="w-full p-1 rounded focus:outline-none border border-sky-600 font-normal"
                                    placeholder={t("email")}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                            </label>
                            <label>
                                {t("subject")}
                                <input
                                    type="text"
                                    className="w-full p-1 rounded focus:outline-none border border-sky-600 font-normal"
                                    placeholder={t("subject")}
                                    onChange={e => setSubject(e.target.value)}
                                    minLength={5}
                                />
                            </label>
                            <label className="my-2">
                                {t("message")}*
                                <textarea
                                    className="w-full p-1 rounded focus:outline-none border border-sky-600 resize-none h-32 font-normal"
                                    placeholder={t("message")}
                                    onChange={e => setMessage(e.target.value)}
                                    required
                                    minLength={20}
                                />
                            </label>
                            <input
                                type="submit"
                                value={t("send-!")}
                                className="w-7/12 md:w-1/3 ml-auto border rounded border-sky-600 bg-sky-500 p-1 hover:bg-sky-600 text-slate-900 cursor-pointer"
                            />
                        </form>
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