'use client';

import { Star, ArrowRight, Volume2, Headphones, CircuitBoard, Globe, Mic } from 'lucide-react';
import MultilingualSupport from './MultilingualSupport';

export default function ProductShowcase() {
    return (
        <section id="technology" style={{
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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center',
                    marginBottom: '6rem'
                }}>

                    {/* Left: Multilingual Animation */}
                    <div style={{ position: 'relative' }}>
                        <MultilingualSupport />
                        {/* Decorative Badge */}
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            background: 'linear-gradient(135deg, #111, #333)',
                            padding: '1rem 1.5rem',
                            borderRadius: '16px',
                            color: 'white',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                            zIndex: 10
                        }}>
                            <div style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '0.2rem' }}>Active Connection</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>Global Reach</div>
                        </div>
                    </div>

                    {/* Right: Feature Text */}
                    <div style={{ paddingLeft: '2rem' }}>
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
                            <Globe size={16} /> Global Scale
                        </div>

                        <h2 style={{
                            fontSize: '3rem',
                            fontWeight: 800,
                            lineHeight: 1.1,
                            color: '#111',
                            marginBottom: '1.5rem',
                            letterSpacing: '-0.02em'
                        }}>
                            Speak Any Language, <br />
                            <span className="text-gradient">Serve Any Market.</span>
                        </h2>

                        <p style={{
                            fontSize: '1.15rem',
                            lineHeight: 1.7,
                            color: '#666',
                            marginBottom: '2.5rem'
                        }}>
                            Our AI agents adapt to regional accents, cultural nuances, and 50+ languages instantly. Whether serving customers in New York, Tokyo, or Dubai, your AI agent sounds natural and professional.
                        </p>

                        <button style={{
                            background: '#111',
                            color: 'white',
                            padding: '1rem 2rem',
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
                            <Mic size={20} /> Test in Your Language
                        </button>
                    </div>
                </div>

                {/* Bottom Stats Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '2rem',
                    padding: '3rem',
                    background: '#f8fafc',
                    borderRadius: '24px',
                    border: '1px solid #e2e8f0'
                }}>
                    {[
                        { title: 'Support for', highlight: '50+ languages', sub: 'instantly available' },
                        { title: 'Reduce costs by', highlight: '40%', sub: 'vs traditional call centers' },
                        { title: 'Available', highlight: '24/7/365', sub: 'in every time zone' },
                    ].map((item, i) => (
                        <div key={i} style={{ textAlign: 'center', borderRight: i !== 2 ? '1px solid #e2e8f0' : 'none' }}>
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
