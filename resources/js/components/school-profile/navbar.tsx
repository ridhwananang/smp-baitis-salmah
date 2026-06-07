import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useAppearance } from '@/hooks/use-appearance';
import { Link } from '@inertiajs/react';
import { GraduationCap, Menu, Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export default function Navbar() {
    const { appearance, updateAppearance } = useAppearance();
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

    const toggleTheme = () => {
        updateAppearance(appearance === 'dark' ? 'light' : 'dark');
    };

    // 4 direct public page routes
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Kurikulum', href: '/kurikulum' },
        { label: 'Ekstrakurikuler', href: '/ekstrakurikuler' },
        { label: 'Profile', href: '/profile' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 z-40 w-full transition-all duration-300 ${
                isScrolled
                    ? 'bg-background/85 backdrop-blur-md shadow-md border-b border-border/40 py-3'
                    : 'bg-transparent py-5'
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
                            SMA UNGGUL
                        </span>
                        <span className="text-[10px] uppercase font-semibold text-muted-foreground tracking-widest block mt-0.5">
                            Nusantara
                        </span>
                    </div>
                </Link>
                
                {/* Desktop Menu - Styled with Khaki Hover transitions */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-darkkhaki transition-colors relative py-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-darkkhaki after:transition-all hover:after:w-full"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Right side actions - Theme Toggle Only */}
                <div className="hidden lg:flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        className="rounded-xl border border-border/30 bg-muted/20 hover:bg-muted/40 text-foreground transition-colors duration-300 cursor-pointer"
                        title="Ubah Tema"
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-indigo-400" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </div>

                {/* Mobile Menu Action */}
                <div className="flex lg:hidden items-center gap-2">
                    {/* Theme Toggle for mobile */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        className="rounded-xl border border-border/30 bg-muted/20 hover:bg-muted/40 text-foreground cursor-pointer"
                    >
                        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
                        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-indigo-400" />
                    </Button>

                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-xl text-foreground cursor-pointer">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-background/95 backdrop-blur-md border-l border-border/50 p-6 flex flex-col gap-6">
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
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
