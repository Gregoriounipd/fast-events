"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", href: "/" },
        { name: "Servizi", href: "/servizi" },
        { name: "Sale", href: "/sale" },
        { name: "Gallery", href: "/gallery" },
        { name: "Chi Siamo", href: "/chi-siamo" },
        { name: "Contatti", href: "#contatti" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-amber-50/95 backdrop-blur-md shadow-lg z-50 border-b border-amber-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
                {/* Logo + Brand Name */}
                <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300 group">
                    {/* Logo Image - Sostituisci '/images/logo.png' con il percorso del tuo logo */}
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-amber-400 group-hover:border-blue-900 transition-all duration-300 shadow-md">
                        <Image
                            src="/images/logo.jpg"
                            alt="Fast Events Logo"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    
                    {/* Brand Name */}
                    <div className="flex flex-col">
                        <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-amber-600 bg-clip-text text-transparent">
                            Fast Events
                        </span>
                        <span className="text-[10px] sm:text-xs text-slate-600 font-medium -mt-1 hidden sm:block">
                            Organizziamo i tuoi sogni
                        </span>
                    </div>
                </Link>

                {/* Menu Desktop */}
                <nav className="hidden md:flex space-x-6 lg:space-x-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-slate-700 hover:text-blue-900 transition-all duration-300 font-medium group"
                        >
                            <span>{link.name}</span>
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-900 to-amber-600 group-hover:w-full transition-all duration-300"></div>
                        </Link>
                    ))}
                </nav>

                {/* CTA Button Desktop */}
                <div className="hidden md:block">
                    <Link
                        href="/servizi#contatto-rapido"
                        className="bg-gradient-to-r from-blue-900 via-blue-800 to-amber-700 text-white px-5 lg:px-6 py-2 lg:py-2.5 rounded-full font-semibold hover:from-blue-950 hover:to-amber-800 transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm lg:text-base"
                    >
                        Preventivo
                    </Link>
                </div>

                {/* Menu Mobile Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-slate-700 hover:text-blue-900 transition-colors p-2 rounded-lg hover:bg-amber-100"
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-amber-50/98 backdrop-blur-md border-t border-amber-200 shadow-lg">
                    <nav className="flex flex-col py-4">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="px-6 py-3 text-slate-700 hover:text-blue-900 hover:bg-amber-100 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-blue-900"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="px-6 pt-4 pb-2">
                            <Link
                                href="/servizi#contatto-rapido"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center bg-gradient-to-r from-blue-900 via-blue-800 to-amber-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-950 hover:to-amber-800 transition-all duration-300 shadow-md"
                            >
                                Preventivo Gratuito
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}