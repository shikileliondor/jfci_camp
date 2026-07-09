import { Link } from '@inertiajs/react';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function ConventionModal() {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        if (!open) {
            return;
        }

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
            }
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [open]);

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.button
                        type="button"
                        aria-label="Fermer"
                        onClick={() => setOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.97, y: 6 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97, y: 6 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="relative flex max-h-[90vh] w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:max-w-md"
                    >
                        <button
                            type="button"
                            aria-label="Fermer"
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-3 z-10 flex size-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-sm transition hover:bg-white"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        <div className="flex max-h-[60vh] w-full items-center justify-center bg-slate-100">
                            <img
                                src="/media/convention"
                                alt="Convention JFCI"
                                className="max-h-[60vh] w-full object-contain"
                            />
                        </div>

                        <div className="p-5 sm:p-6">
                            <Link
                                href={route('inscription')}
                                onClick={() => setOpen(false)}
                                className="inline-flex w-full items-center justify-center rounded-xl bg-[#1d4ed8] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1e40af]"
                            >
                                S&apos;inscrire
                            </Link>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
