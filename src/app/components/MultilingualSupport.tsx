"use client";

import React, { useEffect, useState } from 'react';

export default function MultilingualSupport() {
    const [activeIndex, setActiveIndex] = useState(0);

    const languages = [
        { code: 'us', name: 'English', greeting: 'Hello' },
        { code: 'fr', name: 'French', greeting: 'Bonjour' },
        { code: 'de', name: 'German', greeting: 'Hallo' },
        { code: 'jp', name: 'Japanese', greeting: 'こんにちは' },
        { code: 'es', name: 'Spanish', greeting: 'Hola' },
        { code: 'gb', name: 'British', greeting: 'Hello' },
        { code: 'cn', name: 'Chinese', greeting: '你好' },
        { code: 'kr', name: 'Korean', greeting: '안녕하세요' },
        { code: 'it', name: 'Italian', greeting: 'Ciao' },
        { code: 'br', name: 'Portuguese', greeting: 'Olá' },
        { code: 'ru', name: 'Russian', greeting: 'Привет' },
        { code: 'tr', name: 'Turkish', greeting: 'Merhaba' },
        { code: 'in', name: 'Hindi', greeting: 'नमस्ते' },
        { code: 'ae', name: 'Arabic', greeting: 'مرحبا' },
        { code: 'nl', name: 'Dutch', greeting: 'Hallo' },
        { code: 'se', name: 'Swedish', greeting: 'Hej' },
        { code: 'pt', name: 'Portugal', greeting: 'Olá' },
        { code: 'mx', name: 'Mexico', greeting: 'Hola' },
        { code: 'ca', name: 'Canada', greeting: 'Hello' },
        { code: 'au', name: 'Australia', greeting: 'Hello' },
        { code: 'ch', name: 'Swiss', greeting: 'Grüezi' },
        { code: 'pl', name: 'Polish', greeting: 'Cześć' },
        { code: 'vn', name: 'Vietnam', greeting: 'Xin chào' },
        { code: 'th', name: 'Thai', greeting: 'สวัสดี' },
        { code: 'id', name: 'Indonesia', greeting: 'Halo' },
        { code: 'il', name: 'Hebrew', greeting: 'שלום' },
        { code: 'gr', name: 'Greek', greeting: 'Γεια σας' },
        { code: 'no', name: 'Norway', greeting: 'Hallo' },
        { code: 'dk', name: 'Denmark', greeting: 'Hej' },
        { code: 'fi', name: 'Finland', greeting: 'Hei' },
        { code: 'be', name: 'Belgium', greeting: 'Salut' },
        { code: 'at', name: 'Austria', greeting: 'Servus' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % languages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            width: '100%',
            minHeight: '450px', // Ensure height so many flags are visible
            background: 'linear-gradient(145deg, #0f0f10 0%, #1a1a1e 100%)',
            borderRadius: '3rem',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255,255,255,0.05)'
        }}>

            {/* Ambient Glows */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                left: '-20%',
                width: '60%',
                height: '60%',
                background: 'radial-gradient(circle, rgba(29, 78, 216, 0.15) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                right: '-10%',
                width: '50%',
                height: '50%',
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0
            }} />

            {/* Orbital System Container */}
            <div style={{
                position: 'absolute',
                inset: 0,
                top: '-15%', // Move up to leave room for bottom text
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1
            }}>
                {/* Central Core */}
                <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 30% 30%, #3b82f6, #1e3a8a)',
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)',
                    position: 'relative',
                    zIndex: 10,
                    border: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <div style={{
                        position: 'absolute',
                        inset: '-50%',
                        border: '1px dashed rgba(255,255,255,0.1)',
                        borderRadius: '50%',
                        animation: 'spin 10s linear infinite'
                    }} />
                </div>

                {/* Orbit Rings - Dense multi-ring system */}
                {[1, 2, 3, 4].map((ring) => (
                    <div
                        key={ring}
                        style={{
                            position: 'absolute',
                            width: `${ring * 90 + 100}px`,
                            height: `${ring * 90 + 100}px`,
                            border: '1px solid rgba(255,255,255,0.03)',
                            borderRadius: '50%',
                            animation: `spin-slow ${ring * 12 + 15}s linear infinite ${ring % 2 === 0 ? 'reverse' : ''}`,
                        }}
                    >
                        {/* Satellite Flags */}
                        {languages
                            .filter((_, i) => i % 4 === (ring - 1)) // Distribute flags across 4 rings
                            .map((lang, i, arr) => {
                                const angle = (360 / arr.length) * i;
                                return (
                                    <div
                                        key={lang.code}
                                        style={{
                                            position: 'absolute',
                                            top: '0',
                                            left: '50%',
                                            transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${ring * 80 + 40}px) rotate(-${angle}deg)`, // Complex transform to place on ring but keep upright? No, simply rotate parent
                                            // The parent div is spinning, so standard positioning works if we fix the child rotation counter to parent.
                                            // Actually, let's just place them on the circle edge using trigonometry in CSS or simple layout
                                        }}
                                    >
                                        {/* To make it simpler without complex calc in map: 
                                            We just rotate the parent ring. The satellites are fixed children of the spinning ring.
                                            We need to counter-rotate the satellites so the flags stay upright.
                                         */}
                                        <div
                                            className="satellite-wrapper"
                                            style={{
                                                transform: `rotate(${angle}deg) translateY(-${(ring * 90 + 100) / 2}px) rotate(-${angle}deg)`,
                                                transformOrigin: `50% ${(ring * 90 + 100) / 2}px`,
                                                position: 'absolute',
                                                top: '50%', // Centered within the Ring DIV
                                                left: '50%',
                                                width: '0',
                                                height: '0'
                                            }}
                                        >
                                            <div style={{
                                                width: '32px', // Slightly smaller to fit more
                                                height: '32px',
                                                borderRadius: '50%',
                                                overflow: 'hidden',
                                                border: '1.5px solid rgba(255,255,255,0.15)',
                                                background: 'rgba(0,0,0,0.5)',
                                                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                                transform: 'translate(-50%, -50%)', // Center the flag itself
                                                animation: `spin-counter ${ring * 15 + 20}s linear infinite ${ring % 2 === 0 ? 'reverse' : ''}` // Counter rotate to keep upright
                                            }}>
                                                <img
                                                    src={`https://flagcdn.com/w80/${lang.code}.png`}
                                                    alt={lang.name}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                ))}
            </div>

            {/* Information Overlay */}
            <div style={{
                position: 'relative',
                zIndex: 20,
                padding: '2.5rem',
                width: '100%',
                pointerEvents: 'none', // Let clicks pass through to orbit if needed
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)', // Gradient over text for readability
                paddingTop: '6rem'
            }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(12px)',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '100px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    marginBottom: '1.5rem',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }}>
                    <span style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#10b981',
                        boxShadow: '0 0 10px #10b981'
                    }} />
                    <span style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'rgba(255,255,255,0.9)',
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase'
                    }}>
                        Active Connection
                    </span>
                </div>

                <h3 style={{
                    fontSize: '2.5rem', // Larger, more impressive
                    fontWeight: 700,
                    margin: '0 0 0.5rem',
                    background: 'linear-gradient(to right, #fff, #94a3b8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1.1
                }}>
                    Global Reach.
                </h3>
                <p style={{
                    fontSize: '1rem',
                    color: '#94a3b8',
                    maxWidth: '300px',
                    lineHeight: 1.6
                }}>
                    Support for 50+ languages instantly.
                </p>

                {/* Dynamic Greeting Flipper */}
                <div style={{
                    marginTop: '2rem',
                    height: '2rem',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    <div style={{
                        transform: `translateY(-${activeIndex * 2}rem)`, // Simple slide
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}>
                        {languages.map((lang, idx) => (
                            <div key={idx} style={{
                                height: '2rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem'
                            }}>
                                <img
                                    src={`https://flagcdn.com/w40/${lang.code}.png`}
                                    style={{ width: '20px', height: '15px', borderRadius: '2px' }}
                                    alt="mini flag"
                                />
                                <span style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 500 }}>
                                    "{lang.greeting}" <span style={{ opacity: 0.5, fontSize: '0.9rem', marginLeft: '0.5rem' }}>— {lang.name}</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Bottom Fade */}
            <div style={{
                height: '100px',
                background: 'linear-gradient(to top, #0f0f10, transparent)',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 5
            }} />

        </div>
    );
}
