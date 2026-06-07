import EkskulSection from '@/components/school-profile/ekskul-section';
import Footer from '@/components/school-profile/footer';
import Navbar from '@/components/school-profile/navbar';
import { Head } from '@inertiajs/react';
import { Sparkles } from 'lucide-react';
import React from 'react';

export default function EkstrakurikulerPage() {
    return (
        <>
            <Head>
                <title>Ekstrakurikuler & Organisasi - SMA Unggul Nusantara</title>
                <meta name="description" content="Mengembangkan minat, bakat, kepemimpinan, dan keahlian siswa di luar kelas." />
            </Head>

            <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col justify-between">
                {/* Navbar Component */}
                <Navbar />

                <main className="flex-grow pt-24">
                    {/* Header Banner Section */}
                    <section className="bg-gradient-to-br from-khaki/10 via-darkkhaki/5 to-khaki/5 py-16 px-4 border-b border-border/30 relative overflow-hidden">
                        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-10 h-64 w-64 rounded-full bg-darkkhaki/5 blur-3xl" />
                        <div className="container mx-auto text-center max-w-4xl space-y-4">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-darkkhaki/20 bg-darkkhaki/5 text-darkkhaki text-xs font-semibold">
                                <Sparkles className="h-3 w-3" />
                                PENGEMBANGAN DIRI HOLISTIK
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
                                Ekstrakurikuler & Minat Bakat
                            </h1>
                            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                                Mewadahi kreativitas, keterampilan teknologi, pencapaian olahraga, dan komunikasi publik demi menyeimbangkan kemampuan otak kiri dan otak kanan.
                            </p>
                        </div>
                    </section>

                    {/* Ekskul Section Component (renders the Flexbox layout) */}
                    <EkskulSection />
                </main>

                {/* Footer Component */}
                <Footer />
            </div>
        </>
    );
}
