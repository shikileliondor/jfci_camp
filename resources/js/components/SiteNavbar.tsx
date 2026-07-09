import { Link } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { jfciLogo } from '@/routes/media';

type PublicRouteName =
    | 'home'
    | 'about'
    | 'programme'
    | 'infos-pratiques'
    | 'contact'
    | 'inscription';

type NavItem = {
    label: string;
    routeName: PublicRouteName;
};

const navItems: NavItem[] = [
    { label: 'Accueil', routeName: 'home' },
    { label: 'À propos', routeName: 'about' },
    { label: 'Programme', routeName: 'programme' },
    { label: 'Infos pratiques', routeName: 'infos-pratiques' },
    { label: 'Contact', routeName: 'contact' },
];

const primaryItem: NavItem = {
    label: "S'inscrire",
    routeName: 'inscription',
};

function isActive(routeName: PublicRouteName) {
    return route().current(routeName);
}

function NavLink({
    item,
    mobile = false,
    onNavigate,
}: {
    item: NavItem;
    mobile?: boolean;
    onNavigate?: () => void;
}) {
    const active = isActive(item.routeName);
    const href = route(item.routeName);

    if (mobile) {
        return (
            <Link
                href={href}
                onClick={onNavigate}
                aria-current={active ? 'page' : undefined}
                className={cn(
                    'rounded-xl border px-4 py-3 text-sm font-medium transition-colors',
                    active
                        ? 'border-[#0b2545]/15 bg-[#0b2545]/5 text-[#0b2545]'
                        : 'border-transparent bg-white text-slate-700 hover:border-slate-200 hover:bg-slate-50 hover:text-[#0b2545]',
                )}
            >
                {item.label}
            </Link>
        );
    }

    return (
        <Link
            href={href}
            aria-current={active ? 'page' : undefined}
            className={cn(
                'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                active
                    ? 'text-[#0b2545] after:absolute after:inset-x-4 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-[#f97316]'
                    : 'text-slate-600 hover:text-[#0b2545]',
            )}
        >
            {item.label}
        </Link>
    );
}

export default function SiteNavbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={cn(
                'sticky top-0 z-50 border-b transition-[background-color,box-shadow,backdrop-filter] duration-300',
                scrolled
                    ? 'border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl'
                    : 'border-transparent bg-white/75 backdrop-blur-md',
            )}
        >
            <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
                <Link href={route('home')} className="flex items-center gap-3">
    <span className="flex size-14 items-center justify-center overflow-hidden rounded-full border border-[#0b2545]/10 bg-white shadow-sm shadow-slate-900/10">
        <img
            src={jfciLogo.url()}
            alt="Logo JFCI"
            className="h-full w-full rounded-full object-cover"
        />
    </span>

    <span className="flex flex-col leading-tight">
        <span className="text-sm font-semibold tracking-[0.18em] text-[#0b2545] uppercase">
            Convention
        </span>
        <span className="text-xs font-medium text-slate-500">
            JFCI Côte d&apos;Ivoire
        </span>
    </span>
</Link>

                <nav className="hidden items-center gap-1 lg:flex">
                    {navItems.map((item) => (
                        <NavLink key={item.routeName} item={item} />
                    ))}
                </nav>

                <div className="hidden items-center gap-3 lg:flex">
                    <Link
                        href={route(primaryItem.routeName)}
                        className="inline-flex items-center justify-center rounded-full bg-[#1d4ed8] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1e40af]"
                    >
                        {primaryItem.label}
                    </Link>
                </div>

                <div className="lg:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                aria-label="Ouvrir le menu"
                                className="rounded-full text-slate-700 hover:bg-slate-100 hover:text-[#0b2545]"
                            >
                                <Menu className="size-5" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent
                            side="right"
                            className="w-[min(22rem,100vw)] border-slate-200 bg-white/95 p-0 backdrop-blur-xl"
                        >
                            <div className="flex h-full flex-col">
                                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                                    <div className="flex items-center gap-3">
                                        <span className="flex size-10 items-center justify-center rounded-full bg-[#0b2545] text-base font-semibold text-white">
                                            C
                                        </span>
                                        <div className="leading-tight">
                                            <p className="text-sm font-semibold text-[#0b2545]">
                                                Convention JFCI
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                Navigation publique
                                            </p>
                                        </div>
                                    </div>

                                    <SheetClose asChild>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            aria-label="Fermer le menu"
                                            className="rounded-full text-slate-700 hover:bg-slate-100 hover:text-[#0b2545]"
                                        >
                                            <X className="size-5" />
                                        </Button>
                                    </SheetClose>
                                </div>

                                <nav className="flex flex-1 flex-col gap-3 px-4 py-5">
                                    {navItems.map((item) => (
                                        <NavLink
                                            key={item.routeName}
                                            item={item}
                                            mobile
                                            onNavigate={() => setOpen(false)}
                                        />
                                    ))}

                                    <Link
                                        href={route(primaryItem.routeName)}
                                        className="inline-flex items-center justify-center rounded-full bg-[#1d4ed8] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1e40af]"
                                    >
                                        {primaryItem.label}
                                    </Link>
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
