import { Head, router } from '@inertiajs/react';
import { home } from '@/routes';
import { jfciLogo } from '@/routes/media';
import { useEffect } from 'react';

export default function Intro() {
    useEffect(() => {
        const redirectTimer = window.setTimeout(() => {
            router.visit(home.url(), { replace: true });
        }, 2200);

        return () => window.clearTimeout(redirectTimer);
    }, []);

    return (
        <>
            <Head title="Convention JFCI 2026" />

            <main className="relative flex min-h-dvh overflow-hidden bg-white text-neutral-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(238,190,72,0.16),transparent_34%),linear-gradient(180deg,#ffffff_0%,#fffdf8_52%,#ffffff_100%)]" />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#047a5b] via-[#e8b747] to-[#047a5b]" />

                <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-md flex-col items-center justify-center px-6 py-10 text-center sm:max-w-xl">
                    <div className="relative animate-[intro-logo_1.15s_cubic-bezier(0.16,1,0.3,1)_both]">
                        <span className="absolute inset-0 rounded-full bg-[#e8b747]/20 blur-2xl" />
                        <span className="relative flex h-[8.5rem] w-[8.5rem] items-center justify-center rounded-full border border-[#047a5b]/10 bg-white shadow-[0_22px_70px_rgba(4,122,91,0.14)] sm:h-[10.5rem] sm:w-[10.5rem]">
                            <img
                                src={jfciLogo.url()}
                                alt="Logo JFCI"
                                className="h-24 w-24 object-contain sm:h-[7.75rem] sm:w-[7.75rem]"
                            />
                        </span>
                    </div>

                    <div className="mt-8 flex flex-col items-center gap-4">
                        <p className="animate-[intro-rise_0.9s_0.45s_cubic-bezier(0.16,1,0.3,1)_both] text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#047a5b]">
                            JFCI
                        </p>

                        <h1 className="max-w-[16rem] animate-[intro-rise_0.9s_0.7s_cubic-bezier(0.16,1,0.3,1)_both] text-4xl font-semibold leading-[1.05] text-neutral-950 sm:max-w-none sm:text-5xl">
                            Convention JFCI 2026
                        </h1>

                        <p className="max-w-xl animate-[intro-rise_0.9s_0.9s_cubic-bezier(0.16,1,0.3,1)_both] text-sm leading-6 text-neutral-600 sm:text-base">
                            La page d&apos;accueil s&apos;ouvre ensuite avec les visuels et les sections du site.
                        </p>
                    </div>

                    <div className="mt-6 h-1.5 w-[9.5rem] overflow-hidden rounded-full bg-neutral-200 sm:w-48">
                        <div className="h-full w-full origin-left animate-[intro-progress_2.2s_linear_both] rounded-full bg-gradient-to-r from-[#047a5b] via-[#e8b747] to-[#047a5b]" />
                    </div>
                </div>
            </main>
        </>
    );
}
