import { Head, Link } from '@inertiajs/react';
import { CalendarDays } from 'lucide-react';
import { motion } from 'motion/react';
import SiteNavbar from '@/components/SiteNavbar';
import { jfciLogo } from '@/routes/media';

const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

function MotionSection({
    delay = 0,
    children,
}: {
    delay?: number;
    children: React.ReactNode;
}) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, delay }}
        >
            {children}
        </motion.div>
    );
}

export default function Accueil() {
    return (
        <>
            <Head title="Accueil" />

            <div className="min-h-screen bg-[#f6f7fb] text-slate-950">
                <SiteNavbar />

                <main className="mx-auto w-full max-w-[1580px] px-4 pb-6 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pb-8">
                    <section className="relative overflow-hidden border border-slate-200/70 bg-[linear-gradient(180deg,#f7f8fc_0%,#ffffff_100%)] shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_5%,rgba(34,92,163,0.08),transparent_35%)]" />
                        <div className="absolute inset-x-0 bottom-0 h-[120px] bg-gradient-to-t from-[#dfe2e8]/45 to-transparent" />

                        <div className="relative mx-auto grid min-h-[calc(100svh-88px)] max-w-[1580px] items-center px-5 py-5 sm:px-7 md:px-8 lg:grid-cols-1 lg:px-8 lg:py-8">
                            <MotionSection delay={0.15}>
                                <div className="mx-auto flex w-full max-w-[660px] flex-col justify-center py-3 lg:max-w-[1180px] lg:items-center lg:py-0 lg:text-center">
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={fadeUp}
                                        transition={{ duration: 0.6, delay: 0.14 }}
                                        className="max-w-[660px] lg:max-w-[1180px]"
                                    >
                                        <div className="flex items-end gap-4 lg:justify-center">
                                            <h1 className="w-fit text-left text-[clamp(24px,7.2vw,32px)] font-black leading-[1.04] tracking-[-0.038em] text-[#123B68] md:text-[33px] lg:text-center lg:text-[56px] lg:leading-[0.94] xl:text-[68px]">
                                                <span className="block whitespace-nowrap">Convention Panafricaine</span>
                                                <span className="mt-1.5 block w-full text-center text-[1.08em] tracking-[-0.025em] text-[#225CA3] lg:hidden">
                                                    2026
                                                </span>
                                            </h1>
                                            <div className="hidden min-w-[116px] -rotate-2 bg-[#225CA3] px-4 py-3.5 text-center shadow-[0_16px_32px_rgba(34,92,163,0.20)] lg:block">
                                                <span className="block text-[9px] font-black uppercase tracking-[0.18em] text-white/60">
                                                    Édition
                                                </span>
                                                <span className="mt-1 block text-4xl font-black leading-none tracking-[-0.06em] text-white">
                                                    2026
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mt-3 border-l-[3px] border-[#FBB51B] pl-3 lg:mt-5 lg:border-l-0 lg:pl-0">
                                            <p className="whitespace-nowrap text-[clamp(20px,6.2vw,27px)] font-extrabold leading-none tracking-[-0.035em] text-[#172B3E] lg:text-[31px] xl:text-[37px]">
                                                Jeunesse Foursquare
                                            </p>
                                            <p className="mt-1.5 text-[clamp(20px,6.2vw,27px)] font-black leading-none tracking-[-0.035em] text-[#225CA3] lg:text-[31px] xl:text-[37px]">
                                                Côte d&apos;Ivoire
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={fadeUp}
                                        transition={{ duration: 0.4, delay: 0.17 }}
                                        className="mt-3 flex items-center gap-1.5 lg:mt-5 lg:justify-center"
                                    >
                                        <span className="h-[3px] w-14 rounded-full bg-[#225CA3]" />
                                        <span className="h-[3px] w-7 rounded-full bg-[#FBB51B]" />
                                    </motion.div>

                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={fadeUp}
                                        transition={{ duration: 0.55, delay: 0.19 }}
                                        className="mx-auto mt-3.5 inline-flex w-fit flex-col items-start lg:mt-5"
                                    >
                                        <span className="relative z-10 ml-5 -mb-1 rounded-sm bg-[#FBB51B] px-3 py-0.5 text-[10px] font-black italic leading-none text-[#123B68] shadow-sm">
                                            thème
                                        </span>
                                        <div className="rounded-sm border border-white bg-[#225CA3] px-4 py-2 shadow-[0_10px_24px_rgba(18,59,104,0.16)] sm:px-5 lg:px-7 lg:py-3">
                                            <p className="text-[15px] font-black uppercase leading-none tracking-[-0.025em] text-[#FBB51B] sm:text-[18px] lg:text-xl">
                                                Et j'eus encore un autre reve 
                                            </p>
                                            <p className="mt-1 text-center text-[8px] font-semibold italic leading-none text-white/90">
                                                Genèse 37:9
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.p
                                        initial="hidden"
                                        animate="visible"
                                        variants={fadeUp}
                                        transition={{ duration: 0.55, delay: 0.22 }}
                                        className="mt-3.5 max-w-[500px] border-l-[3px] border-[#225CA3]/35 pl-4 text-left text-[13px] font-medium leading-6 text-[#33475B]/85 md:text-[14px] lg:mt-5 lg:max-w-3xl lg:border-l-0 lg:pl-0 lg:text-center lg:text-base lg:leading-7"
                                    >
                                        Un temps de louange, de prière, de formation et d&apos;envoi en mission pour impacter notre nation.
                                    </motion.p>

                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={fadeUp}
                                        transition={{ duration: 0.55, delay: 0.3 }}
                                        className="mt-4 flex w-full flex-wrap items-center gap-3 sm:gap-4 lg:mt-6 lg:w-auto lg:justify-center lg:gap-4"
                                    >
                                        <Link
                                            href={route('inscription')}
                                            className="inline-flex min-h-[50px] w-full items-center justify-center gap-3 rounded-xl bg-[#123B68] px-6 py-3 text-[12px] font-black text-white shadow-[0_14px_30px_rgba(34,92,163,0.24)] transition hover:-translate-y-1 hover:bg-[#225CA3] sm:w-auto lg:min-h-[52px] lg:rounded-full lg:px-8 lg:text-[13px]"
                                        >
                                            S&apos;inscrire <span className="text-base text-[#FBB51B]">→</span>
                                        </Link>
                                        <Link
                                            href={route('programme')}
                                            className="inline-flex min-h-[50px] w-full items-center justify-center gap-3 rounded-xl border border-[#225CA3]/35 bg-white px-6 py-3 text-[12px] font-black text-[#225CA3] shadow-[0_12px_26px_rgba(18,59,104,0.10)] transition hover:-translate-y-1 hover:border-[#225CA3] hover:bg-[#F7FAFD] sm:w-auto lg:min-h-[52px] lg:rounded-full lg:px-8 lg:text-[13px]"
                                        >
                                            Programme officiel <span className="text-base text-[#FBB51B]">→</span>
                                        </Link>
                                    </motion.div>

                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={fadeUp}
                                        transition={{ duration: 0.55, delay: 0.4 }}
                                        className="mt-4 grid w-full grid-cols-[1fr_auto] items-center gap-3 rounded-2xl border border-[#225CA3]/10 bg-white/75 p-3 shadow-[0_12px_32px_rgba(18,59,104,0.08)] backdrop-blur-sm lg:hidden"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#225CA3]/10 text-[#225CA3]">
                                                <CalendarDays className="h-5 w-5" />
                                            </span>
                                            <div>
                                                <p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#123B68]/45">
                                                    Rendez-vous
                                                </p>
                                                <p className="mt-0.5 text-[13px] font-black text-[#123B68]">
                                                    12 - 16 août 2026
                                                </p>
                                            </div>
                                        </div>
                                        <span className="rounded-full bg-[#FBB51B]/15 px-3 py-1.5 text-[10px] font-black uppercase text-[#B97800]">
                                            5 jours
                                        </span>
                                    </motion.div>
                                </div>
                            </MotionSection>

                            <div className="hidden lg:block" />
                        </div>

                        <div className="relative h-1.5 bg-gradient-to-r from-[#CD1725] via-[#005AA9] via-[#FFD23F] to-[#5B2C83]" />
                    </section>
                </main>
            </div>
        </>
    );
}
