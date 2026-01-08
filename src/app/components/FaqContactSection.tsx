"use client";

import { useState } from 'react';
import { Phone, Mail, Calendar, ChevronDown, ChevronUp, Briefcase, LifeBuoy, Puzzle } from 'lucide-react';
import { useTranslation } from '@/i18n/context';

export default function FaqContactSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const { t } = useTranslation();

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        { q: t.faq.q1, a: t.faq.a1 },
        { q: t.faq.q2, a: t.faq.a2 },
        { q: t.faq.q3, a: t.faq.a3 },
        { q: t.faq.q4, a: t.faq.a4 },
        { q: t.faq.q5, a: t.faq.a5 },
        { q: t.faq.q6, a: t.faq.a6 },
        { q: t.faq.q7, a: t.faq.a7 },
        { q: t.faq.q8, a: t.faq.a8 }
    ];

    return (
        <section id="faq" style={{
            padding: '8rem 0',
            background: '#f9fafb'
        }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(1rem, 5vw, 2rem)' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 8vw, 2.8rem)',
                        fontWeight: 800,
                        color: '#111',
                        marginBottom: '1rem',
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em'
                    }}>
                        {t.faq.title_main} <span className="text-gradient">{t.faq.title_highlight}</span>
                    </h2>
                    <p style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', color: '#666' }}>{t.faq.subtitle}</p>
                </div>

                <div className="faq-grid">

                    {/* LEFT: Contact Information */}
                    <div>
                        <div className="contact-card">
                            <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>{t.faq.get_in_touch}</h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                                {/* Business Inquiries */}
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{
                                        width: '40px', height: '40px',
                                        background: 'rgba(255,255,255,0.1)',
                                        borderRadius: '10px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <Briefcase size={20} color="#60a5fa" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#60a5fa' }}>{t.faq.business_inquiries}</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', color: '#ccc' }}>
                                            <a href="tel:+15550001111" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Phone size={14} /> +1 (555) 000-1111
                                            </a>
                                            <a href="mailto:sales@conekt.ai" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Mail size={14} /> sales@conekt.ai
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Customer Support */}
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{
                                        width: '40px', height: '40px',
                                        background: 'rgba(255,255,255,0.1)',
                                        borderRadius: '10px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <LifeBuoy size={20} color="#34d399" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#34d399' }}>{t.faq.customer_support}</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', color: '#ccc' }}>
                                            <a href="tel:+15550002222" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Phone size={14} /> +1 (555) 000-2222
                                            </a>
                                            <a href="mailto:support@conekt.ai" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Mail size={14} /> support@conekt.ai
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Integrations (Example third category, sharing contacts or new ones) */}
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{
                                        width: '40px', height: '40px',
                                        background: 'rgba(255,255,255,0.1)',
                                        borderRadius: '10px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <Puzzle size={20} color="#a78bfa" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#a78bfa' }}>{t.faq.integrations}</h4>
                                        <p style={{ fontSize: '0.9rem', color: '#ccc', margin: 0 }}>
                                            {t.faq.custom_integration_text} <br />
                                            <a href="mailto:dev@conekt.ai" style={{ color: 'white', textDecoration: 'underline' }}>dev@conekt.ai</a>
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Divider */}
                            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '2.5rem 0' }} />

                            {/* Book a Demo */}
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ marginBottom: '1rem', color: '#ccc' }}>{t.faq.ready_text}</p>
                                <button style={{
                                    width: '100%',
                                    background: 'white',
                                    color: 'black',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    border: 'none',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.8rem',
                                    transition: 'transform 0.2s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                >
                                    <Calendar size={20} /> {t.faq.book_demo_button}
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT: FAQ List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {faqs.map((item, i) => (
                            <div key={i} style={{
                                background: 'white',
                                borderRadius: '16px',
                                border: '1px solid #e5e7eb',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease'
                            }}>
                                <button
                                    onClick={() => toggleFaq(i)}
                                    style={{
                                        width: '100%',
                                        padding: 'clamp(1rem, 4vw, 1.5rem)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        background: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        gap: '1rem'
                                    }}
                                >
                                    <span style={{ fontSize: 'clamp(1rem, 4vw, 1.1rem)', fontWeight: 600, color: '#111', lineHeight: 1.4 }}>{item.q}</span>
                                    <span style={{
                                        width: '24px', height: '24px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        background: openIndex === i ? '#111' : '#f3f4f6',
                                        color: openIndex === i ? 'white' : '#666',
                                        borderRadius: '50%',
                                        transition: 'all 0.2s'
                                    }}>
                                        {openIndex === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                    </span>
                                </button>

                                <div style={{
                                    height: openIndex === i ? 'auto' : 0,
                                    overflow: 'hidden',
                                    transition: 'height 0.3s ease'
                                }}>
                                    <div style={{ padding: '0 1.5rem 1.5rem', color: '#666', lineHeight: 1.6, fontSize: '1rem' }}>
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
