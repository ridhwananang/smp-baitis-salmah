import Footer from '@/components/school-profile/footer';
import Navbar from '@/components/school-profile/navbar';
import { Button } from '@/components/ui/button';
import { Head } from '@inertiajs/react';
import { Award, Calendar, CheckCircle2, GraduationCap, History, Lightbulb, MapPin, Shield, Users } from 'lucide-react';
import React, { useState } from 'react';

type TabType = 'visi' | 'misi' | 'nilai';

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState<TabType>('visi');

    const coreValues = [
        { name: 'Integritas', desc: 'Menjunjung tinggi kebenaran, kejujuran, dan tanggung jawab moral dalam setiap tindakan.', icon: Shield, color: 'text-darkkhaki bg-darkkhaki/10' },
        { name: 'Inovasi', desc: 'Terbuka terhadap perubahan, memupuk kreativitas, dan aktif mencari metode belajar-mengajar baru.', icon: Lightbulb, color: 'text-darkkhaki bg-darkkhaki/10' },
        { name: 'Kolaborasi', desc: 'Bekerja sama, bersinergi, dan menjalin gotong royong antar siswa, guru, orang tua, dan masyarakat.', icon: Users, color: 'text-darkkhaki bg-darkkhaki/10' },
    ];

    const missionItems = [
        'Menyelenggarakan pendidikan menengah berkualitas tinggi yang memadukan kurikulum nasional dan standar global.',
        'Menerapkan pembelajaran inovatif berbasis riset (research-based learning) dan pemanfaatan teknologi kecerdasan buatan.',
        'Membina akhlak mulia melalui pembiasaan kedisiplinan, nilai religius, dan wawasan kebinekaan global.',
        'Mendorong pencapaian prestasi akademik dan non-akademik di tingkat nasional maupun internasional.',
        'Membangun jejaring kolaborasi dengan universitas kelas dunia untuk mempersiapkan kelulusan siswa.'
    ];

    const milestones = [
        { year: '2018', title: 'Sekolah Didirikan', desc: 'SMA Unggul Nusantara resmi dibuka dengan kurikulum berbasis sains terpadu.' },
        { year: '2021', title: 'Akreditasi A & Rujukan', desc: 'Meraih akreditasi A BAN-S/M dengan nilai sangat memuaskan, serta ditunjuk menjadi sekolah model rujukan.' },
        { year: '2024', title: 'Sertifikasi Cambridge', desc: 'Resmi mengintegrasikan Cambridge Assessment International Education pada peminatan MIPA.' },
        { year: '2026', title: 'AI Center & Eco School', desc: 'Peluncuran laboratorium kecerdasan buatan terpadu dan penghargaan nasional green campus.' }
    ];

    return (
        <>
            <Head>
                <title>Profil Sekolah - SMA Unggul Nusantara</title>
                <meta name="description" content="Ketahui visi, misi, nilai utama, dan sejarah berdirinya SMA Unggul Nusantara." />
            </Head>

            <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col justify-between">
                {/* Navbar Component */}
                <Navbar />

                <main className="flex-grow pt-24 pb-16">
                    {/* Header Banner Section */}
                    <section className="bg-gradient-to-br from-khaki/10 via-darkkhaki/5 to-khaki/5 py-16 px-4 border-b border-border/30 relative overflow-hidden">
                        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-10 h-64 w-64 rounded-full bg-darkkhaki/5 blur-3xl" />
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                {/* Left Content */}
                                <div className="lg:col-span-7 space-y-4 text-left">
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-darkkhaki/20 bg-darkkhaki/5 text-darkkhaki text-xs font-semibold">
                                        <GraduationCap className="h-3 w-3" />
                                        TENTANG SMA UNGGUL NUSANTARA
                                    </div>
                                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                                        Profil & Budaya Sekolah
                                    </h1>
                                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                                        Membina harmoni kecerdasan akademis, spiritual, dan integritas kepemimpinan sosial berlandaskan kearifan bangsa.
                                    </p>
                                </div>
                                {/* Right Image Card */}
                                <div className="lg:col-span-5 relative w-full aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border border-border/40 bg-card p-2 shadow-lg">
                                    <img 
                                        src="/images/modern_school_campus.png" 
                                        alt="Modern School Campus" 
                                        className="w-full h-full object-cover rounded-xl"
                                        loading="eager"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Visi Misi Section (Flexbox) */}
                    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-6xl">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch w-full">
                            
                            {/* Left Flex Column: Headmaster welcome card */}
                            <div className="flex-1 flex flex-col justify-center w-full">
                                <div className="relative rounded-3xl border border-border/50 bg-card p-6 sm:p-8 shadow-xl flex flex-col h-full justify-between">
                                    <div className="absolute -top-4 -left-4 h-12 w-12 rounded-2xl bg-darkkhaki/10 flex items-center justify-center text-darkkhaki text-3xl font-serif">
                                        “
                                    </div>
                                    
                                    <div className="space-y-6">
                                        <p className="text-base font-medium text-foreground italic leading-relaxed pt-2">
                                            "Pendidikan sejati haruslah mengasah kecerdasan intelektual sekaligus membentuk kekuatan moral. Melalui kolaborasi seluruh tenaga pendidik, orang tua, dan murid, kami bertekad melahirkan lulusan berkarakter unggul yang siap menjadi pelopor kemajuan peradaban global."
                                        </p>
                                    </div>
                                    
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

                            {/* Right Flex Column: Vision Mission tabs selector */}
                            <div className="flex-1 flex flex-col justify-between w-full">
                                <div className="flex flex-col h-full rounded-3xl border border-border/50 bg-card/60 p-6 sm:p-8 shadow-xl backdrop-blur-md">
                                    
                                    {/* Tabs selection */}
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

                                    {/* Content Switcher */}
                                    <div className="flex-grow flex flex-col justify-center">
                                        {activeTab === 'visi' && (
                                            <div className="space-y-4 animate-fade-in py-2">
                                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-darkkhaki/10 text-darkkhaki mb-2">
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
                                                            <CheckCircle2 className="h-5 w-5 text-darkkhaki shrink-0 mt-0.5" />
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
                    </section>

                    {/* School History Milestone Timeline */}
                    <section className="bg-muted/20 py-16">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                            <div className="text-center mb-16 space-y-4">
                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-darkkhaki/10 text-darkkhaki">
                                    <History className="h-5 w-5" />
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                                    Rekam Jejak & Milestones Sekolah
                                </h2>
                                <p className="text-muted-foreground text-sm max-w-md mx-auto">
                                    Sejarah perjalanan kami dalam mengukir prestasi dan membangun sarana belajar yang berkelanjutan.
                                </p>
                            </div>

                            {/* Milestone Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {milestones.map((milestone, idx) => (
                                    <div key={idx} className="bg-card border border-border/40 rounded-3xl p-6 shadow-xs relative flex flex-col justify-between hover:border-darkkhaki/30 transition-all duration-300">
                                        <div className="space-y-4">
                                            <span className="text-3xl font-extrabold text-darkkhaki block">
                                                {milestone.year}
                                            </span>
                                            <h4 className="text-base font-bold text-foreground">
                                                {milestone.title}
                                            </h4>
                                            <p className="text-xs text-muted-foreground leading-relaxed">
                                                {milestone.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Location Info & Map preview */}
                    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
                        <div className="rounded-3xl border border-border/50 bg-card p-6 sm:p-8 shadow-xl flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1 space-y-4 text-left">
                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-darkkhaki/10 text-darkkhaki">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">Lokasi Strategis Kampus</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Kampus SMA Unggul Nusantara terletak di kawasan asri Kebayoran Baru, Jakarta Selatan. Aksesibilitas mudah dijangkau dengan transportasi umum maupun kendaraan pribadi.
                                </p>
                                <div className="text-xs text-muted-foreground font-semibold">
                                    Alamat: Jl. Pendidikan Raya No. 45, Kebayoran Baru, Jakarta Selatan, 12130
                                </div>
                            </div>
                            <div className="flex-1 w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-md bg-muted relative">
                                {/* Simulated static map design */}
                                <div className="absolute inset-0 bg-sky-200/20 flex items-center justify-center p-4">
                                    <div className="text-center space-y-2">
                                        <MapPin className="h-10 w-10 text-darkkhaki mx-auto animate-bounce" />
                                        <span className="text-xs font-bold text-foreground">Kebayoran Baru, Jaksel</span>
                                        <Button size="sm" variant="outline" className="text-[10px] py-1 px-2 h-7 bg-background border-border hover:bg-muted cursor-pointer" asChild>
                                            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                                                Buka Google Maps
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer Component */}
                <Footer />
            </div>
        </>
    );
}
