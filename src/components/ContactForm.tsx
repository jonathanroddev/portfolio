import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Course } from '../models';

const ContactForm: FC<{ handleSubmit: Function; onChange: Function; }> = ({ handleSubmit, onChange }) => {
    const { t }: { t: Function } = useTranslation('common');
    return (
        <form onSubmit={e => handleSubmit(e)} className="mx-auto w-full font-bold flex flex-col justify-between items-stretch p-2 sm:p-4 mt-4 bg-slate-300 rounded-xl focus:outline-none border border-sky-600 font-recursive my-2 text-slate-700">
            <label>
                {t("name")}*
                <input
                    name="name"
                    type="text"
                    className="w-full p-1 rounded focus:outline-none border border-sky-600 font-normal"
                    placeholder={t("name")}
                    onChange={e => onChange(e.target.name, e.target.value)}
                    required
                    minLength={2}
                />
            </label>
            <label className="my-2">
                {t("email")}*
                <input
                    name="email"
                    type="email"
                    className="w-full p-1 rounded focus:outline-none border border-sky-600 font-normal"
                    placeholder={t("email")}
                    onChange={e => onChange(e.target.name, e.target.value)}
                    required
                />
            </label>
            <label>
                {t("subject")}
                <input
                    name="subject"
                    type="text"
                    className="w-full p-1 rounded focus:outline-none border border-sky-600 font-normal"
                    placeholder={t("subject")}
                    onChange={e => onChange(e.target.name, e.target.value)}
                    minLength={5}
                />
            </label>
            <label className="my-2">
                {t("message")}*
                <textarea
                    name="message"
                    className="w-full p-1 rounded focus:outline-none border border-sky-600 resize-none h-32 font-normal"
                    placeholder={t("message")}
                    onChange={e => onChange(e.target.name, e.target.value)}
                    required
                    minLength={20}
                />
            </label>
            <input
                type="submit"
                value={t("send-!")}
                className="w-7/12 md:w-1/3 ml-auto border rounded border-sky-600 bg-sky-500 p-1 hover:bg-sky-600 text-sky-100 cursor-pointer"
            />
        </form>
    )
}

export default ContactForm;
