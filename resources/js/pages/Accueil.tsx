import { Head, Link } from '@inertiajs/react';
import SiteNavbar from '@/components/SiteNavbar';
import { jfciLogo } from '@/routes/media';

export default function Accueil() {
    return (
        <>
            <Head title="Accueil" />

            <div className="min-h-screen bg-[#f6f7fb]">
                <SiteNavbar />

                <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <section className="mx-auto max-w-6xl pb-12 sm:pb-16">
                        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#047a5b]">
                                    Convention JFCI 2026
                                </p>
                                <h1 className="mt-3 text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
                                    Bienvenue à la Convention JFCI Côte d&apos;Ivoire
                                </h1>
                                <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                                    Un temps fort de louange, d&apos;enseignement et de communion pour la jeunesse JFCI.
                                    Rejoins-nous et prépare ton inscription.
                                </p>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    <Link
                                        href={route('inscription')}
                                        className="inline-flex items-center justify-center rounded-full bg-[#1d4ed8] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1e40af]"
                                    >
                                        S&apos;inscrire
                                    </Link>
                                    <Link
                                        href={route('programme')}
                                        className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                                    >
                                        Voir le programme
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <span className="flex size-40 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm sm:size-48">
                                    <img
                                        src={jfciLogo.url()}
                                        alt="Logo JFCI"
                                        className="h-full w-full object-cover"
                                    />
                                </span>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
