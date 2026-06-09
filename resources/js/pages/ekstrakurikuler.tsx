import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import EkskulSection from '@/components/school-profile/ekskul-section';
import Footer from '@/components/school-profile/footer';
import Navbar from '@/components/school-profile/navbar';
import { Button } from '@/components/ui/button';

export default function EkstrakurikulerPage() {
    return (
        <>

            <Head>
                <title>Ekstrakurikuler & Organisasi - MTs Baitis Salmah</title>
                <meta name="description" content="Mengembangkan minat, bakat, kepemimpinan, dan keahlian siswa di luar kelas." />
            </Head>

            <div className="min-h-screen bg-background text-foreground antialiased font-sans flex flex-col justify-between">
                {/* Navbar Component */}
                <Navbar />
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
                className="absolute inset-0 z-0 h-full w-full pt-20 object-cover"
            >
                <source
                    src="/images/eskul.mp4"
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
                       Ekstrakurikuler & Minat Bakat{' '}
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl">
                        Mewadahi kreativitas, keterampilan teknologi, pencapaian olahraga, dan komunikasi publik demi menyeimbangkan kemampuan otak kiri dan otak kanan.
                    </p>

                </div>
            </div>
        </section>
                <main className="flex-grow pt-7">
                    
                    <EkskulSection />
                </main>

                {/* Footer Component */}
                <Footer />
            </div>
        </>
    );
}
