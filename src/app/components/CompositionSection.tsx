"use client";

import { useState, useRef } from 'react';
import { Play, Pause, AudioLines, Sparkles } from 'lucide-react';

export default function CompositionSection() {
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
    const currentAudioRef = useRef<HTMLAudioElement | null>(null);

    const agents = [
        { name: "Sarah", role: "Support", gradient: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)", audioSrc: "/voice/voice1.wav" },
        { name: "Michael", role: "Sales", gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)", audioSrc: "/voice/voice2.wav" },
        { name: "Emma", role: "Scheduling", gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)", audioSrc: "/voice/voice3.wav" },
        { name: "David", role: "Technical", gradient: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)", audioSrc: "/voice/voice1.wav" },
        { name: "Sofia", role: "Global", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", audioSrc: "/voice/voice2.wav" },
        { name: "James", role: "Executive", gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", audioSrc: "/voice/voice3.wav" },
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
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.6)',
                zIndex: 0
            }} />

            {/* Main Content Area */}
            <div className="container" style={{ position: 'relative', textAlign: 'center', marginBottom: '4rem', zIndex: 1, minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                {/* Overlay Text */}
                <div style={{ width: '100%' }}>
                    <h2 className="composition-heading">
                        Indistinguishable <br /> From Reality.
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#bbb',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.5,
                        opacity: 0.8
                    }}>
                        Listen for yourself. Six distinct personalities, one powerful AI core.
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
                        <span>Powered by our Proprietary Neural Voice Engine</span>
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
