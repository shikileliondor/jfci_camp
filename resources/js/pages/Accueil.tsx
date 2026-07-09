import { Head } from '@inertiajs/react';
import SiteNavbar from '@/components/SiteNavbar';

const galleryCards = [
    {
        src: '/media/gallery/card-1',
        title: 'Temps de réveil',
        label: 'Louange & prière',
    },
    {
        src: '/media/gallery/card-2',
        title: 'Ateliers',
        label: 'Formation & partage',
    },
    {
        src: '/media/gallery/card-3',
        title: 'Communion',
        label: 'Enseignement & unité',
    },
    {
        src: '/media/gallery/card-4',
        title: 'Convention',
        label: 'JFCI Côte d’Ivoire',
    },
] as const;

export default function Accueil() {
    return (
        <>
            <Head title="Accueil" />

            <div className="min-h-screen bg-[#f6f7fb]">
                <SiteNavbar />

                <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <section className="mx-auto max-w-6xl">
                        <div className="max-w-2xl">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#047a5b]">
                                Convention JFCI 2026
                            </p>
                            <h1 className="mt-3 text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
                                Quelques moments forts de la convention
                            </h1>
                            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                                Une section simple et propre pour mettre en avant les images de la convention sur la page d&apos;accueil.
                            </p>
                        </div>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                            {galleryCards.map((card) => (
                                <article
                                    key={card.title}
                                    className="group relative overflow-hidden rounded-[24px] border border-white bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                                >
                                    <div className="aspect-[4/5] w-full overflow-hidden sm:aspect-[4/5] xl:aspect-[3/4]">
                                        <img
                                            src={card.src}
                                            alt={card.title}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                                        />
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/78 via-slate-950/18 to-transparent p-4">
                                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/75">
                                            {card.label}
                                        </p>
                                        <h2 className="mt-1 text-lg font-semibold leading-tight text-white">
                                            {card.title}
                                        </h2>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
