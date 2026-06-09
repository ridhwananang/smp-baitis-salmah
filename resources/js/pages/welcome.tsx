
import { Head, Link } from '@inertiajs/react';
import { ArrowRight, Atom, CheckCircle2, Cpu, GraduationCap, Landmark, Music } from 'lucide-react';
import React from 'react';
import Footer from '@/components/school-profile/footer';
import HeroSection from '@/components/school-profile/hero-section';
import Navbar from '@/components/school-profile/navbar';
import { Button } from '@/components/ui/button';

export default function Welcome() {
    return (
        <>
            <Head>
                <title>Mts Baitis Salmah - Membina Generasi Unggul, Berkarakter & Global</title>
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


                {/* Footer Component */}
                <Footer />
            </div>
        </>
    );
}
