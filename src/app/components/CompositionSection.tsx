"use client";

import { useState, useRef } from 'react';
import { Play, Pause, AudioLines, Sparkles, Activity, Car, Home, Phone } from 'lucide-react';
import { useTranslation } from '@/i18n/context';

export default function CompositionSection() {
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
    const currentAudioRef = useRef<HTMLAudioElement | null>(null);
    const { t } = useTranslation();

    const agents = [
        { name: "Sarah", role: t.composition.role_support, gradient: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)", audioSrc: "/voice/voice1.wav" },
        { name: "Michael", role: t.composition.role_sales, gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)", audioSrc: "/voice/voice2.wav" },
        { name: "Emma", role: t.composition.role_scheduling, gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)", audioSrc: "/voice/voice3.wav" },
        { name: "David", role: t.composition.role_technical, gradient: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)", audioSrc: "/voice/voice1.wav" },
        { name: "Sofia", role: t.composition.role_global, gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", audioSrc: "/voice/voice2.wav" },
        { name: "James", role: t.composition.role_executive, gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", audioSrc: "/voice/voice3.wav" },
    ];

    const togglePlay = (index: number) => {
        // Stop current audio if playing
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current = null;
        }

        if (playingIndex === index) {
            // If clicking the same button, just stop it (already paused above)
            setPlayingIndex(null);
        } else {
            // Play new audio
            const audio = new Audio(agents[index].audioSrc);
            audio.volume = 0.8;

            audio.onended = () => {
                setPlayingIndex(null);
                currentAudioRef.current = null;
            };

            audio.play().catch(e => console.error("Audio playback failed:", e));
            currentAudioRef.current = audio;
            setPlayingIndex(index);
        }
    };

    return (
        <section id="technology" className="composition-section">

            {/* Dark Overlay 60% for better text contrast */}


            {/* Main Content Area */}
            <div className="container" style={{ position: 'relative', textAlign: 'center', marginBottom: '4rem', zIndex: 1, minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                {/* Overlay Text */}
                <div style={{ width: '100%' }}>
                    <h2 className="composition-heading" dangerouslySetInnerHTML={{ __html: t.composition.title.replace('From', '<br /> From') }} />
                    <p style={{
                        fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                        color: '#bbb',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.5,
                        opacity: 0.8
                    }}>
                        {t.composition.subtitle}
                    </p>
                </div>
            </div>

            {/* Voice Agents Grid */}
            <div className="container composition-grid">
                {agents.map((agent, i) => {
                    const isPlaying = playingIndex === i;

                    return (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {/* Play Button Circle */}
                            <button
                                onClick={() => togglePlay(i)}
                                className="composition-play-btn"
                                style={{
                                    background: agent.gradient,
                                    transform: isPlaying ? 'scale(1.1)' : 'scale(1)',
                                    boxShadow: isPlaying
                                        ? `0 0 30px ${agent.gradient.split(',')[1].split(' ')[1]}, inset 0 0 20px rgba(255,255,255,0.4)`
                                        : '0 10px 20px rgba(0,0,0,0.3), inset 0 0 0 rgba(255,255,255,0)',
                                }}>
                                {/* Ripple Effect when playing */}
                                {isPlaying && (
                                    <div style={{
                                        position: 'absolute',
                                        inset: -5,
                                        borderRadius: '50%',
                                        border: '2px solid rgba(255,255,255,0.5)',
                                        animation: 'ripple 1.5s infinite'
                                    }} />
                                )}

                                {isPlaying ? (
                                    <Pause size={32} fill="currentColor" stroke="none" />
                                ) : (
                                    <Play size={32} fill="currentColor" stroke="none" style={{ marginLeft: '4px' }} />
                                )}
                            </button>

                            <h4 className="composition-agent-name" style={{
                                color: isPlaying ? 'white' : '#ddd'
                            }}>
                                {agent.name}
                            </h4>
                            <span className="composition-agent-role">
                                {agent.role}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Try It Live Section */}
            <div id="live-demo" className="container" style={{ marginTop: 'clamp(4rem, 10vw, 6rem)', marginBottom: 'clamp(4rem, 10vw, 6rem)', textAlign: 'center', position: 'relative', zIndex: 2 }}>
                <h3 style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>{t.composition.try_live_title}</h3>
                <p style={{ color: '#bbb', marginBottom: 'clamp(2rem, 8vw, 4rem)', fontSize: 'clamp(1rem, 3vw, 1.2rem)', maxWidth: '600px', margin: '0 auto clamp(2rem, 8vw, 4rem)' }}>
                    {t.composition.try_live_subtitle}
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                    gap: 'clamp(1.5rem, 4vw, 2rem)',
                    justifyContent: 'center'
                }}>
                    {[
                        { icon: <Activity size={48} color="#FF9A9E" />, title: t.composition.agent_healthcare, sub: t.composition.sub_healthcare, num: "+37125892069" },
                        { icon: <Car size={48} color="#a18cd1" />, title: t.composition.agent_automotive, sub: t.composition.sub_automotive, num: "+37125892069" },
                        { icon: <Home size={48} color="#84fab0" />, title: t.composition.agent_realestate, sub: t.composition.sub_realestate, num: "+37125892069" }
                    ].map((item, i) => (
                        <div key={i} style={{
                            background: 'rgba(255,255,255,0.05)',
                            padding: 'clamp(1.5rem, 5vw, 2.5rem)',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            transition: 'transform 0.2s ease',
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ marginBottom: '0.5rem' }}>{item.icon}</div>
                            <h4 style={{ color: 'white', fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>{item.title}</h4>
                            <p style={{ color: '#888', margin: 0, fontSize: '1rem' }}>{item.sub}</p>

                            <a href={`tel:${item.num.replace(/\D/g, '')}`} style={{
                                marginTop: '1rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                background: '#333',
                                color: 'white',
                                padding: '1rem 2rem',
                                borderRadius: '99px',
                                textDecoration: 'none',
                                fontWeight: 600,
                                fontSize: '1.1rem',
                                border: '1px solid #444',
                                transition: 'background 0.2s, color 0.2s',
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'white';
                                    e.currentTarget.style.color = 'black';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#333';
                                    e.currentTarget.style.color = 'white';
                                }}
                            >
                                <Phone size={18} /> {item.num}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Strip */}
            <div style={{
                background: '#111',
                padding: '1.5rem 0', // Reduced padding to keep it thin
                borderTop: '1px solid #222',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1
            }}>
                <div className="container" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem',
                    color: '#666',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#888' }}>
                        <Sparkles size={18} color="var(--accent-pink)" />
                        <span>{t.composition.neural_engine}</span>
                    </div>
                </div>
            </div>



            <style jsx>{`
                @keyframes ripple {
                    0% { transform: scale(1); opacity: 1; }
                    100% { transform: scale(1.5); opacity: 0; }
                }
            `}</style>

        </section>
    );
}
