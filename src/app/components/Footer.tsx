"use client";

import { Facebook, Twitter, Instagram, Linkedin, Dribbble } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/i18n/context';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="footer-wrapper">
            <div className="container">
                <div className="footer-content" style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 'clamp(1rem, 3vw, 2rem)'
                }}>
                    {/* Contact Info (Left) */}
                    <div className="footer-contact-info" style={{
                        minWidth: 'min(100%, 200px)',
                        flex: '1 1 auto'
                    }}>
                        <h4>{t.footer.talk_with_us}</h4>
                        <p className="footer-email"><a href="mailto:info@progressit.online" style={{ color: 'inherit', textDecoration: 'none' }}>info@progressit.online</a></p>
                    </div>

                    {/* Links Columns (Center) */}
                    <div style={{
                        display: 'flex',
                        gap: 'clamp(1.5rem, 4vw, 4rem)',
                        justifyContent: 'center',
                        flex: '1 1 auto',
                        flexWrap: 'wrap',
                        width: '100%',
                        maxWidth: '600px'
                    }}>
                        {/* Product Column */}
                        <div style={{
                            flex: '1 1 auto',
                            minWidth: 'min(100%, 140px)'
                        }}>
                            <h5 style={{
                                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                                fontWeight: 700,
                                marginBottom: '1rem',
                                whiteSpace: 'nowrap'
                            }}>{t.footer.product_title}</h5>
                            <ul className="footer-links" style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                                padding: 0,
                                fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)'
                            }}>
                                {[
                                    { label: t.footer.use_cases, href: '/#industries' },
                                    { label: t.footer.how_it_works, href: '/#how-it-works' },
                                    { label: t.footer.live_demo, href: '/#features' },
                                    { label: t.footer.channels, href: '/#integrations' },
                                    { label: t.footer.integrations, href: '/#integrations' }
                                ].map((link, i) => (
                                    <li key={i} style={{ wordBreak: 'break-word' }}><Link href={link.href}>{link.label}</Link></li>
                                ))}
                            </ul>
                        </div>

                        {/* Industries Column */}
                        <div style={{
                            flex: '1 1 auto',
                            minWidth: 'min(100%, 140px)'
                        }}>
                            <h5 style={{
                                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                                fontWeight: 700,
                                marginBottom: '1rem',
                                whiteSpace: 'nowrap'
                            }}>{t.footer.industries_title}</h5>
                            <ul className="footer-links" style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                                padding: 0,
                                fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)'
                            }}>
                                {[
                                    { label: t.footer.healthcare, href: '/industries' },
                                    { label: t.footer.automotive, href: '/industries' },
                                    { label: t.footer.realestate, href: '/industries' },
                                    { label: t.footer.banking, href: '/industries' },
                                    { label: t.footer.other, href: '/industries' }
                                ].map((link, i) => (
                                    <li key={i} style={{ wordBreak: 'break-word' }}><Link href={link.href}>{link.label}</Link></li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div style={{
                            flex: '1 1 auto',
                            minWidth: 'min(100%, 140px)'
                        }}>
                            <h5 style={{
                                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                                fontWeight: 700,
                                marginBottom: '1rem',
                                whiteSpace: 'nowrap'
                            }}>{t.footer.company_title}</h5>
                            <ul className="footer-links" style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                                padding: 0,
                                fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)'
                            }}>
                                {[
                                    { label: t.footer.testimonials, href: '/#reviews' },
                                    { label: t.footer.faq, href: '/#faq' },
                                    { label: t.footer.contact, href: '/#faq' },
                                    { label: t.footer.privacy, href: '/privacy' },
                                    { label: t.footer.terms, href: '/terms' }
                                ].map((link, i) => (
                                    <li key={i} style={{ wordBreak: 'break-word' }}><Link href={link.href}>{link.label}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Social & Email (Right) */}
                    <div className="footer-social-section" style={{
                        minWidth: 'min(100%, 200px)',
                        flex: '1 1 auto'
                    }}>
                        <div className="footer-social-icons">
                            <Facebook size={20} />
                            <Dribbble size={20} />
                            <Twitter size={20} />
                            <Instagram size={20} />
                            <Linkedin size={20} />
                        </div>

                        <h4>{t.footer.customer_care}</h4>
                        {/* <p className="footer-email">info@domain.com</p> */}
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-copyright">
                    {t.footer.copyright}
                </div>
            </div>
        </footer>
    );
}
