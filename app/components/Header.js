"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", href: "/" },
        { name: "Servizi", href: "/servizi" }, // <-- Link alla pagina servizi
        { name: "Sale", href: "/sale" },
        { name: "Gallery", href: "/gallery" },
        { name: "Chi Siamo", href: "/chi-siamo" },
        { name: "Contatti", href: "#contatti" }, // <-- Scroll alla sezione contatti homepage
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                    🎉 Fast Events
                </Link>

                {/* Menu Desktop */}
                <nav className="hidden md:flex space-x-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium group"
                        >
                            <span>{link.name}</span>
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                        </Link>
                    ))}
                </nav>

                {/* CTA Button Desktop */}
                <div className="hidden md:block">
                    <Link
                        href="/servizi#contatto-rapido"
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        Preventivo
                    </Link>
                </div>

                {/* Menu Mobile Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-700 hover:text-indigo-600 transition-colors p-2"
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
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
                    <nav className="flex flex-col py-4">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="px-6 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-all duration-200 font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="px-6 pt-4">
                            <Link
                                href="/servizi#contatto-rapido"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
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