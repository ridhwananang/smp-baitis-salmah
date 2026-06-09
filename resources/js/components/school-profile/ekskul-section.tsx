import { CheckCircle2, Cpu, Images, Music, Trophy, Users } from 'lucide-react';
import React from 'react';

export default function EkskulSection() {
    const activities = [
        {
            name: 'Tari Ratoeh Jaroeh',
            desc: 'Tari Ratoh Jaroe adalah tarian tradisional dari Aceh yang menampilkan gerakan tangan, tepukan, dan hentakan tubuh yang dilakukan secara serempak oleh para penari.',

        },
        {
            name: 'Hadroh',
            desc: 'Ekstrakurikuler Hadroh melatih keterampilan seni musik Islami melalui permainan rebana dan lantunan shalawat, sekaligus menanamkan nilai religius, kekompakan, disiplin, dan kecintaan kepada Rasulullah SAW.',
        },
        {
            name: 'Tim Futsal',
            desc: 'Membentuk ketahanan fisik, sportivitas, disiplin latihan rutin, dan taktik kerja sama tim dalam liga sekolah.',
            
        },
        {
            name: 'Pramuka & Pasus',
            desc: 'Ekstrakurikuler Pasus bertujuan membentuk siswa yang disiplin, tangguh, berjiwa kepemimpinan, serta memiliki kemampuan kerja sama yang baik. Berbagai latihan fisik, mental, dan organisasi diberikan untuk menumbuhkan karakter yang kuat dan bertanggung jawab.',
            
        }
    ];

    const benefits = [
        'Pengembangan soft-skills kepemimpinan (leadership).',
        'Pelatihan kerja sama tim yang solid dan toleransi.',
        'Penyaluran minat bakat terarah oleh pelatih profesional.',
        'Kesempatan berprestasi di kancah nasional.'
    ];

    return (
        <section id="ekstrakurikuler" className="py-10 lg:py-18 bg-muted/20 relative overflow-hidden">
            {/* Background blur styling */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 h-72 w-72 rounded-full bg-khaki/5 blur-3xl" />
            <div className="absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-darkkhaki/5 blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* FLEX CONTAINER: Explicit Flexbox layout */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center w-full">
                    
                    {/* LEFT FLEX COLUMN (FLEX ITEM 1): Narratives */}
                    <div className="flex-1 space-y-6 text-left w-full">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-darkkhaki bg-darkkhaki/10 px-3 py-1 rounded-full w-fit">
                            Ekstrakurikuler & Karakter
                        </h2>
                        
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                            Mengembangkan Bakat, Minat, dan Jiwa Kepemimpinan
                        </h3>
                        
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                            Kami meyakini bahwa pendidikan sejati melampaui batas-batas ruang kelas akademis. Melalui ekosistem ekstrakurikuler yang beragam, setiap siswa difasilitasi untuk mengeksplorasi potensi diri, mengasah kecerdasan emosional, dan melatih kemandirian berorganisasi.
                        </p>

                        <div className="pt-4 space-y-3">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="flex gap-3 items-center text-sm sm:text-base text-foreground/90">
                                    <CheckCircle2 className="h-5 w-5 text-darkkhaki shrink-0" />
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>

                        {/* Image card under text */}
                        <div className="mt-8 rounded-3xl overflow-hidden border border-border/50 bg-card p-2 shadow-lg max-w-lg">
                            <div className="rounded-2xl overflow-hidden relative aspect-video bg-muted">
                                <img
                                    src="/images/pramuka.jpeg"
                                    alt="Kegiatan Siswa Mandiri"
                                    className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FLEX COLUMN (FLEX ITEM 2): Activity cards */}
                    <div className="flex-1 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {activities.map((act, idx) => {
                            
                                return (
                                    <div
                                        key={idx}
                                        className="group p-6 rounded-3xl border border-border/40 bg-card shadow-xs hover:shadow-md hover:border-darkkhaki/20 transition-all duration-300 hover:translate-y-[-2px] flex flex-col gap-4"
                                    >
                                        
                                        <div className="space-y-1.5">
                                           
                                            <h4 className="text-base font-bold text-foreground transition-colors group-hover:text-darkkhaki">
                                                {act.name}
                                            </h4>
                                            <p className="text-xs text-muted-foreground leading-relaxed">
                                                {act.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
