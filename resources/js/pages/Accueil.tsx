import { Head, Link } from '@inertiajs/react';
import { Sparkles } from 'lucide-react';
import SiteNavbar from '@/components/SiteNavbar';
import { jfciLogo } from '@/routes/media';

export default function Accueil() {
    return (
        <>
            <Head title="Accueil" />

            <div className="min-h-screen bg-[#f6f7fb] text-slate-950">
                <SiteNavbar />

                <main className="mx-auto w-full max-w-7xl px-4 pb-14 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pb-20">
                    <section className="relative overflow-hidden rounded-[34px] border border-white/70 bg-[linear-gradient(180deg,#f7f8fc_0%,#ffffff_100%)] px-5 py-10 shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(11,74,162,0.08),transparent_22%),radial-gradient(circle_at_15%_85%,rgba(249,115,22,0.08),transparent_24%)]" />
                        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#047a5b]/5 to-transparent" />

                        <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 rounded-full border border-[#047a5b]/15 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#047a5b] shadow-sm">
                                    <Sparkles className="h-4 w-4" />
                                    Convention JFCI 2026
                                </div>

                                <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[0.92] tracking-[-0.04em] sm:text-5xl lg:text-[4.9rem]">
                                    <span className="block text-[#0b4aa2]">Convention Nationale</span>
                                    <span className="block text-slate-950">2026</span>
                                    <span className="block text-[#0b4aa2]">de l&apos;Église Foursquare</span>
                                    <span className="block text-slate-950">Côte d&apos;Ivoire</span>
                                </h1>

                                <div className="mt-5 h-1.5 w-36 rounded-full bg-slate-200">
                                    <div className="h-full w-20 rounded-full bg-[#0b4aa2]" />
                                </div>

                                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                                    Un temps fort de louange, d&apos;enseignement et de communion pour la jeunesse JFCI.
                                    Rejoins-nous et prépare ton inscription avec simplicité.
                                </p>

                                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#f97316]/15 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#f97316] shadow-sm">
                                    Thème 2026
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#f97316]" />
                                    La pluie en abondance
                                </div>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    <Link
                                        href={route('inscription')}
                                        className="inline-flex items-center justify-center rounded-full bg-[#1d4ed8] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(29,78,216,0.24)] transition hover:bg-[#1e40af]"
                                    >
                                        S&apos;inscrire
                                    </Link>
                                    <Link
                                        href={route('programme')}
                                        className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                                    >
                                        Voir le programme
                                    </Link>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                                        Louange
                                    </span>
                                    <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                                        Enseignement
                                    </span>
                                    <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                                        Communion
                                    </span>
                                </div>
                            </div>

                            <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none">
                                <div className="absolute inset-0 mx-auto h-[20rem] w-[20rem] rounded-full bg-[#0b4aa2]/5 blur-3xl sm:h-[24rem] sm:w-[24rem]" />

                                <div className="relative flex w-full items-center justify-center">
                                    <div className="relative flex size-[18rem] items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)] sm:size-[22rem] lg:size-[25rem]">
                                        <div className="absolute inset-4 rounded-full border border-slate-100" />
                                        <img
                                            src={jfciLogo.url()}
                                            alt="Logo JFCI"
                                            className="h-[66%] w-[66%] object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
