import { Head, Link } from '@inertiajs/react';
import { Hammer } from 'lucide-react';
import SiteNavbar from '@/components/SiteNavbar';

export default function UnderConstruction({ title }: { title: string }) {
    return (
        <>
            <Head title={title} />

            <div className="min-h-screen bg-white">
                <SiteNavbar />

                <main className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
                    <span className="flex size-16 items-center justify-center rounded-full border border-[#0b2545]/10 bg-[#1d4ed8]/5">
                        <Hammer className="h-7 w-7 text-[#1d4ed8]" />
                    </span>

                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#1d4ed8]">
                        {title}
                    </p>
                    <h1 className="mt-3 text-2xl font-semibold text-[#0b2545] sm:text-3xl">
                        Cette page est en construction
                    </h1>
                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
                        Le contenu de cette section arrive bientôt. Reviens un peu plus tard pour la découvrir.
                    </p>

                    <Link
                        href={route('home')}
                        className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#1d4ed8] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1e40af]"
                    >
                        Retour à l&apos;accueil
                    </Link>
                </main>
            </div>
        </>
    );
}
