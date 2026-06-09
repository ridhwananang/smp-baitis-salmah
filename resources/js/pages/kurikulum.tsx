import { Head } from '@inertiajs/react';
import { BookOpen } from 'lucide-react';
import React from 'react';
import AcademicsSection from '@/components/school-profile/academics-section';
import Footer from '@/components/school-profile/footer';
import Navbar from '@/components/school-profile/navbar';

export default function KurikulumPage() {
    return (
        <>
            <Head>
                <title>Fasilitas & Program Pembiasaan - MTs Baitis Salmah</title>
                <meta name="description" content="Informasi mengenai fasilitas lengkap dan program pembiasaan karakter Islami di MTs Baitis Salmah." />
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
                                <BookOpen className="h-3 w-3" />
                                FASILITAS & PROGRAM PEMBIASAAN
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
                                Fasilitas & Program Pembiasaan Sekolah
                            </h1>
                            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                                MTs Baitis Salmah menyediakan infrastruktur pendukung belajar yang memadai dan program pembiasaan karakter keagamaan yang terstruktur untuk mencetak lulusan berakhlak mulia.
                            </p>
                        </div>
                    </section>

                    {/* Academics Section Component (renders Kurikulum grid and facilities) */}
                    <AcademicsSection />
                </main>

                {/* Footer Component */}
                <Footer />
            </div>
        </>
    );
}
