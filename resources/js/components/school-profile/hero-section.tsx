import { Link } from '@inertiajs/react';
import {
    ArrowRight,
    BookOpen,
    GraduationCap,
    Trophy,
    Users,
} from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
    const stats = [
        {
            label: 'Siswa Aktif',
            value: '1.200+',
            icon: Users,
            color: 'text-darkkhaki bg-darkkhaki/10',
        },
        {
            label: 'Guru & Staff',
            value: '85+',
            icon: GraduationCap,
            color: 'text-darkkhaki bg-darkkhaki/10',
        },
        {
            label: 'Akreditasi',
            value: 'A',
            icon: BookOpen,
            color: 'text-darkkhaki bg-darkkhaki/10',
        },
        {
            label: 'Lulusan PTN/LN',
            value: '98%',
            icon: Trophy,
            color: 'text-darkkhaki bg-darkkhaki/10',
        },
    ];

    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden"
        >
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 z-0 h-full w-full object-cover"
            >
                <source
                    src="/images/vidio sekolah.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 z-10 bg-black/60" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Blur Effects */}
            <div className="absolute top-1/4 left-1/4 z-10 h-72 w-72 rounded-full bg-khaki/10 blur-3xl" />
            <div className="absolute right-1/4 bottom-1/4 z-10 h-96 w-96 rounded-full bg-darkkhaki/10 blur-3xl" />

            {/* Content */} 
            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl text-center">
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl">
                        Madrasah yang unggul dan populis{' '}
                        <span className="bg-gradient-to-r from-darkkhaki via-khaki to-darkkhaki bg-clip-text text-transparent">
                            untuk mencetak generasi berprestasi serta 
                        </span>{' '}
                        berakhlak mulia
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl">
                        Selamat datang di MTs Baitis Salmah. dibangun atas dasar keyakinan, bahwa proses pendidikan bertolak dari
                        dan menuju fitrah manusia yang hakiki sebagai mahkluk Allah SWT.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            className="group rounded-xl bg-darkkhaki px-8 py-6 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-darkkhaki/90"
                        >
                            <Link href="/profile">
                                Tentang Sekolah
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            className="rounded-xl border-white/30 bg-white/10 px-8 py-6 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                        >
                            <Link href="/kurikulum">
                                Fasilitas & Program Pembiasaan
                            </Link>
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
}