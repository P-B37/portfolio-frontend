'use client'  

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';    
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navigation = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className='container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-8'>
                {/* Logo Section*/}
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2 font-bold text-xl tracking-tight">
                        <span>Portfolio<span className="text-primary">.</span></span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            {item.name}
                        </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Mobile Menu (Sheet) */}
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <div className="w-full flex-1 md:w-auto md:flex-none">
                    {/* You can add a Search Bar here later */}
                </div>
                
                {/* Mobile Toggle */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                        >
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0">
                        <Link
                            href="/"
                            className="flex items-center"
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="font-bold text-lg">Menu</span>
                        </Link>
                        <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                            <div className="flex flex-col space-y-3">
                            {navigation.map((item) => (
                                <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                {item.name}
                                </Link>
                            ))}
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            
                {/* Desktop CTA */}
                <div className="hidden md:flex">
                    <Button asChild size="sm">
                        <Link href="#contact">Hire Me</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}