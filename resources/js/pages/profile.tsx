import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

import { Award,ArrowRight, CheckCircle2, GraduationCap, History, Lightbulb, MapPin, Shield, Users } from 'lucide-react';
import React, { useState } from 'react';
import Footer from '@/components/school-profile/footer';
import Navbar from '@/components/school-profile/navbar';
import { Button } from '@/components/ui/button';

type TabType = 'visi' | 'misi' | 'nilai';

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState<TabType>('visi');

    const coreValues = [
        { name: 'Integritas', desc: 'Menjunjung tinggi kebenaran, kejujuran, dan tanggung jawab moral dalam setiap tindakan.', icon: Shield, color: 'text-darkkhaki bg-darkkhaki/10' },
        { name: 'Inovasi', desc: 'Terbuka terhadap perubahan, memupuk kreativitas, dan aktif mencari metode belajar-mengajar baru.', icon: Lightbulb, color: 'text-darkkhaki bg-darkkhaki/10' },
        { name: 'Kolaborasi', desc: 'Bekerja sama, bersinergi, dan menjalin gotong royong antar siswa, guru, orang tua, dan masyarakat.', icon: Users, color: 'text-darkkhaki bg-darkkhaki/10' },
    ];

    const missionItems = [
        'Meningkatkan dan mengembangkan prestasi peserta didik secara akademik dan non akademik.',
        'Menumbuh kembangkan mental profesional, akhlak mulia, kreatif dan inovatif yang berwawasan maju.',
        'Mengembangkan sikap disiplin yang berkarakter.',
        'Menanamkan keimanan dan ketaqwaan peserta didik serta mengamalkan ajaran agama dalam kehidupan sehari-hari.',
        
    ];

    

    return (
        <>
       <section
    id="home"
    className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{
        backgroundImage: "url('/images/fotosekolah.jpeg')",
    }}
>
           

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
                        Profil &{' '}
                        <span className="bg-gradient-to-r from-darkkhaki via-khaki to-darkkhaki bg-clip-text text-transparent">
                            Sejarah Singkat 
                        </span>{' '}
                        Sekolah
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl">
                        Selamat datang di MTs Baitis Salmah. dibangun atas dasar keyakinan, bahwa proses pendidikan bertolak dari
                        dan menuju fitrah manusia yang hakiki sebagai mahkluk Allah SWT.
                    </p>

                    

                </div>
            </div>
        </section>
            <Head>
                <title>Profil Sekolah - MTs Baitis Salmah</title>
                <meta name="description" content="Ketahui visi, misi, nilai utama, dan sejarah berdirinya SMA Unggul Nusantara." />
            </Head>

            <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col justify-between">
                {/* Navbar Component */}
                <Navbar />

                <main className="flex-grow pt-14 pb-16">
                    {/* Header Banner Section */}
                    

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
                                        <div className="mt-8 flex justify-center">
                                            <img
                                            src="/images/guru.jpeg"
                                            alt="Dr. H. Akhmad Fauzi, M.Pd."
                                          className="w-full max-w-md rounded-2xl object-cover shadow-lg"
                                         />
                                            </div>
                                    </div>
                                    
                                </div>
                            </div>

                            {/* Right Flex Column: Vision Mission tabs selector */}
                            <div className="flex-1 flex flex-col justify-between w-full">
                                <div className="flex flex-col h-full rounded-3xl border border-border/50 bg-card/60 p-6 sm:p-8 shadow-xl backdrop-blur-md">
                                    
                                    {/* Tabs selection */}
                                    <div className="flex gap-2 p-1.5 rounded-2xl bg-muted/40 border border-border/40 mb-6 shrink-0">
                                        {(['visi', 'misi'] as TabType[]).map((tab) => (
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
                                                    "MTs. Baitis Salmah dibangun atas dasar keyakinan, bahwa proses pendidikan bertolak dari dan menuju fitrah manusia yang hakiki sebagai makhluk Allah SWT.
                                                     Artinya, pendidikan merupakan proses pencarian jati diri manusia dan proses memanusiakan manusia. Pendidikan membangun kesadaran kepada manusia tentang; siapa yang menjadikan manusia itu ada, dari mana manusia itu berasal, dan apa tugas manusia di bumi ini? Dalam proses pendidikan manusia diposisikan dan diperlakukan sebagai manusia, yang memiliki potensi, ciri dan karakteristik yang unik. Maka dalam proses memanusiakan manusia itu harus sesuai dengan apa yang diperintahkan oleh Allah, yang menjadikan manusia itu ada. Oleh karena itu visi MTs. Baitis Salmah adalah :
                                                     "Madrasah yang unggul dan populis untuk mencetak generasi berprestasi serta berakhlak mulia""
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
                                    Sejarah Singkat Sekolah
                                </h2>
                                <h1 className="text-muted-foreground text-xl w-full mx-auto">
                                    MTs. Baitis Salmah didirikan oleh Yayasan Baitis Salmah pada tahun 1984. Yayasan Baitis Salmah merupakan wakaf dari Bapak H. Ali Muhammad, seorang pengusaha yang tinggal di Jakarta.
                                    Pada mulanya Yayasan Baitis Salmah hanya membawahi masjid Baitis Salmah dan Madrasah Ibtidaiyah (MI) Baitis Salmah. Namun melihat realitas bahwa ketika itu banyak lulusan SD/MI di sekitar wilayah Tegal rotan yang tidak tertampung di sekolah lanjutan tingkat pertama yang letaknya jauh dan sulit terjangkau dengan transportasi, maka Yayasan berinisiatif untuk mendirikan Madrasah Tsanawiyah (MTs) guna menampung para lulusan tersebut.
                                    Tahun ajaran 1984/1985 MTs Baitis Salmah untuk pertama kalinya menerima siswa baru dengan jumlah 29 siswa. Kini siswa siswi MTs. Baitis Salmah berjumlah 110 siswa.
                                </h1>
                            </div>

                            
                        </div>
                    </section>

                    {/* Location Info & Map preview */}
                 <section className="container mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="rounded-3xl border border-border/50 bg-card p-6 shadow-xl sm:p-8">
        {/* Header */}
        <div className="space-y-4">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-darkkhaki/10 text-darkkhaki">
                <MapPin className="h-5 w-5" />
            </div>

            <h3 className="text-2xl font-bold text-foreground">
                Lokasi Strategis Sekolah
            </h3>

            <p className="leading-relaxed text-muted-foreground">
                MTs Baitis Salmah berada di kawasan Bintaro, Tangerang Selatan.
                Aksesibilitas mudah dijangkau dengan transportasi umum maupun
                kendaraan pribadi.
            </p>

            <div className="rounded-xl bg-muted/50 p-4">
                <p className="text-sm font-semibold text-foreground">
                    Alamat Sekolah
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Jl. Masjid Baitis Salmah, Sawah Baru, Kec. Ciputat,
                    Kota Tangerang Selatan, Banten 15413
                </p>
            </div>
        </div>

        {/* Google Maps */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-md">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8591589064076!2d106.71840259999999!3d-6.282238899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f00b23a9868f%3A0xe74f55a1a9bb202a!2sMasjid%20Baitis%20Salmah!5e0!3m2!1sen!2sid!4v1780938384459!5m2!1sen!2sid"
                className="h-[450px] w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
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
