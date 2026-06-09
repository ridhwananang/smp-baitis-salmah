import { Link } from '@inertiajs/react';
import { Mail, MapPin, Phone, Instagram, Twitter, Youtube } from 'lucide-react';
import React from 'react';

const Tiktok = ({ className, ...props }: React.ComponentProps<'svg'>) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

export default function Footer() {
    const socialLinks = [
        { icon: Tiktok, href: 'https://www.tiktok.com/@baitissalmah4?_r=1&_t=ZS-974N9VPAuSv', color: 'hover:text-darkkhaki hover:bg-darkkhaki/10' },
        { icon: Instagram, href: 'https://www.instagram.com/mtsbaitissalmah?igsh=MWY0N3VpOGdqYzg2NQ==', 
            color: 'hover:text-darkkhaki hover:bg-darkkhaki/10' },
        
    ];

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Profile', href: '/profile' },
        { label: 'Fasilitas & Program Pembiasaan', href: '/kurikulum' },
        { label: 'Ekstrakurikuler', href: '/ekstrakurikuler' },
        
    ];

    return (
        <footer className="bg-card/40 border-t border-border/50 py-16 relative overflow-hidden backdrop-blur-md">
            {/* Visual background elements */}
            <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-khaki/5 blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    
                    {/* Column 1: Brand & Logo (Span 5) */}
                    <div className="md:col-span-5 space-y-5">
                        <Link href="/" className="flex items-center gap-2.5 w-fit group">
                            <img 
                                src="/images/logo.png" 
                                alt="Logo SMA Unggul Nusantara" 
                                className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105" 
                            />
                            <div>
                                <span className="text-lg font-bold tracking-tight text-foreground block leading-none transition-colors group-hover:text-darkkhaki">
                                    MTs Baitis Salmah
                                </span>
                                
                            </div>
                        </Link>
                        
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
                            "Madrasah yang unggul dan populis untuk mencetak generasi berprestasi serta berakhlak mulia"
                        </p>
                        
                        {/* Social Media Links */}
                        <div className="flex items-center gap-3 pt-2">
                            {socialLinks.map((social, idx) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        className={`flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 text-muted-foreground transition-all duration-300 ${social.color}`}
                                    >
                                        <Icon className="h-4.5 w-4.5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Column 2: Quick Links (Span 3) */}
                    <div className="md:col-span-3 space-y-4">
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">
                            Navigasi
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm">
                            {navLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link 
                                        href={link.href} 
                                        className="text-muted-foreground hover:text-darkkhaki transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info (Span 4) */}
                    <div className="md:col-span-4 space-y-4">
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">
                            Kontak Kami
                        </h4>
                        <ul className="space-y-3.5 text-xs sm:text-sm text-muted-foreground">
                            <li className="flex gap-3 items-start">
                                <MapPin className="h-5 w-5 text-darkkhaki shrink-0 mt-0.5" />
                                <span>Jl. Masjid Baitis Salmah CIPUTAT, Sawah Baru, Kec. Ciputat, Kota Tangeang Selatan</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone className="h-4.5 w-4.5 text-darkkhaki shrink-0" />
                                <span>+62 21-2762-2083</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail className="h-4.5 w-4.5 text-darkkhaki shrink-0" />
                                <span> ybs.mts.baitis.salmah@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar: Copyright */}
                <div className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground text-center sm:text-left">
                        © {new Date().getFullYear()} MTs Baitis Salmah. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
