import { 
    Building2, 
    School, 
    Heart, 
    Laptop, 
    Library, 
    Trophy, 
    BookHeart, 
    Users, 
    Sun, 
    BookOpen, 
    Flower 
} from 'lucide-react';
import React from 'react';

export default function AcademicsSection() {
    const facilities = [
        {
            name: 'Gedung 2 Lantai',
            desc: 'Gedung belajar representatif 2 lantai yang kokoh, modern, dan dirancang khusus untuk mendukung proses belajar mengajar secara aman dan optimal.',
            icon: Building2,
            badge: 'Utama'
        },
        {
            name: 'Ruang Belajar Luas & Nyaman',
            desc: 'Ruang kelas yang luas, bersih, dan dilengkapi dengan pencahayaan yang baik, AC, proyektor LCD, serta sarana belajar yang sangat nyaman.',
            icon: School,
            badge: 'Kelas'
        },
        {
            name: 'Masjid yang Nyaman',
            desc: 'Masjid Baitis Salmah sebagai pusat pembinaan ibadah dan spiritualitas yang tenang, bersih, luas, dan nyaman digunakan setiap hari.',
            icon: Heart,
            badge: 'Ibadah'
        },
        {
            name: 'Lab Komputer yang Memadai',
            desc: 'Fasilitas laboratorium komputer modern dengan spesifikasi perangkat keras terkini untuk menunjang literasi digital dan asesmen komputer.',
            icon: Laptop,
            badge: 'Teknologi'
        },
        {
            name: 'Perpustakaan',
            desc: 'Ruang membaca yang sejuk dan lengkap dengan koleksi literatur akademik, e-book, fiksi, serta area belajar mandiri.',
            icon: Library,
            badge: 'Pustaka'
        },
        {
            name: 'Lapangan Futsal, Basket, dll.',
            desc: 'Area lapangan serbaguna luar ruangan yang luas untuk menyalurkan bakat olahraga siswa seperti futsal, basket, bulu tangkis, dan lainnya.',
            icon: Trophy,
            badge: 'Olahraga'
        }
    ];

    const programs = [
        {
            title: 'BTQ (Baca Tahfiz Qur\'an)',
            desc: 'Program bimbingan intensif membaca Al-Qur\'an secara tartil disertai hafalan Juz 30 dan surat-surat pilihan secara sistematis.',
            icon: BookHeart,
            color: 'text-darkkhaki bg-darkkhaki/10 border-darkkhaki/20',
            schedule: 'Rutin Harian'
        },
        {
            title: 'Sholat Zuhur Berjamaah',
            desc: 'Menanamkan disiplin ibadah sejak dini melalui pelaksanaan sholat zuhur berjamaah di masjid sekolah bersama guru dan staf.',
            icon: Users,
            color: 'text-darkkhaki bg-darkkhaki/10 border-darkkhaki/20',
            schedule: 'Setiap Hari'
        },
        {
            title: 'Sholat Dhuha & Pembacaan Yasin, Tahlil',
            desc: 'Memulai hari dengan keberkahan lewat sholat dhuha berjamaah dilanjutkan membaca Surat Yasin serta doa tahlil secara berkala.',
            icon: Sun,
            color: 'text-darkkhaki bg-darkkhaki/10 border-darkkhaki/20',
            schedule: 'Berkala'
        },
        {
            title: 'Tadarus Juz 30 & Surat Pilihan',
            desc: 'Kegiatan tadarus bersama di awal jam pelajaran untuk membiasakan interaksi harian siswa dengan ayat-ayat suci Al-Qur\'an.',
            icon: BookOpen,
            color: 'text-darkkhaki bg-darkkhaki/10 border-darkkhaki/20',
            schedule: 'Pagi Hari'
        },
        {
            title: 'Keputrian',
            desc: 'Pembekalan fiqih wanita, kajian akhlak, serta pembinaan kepribadian Islami khusus untuk siswi perempuan pada hari Jumat.',
            icon: Flower,
            color: 'text-darkkhaki bg-darkkhaki/10 border-darkkhaki/20',
            schedule: 'Hari Jumat'
        }
    ];

    return (
        <section id="kurikulum" className="scroll-mt-20 py-20 lg:py-28 bg-background relative overflow-hidden">
            {/* Background blur overlays */}
            <div className="absolute top-1/3 right-1/10 -z-10 h-80 w-80 rounded-full bg-khaki/5 blur-3xl" />
            <div className="absolute bottom-1/3 left-1/10 -z-10 h-80 w-80 rounded-full bg-darkkhaki/5 blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Academic Facilities subheader */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-darkkhaki bg-darkkhaki/10 px-3 py-1 rounded-full w-fit mx-auto">
                        Infrastruktur
                    </h2>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                        Fasilitas Sekolah
                    </h3>
                    <p className="text-muted-foreground text-base sm:text-lg">
                        MTs Baitis Salmah menyediakan berbagai sarana dan prasarana lengkap yang menunjang kenyamanan serta efektivitas belajar siswa.
                    </p>
                </div>

                {/* Flex layout with Image and Facilities list */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                    {/* Left Column: Image (Span 5) */}
                    <div className="lg:col-span-5 relative flex items-center justify-center min-h-[320px]">
                        <div className="relative w-full h-full rounded-3xl border border-border/50 bg-card/40 p-3 shadow-xl backdrop-blur-md overflow-hidden flex">
                            <div className="w-full h-full overflow-hidden rounded-2xl relative bg-muted flex-grow">
                                <img
                                    src="/images/fotosekolah.jpeg"
                                    alt="Fasilitas Sekolah MTs Baitis Salmah"
                                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                                <div className="absolute bottom-4 left-4">
                                    <p className="text-xs font-bold uppercase tracking-widest text-white bg-darkkhaki/90 px-3 py-1.5 rounded-md">
                                        Gedung & Fasilitas Sekolah
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Column: Facilities list (Span 7) */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {facilities.map((fac, idx) => {
                            const Icon = fac.icon;

                            return (
                                <div
                                    key={idx}
                                    className="group rounded-3xl border border-border/40 bg-card/30 backdrop-blur-xs p-6 shadow-xs hover:shadow-md hover:border-darkkhaki/20 transition-all duration-300 flex flex-col gap-4"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-darkkhaki/10 text-darkkhaki transition-transform duration-300 group-hover:scale-105">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <div className="flex-grow space-y-2">
                                        <div className="flex items-center justify-between gap-2">
                                            <h4 className="text-base font-bold text-foreground transition-colors group-hover:text-darkkhaki">
                                                {fac.name}
                                            </h4>
                                            <span className="text-[9px] uppercase font-bold tracking-widest text-darkkhaki bg-khaki/20 px-2 py-0.5 rounded-md shrink-0">
                                                {fac.badge}
                                            </span>
                                        </div>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            {fac.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Program Pembiasaan header */}
                <div className="mt-28 text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-darkkhaki bg-darkkhaki/10 px-3 py-1 rounded-full w-fit mx-auto">
                        Pembentukan Karakter
                    </h2>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                        Program Pembiasaan Sekolah
                    </h3>
                    <p className="text-muted-foreground text-base sm:text-lg">
                        Pembiasaan keagamaan rutin untuk membentuk akhlak mulia, kedisiplinan beribadah, dan kedekatan spiritual siswa dengan nilai-nilai Islami.
                    </p>
                </div>

                {/* Grid layout for Program Pembiasaan */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {programs.map((prog, idx) => {
                        const Icon = prog.icon;

                        return (
                            <div
                                key={idx}
                                className="group relative rounded-3xl border border-border/40 bg-card p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-darkkhaki/30 transition-all duration-300 hover:translate-y-[-4px] flex flex-col justify-between"
                            >
                                <div className="space-y-5">
                                    <div className="flex justify-between items-start">
                                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${prog.color} transition-transform duration-300 group-hover:scale-105`}>
                                            <Icon className="h-7 w-7" />
                                        </div>
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-darkkhaki bg-khaki/10 border border-darkkhaki/20 px-2.5 py-1 rounded-full">
                                            {prog.schedule}
                                        </span>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <h4 className="text-lg font-bold text-foreground transition-colors group-hover:text-darkkhaki">
                                            {prog.title}
                                        </h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            {prog.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
