"use client";

import React, { useEffect, useState } from 'react';
import { useTranslation } from '@/i18n/context';

export default function MultilingualSupport() {
    const [activeIndex, setActiveIndex] = useState(0);
    const { t } = useTranslation();

    const languages = [
        { code: 'us', name: t.multilingual_support.lang_english, greeting: 'Hello' },
        { code: 'fr', name: t.multilingual_support.lang_french, greeting: 'Bonjour' },
        { code: 'de', name: t.multilingual_support.lang_german, greeting: 'Hallo' },
        { code: 'jp', name: t.multilingual_support.lang_japanese, greeting: 'こんにちは' },
        { code: 'es', name: t.multilingual_support.lang_spanish, greeting: 'Hola' },
        { code: 'gb', name: t.multilingual_support.lang_british, greeting: 'Hello' },
        { code: 'cn', name: t.multilingual_support.lang_chinese, greeting: '你好' },
        { code: 'kr', name: t.multilingual_support.lang_korean, greeting: '안녕하세요' },
        { code: 'it', name: t.multilingual_support.lang_italian, greeting: 'Ciao' },
        { code: 'br', name: t.multilingual_support.lang_portuguese, greeting: 'Olá' },
        { code: 'ru', name: t.multilingual_support.lang_russian, greeting: 'Привет' },
        { code: 'tr', name: t.multilingual_support.lang_turkish, greeting: 'Merhaba' },
        { code: 'in', name: t.multilingual_support.lang_hindi, greeting: 'नमस्ते' },
        { code: 'ae', name: t.multilingual_support.lang_arabic, greeting: 'مرحبا' },
        { code: 'nl', name: t.multilingual_support.lang_dutch, greeting: 'Hallo' },
        { code: 'se', name: t.multilingual_support.lang_swedish, greeting: 'Hej' },
        { code: 'pt', name: t.multilingual_support.lang_portugal, greeting: 'Olá' },
        { code: 'mx', name: t.multilingual_support.lang_mexico, greeting: 'Hola' },
        { code: 'ca', name: t.multilingual_support.lang_canada, greeting: 'Hello' },
        { code: 'au', name: t.multilingual_support.lang_australia, greeting: 'Hello' },
        { code: 'ch', name: t.multilingual_support.lang_swiss, greeting: 'Grüezi' },
        { code: 'pl', name: t.multilingual_support.lang_polish, greeting: 'Cześć' },
        { code: 'vn', name: t.multilingual_support.lang_vietnam, greeting: 'Xin chào' },
        { code: 'th', name: t.multilingual_support.lang_thai, greeting: 'สวัสดี' },
        { code: 'id', name: t.multilingual_support.lang_indonesia, greeting: 'Halo' },
        { code: 'il', name: t.multilingual_support.lang_hebrew, greeting: 'שלום' },
        { code: 'gr', name: t.multilingual_support.lang_greek, greeting: 'Γεια σας' },
        { code: 'no', name: t.multilingual_support.lang_norway, greeting: 'Hallo' },
        { code: 'dk', name: t.multilingual_support.lang_denmark, greeting: 'Hej' },
        { code: 'fi', name: t.multilingual_support.lang_finland, greeting: 'Hei' },
        { code: 'be', name: t.multilingual_support.lang_belgium, greeting: 'Salut' },
        { code: 'at', name: t.multilingual_support.lang_austria, greeting: 'Servus' },
        { code: 'lv', name: t.multilingual_support.lang_latvian, greeting: 'Sveiki' },
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
            minHeight: 'clamp(380px, 80vh, 500px)',
            background: 'linear-gradient(145deg, #0f0f10 0%, #1a1a1e 100%)',
            borderRadius: 'clamp(1.5rem, 4vw, 3rem)',
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
                top: '-25%', // Move up more on mobile to leave room for bottom text
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
                {[1, 2, 3, 4].map((ring) => {
                    const duration = ring * 12 + 15;
                    const isReverse = ring % 2 === 0;
                    const size = `calc(${ring * 15}vw + 100px)`;
                    const maxSize = ring * 90 + 100;
                    const finalSize = `min(${size}, ${maxSize}px)`;

                    return (
                        <div
                            key={ring}
                            style={{
                                position: 'absolute',
                                width: finalSize,
                                height: finalSize,
                                border: '1px solid rgba(255,255,255,0.03)',
                                borderRadius: '50%',
                                animation: `spin-slow ${duration}s linear infinite ${isReverse ? 'reverse' : ''}`,
                            }}
                        >
                            {/* Satellite Flags */}
                            {languages
                                .filter((_, i) => i % 4 === (ring - 1))
                                .map((lang, i, arr) => {
                                    const angle = (360 / arr.length) * i;
                                    return (
                                        <div
                                            key={lang.code}
                                            className="satellite-wrapper"
                                            style={{
                                                transform: `rotate(${angle}deg) translateY(calc(${finalSize} / -2)) rotate(-${angle}deg)`,
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                width: '0',
                                                height: '0'
                                            }}
                                        >
                                            <div style={{
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '50%',
                                                overflow: 'hidden',
                                                border: 'none',
                                                background: 'transparent',
                                                boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                                                transform: 'translate(-50%, -50%)',
                                                // Precise counter-rotation to keep horizontal
                                                animation: `spin-counter ${duration}s linear infinite ${isReverse ? 'reverse' : ''}`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <img
                                                    src={`https://flagcdn.com/w80/${lang.code}.png`}
                                                    alt={lang.name}
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    );
                })}
            </div>

            {/* Information Overlay */}
            <div style={{
                position: 'absolute',
                bottom: 'clamp(1rem, 3vw, 2rem)',
                left: 'clamp(1rem, 3vw, 2rem)',
                right: 'clamp(1rem, 3vw, 2rem)',
                zIndex: 20,
                padding: 'clamp(1.5rem, 4vw, 2rem)',
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(12px)',
                borderRadius: 'clamp(16px, 4vw, 24px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                pointerEvents: 'none',
            }}>

                <h3 style={{
                    fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                    fontWeight: 700,
                    margin: '0 0 0.5rem',
                    background: 'linear-gradient(to right, #fff, #94a3b8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1.1,
                    wordBreak: 'break-word'
                }}>
                    {t.multilingual_support.title}
                </h3>
                <p style={{
                    fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
                    color: '#94a3b8',
                    maxWidth: '100%',
                    lineHeight: 1.6
                }}>
                    {t.multilingual_support.desc}
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
