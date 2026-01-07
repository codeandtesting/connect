"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links = [
        { name: 'Overview', href: '#overview' },
        { name: 'Features', href: '#features' }, // Moved up to match page flow
        { name: 'Industries', href: '#industries' },
        { name: 'Integrations', href: '#integrations' },
        { name: 'Technology', href: '#technology' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Contact', href: '#faq' } // Added Contact
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="navbar">
            {/* Brand */}
            <div className="brand">
                <div className="brand-icon" />
                <span className="brand-text">CONEKT</span>
            </div>

            {/* Desktop Links */}
            <div className="nav-links">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="nav-link"
                        onClick={(e) => handleScroll(e, link.href)}
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="mobile-menu-btn"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`}>
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="mobile-nav-link"
                        onClick={(e) => handleScroll(e, link.href)}
                    >
                        {link.name}
                    </a>
                ))}

                {/* Mobile Call to Action */}
                <button className="order-btn" style={{ marginTop: '1rem' }}>
                    <ShoppingBag size={16} />
                    Book a call
                </button>
            </div>

            {/* Desktop Actions */}
            <button className="order-btn">
                <ShoppingBag size={16} />
                Book a Demo
            </button>
        </nav>
    );
}
