import AcademicsSection from '@/components/school-profile/academics-section';
import EkskulSection from '@/components/school-profile/ekskul-section';
import Footer from '@/components/school-profile/footer';
import HeroSection from '@/components/school-profile/hero-section';
import Navbar from '@/components/school-profile/navbar';
import { Button } from '@/components/ui/button';
import { Head, Link } from '@inertiajs/react';
import { ArrowRight, Atom, CheckCircle2, Cpu, GraduationCap, Landmark, Music } from 'lucide-react';
import React from 'react';

export default function Welcome() {
    return (
        <>
            <Head>
                <title>SMA Unggul Nusantara - Membina Generasi Unggul, Berkarakter & Global</title>
                <meta
                    name="description"
                    content="SMA Unggul Nusantara adalah sekolah menengah atas model rujukan nasional berstandar internasional yang mendidik siswa unggulan berakhlak mulia."
                />
            </Head>

            <div className="min-h-screen bg-background text-foreground selection:bg-darkkhaki selection:text-white antialiased font-sans">
                {/* Navbar Component */}
                <Navbar />

                {/* Section 1: Hero Section (#home) */}
                <HeroSection />

                {/* Section 2: Kurikulum Overview (Grid Layout) */}
                <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
                    <div className="absolute top-1/3 right-1/10 -z-10 h-80 w-80 rounded-full bg-khaki/5 blur-3xl" />
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Section Header */}
                        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-darkkhaki bg-darkkhaki/10 px-3 py-1 rounded-full w-fit mx-auto">
                                Akademik
                            </h2>
                            <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                                Peminatan Kurikulum Unggulan
                            </h3>
                            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                                Kurikulum inovatif berstandar global untuk menunjang kesiapan belajar dan pembiasaan riset ilmiah siswa.
                            </p>
                        </div>

                        {/* Grid container */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
                            {/* Card Image */}
                            <div className="relative rounded-3xl overflow-hidden border border-border/40 bg-card p-3 shadow-xs hover:shadow-md transition-all duration-300 min-h-[220px] flex">
                                <div className="w-full h-full rounded-2xl overflow-hidden relative bg-muted flex-grow">
                                    <img
                                        src="/images/school_academics.png"
                                        alt="Akademik Siswa"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <span className="text-xs font-bold uppercase tracking-wider text-white bg-darkkhaki/90 px-3 py-1 rounded-md">
                                            Riset & Eksperimen
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* Card MIPA */}
                            <div className="group rounded-3xl border border-border/40 bg-card p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-darkkhaki/20 transition-all duration-300">
                                <div className="space-y-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-darkkhaki/10 text-darkkhaki">
                                        <Atom className="h-6 w-6" />
                                    </div>
                                    <h4 className="text-lg font-bold text-foreground transition-colors group-hover:text-darkkhaki">Peminatan MIPA</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        Fokus kompetensi kuantitatif, computational thinking, coding AI, dan sains terapan Cambridge A-Level.
                                    </p>
                                </div>
                            </div>
                            {/* Card IPS */}
                            <div className="group rounded-3xl border border-border/40 bg-card p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-darkkhaki/20 transition-all duration-300">
                                <div className="space-y-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-darkkhaki/10 text-darkkhaki">
                                        <Landmark className="h-6 w-6" />
                                    </div>
                                    <h4 className="text-lg font-bold text-foreground transition-colors group-hover:text-darkkhaki">Peminatan IPS</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        Melatih analisis ekonomi makro, simulasi sidang PBB (MUN), kepemimpinan hukum, dan entrepreneurship sosial.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <Button asChild className="bg-darkkhaki hover:bg-darkkhaki/90 text-white font-semibold px-6 py-5 rounded-xl cursor-pointer">
                                <Link href="/kurikulum">
                                    Lihat Kurikulum Lengkap
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Section 3: Ekstrakurikuler Highlights (Flexbox Layout) */}
                <section className="py-20 lg:py-28 bg-muted/20 relative overflow-hidden">
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 h-72 w-72 rounded-full bg-khaki/5 blur-3xl" />
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                        {/* FLEX CONTAINER: Explicit Flexbox layout */}
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center w-full">
                            
                            {/* Left Flex Column */}
                            <div className="flex-1 space-y-6 text-left w-full">
                                <h2 className="text-xs font-bold uppercase tracking-widest text-darkkhaki bg-darkkhaki/10 px-3 py-1 rounded-full w-fit">
                                    Budaya Sekolah
                                </h2>
                                <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                                    Pengembangan Ekstrakurikuler Kejuaraan
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Wadah eksplorasi potensi di luar kelas. Mengembangkan soft-skills kepemimpinan, sportivitas, dan kerja sama tim secara menyenangkan.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex gap-3 items-center text-sm text-foreground/90">
                                        <CheckCircle2 className="h-4.5 w-4.5 text-darkkhaki shrink-0" />
                                        <span>Robotik, Coding, & English Debate Club</span>
                                    </div>
                                    <div className="flex gap-3 items-center text-sm text-foreground/90">
                                        <CheckCircle2 className="h-4.5 w-4.5 text-darkkhaki shrink-0" />
                                        <span>Basket, Futsal, Orkestra, Musik, & Teater</span>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <Button asChild className="bg-darkkhaki hover:bg-darkkhaki/90 text-white font-semibold px-6 py-5 rounded-xl cursor-pointer">
                                        <Link href="/ekstrakurikuler">
                                            Jelajahi Ekstrakurikuler
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Right Flex Column */}
                            <div className="flex-1 w-full">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-5 rounded-2xl border border-border bg-card flex flex-col gap-3">
                                        <Cpu className="h-6 w-6 text-darkkhaki" />
                                        <h5 className="font-bold text-sm text-foreground">Robotik</h5>
                                    </div>
                                    <div className="p-5 rounded-2xl border border-border bg-card flex flex-col gap-3">
                                        <Music className="h-6 w-6 text-darkkhaki" />
                                        <h5 className="font-bold text-sm text-foreground">Orkestra</h5>
                                    </div>
                                    <div className="relative rounded-2xl border border-border overflow-hidden sm:col-span-2 aspect-[2.5/1] flex items-center justify-center p-2 bg-card">
                                        <div className="w-full h-full rounded-xl overflow-hidden relative flex items-center justify-center bg-muted">
                                            <img
                                                src="/images/school_activities.png"
                                                alt="Kegiatan Siswa"
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-black/55 pointer-events-none" />
                                            <div className="relative text-center space-y-1.5 p-4 z-10">
                                                <GraduationCap className="h-7 w-7 text-darkkhaki mx-auto" />
                                                <h5 className="font-bold text-sm text-white">80+ Prestasi Tingkat Nasional</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>

                {/* Footer Component */}
                <Footer />
            </div>
        </>
    );
}
