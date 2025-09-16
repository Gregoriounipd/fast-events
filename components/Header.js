"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", href: "/" },
        { name: "Servizi", href: "#servizi" },
        { name: "Sale", href: "#sale" },
        { name: "Gallery", href: "#gallery" },
        { name: "Chi Siamo", href: "#chi-siamo" },
        { name: "Contatti", href: "#contatti" },
    ];
    return (
        <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-gray-600">
                    🎉 Eventi
                </Link>

                {/* Menu Desktop */}
                <nav className="hidden md:flex space-x-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 hover:text-pink-600 transition font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Menu Mobile Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-700"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>


            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg flex flex-col p-6 space-y-6 md:hidden"
                    >
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 hover:text-pink-600 font-medium text-lg"
                        >
                            {link.name}
                        </Link>

            
                    </motion.nav>
                )}
            </AnimatePresence>
        </header >
    );
}
