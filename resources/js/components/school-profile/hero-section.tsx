import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import {
    ArrowRight,
    BookOpen,
    GraduationCap,
    Trophy,
    Users,
} from 'lucide-react';
import React from 'react';

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
            className="relative flex min-h-screen items-center overflow-hidden bg-background pt-8"
        >
            {/* Visual background blurs themed with Khaki */}
            <div className="absolute top-1/4 left-1/10 -z-10 h-72 w-72 animate-pulse rounded-full bg-khaki/10 blur-3xl duration-5000" />
            <div className="absolute right-1/10 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-darkkhaki/10 blur-3xl" />

            {/* Subtle Grid overlay */}
            <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 dark:opacity-10" />

            <div className="container mx-auto flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                    {/* Left content column */}
                    <div className="flex flex-col justify-center space-y-6 text-left lg:col-span-7">
                        <h1 className="text-4xl leading-[1.15] font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            Membentuk Generasi{' '}
                            <span className="bg-gradient-to-r from-darkkhaki via-khaki to-darkkhaki bg-clip-text text-transparent">
                                Unggul & Berkarakter
                            </span>{' '}
                            Global
                        </h1>

                        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                            Selamat datang di SMA Unggul Nusantara. Kami
                            berdedikasi menciptakan keselarasan kompetensi
                            sains, teknologi, dan akhlak moral berdasar kearifan
                            budaya luhur bangsa.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <Button
                                asChild
                                className="group cursor-pointer rounded-xl bg-darkkhaki px-7 py-6 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:translate-y-[-1px] hover:bg-darkkhaki/90 hover:shadow-xl hover:shadow-darkkhaki/20"
                            >
                                <Link href="/profile">
                                    Tentang Sekolah
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="cursor-pointer rounded-xl border-border px-7 py-6 text-base font-semibold text-foreground transition-all duration-300 hover:bg-muted/40"
                            >
                                <Link href="/kurikulum">Lihat Kurikulum</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right media column */}
                    <div className="relative flex items-center justify-center lg:col-span-5">
                        <div className="relative aspect-square w-full max-w-[480px] rounded-3xl border border-border/50 bg-card/40 p-3 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:scale-[1.02] lg:aspect-[4/3.8]">
                            {/* Inner image container */}
                            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-muted">
                                <img
                                    src="/images/modern_school_campus.png"
                                    alt="Modern Campus SMA Unggul Nusantara"
                                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                                    loading="eager"
                                />
                                {/* Overlay gradient */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />

                                {/* Info badge styled with Dark Khaki */}
                                <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between rounded-xl border border-border/50 bg-background/80 p-4 backdrop-blur-md">
                                    <div>
                                        <h4 className="text-sm font-bold text-foreground">
                                            Kampus Utama
                                        </h4>
                                        <p className="text-xs text-muted-foreground">
                                            Modern & Berkelanjutan
                                        </p>
                                    </div>
                                    <span className="rounded-md bg-darkkhaki/10 px-2.5 py-1 text-[10px] font-bold tracking-widest text-darkkhaki uppercase">
                                        Eco School
                                    </span>
                                </div>
                            </div>

                            {/* Floating decorative card styled with Khaki */}
                            <div className="absolute -top-6 -right-6 hidden items-center gap-3 rounded-2xl border border-darkkhaki/20 bg-popover/90 p-4 shadow-xl backdrop-blur-md sm:flex">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-darkkhaki text-lg font-bold text-white">
                                    ★
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-foreground">
                                        Sekolah Rujukan
                                    </h4>
                                    <p className="text-[10px] text-muted-foreground">
                                        Model Nasional
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics Row */}
                <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl border border-border/40 bg-card/30 p-6 shadow-xs backdrop-blur-xs md:grid-cols-4 lg:mt-24">
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={idx}
                                className="flex items-center justify-start gap-4 border-r border-border/30 p-2 last:border-r-0 last:border-none"
                            >
                                <div
                                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${stat.color} transition-all hover:rotate-6`}
                                >
                                    <Icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <span className="block text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                                        {stat.value}
                                    </span>
                                    <span className="block text-xs font-medium text-muted-foreground sm:text-sm">
                                        {stat.label}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
