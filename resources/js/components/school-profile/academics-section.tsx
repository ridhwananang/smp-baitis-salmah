import { Atom, Cpu, Globe, Landmark, Library, Sparkles } from 'lucide-react';
import React from 'react';

export default function AcademicsSection() {
    const kurikulumTracks = [
        {
            title: 'Peminatan MIPA',
            subtitle: 'Sains & Teknologi Komputasi',
            desc: 'Fokus pada penalaran kuantitatif, analisis logika ilmiah, dan rekayasa digital. Kurikulum dioptimalkan untuk mempersiapkan karir di bidang kedokteran, arsitektur, data science, dan ilmu teknologi.',
            icon: Atom,
            color: 'text-darkkhaki bg-darkkhaki/10 border-darkkhaki/20',
            details: ['Olimpiade Sains (OSN)', 'Karya Ilmiah Remaja (KIR)', 'Coding & Basic AI Lab', 'Kimia & Biologi Terapan']
        },
        {
            title: 'Peminatan IPS',
            subtitle: 'Sosial, Bisnis, & Hukum',
            desc: 'Menelaah interaksi sosial, tata hukum tata negara, ekonomi makro, serta dasar kepemimpinan bisnis. Mengembangkan pemikiran kritis, public speaking, dan kecakapan entrepreneurship.',
            icon: Landmark,
            color: 'text-darkkhaki bg-darkkhaki/10 border-darkkhaki/20',
            details: ['Student Entrepreneurship', 'Model United Nations (MUN)', 'Debat Konstitusi & Politik', 'Riset Ekonomi Mandiri']
        },
        {
            title: 'Kurikulum Internasional',
            subtitle: 'Global Competence & Bilingual',
            desc: 'Program pendamping bersertifikasi internasional (Cambridge/IB framework) untuk memperluas kesiapan studi ke luar negeri. Pengajaran dwibahasa (bilingual) pada sains dan matematika.',
            icon: Sparkles,
            color: 'text-darkkhaki bg-darkkhaki/10 border-darkkhaki/20',
            details: ['Bilingual Mathematics', 'Academic English Prep', 'Sertifikat Internasional', 'Mentoring Studi Luar Negeri']
        }
    ];

    const facilities = [
        {
            name: 'Lab Terpadu & AI Center',
            desc: 'Laboratorium sains modern lengkap dengan unit komputasi khusus untuk melatih kecerdasan buatan, visualisasi data, dan pemodelan riset siswa.',
            icon: Cpu,
            badge: 'Modern'
        },
        {
            name: 'Perpustakaan Digital',
            desc: 'Ruang baca estetik dengan koleksi e-book luas, akses ke ribuan jurnal akademik, dan bilik belajar privat kedap suara untuk fokus maksimal.',
            icon: Library,
            badge: 'Lengkap'
        },
        {
            name: 'Sport Center & Amphitheater',
            desc: 'Sarana olahraga indoor standar kompetensi, lapangan rumput hijau, serta aula pertunjukan teater berkapasitas 500 penonton.',
            icon: Globe,
            badge: 'Premium'
        }
    ];

    return (
        <section id="kurikulum" className="scroll-mt-20 py-20 lg:py-28 bg-background relative overflow-hidden">
            {/* Background blur overlays */}
            <div className="absolute top-1/3 right-1/10 -z-10 h-80 w-80 rounded-full bg-khaki/5 blur-3xl" />
            <div className="absolute bottom-1/3 left-1/10 -z-10 h-80 w-80 rounded-full bg-darkkhaki/5 blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-darkkhaki bg-darkkhaki/10 px-3 py-1 rounded-full w-fit mx-auto">
                        Kurikulum Unggulan
                    </h2>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                        Program Peminatan & Struktur Belajar
                    </h3>
                    <p className="text-muted-foreground text-base sm:text-lg">
                        Mengkombinasikan ketuntasan kurikulum nasional dengan standar kompetensi global untuk membekali lulusan dengan kesiapan akademik paripurna.
                    </p>
                </div>

                {/* Grid layout for Curriculum Tracks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {kurikulumTracks.map((track, idx) => {
                        const Icon = track.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative rounded-3xl border border-border/40 bg-card p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-darkkhaki/30 transition-all duration-300 hover:translate-y-[-4px] flex flex-col justify-between"
                            >
                                <div className="space-y-5">
                                    {/* Icon with khaki theme */}
                                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${track.color} transition-transform duration-300 group-hover:scale-105`}>
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    
                                    <div>
                                        <h4 className="text-xl font-bold text-foreground transition-colors group-hover:text-darkkhaki">
                                            {track.title}
                                        </h4>
                                        <p className="text-xs font-semibold text-darkkhaki uppercase tracking-wide mt-1">
                                            {track.subtitle}
                                        </p>
                                    </div>

                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {track.desc}
                                    </p>

                                    {/* Bullet points detailing curriculum */}
                                    <div className="pt-2 border-t border-border/30">
                                        <ul className="grid grid-cols-2 gap-2 text-xs font-medium text-foreground/85">
                                            {track.details.map((detail, dIdx) => (
                                                <li key={dIdx} className="flex items-center gap-1.5">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-darkkhaki shrink-0" />
                                                    <span className="truncate">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Academic Facilities subheader */}
                <div className="mt-24 text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-darkkhaki bg-darkkhaki/10 px-3 py-1 rounded-full w-fit mx-auto">
                        Infrastruktur
                    </h2>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                        Fasilitas Penunjang Akademis
                    </h3>
                </div>

                {/* Flex layout with Image and Facilities list */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                    {/* Left Column: Image (Span 5) */}
                    <div className="lg:col-span-5 relative flex items-center justify-center min-h-[320px]">
                        <div className="relative w-full h-full rounded-3xl border border-border/50 bg-card/40 p-3 shadow-xl backdrop-blur-md overflow-hidden flex">
                            <div className="w-full h-full overflow-hidden rounded-2xl relative bg-muted flex-grow">
                                <img
                                    src="/images/school_academics.png"
                                    alt="Fasilitas Akademik Unggul"
                                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                                <div className="absolute bottom-4 left-4">
                                    <p className="text-xs font-bold uppercase tracking-widest text-white bg-darkkhaki/90 px-3 py-1.5 rounded-md">
                                        Lab Terpadu & AI Center
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Column: Facilities list (Span 7) */}
                    <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
                        {facilities.map((fac, idx) => {
                            const Icon = fac.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group rounded-3xl border border-border/40 bg-card/30 backdrop-blur-xs p-6 shadow-xs hover:shadow-md hover:border-darkkhaki/20 transition-all duration-300 flex items-center gap-6"
                                >
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-darkkhaki/10 text-darkkhaki transition-transform duration-300 group-hover:scale-105">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex items-center justify-between gap-4">
                                            <h4 className="text-lg font-bold text-foreground transition-colors group-hover:text-darkkhaki">
                                                {fac.name}
                                            </h4>
                                            <span className="text-[10px] uppercase font-bold tracking-widest text-darkkhaki bg-khaki/20 px-2.5 py-1 rounded-md shrink-0">
                                                {fac.badge}
                                            </span>
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                                            {fac.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
