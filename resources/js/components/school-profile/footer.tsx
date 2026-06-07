import { Link } from '@inertiajs/react';
import { GraduationCap, Mail, MapPin, Phone, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import React from 'react';

export default function Footer() {
    const socialLinks = [
        { icon: Facebook, href: '#', color: 'hover:text-darkkhaki hover:bg-darkkhaki/10' },
        { icon: Instagram, href: '#', color: 'hover:text-darkkhaki hover:bg-darkkhaki/10' },
        { icon: Twitter, href: '#', color: 'hover:text-darkkhaki hover:bg-darkkhaki/10' },
        { icon: Youtube, href: '#', color: 'hover:text-darkkhaki hover:bg-darkkhaki/10' },
    ];

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Kurikulum', href: '/kurikulum' },
        { label: 'Ekstrakurikuler', href: '/ekstrakurikuler' },
        { label: 'Profile', href: '/profile' },
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
                                    SMA UNGGUL
                                </span>
                                <span className="text-[10px] uppercase font-semibold text-muted-foreground tracking-widest block mt-0.5">
                                    Nusantara
                                </span>
                            </div>
                        </Link>
                        
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
                            Mencetak generasi cerdas, berintegritas tinggi, dan berwawasan global. Siap menyongsong masa depan cerah melalui ekosistem pendidikan berstandar tinggi.
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
                                <span>Jl. Pendidikan Raya No. 45, Kebayoran Baru, Jakarta Selatan, 12130</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone className="h-4.5 w-4.5 text-darkkhaki shrink-0" />
                                <span>+62 21-724-5678</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail className="h-4.5 w-4.5 text-darkkhaki shrink-0" />
                                <span>info@smaunggulnusantara.sch.id</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar: Copyright */}
                <div className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground text-center sm:text-left">
                        © {new Date().getFullYear()} SMA Unggul Nusantara. All Rights Reserved.
                    </p>
                    <p className="text-[10px] text-muted-foreground tracking-wide text-center sm:text-right">
                        Website didesain secara Profesional, Modern, dan Responsif.
                    </p>
                </div>
            </div>
        </footer>
    );
}
