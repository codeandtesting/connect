'use client';

import { Star, ArrowRight, Volume2, Headphones, CircuitBoard, Globe, Mic } from 'lucide-react';
import MultilingualSupport from './MultilingualSupport';
import { useTranslation } from '@/i18n/context';

export default function ProductShowcase() {
    const { t } = useTranslation();

    const stats = [
        { title: t.product_showcase.stat1_title, highlight: t.product_showcase.stat1_value, sub: t.product_showcase.stat1_sub },
        { title: t.product_showcase.stat2_title, highlight: t.product_showcase.stat2_value, sub: t.product_showcase.stat2_sub },
        { title: t.product_showcase.stat3_title, highlight: t.product_showcase.stat3_value, sub: t.product_showcase.stat3_sub },
    ];

    return (
        <section id="languages" style={{
            position: 'relative',
            paddingTop: '6rem',
            paddingBottom: '8rem',
            background: '#ffffff'
        }}>

            {/* Background Grid Lines to match Features Section */}
            <div className="grid-lines" style={{ zIndex: 0, opacity: 0.5 }}>
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px' }}>

                {/* Main Content Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
                    gap: 'clamp(2rem, 5vw, 4rem)',
                    alignItems: 'center',
                    marginBottom: 'clamp(3rem, 10vw, 6rem)'
                }}>

                    {/* Left: Multilingual Animation */}
                    <div style={{ position: 'relative' }}>
                        <MultilingualSupport />
                        {/* Decorative Badge */}
                        <div style={{
                            position: 'absolute',
                            top: '-10px',
                            right: '-10px',
                            background: 'linear-gradient(135deg, #111, #333)',
                            padding: 'clamp(0.6rem, 2vw, 1rem) clamp(0.8rem, 3vw, 1.5rem)',
                            borderRadius: '16px',
                            color: 'white',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                            zIndex: 10
                        }}>
                            <div style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)', opacity: 0.6, marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.product_showcase.worldwide_badge}</div>
                            <div style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', fontWeight: 700 }}>{t.product_showcase.global_reach_badge}</div>
                        </div>
                    </div>

                    {/* Right: Feature Text */}
                    <div style={{ paddingLeft: 'clamp(0px, 2vw, 2rem)' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.4rem 1rem',
                            background: '#f0fdf4',
                            borderRadius: '99px',
                            color: '#16a34a',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            marginBottom: '1.5rem',
                            border: '1px solid #dcfce7'
                        }}>
                            <Globe size={16} /> {t.product_showcase.global_scale}
                        </div>

                        <h2 style={{
                            fontSize: 'clamp(1.8rem, 6vw, 3rem)',
                            fontWeight: 800,
                            lineHeight: 1.1,
                            color: '#111',
                            marginBottom: '1.5rem',
                            letterSpacing: '-0.02em'
                        }}>
                            {t.product_showcase.title_part1} <br />
                            <span className="text-gradient">{t.product_showcase.title_gradient}</span>
                        </h2>

                        <p style={{
                            fontSize: '1.15rem',
                            lineHeight: 1.7,
                            color: '#666',
                            marginBottom: '2.5rem'
                        }}>
                            {t.product_showcase.desc}
                        </p>

                        <button
                            onClick={() => {
                                const element = document.querySelector('#technology');
                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                            }}
                            style={{
                                background: '#111',
                                color: 'white',
                                padding: '1rem 2.5rem',
                                borderRadius: '99px',
                                fontSize: '1rem',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                boxShadow: '0 10px 20px -5px rgba(0,0,0,0.2)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(0,0,0,0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(0,0,0,0.2)';
                            }}
                        >
                            <Mic size={20} /> {t.product_showcase.cta_button}
                        </button>
                    </div>
                </div>

                {/* Bottom Stats Grid */}
                <div className="stats-grid">
                    {stats.map((item, i) => (
                        <div key={i} className="stats-item">
                            <div style={{ fontSize: '1rem', color: '#64748b', marginBottom: '0.5rem' }}>{item.title}</div>
                            <div style={{
                                fontSize: '2.5rem',
                                fontWeight: 800,
                                background: 'linear-gradient(135deg, #111 0%, #444 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                marginBottom: '0.2rem'
                            }}>{item.highlight}</div>
                            <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{item.sub}</div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}
