"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links = ['Overview', 'Features', 'Technology', 'Design', 'Review'];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
                    <Link
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        className="nav-link"
                    >
                        {link}
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
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        className="mobile-nav-link"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link}
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
                Book a call
            </button>
        </nav>
    );
}
