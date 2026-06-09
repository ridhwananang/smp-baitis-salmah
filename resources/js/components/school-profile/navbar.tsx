import { Link } from '@inertiajs/react';
import { Menu, Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import AppearanceToggleTab from '@/components/appearance-tabs';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useAppearance } from '@/hooks/use-appearance';

export default function Navbar() {
    const { resolvedAppearance, updateAppearance } = useAppearance();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 4 direct public page routes
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Profile', href: '/profile' },
        { label: 'Fasilitas & Program Pembiasaan', href: '/kurikulum' },
        { label: 'Ekstrakurikuler', href: '/ekstrakurikuler' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 z-40 w-full transition-all duration-300 ${
                isScrolled
                    ? 'bg-background/85 backdrop-blur-md shadow-md border-b border-border/40 py-3'
                    : 'bg-khaki dark:bg-background/40 py-5'
            }`}
        >
            <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Brand Logo */}
                <Link href="/" className="flex items-center gap-2.5 group shrink-0">
                    <img 
                        src="/images/logo.png" 
                        alt="Logo SMA Unggul Nusantara" 
                        className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105" 
                    />
                    <div>
                        <span className="text-lg font-bold tracking-tight text-foreground block leading-none transition-colors group-hover:text-darkkhaki">
                            MTs Baitis Salmah
                        </span>
                        <span className="text-[10px] uppercase font-semibold text-muted-foreground tracking-widest block mt-0.5">
                            
                        </span>
                    </div>
                </Link>
                
                {/* Desktop Menu - Styled with Khaki Hover transitions */}
                <div className="hidden lg:flex items-center gap-8">
                    <nav className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-md font-medium text-foreground/80 dark:text-foreground/90 hover:text-darkkhaki dark:hover:text-darkkhaki transition-colors relative py-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-darkkhaki after:transition-all hover:after:w-full"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    
                    <div className="h-5 w-px bg-border/60" />
                    
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateAppearance(resolvedAppearance === 'dark' ? 'light' : 'dark')}
                        className="rounded-xl text-foreground cursor-pointer hover:bg-muted/50 transition-colors shrink-0"
                        aria-label="Toggle Theme"
                    >
                        {resolvedAppearance === 'dark' ? (
                            <Sun className="h-5 w-5 text-yellow-500 transition-all duration-300 hover:scale-110 hover:rotate-45" />
                        ) : (
                            <Moon className="h-5 w-5 text-neutral-700 dark:text-neutral-300 transition-all duration-300 hover:scale-110 hover:-rotate-12" />
                        )}
                    </Button>
                </div>

                {/* Mobile Menu Action */}
                <div className="flex lg:hidden items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateAppearance(resolvedAppearance === 'dark' ? 'light' : 'dark')}
                        className="rounded-xl text-foreground cursor-pointer hover:bg-muted/50 transition-colors mr-1"
                        aria-label="Toggle Theme"
                    >
                        {resolvedAppearance === 'dark' ? (
                            <Sun className="h-5 w-5 text-yellow-500" />
                        ) : (
                            <Moon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                        )}
                    </Button>
                    
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-xl text-foreground cursor-pointer">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-background/95 backdrop-blur-md border-l border-border/50 p-6 flex flex-col justify-between">
                            <div className="flex flex-col gap-6">
                                <SheetHeader className="text-left">
                                    <SheetTitle className="flex items-center gap-2">
                                        <img src="/images/logo.png" alt="Logo" className="h-6 w-auto object-contain" />
                                        <span className="font-bold text-foreground">Menu Navigasi</span>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-4 mt-6">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-lg font-medium text-muted-foreground hover:text-darkkhaki py-2 border-b border-border/30 transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="pt-6 border-t border-border/30">
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Tampilan</p>
                                <AppearanceToggleTab className="w-full justify-between" />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
