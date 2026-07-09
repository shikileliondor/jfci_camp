import { Head } from '@inertiajs/react';
import SiteNavbar from '@/components/SiteNavbar';

export default function Accueil() {
    return (
        <>
            <Head title="Accueil" />

            <div className="min-h-screen bg-white">
                <SiteNavbar />
            </div>
        </>
    );
}
