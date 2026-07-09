import { Head } from '@inertiajs/react';
import { CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import SiteNavbar from '@/components/SiteNavbar';
import { jfciLogo } from '@/routes/media';

const sexOptions = ['Homme', 'Femme'];
const matrimonialOptions = ['Célibataire', 'Marié(e)', 'Divorcé(e)', 'Veuf / Veuve', 'Autre'];
const roleOptions = ['Chantre', 'Commando', "Service d'ordre", 'Intercession', 'Autre'];
const districtOptions = ['District Abidjan 1', 'District Abidjan 2', 'District Côtière'];
const churchOptions = ['Foursquare Niangon Révélation', 'Foursquare Toits Rouges'];

const steps = [
    { number: 1, label: 'Formulaire' },
    { number: 2, label: 'Paiement' },
    { number: 3, label: 'Transfert' },
    { number: 4, label: 'Confirmation' },
];
const activeStep = 1;

const summaryItems = [
    {
        title: 'Identité personnelle',
        description: 'Nom, prénoms, email et situation matrimoniale.',
    },
    {
        title: 'Contact',
        description: 'WhatsApp ou numéro de téléphone pour te joindre.',
    },
    {
        title: 'Église & service',
        description: 'District, église locale et fonction dans l’église.',
    },
];

function StepIndicator() {
    return (
        <div className="mb-8 overflow-x-auto pb-1">
            <div className="flex min-w-max items-start">
                {steps.map((step, index) => {
                    const isActive = step.number === activeStep;

                    return (
                        <div key={step.number} className="flex items-start">
                            <div className="flex w-16 flex-col items-center gap-2 sm:w-20">
                                <span
                                    className={
                                        isActive
                                            ? 'flex size-8 items-center justify-center rounded-full bg-[#1d4ed8] text-sm font-semibold text-white'
                                            : 'flex size-8 items-center justify-center rounded-full border border-slate-300 text-sm font-semibold text-slate-400'
                                    }
                                >
                                    {step.number}
                                </span>
                                <span
                                    className={
                                        isActive
                                            ? 'text-center text-xs font-semibold text-[#0b2545]'
                                            : 'text-center text-xs font-medium text-slate-400'
                                    }
                                >
                                    {step.label}
                                </span>
                            </div>
                            {index < steps.length - 1 && (
                                <span className="mt-4 h-px w-6 shrink-0 bg-slate-200 sm:w-10" />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function SectionLabel({ children }: { children: string }) {
    return (
        <div className="flex items-center gap-3">
            <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
                {children}
            </span>
            <span className="h-px flex-1 bg-slate-200" />
        </div>
    );
}

function Field({
    name,
    label,
    type = 'text',
    placeholder,
    required,
}: {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
}) {
    return (
        <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-slate-700">
                {label}
                {required && <span className="ml-0.5 text-[#dc2626]">*</span>}
            </span>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/15"
            />
        </label>
    );
}

function SelectField({
    name,
    label,
    options,
    required,
    value,
    onChange,
}: {
    name: string;
    label: string;
    options: readonly string[];
    required?: boolean;
    value?: string;
    onChange?: (value: string) => void;
}) {
    return (
        <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-slate-700">
                {label}
                {required && <span className="ml-0.5 text-[#dc2626]">*</span>}
            </span>
            <select
                name={name}
                required={required}
                value={value}
                onChange={(event) => onChange?.(event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/15"
            >
                <option value="">Choisir une option</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </label>
    );
}

export default function Inscription() {
    const [fonction, setFonction] = useState('');

    return (
        <>
            <Head title="Inscription" />

            <div className="min-h-screen bg-white">
                <SiteNavbar />

                <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
                    <StepIndicator />

                    <div className="mb-8 max-w-2xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1d4ed8]">
                            Convention JFCI Côte d&apos;Ivoire
                        </p>
                        <h1 className="mt-3 text-3xl font-semibold text-[#0b2545] sm:text-4xl">
                            Inscription à la Convention JFCI
                        </h1>
                        <p className="mt-3 text-sm text-slate-600 sm:text-base">
                            Remplis les informations demandées
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
                        <form className="space-y-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
                            <div className="space-y-4">
                                <SectionLabel>Identité</SectionLabel>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <SelectField name="sexe" label="Sexe" options={sexOptions} required />
                                    <Field name="nom" label="Nom" placeholder="Ton nom" required />
                                    <Field name="prenoms" label="Prénoms" placeholder="Tes prénoms" required />
                                    <Field name="email" label="Email" type="email" placeholder="exemple@domaine.com" required />
                                    <SelectField name="situation_matrimoniale" label="Situation matrimoniale" options={matrimonialOptions} />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <SectionLabel>Contact</SectionLabel>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <Field name="whatsapp" label="Contact WhatsApp" type="tel" placeholder="+225 ..." />
                                    <Field name="telephone" label="Ou numéro de téléphone simple" type="tel" placeholder="+225 ..." />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <SectionLabel>Église &amp; service</SectionLabel>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <SelectField name="district" label="District" options={districtOptions} />
                                    <SelectField name="eglise_locale" label="Église locale" options={churchOptions} />
                                    <SelectField
                                        name="fonction_eglise"
                                        label="Fonction dans l&apos;église"
                                        options={roleOptions}
                                        value={fonction}
                                        onChange={setFonction}
                                    />
                                    {fonction === 'Autre' && (
                                        <Field name="fonction_autre" label="Précise ta fonction" placeholder="Ta fonction" />
                                    )}
                                </div>

                                <fieldset>
                                    <legend className="mb-1.5 text-sm font-medium text-slate-700">
                                        Es-tu responsable jeunesse ?
                                    </legend>
                                    <div className="grid gap-3 sm:grid-cols-2">
                                        {['Oui', 'Non'].map((option) => (
                                            <label
                                                key={option}
                                                className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition has-[:checked]:border-[#1d4ed8] has-[:checked]:bg-[#1d4ed8]/5 has-[:checked]:text-[#1d4ed8]"
                                            >
                                                <input
                                                    type="radio"
                                                    name="responsable_jeunesse"
                                                    value={option}
                                                    className="h-4 w-4 accent-[#1d4ed8]"
                                                />
                                                {option}
                                            </label>
                                        ))}
                                    </div>
                                </fieldset>
                            </div>

                            <p className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                                Ces informations permettent à l&apos;organisation d&apos;identifier les participants, de mieux
                                communiquer avec eux et de préparer la convention dans de bonnes conditions.
                            </p>

                            <div className="flex flex-col-reverse gap-3 sm:flex-row">
                                <button
                                    type="reset"
                                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                                >
                                    Réinitialiser
                                </button>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center rounded-xl bg-[#1d4ed8] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1e40af]"
                                >
                                    Envoyer l&apos;inscription
                                </button>
                            </div>
                        </form>

                        <aside className="hidden lg:sticky lg:top-24 lg:block">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <span className="flex size-12 items-center justify-center overflow-hidden rounded-full border border-[#0b2545]/10 bg-white shadow-sm">
                                    <img src={jfciLogo.url()} alt="Logo JFCI" className="h-full w-full rounded-full object-cover" />
                                </span>

                                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1d4ed8]">
                                    Pré-inscription
                                </p>
                                <h2 className="mt-2 text-lg font-semibold text-[#0b2545]">
                                    Convention JFCI 2026
                                </h2>

                                <ul className="mt-5 space-y-4 border-t border-slate-100 pt-5">
                                    {summaryItems.map((item) => (
                                        <li key={item.title} className="flex gap-3">
                                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1d4ed8]" />
                                            <div>
                                                <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                                                <p className="mt-0.5 text-sm leading-5 text-slate-500">{item.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </main>
            </div>
        </>
    );
}
