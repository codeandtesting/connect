"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links = [
        { name: 'Overview', href: '#overview' },
        { name: 'Features', href: '#deployment-process' }, // Points to Deployment Process
        { name: 'Industries', href: '/industries' },
        { name: 'Integrations', href: '#integrations' },
        { name: 'Languages', href: '#languages' }, // Renamed from Technology
        { name: 'Reviews', href: '#reviews' },
        { name: 'Contact', href: '#faq' } // Added Contact
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        // Always close menu on click
        setIsMenuOpen(false);

        // Only prevent default and scroll if we are already on the home page and it's a hash link
        if (typeof window !== 'undefined' && window.location.pathname === '/' && href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header
            className={isMenuOpen ? 'header-open' : ''}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                background: isMenuOpen ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: isMenuOpen ? 'none' : 'blur(12px)',
                borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                width: '100%',
                transition: 'all 0.3s ease',
                height: isMenuOpen ? '100vh' : 'var(--header-height)'
            }}
        >
            <nav className="navbar" style={{ width: '100%' }}>
                {/* Brand */}
                <Link href="/" className="brand" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="brand-icon" />
                    <span className="brand-text">CONEKT</span>
                </Link>

                {/* Desktop Links */}
                <div className="nav-links">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href.startsWith('#') ? `/${link.href}` : link.href}
                            className="nav-link"
                            style={{ textDecoration: 'none' }}
                            onClick={(e) => handleScroll(e, link.href)}
                        >
                            {link.name}
                        </Link>
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
                        <Link
                            key={link.name}
                            href={link.href.startsWith('#') ? `/${link.href}` : link.href}
                            className="mobile-nav-link"
                            style={{ textDecoration: 'none' }}
                            onClick={(e) => handleScroll(e, link.href)}
                        >
                            {link.name}
                        </Link>
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
        </header>
    );
}
