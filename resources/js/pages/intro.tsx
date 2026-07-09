import { Head, router } from '@inertiajs/react';
import { home } from '@/routes';
import { jfciLogo } from '@/routes/media';
import { useEffect } from 'react';

export default function Intro() {
    useEffect(() => {
        const redirectTimer = window.setTimeout(() => {
            router.visit(home.url(), { replace: true });
        }, 3800);

        return () => window.clearTimeout(redirectTimer);
    }, []);

    return (
        <>
            <Head title="Convention JFCI 2026" />

            <main className="relative flex min-h-dvh overflow-hidden bg-white text-neutral-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(238,190,72,0.18),transparent_34%),linear-gradient(180deg,#ffffff_0%,#fffdf8_52%,#ffffff_100%)]" />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#047a5b] via-[#e8b747] to-[#047a5b]" />

                <div className="absolute top-[12%] left-1/2 h-56 w-56 -translate-x-1/2 rounded-full border border-[#047a5b]/10 sm:h-72 sm:w-72" />
                <div className="absolute top-[9%] left-1/2 h-72 w-72 -translate-x-1/2 animate-[intro-spin_18s_linear_infinite] rounded-full border border-dashed border-[#e8b747]/30 sm:h-96 sm:w-96" />
                <div className="absolute top-[18%] left-1/2 h-44 w-44 -translate-x-1/2 animate-[intro-pulse_2.8s_ease-in-out_infinite] rounded-full bg-[#047a5b]/[0.06] blur-2xl sm:h-60 sm:w-60" />

                <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-md flex-col items-center justify-center px-6 py-10 text-center sm:max-w-xl">
                    <section className="flex w-full flex-col items-center gap-8">
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

                        <div className="flex flex-col items-center gap-4">
                            <p className="animate-[intro-rise_0.9s_0.45s_cubic-bezier(0.16,1,0.3,1)_both] text-[0.68rem] font-semibold tracking-[0.32em] text-[#047a5b] uppercase">
                                JFCI
                            </p>

                            <h1 className="max-w-[16rem] animate-[intro-rise_0.9s_0.7s_cubic-bezier(0.16,1,0.3,1)_both] text-4xl leading-[1.05] font-semibold text-neutral-950 sm:max-w-none sm:text-5xl">
                                Convention JFCI 2026
                            </h1>
                        </div>

                        <div className="mt-5 h-1.5 w-[9.5rem] overflow-hidden rounded-full bg-neutral-200 sm:w-48">
                            <div className="h-full w-full origin-left animate-[intro-progress_3.8s_linear_both] rounded-full bg-gradient-to-r from-[#047a5b] via-[#e8b747] to-[#047a5b]" />
                        </div>
                    </section>
                </div>

                <div className="absolute right-6 bottom-6 left-6 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
            </main>
        </>
    );
}
