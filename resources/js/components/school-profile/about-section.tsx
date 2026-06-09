import { CheckCircle2, Award, Shield, Lightbulb, Users } from 'lucide-react';
import React, { useState } from 'react';

type TabType = 'visi' | 'misi' | 'nilai';

export default function AboutSection() {
    const [activeTab, setActiveTab] = useState<TabType>('visi');

    const coreValues = [
        { name: 'Integritas', desc: 'Menjunjung tinggi kebenaran, kejujuran, dan tanggung jawab moral dalam setiap tindakan.', icon: Shield, color: 'text-indigo-500 bg-indigo-500/10' },
        { name: 'Inovasi', desc: 'Terbuka terhadap perubahan, memupuk kreativitas, dan aktif mencari metode belajar-mengajar baru.', icon: Lightbulb, color: 'text-amber-500 bg-amber-500/10' },
        { name: 'Kolaborasi', desc: 'Bekerja sama, bersinergi, dan menjalin gotong royong antar siswa, guru, orang tua, dan masyarakat.', icon: Users, color: 'text-emerald-500 bg-emerald-500/10' },
    ];

    const missionItems = [
        'Menyelenggarakan pendidikan menengah berkualitas tinggi yang memadukan kurikulum nasional dan standar global.',
        'Menerapkan pembelajaran inovatif berbasis riset (research-based learning) dan pemanfaatan teknologi kecerdasan buatan.',
        'Membina akhlak mulia melalui pembiasaan kedisiplinan, nilai religius, dan wawasan kebinekaan global.',
        'Mendorong pencapaian prestasi akademik dan non-akademik di tingkat nasional maupun internasional.',
        'Membangun jejaring kolaborasi dengan universitas kelas dunia untuk mempersiapkan kelulusan siswa.'
    ];

    return (
        <section id="profil" className="py-20 lg:py-28 bg-muted/20 relative overflow-hidden">
            {/* Visual elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 h-72 w-72 rounded-full bg-indigo-500/5 blur-3xl" />
            <div className="absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mx-auto">
                        Tentang Sekolah
                    </h2>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                        Sekilas Profil SMA Unggul Nusantara
                    </h3>
                    <p className="text-muted-foreground text-base sm:text-lg">
                        Berdiri dengan dedikasi penuh untuk memajukan pendidikan bangsa melalui pembinaan karakter mandiri, inovatif, dan berakhlak mulia.
                    </p>
                </div>

                {/* FLEX CONTAINER: Explicit Flexbox layout */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch w-full">
                    
                    {/* LEFT FLEX COLUMN (FLEX ITEM 1): Headmaster Card */}
                    <div className="flex-1 flex flex-col justify-center w-full">
                        <div className="relative rounded-3xl border border-border/50 bg-card p-6 sm:p-8 shadow-xl flex flex-col h-full justify-between">
                            {/* Decorative element */}
                            <div className="absolute -top-4 -left-4 h-12 w-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 text-3xl font-serif">
                                “
                            </div>
                            
                            <div className="space-y-6">
                                <p className="text-base sm:text-lg font-medium text-foreground italic leading-relaxed pt-2">
                                    "Pendidikan bukanlah sekadar mengisi wadah yang kosong, melainkan sebuah proses menyalakan api rasa ingin tahu dan kepemimpinan di dalam diri setiap anak didik kami. Di SMA Unggul Nusantara, kami membimbing siswa agar tidak hanya cerdas secara kognitif, namun juga memiliki integritas moral tinggi yang kokoh."
                                </p>
                            </div>
                            
                            {/* Headmaster identity info with headmaster image */}
                            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border/50">
                                <div className="h-16 w-16 overflow-hidden rounded-2xl border border-border bg-muted shrink-0 shadow-md">
                                    <img
                                        src="/images/school_headmaster.png"
                                        alt="Dr. H. Akhmad Fauzi, M.Pd."
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-foreground leading-snug">
                                        Dr. H. Akhmad Fauzi, M.Pd.
                                    </h4>
                                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">
                                        Kepala Sekolah
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FLEX COLUMN (FLEX ITEM 2): Visi, Misi, Nilai Tabs */}
                    <div className="flex-1 flex flex-col justify-between w-full">
                        <div className="flex flex-col h-full rounded-3xl border border-border/50 bg-card/60 p-6 sm:p-8 shadow-xl backdrop-blur-md">
                            
                            {/* Tab Switcher Headers */}
                            <div className="flex gap-2 p-1.5 rounded-2xl bg-muted/40 border border-border/40 mb-6 shrink-0">
                                {(['visi', 'misi', 'nilai'] as TabType[]).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`flex-1 text-center py-2.5 rounded-xl text-sm font-semibold capitalize transition-all duration-300 cursor-pointer ${
                                            activeTab === tab
                                                ? 'bg-background text-foreground shadow-xs font-bold'
                                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/20'
                                        }`}
                                    >
                                        {tab === 'nilai' ? 'Nilai Utama' : tab}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content Panel */}
                            <div className="flex-grow flex flex-col justify-center">
                                {activeTab === 'visi' && (
                                    <div className="space-y-4 animate-fade-in py-2">
                                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-2">
                                            <Award className="h-5 w-5" />
                                        </div>
                                        <h4 className="text-xl font-bold text-foreground">Visi Sekolah</h4>
                                        <p className="text-lg text-foreground font-medium leading-relaxed leading-[1.6]">
                                            "Menjadi pusat keunggulan pendidikan menengah di Asia Tenggara yang melahirkan pemimpin masa depan berkarakter Pancasila, berwawasan global, unggul dalam riset, serta menguasai sains dan teknologi terkini."
                                        </p>
                                    </div>
                                )}

                                {activeTab === 'misi' && (
                                    <div className="space-y-4 animate-fade-in py-2">
                                        <h4 className="text-xl font-bold text-foreground mb-2">Misi Sekolah</h4>
                                        <ul className="space-y-3">
                                            {missionItems.map((mission, index) => (
                                                <li key={index} className="flex gap-3 items-start text-sm sm:text-base text-foreground/90">
                                                    <CheckCircle2 className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                                                    <span>{mission}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {activeTab === 'nilai' && (
                                    <div className="space-y-4 animate-fade-in py-2">
                                        <h4 className="text-xl font-bold text-foreground mb-2">Budaya & Nilai Utama</h4>
                                        <div className="grid grid-cols-1 gap-4">
                                            {coreValues.map((val, idx) => {
                                                const Icon = val.icon;

                                                return (
                                                    <div key={idx} className="flex gap-4 p-3 rounded-2xl hover:bg-muted/20 transition-all border border-transparent hover:border-border/30">
                                                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${val.color}`}>
                                                            <Icon className="h-5 w-5" />
                                                        </div>
                                                        <div>
                                                            <h5 className="text-sm font-bold text-foreground">{val.name}</h5>
                                                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{val.desc}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
