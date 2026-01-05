'use client';

import { Mic, VolumeX, Zap, Heart, GitBranch, MessageSquare, Phone, Shield, CheckCircle, ArrowRight, Loader2, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function FeaturesSection() {
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const [activeTab, setActiveTab] = useState<'voice' | 'integrations' | 'compliance' | 'batch' | 'knowledge'>('voice');

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const start = window.innerHeight; // Start animating when section enters view
                const offset = start - rect.top;
                setScrollY(offset);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        { icon: <Zap size={24} />, title: "Ultra-Low Latency", desc: "Responds instantly with no awkward \"robotic\" delays." },
        { icon: <Heart size={24} />, title: "Emotion Detection", desc: "Understands frustration or happiness and adapts tone accordingly." },
        { icon: <GitBranch size={24} />, title: "Dynamic Scripts", desc: "Changes the conversation flow based on user responses." },
        { icon: <MessageSquare size={24} />, title: "Interruption Ready", desc: "Handles interruptions naturally, just like a real person." },
        { icon: <Mic size={24} />, title: "Unlimited Capacity", desc: "No busy signals. Answer every single caller instantly." },
        { icon: <VolumeX size={24} />, title: "Background Noise", desc: "Filters out caller noise for crystal clear understanding." },
    ];

    return (
        <section ref={sectionRef} style={{ background: '#ffffff', paddingBottom: '0', position: 'relative', overflow: 'hidden' }}>

            {/* Background Grid Lines */}
            <div className="grid-lines" style={{ zIndex: 0 }}>
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
            </div>

            {/* SECTION 1: 13 Exclusive Features (RESTORED) */}
            <div className="container" style={{ padding: '8rem 2rem 6rem', position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, color: '#111' }}>
                        <span className="text-gradient">More than just code.</span>
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '4rem 2rem',
                    textAlign: 'center',
                    maxWidth: '1000px',
                    margin: '0 auto 6rem'
                }}>
                    {features.map((f, i) => (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ padding: '1rem', background: '#ffffff', borderRadius: '50%', border: '1px solid #eee' }}>
                                {f.icon}
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#222' }}>{f.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: '#777', maxWidth: '200px' }}>{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                    <span style={{
                        background: '#34D399', /* Brighter Mint Green */
                        color: 'white',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        padding: '0.3rem 0.8rem',
                        borderRadius: '99px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        REALISTIC
                    </span>
                    <p style={{ fontSize: '0.95rem', color: '#555' }}>
                        Voice technology that passes the <span
                            onClick={() => document.getElementById('samples')?.scrollIntoView({ behavior: 'smooth' })}
                            style={{ textDecoration: 'underline', color: '#111', fontWeight: 'bold', cursor: 'pointer' }}
                        >
                            Turing test. Listen to samples.
                        </span>
                    </p>
                </div>
            </div>

            {/* SECTION 2: Soft SaaS Features Redesign (INTEGRATED) */}
            <div style={{
                background: '#ffffff', // Kept white to blend with section
                padding: '4rem 0',
                position: 'relative'
            }}>
                {/* Background Grid Lines */}
                <div className="grid-lines" style={{ zIndex: 0 }}>
                    <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                    <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                    <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                    <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                </div>
                {/* Soft Background Gradient Effect */}
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    left: '20%',
                    width: '60%',
                    height: '60%',
                    background: 'radial-gradient(circle, rgba(118, 75, 162, 0.05) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }} />

                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>

                    {/* Header Section */}
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{
                            fontSize: '3.5rem',
                            fontWeight: 700,
                            color: '#111',
                            marginBottom: '1rem',
                            letterSpacing: '-0.02em'
                        }}>
                            {activeTab === 'voice' ? 'AI Voice Agents' : activeTab === 'integrations' ? 'Seamless Integrations' : 'Enterprise Compliance'}
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#666',
                            maxWidth: '600px',
                            margin: '0 auto 3rem',
                            lineHeight: 1.6
                        }}>
                            {activeTab === 'voice'
                                ? 'Highly functional, human-sounding voice AI agents that can perform different tasks in varied fields without ever needing to take a break.'
                                : activeTab === 'integrations'
                                    ? 'Connect with your favorite tools in seconds. Our API-first approach ensures seamless data flow across your entire stack.'
                                    : activeTab === 'compliance'
                                        ? 'Bank-grade security and compliance built-in. We handle the heavy lifting so you can focus on your business.'
                                        : activeTab === 'batch'
                                            ? 'Effortlessly run batch call campaigns without concurrency limits, with detailed conversion tracking available after each campaign.'
                                            : 'Your AI agents stay up-to-date effortlessly by syncing directly with your company\'s knowledge base.'}
                        </p>

                        {/* Filter Pills (Interactive) */}
                        <div className="features-filter-container">
                            <button
                                onClick={() => setActiveTab('voice')}
                                style={{
                                    padding: '0.6rem 1.2rem',
                                    background: activeTab === 'voice' ? '#eff6ff' : 'transparent',
                                    color: activeTab === 'voice' ? '#3b82f6' : '#666',
                                    borderRadius: '99px',
                                    fontSize: '0.9rem',
                                    fontWeight: activeTab === 'voice' ? 600 : 500,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    border: '1px solid transparent',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    boxShadow: activeTab === 'voice' ? '0 2px 5px rgba(59, 130, 246, 0.1)' : 'none'
                                }}>
                                <Phone size={16} /> Voice Agents
                            </button>
                            <button
                                onClick={() => setActiveTab('integrations')}
                                style={{
                                    padding: '0.6rem 1.2rem',
                                    background: activeTab === 'integrations' ? '#eff6ff' : 'transparent',
                                    color: activeTab === 'integrations' ? '#3b82f6' : '#666',
                                    borderRadius: '99px',
                                    fontSize: '0.9rem',
                                    fontWeight: activeTab === 'integrations' ? 600 : 500,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    border: '1px solid transparent',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    boxShadow: activeTab === 'integrations' ? '0 2px 5px rgba(59, 130, 246, 0.1)' : 'none'
                                }}
                                onMouseEnter={(e) => { if (activeTab !== 'integrations') { e.currentTarget.style.background = '#f3f4f6'; e.currentTarget.style.color = '#111'; } }}
                                onMouseLeave={(e) => { if (activeTab !== 'integrations') { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#666'; } }}
                            >
                                <Zap size={16} /> Integrations
                            </button>
                            <button
                                onClick={() => setActiveTab('compliance')}
                                style={{
                                    padding: '0.6rem 1.2rem',
                                    background: activeTab === 'compliance' ? '#eff6ff' : 'transparent',
                                    color: activeTab === 'compliance' ? '#3b82f6' : '#666',
                                    borderRadius: '99px',
                                    fontSize: '0.9rem',
                                    fontWeight: activeTab === 'compliance' ? 600 : 500,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    border: '1px solid transparent',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    boxShadow: activeTab === 'compliance' ? '0 2px 5px rgba(59, 130, 246, 0.1)' : 'none'
                                }}
                                onMouseEnter={(e) => { if (activeTab !== 'compliance') { e.currentTarget.style.background = '#f3f4f6'; e.currentTarget.style.color = '#111'; } }}
                                onMouseLeave={(e) => { if (activeTab !== 'compliance') { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#666'; } }}
                            >
                                <Shield size={16} /> Compliance
                            </button>
                            <button
                                onClick={() => setActiveTab('batch')}
                                style={{
                                    padding: '0.6rem 1.2rem',
                                    background: activeTab === 'batch' ? '#eff6ff' : 'transparent',
                                    color: activeTab === 'batch' ? '#3b82f6' : '#666',
                                    borderRadius: '99px',
                                    fontSize: '0.9rem',
                                    fontWeight: activeTab === 'batch' ? 600 : 500,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    border: '1px solid transparent',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    boxShadow: activeTab === 'batch' ? '0 2px 5px rgba(59, 130, 246, 0.1)' : 'none'
                                }}
                                onMouseEnter={(e) => { if (activeTab !== 'batch') { e.currentTarget.style.background = '#f3f4f6'; e.currentTarget.style.color = '#111'; } }}
                                onMouseLeave={(e) => { if (activeTab !== 'batch') { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#666'; } }}
                            >
                                <Phone size={16} /> Batch Calling
                            </button>
                            <button
                                onClick={() => setActiveTab('knowledge')}
                                style={{
                                    padding: '0.6rem 1.2rem',
                                    background: activeTab === 'knowledge' ? '#eff6ff' : 'transparent',
                                    color: activeTab === 'knowledge' ? '#3b82f6' : '#666',
                                    borderRadius: '99px',
                                    fontSize: '0.9rem',
                                    fontWeight: activeTab === 'knowledge' ? 600 : 500,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    border: '1px solid transparent',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    boxShadow: activeTab === 'knowledge' ? '0 2px 5px rgba(59, 130, 246, 0.1)' : 'none'
                                }}
                                onMouseEnter={(e) => { if (activeTab !== 'knowledge') { e.currentTarget.style.background = '#f3f4f6'; e.currentTarget.style.color = '#111'; } }}
                                onMouseLeave={(e) => { if (activeTab !== 'knowledge') { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#666'; } }}
                            >
                                <Zap size={16} /> Knowledge Base
                            </button>
                        </div>
                    </div>

                    {/* Main Two-Card Grid */}
                    <div className="features-content-grid">

                        {activeTab === 'voice' && (
                            <>
                                {/* Left Card: AI Agent Hub / Scalability */}
                                <div className="features-card-responsive"
                                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.05)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                                >
                                    {/* Visualization Area */}
                                    <div className="features-card-visual-responsive">
                                        {/* Central Node */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '60px',
                                            height: '60px',
                                            background: '#3b82f6',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            zIndex: 2,
                                            boxShadow: '0 0 0 8px rgba(59, 130, 246, 0.2)',
                                            animation: 'pulse 2s infinite'
                                        }}>
                                            <Mic size={24} />
                                        </div>

                                        {/* Satellite Nodes */}
                                        <div style={{ position: 'absolute', top: '20%', left: '20%', width: '40px', height: '40px', background: '#e0f2fe', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'float 4s ease-in-out infinite' }}>
                                            <Phone size={16} color="#0284c7" />
                                        </div>
                                        <div style={{ position: 'absolute', bottom: '20%', right: '20%', width: '40px', height: '40px', background: '#fce7f3', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'float 3s ease-in-out infinite', animationDelay: '1s' }}>
                                            <MessageSquare size={16} color="#db2777" />
                                        </div>
                                        <div style={{ position: 'absolute', top: '30%', right: '15%', width: '32px', height: '32px', background: '#f3f4f6', borderRadius: '50%', animation: 'float 5s ease-in-out infinite', animationDelay: '0.5s' }} />
                                        <div style={{ position: 'absolute', bottom: '30%', left: '15%', width: '24px', height: '24px', background: '#f3f4f6', borderRadius: '50%', animation: 'float 4.5s ease-in-out infinite', animationDelay: '1.5s' }} />

                                        {/* Connecting Lines (Simulated with simple divs for now, could be SVG) */}
                                        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '120px', height: '1px', background: 'linear-gradient(90deg, transparent, #e5e7eb, transparent)', transform: 'translate(-50%, -50%) rotate(45deg)' }} />
                                        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '120px', height: '1px', background: 'linear-gradient(90deg, transparent, #e5e7eb, transparent)', transform: 'translate(-50%, -50%) rotate(-45deg)' }} />

                                        <div style={{
                                            position: 'absolute',
                                            bottom: '20px',
                                            background: 'white',
                                            color: '#3b82f6',
                                            border: '1px solid #dbeafe',
                                            padding: '0.4rem 1rem',
                                            borderRadius: '99px',
                                            fontSize: '0.8rem',
                                            fontWeight: 600,
                                            display: 'flex', gap: '6px', alignItems: 'center'
                                        }}>
                                            <Shield size={14} /> Enterprise Ready
                                        </div>

                                        <style jsx>{`
                                            @keyframes pulse {
                                                0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
                                                70% { box-shadow: 0 0 0 20px rgba(59, 130, 246, 0); }
                                                100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
                                            }
                                             @keyframes float {
                                                0% { transform: translateY(0px); }
                                                50% { transform: translateY(-10px); }
                                                100% { transform: translateY(0px); }
                                            }
                                        `}</style>

                                        {/* Tags for Inbound/Outbound */}
                                        <div style={{ position: 'absolute', left: '15%', top: '55%', transform: 'translateY(-50%)', fontSize: '0.75rem', color: '#9ca3af', fontWeight: 500 }}>Inbound</div>
                                        <div style={{ position: 'absolute', right: '15%', top: '55%', transform: 'translateY(-50%)', fontSize: '0.75rem', color: '#9ca3af', fontWeight: 500 }}>Outbound</div>
                                    </div>

                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#111' }}>
                                            Quick to launch. Built to scale. Enterprise ready.
                                        </h3>
                                        <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6 }}>
                                            Let AI agents handle inbound and outbound calls between your business and customers. Stop missing calls and start converting more leads by automating calls.
                                        </p>
                                    </div>
                                </div>

                                {/* Right Card: Human-Like Conversations */}
                                <div className="features-card-responsive"
                                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.05)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                                >
                                    {/* Visualization Area */}
                                    <div className="features-card-visual-responsive">
                                        <div style={{
                                            position: 'absolute',
                                            left: '30px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            background: '#eff6ff',
                                            padding: '0.6rem 1.0rem',
                                            borderRadius: '16px',
                                            zIndex: 2
                                        }}>
                                            <div style={{ width: '36px', height: '36px', background: '#3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                                <Users size={18} />
                                            </div>
                                            <div style={{ lineHeight: 1.2 }}>
                                                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1f2937' }}>John Smith</div>
                                                <div style={{ fontSize: '0.75rem', color: '#3b82f6', fontWeight: 500 }}>Customer</div>
                                            </div>
                                            {/* Context Menu Dots */}
                                            <div style={{ marginLeft: '8px', color: '#9ca3af', fontSize: '1.2rem', lineHeight: 0.5 }}>⋮</div>
                                        </div>

                                        {/* Connection Line with Pulse */}
                                        <div style={{ width: '80px', height: '2px', background: '#e5e7eb', margin: '0 10px', marginLeft: '60px', position: 'relative' }}>
                                            <div style={{
                                                position: 'absolute',
                                                top: '-3px',
                                                left: '0',
                                                width: '8px',
                                                height: '8px',
                                                background: '#3b82f6',
                                                borderRadius: '50%',
                                                animation: 'moveRight 2s infinite linear'
                                            }} />
                                            <style jsx>{`
                                                @keyframes moveRight {
                                                    0% { left: 0; opacity: 1; }
                                                    100% { left: 100%; opacity: 0; }
                                                }
                                                @keyframes type {
                                                    0%, 100% { transform: translateY(0); }
                                                    50% { transform: translateY(-3px); }
                                                }
                                            `}</style>
                                        </div>

                                        <div style={{
                                            position: 'absolute',
                                            right: '30px',
                                            top: '40px',
                                            background: '#f3f4f6',
                                            padding: '1.5rem',
                                            borderRadius: '20px',
                                            width: '200px',
                                            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)',
                                            zIndex: 2
                                        }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                                        <Zap size={16} fill="white" />
                                                    </div>
                                                    <div style={{ lineHeight: 1.2 }}>
                                                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1f2937' }}>AI Agent</div>
                                                        <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>In Progress</div>
                                                    </div>
                                                </div>
                                                <div style={{
                                                    width: '32px',
                                                    height: '20px',
                                                    background: '#e5e7eb',
                                                    borderRadius: '99px',
                                                    position: 'relative',
                                                    cursor: 'pointer'
                                                }}>
                                                    <div style={{ position: 'absolute', right: '2px', top: '2px', width: '16px', height: '16px', background: 'white', borderRadius: '50%' }} />
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '0.8rem' }}>
                                                <div style={{ padding: '0.5rem 1rem', background: '#3b82f6', color: 'white', borderRadius: '16px 16px 16px 4px', fontSize: '0.75rem', fontWeight: 500, boxShadow: '0 4px 6px -2px rgba(59, 130, 246, 0.3)' }}>
                                                    Sure! Let me assist you.
                                                </div>
                                            </div>
                                            {/* Typing Indicator */}
                                            <div style={{ display: 'flex', gap: '4px', paddingLeft: '4px' }}>
                                                <div style={{ width: '6px', height: '6px', background: '#d1d5db', borderRadius: '50%', animation: 'type 1s infinite ease-in-out' }} />
                                                <div style={{ width: '6px', height: '6px', background: '#d1d5db', borderRadius: '50%', animation: 'type 1s infinite ease-in-out', animationDelay: '0.2s' }} />
                                                <div style={{ width: '6px', height: '6px', background: '#d1d5db', borderRadius: '50%', animation: 'type 1s infinite ease-in-out', animationDelay: '0.4s' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#111' }}>
                                            Human-Like Conversations
                                        </h3>
                                        <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6 }}>
                                            AI phone agents feel human, helping you build trust while reducing missed calls and manual workload.
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}

                        {activeTab === 'integrations' && (
                            <>
                                {/* Left Card: Integrations API */}
                                <div className="features-card-responsive"
                                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.05)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                                >
                                    {/* Visualization Area */}
                                    <div className="features-card-visual-responsive">
                                        {/* API Connection Visual */}
                                        <div className="integrations-flow">
                                            {/* App Node */}
                                            <div style={{
                                                padding: '1rem',
                                                background: '#f3f4f6',
                                                borderRadius: '16px',
                                                border: '1px solid #e5e7eb',
                                                textAlign: 'center'
                                            }}>
                                                <div style={{ width: '40px', height: '40px', background: '#e5e7eb', borderRadius: '8px', marginBottom: '8px' }} />
                                                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6b7280' }}>Your App</div>
                                            </div>

                                            {/* Connection Line */}
                                            <div style={{ width: '80px', height: '2px', background: '#e5e7eb', position: 'relative' }}>
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '-3px',
                                                    left: '0',
                                                    width: '8px',
                                                    height: '8px',
                                                    background: '#3b82f6',
                                                    borderRadius: '50%',
                                                    animation: 'moveRight 1.5s infinite linear'
                                                }} />
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '-3px',
                                                    left: '0',
                                                    width: '8px',
                                                    height: '8px',
                                                    background: '#3b82f6',
                                                    borderRadius: '50%',
                                                    animation: 'moveRight 1.5s infinite linear',
                                                    animationDelay: '0.75s'
                                                }} />
                                            </div>

                                            {/* CONEKT Node */}
                                            <div style={{
                                                padding: '1rem',
                                                background: '#eff6ff',
                                                borderRadius: '16px',
                                                border: '1px solid #bfdbfe',
                                                textAlign: 'center',
                                                boxShadow: '0 4px 15px -3px rgba(59, 130, 246, 0.2)'
                                            }}>
                                                <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', borderRadius: '8px', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                                    <Zap size={20} fill="white" />
                                                </div>
                                                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1e40af' }}>CONEKT</div>
                                            </div>
                                        </div>

                                        {/* Background Code Snippet - Faded */}
                                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', padding: '1.5rem', opacity: 0.05, fontSize: '0.7rem', fontFamily: 'monospace', pointerEvents: 'none' }}>
                                            color: #111;<br />
                                            background: #fff;<br />
                                            border-radius: 8px;<br />
                                            display: flex;<br />
                                            align-items: center;<br />
                                            justify-content: center;<br />
                                            gap: 1rem;<br />
                                        </div>

                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#111' }}>
                                            Developer Friendly API
                                        </h3>
                                        <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6 }}>
                                            Integrate deep into your product with our robust API. Trigger calls, fetch transcripts, and manage agents programmatically.
                                        </p>
                                    </div>
                                </div>

                                {/* Right Card: Tools Ecosystem */}
                                <div className="features-card-responsive"
                                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.05)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                                >
                                    <div className="features-card-visual-responsive">
                                        {/* Central Hub */}
                                        <div style={{ width: '60px', height: '60px', background: '#111', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', position: 'relative', zIndex: 2, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)' }}>
                                            <Zap size={24} fill="white" />
                                        </div>

                                        {/* Orbiting Planets - CSS Animation */}
                                        <div style={{ position: 'absolute', width: '180px', height: '180px', border: '1px dashed #e5e7eb', borderRadius: '50%', animation: 'spin 20s linear infinite' }} />

                                        <div style={{
                                            position: 'absolute',
                                            top: '20%',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            animation: 'float 3s ease-in-out infinite'
                                        }}>
                                            <div style={{ width: '40px', height: '40px', background: '#ffe4e6', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#be123c', fontSize: '0.7rem', fontWeight: 800 }}>hub</div>
                                        </div>
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '25%',
                                            left: '20%',
                                            animation: 'float 4s ease-in-out infinite',
                                            animationDelay: '1s'
                                        }}>
                                            <div style={{ width: '40px', height: '40px', background: '#dbeafe', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1d4ed8', fontSize: '1.2rem' }}>S</div>
                                        </div>
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '30%',
                                            right: '20%',
                                            animation: 'float 3.5s ease-in-out infinite',
                                            animationDelay: '0.5s'
                                        }}>
                                            <div style={{ width: '40px', height: '40px', background: '#ffedd5', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c2410c', fontSize: '1.2rem' }}>*</div>
                                        </div>

                                        <style jsx>{`
                                            @keyframes float {
                                                0% { transform: translateY(0px); }
                                                50% { transform: translateY(-10px); }
                                                100% { transform: translateY(0px); }
                                            }
                                            @keyframes spin {
                                                100% { transform: rotate(360deg); }
                                            }
                                        `}</style>

                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#111' }}>
                                            Native Integrations
                                        </h3>
                                        <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6 }}>
                                            One-click connection to your CRM, Calendar, and Support tools. No coding required for standard workflows.
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}

                        {activeTab === 'compliance' && (
                            <>
                                {/* Left Card: Security */}
                                <div style={{
                                    background: '#f9fafb',
                                    borderRadius: '32px',
                                    padding: '3rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    minHeight: '500px',
                                    cursor: 'default',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.05)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                                >
                                    <div className="features-card-visual-responsive">
                                        {/* Security Shield with Scanner */}
                                        <div style={{ position: 'relative' }}>
                                            <Shield size={80} color="#e5e7eb" fill="#f9fafb" />
                                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
                                                <Shield size={80} color="#3b82f6" fill="transparent" style={{ position: 'absolute', zIndex: 2 }} />
                                                <div style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    width: '100%',
                                                    height: '20px',
                                                    background: 'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.2))',
                                                    borderBottom: '2px solid #3b82f6',
                                                    animation: 'scan 2s ease-in-out infinite',
                                                    zIndex: 1
                                                }} />
                                            </div>
                                        </div>

                                        <div style={{
                                            position: 'absolute',
                                            bottom: '30px',
                                            background: '#eff6ff',
                                            color: '#3b82f6',
                                            padding: '0.4rem 1rem',
                                            borderRadius: '99px',
                                            fontSize: '0.75rem',
                                            fontWeight: 600,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        }}>
                                            <CheckCircle size={14} /> SOC2 Type II
                                        </div>

                                        <style jsx>{`
                                            @keyframes scan {
                                                0% { top: -20%; opacity: 0; }
                                                10% { opacity: 1; }
                                                90% { opacity: 1; }
                                                100% { top: 120%; opacity: 0; }
                                            }
                                        `}</style>
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#111' }}>
                                            Enterprise Grade Security
                                        </h3>
                                        <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6 }}>
                                            SOC2 Type II certified. Your data is encrypted at rest and in transit. We prioritize security so you don't have to.
                                        </p>
                                    </div>
                                </div>

                                {/* Right Card: Privacy */}
                                <div className="features-card-responsive"
                                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.05)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                                >
                                    <div className="features-card-visual-responsive">
                                        {/* Privacy Folder */}
                                        <div style={{ position: 'relative' }}>
                                            <div style={{ width: '80px', height: '100px', background: '#f3f4f6', borderRadius: '12px', border: '2px solid #e5e7eb', position: 'relative' }}>
                                                {/* Lines */}
                                                <div style={{ width: '40%', height: '4px', background: '#e5e7eb', margin: '15px auto 0', borderRadius: '2px' }} />
                                                <div style={{ width: '60%', height: '4px', background: '#e5e7eb', margin: '8px auto 0', borderRadius: '2px' }} />
                                                <div style={{ width: '60%', height: '4px', background: '#e5e7eb', margin: '8px auto 0', borderRadius: '2px' }} />
                                            </div>

                                            {/* Lock Icon */}
                                            <div style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                width: '40px',
                                                height: '40px',
                                                background: '#10b981', // Emerald green
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                boxShadow: '0 4px 10px rgba(16, 185, 129, 0.3)'
                                            }}>
                                                <Shield size={20} fill="white" />
                                            </div>

                                            {/* Floating Checkmark */}
                                            <div style={{
                                                position: 'absolute',
                                                top: '-10px',
                                                right: '-10px',
                                                background: 'white',
                                                borderRadius: '50%',
                                                padding: '4px',
                                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                                            }}>
                                                <CheckCircle size={24} color="#10b981" fill="white" />
                                            </div>
                                        </div>

                                        <div style={{ position: 'absolute', bottom: '24px', display: 'flex', gap: '8px' }}>
                                            <div style={{ padding: '0.3rem 0.8rem', background: '#ecfdf5', color: '#059669', borderRadius: '99px', fontSize: '0.7rem', fontWeight: 600 }}>GDPR</div>
                                            <div style={{ padding: '0.3rem 0.8rem', background: '#ecfdf5', color: '#059669', borderRadius: '99px', fontSize: '0.7rem', fontWeight: 600 }}>CCPA</div>
                                            <div style={{ padding: '0.3rem 0.8rem', background: '#ecfdf5', color: '#059669', borderRadius: '99px', fontSize: '0.7rem', fontWeight: 600 }}>HIPAA</div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#111' }}>
                                            Global Privacy Compliance
                                        </h3>
                                        <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6 }}>
                                            Built for global deployment. We adhere to GDPR, CCPA, and verify all call data handling requirements.
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}

                        {activeTab === 'batch' && (
                            <>
                                {/* Left Card: Campaign Visual (Full Width) */}
                                <div className="features-card-responsive features-card-span-2"
                                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.05)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                                        <div className="features-split-text">
                                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#111' }}>
                                                Effortless Scalability
                                            </h3>
                                            <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6, marginBottom: '2rem' }}>
                                                Effortlessly handle millions of calls with scalable concurrent calling. Upload batches and watch them go live instantly.
                                            </p>
                                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                                <div style={{ padding: '0.5rem 1rem', background: '#eff6ff', color: '#3b82f6', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem' }}>
                                                    10,000+ Concurrent Calls
                                                </div>
                                                <div style={{ padding: '0.5rem 1rem', background: '#ecfdf5', color: '#059669', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem' }}>
                                                    99.9% Uptime
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* High Concurrency Visualization */}
                                    <div className="batch-visual">
                                        {/* Background Texture/Noise (Optional) */}
                                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '10px 10px' }} />

                                        {/* Left Side: Campaign Batches */}
                                        <div className="batch-visual-left">
                                            <div style={{ background: 'rgba(255,255,255,0.9)', padding: '0.8rem 1.2rem', borderRadius: '16px', backdropFilter: 'blur(4px)', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '10px', transform: 'scale(1.05)', borderLeft: '4px solid #3b82f6' }}>
                                                <Phone size={20} color="#3b82f6" />
                                                <div>
                                                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111' }}>Batch #302</div>
                                                    <div style={{ fontSize: '0.75rem', color: '#666' }}>128 Active</div>
                                                </div>
                                            </div>
                                            <div style={{ background: 'rgba(255,255,255,0.6)', padding: '0.8rem 1.2rem', borderRadius: '16px', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.8 }}>
                                                <Phone size={20} color="#666" />
                                                <div>
                                                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#333' }}>Batch #301</div>
                                                    <div style={{ fontSize: '0.75rem', color: '#666' }}>Finished</div>
                                                </div>
                                            </div>
                                            <div style={{ background: 'rgba(255,255,255,0.6)', padding: '0.8rem 1.2rem', borderRadius: '16px', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.8 }}>
                                                <Phone size={20} color="#666" />
                                                <div>
                                                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#333' }}>Follow-up Q3</div>
                                                    <div style={{ fontSize: '0.75rem', color: '#666' }}>Scheduled</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Connection Lines (Simulated fan-out) */}
                                        <div className="batch-visual-lines">
                                            {[...Array(8)].map((_, i) => (
                                                <div key={i} style={{
                                                    position: 'absolute',
                                                    left: '0',
                                                    top: '30%', // Originating from the active batch
                                                    width: '100%',
                                                    height: '1px',
                                                    background: 'linear-gradient(90deg, rgba(255,255,255,0.8), transparent)',
                                                    transformOrigin: 'left center',
                                                    transform: `rotate(${(i - 3.5) * 8}deg)`, // Fan out
                                                    opacity: 0.6
                                                }}>
                                                    <div style={{
                                                        position: 'absolute',
                                                        left: '0',
                                                        top: '-2px',
                                                        width: '6px',
                                                        height: '6px',
                                                        background: 'white',
                                                        borderRadius: '50%',
                                                        animation: `travel 1.${5 + i % 5}s infinite linear`,
                                                        animationDelay: `${i * 0.2}s`
                                                    }} />
                                                </div>
                                            ))}
                                            <style jsx>{`
                                                @keyframes travel {
                                                    0% { left: 0; opacity: 1; }
                                                    100% { left: 100%; opacity: 0; }
                                                }
                                            `}</style>
                                        </div>

                                        {/* Right Side: Avatar Grid (Simulating high volume) */}
                                        <div className="batch-visual-right">
                                            {/* Generating 9 avatars to show scale */}
                                            {[...Array(9)].map((_, i) => (
                                                <div key={i} style={{
                                                    width: '44px',
                                                    height: '44px',
                                                    borderRadius: '50%',
                                                    background: `hsl(${200 + i * 20}, 70%, 80%)`,
                                                    border: '2px solid white',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    position: 'relative',
                                                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                                    animation: 'float 3s ease-in-out infinite',
                                                    animationDelay: `${i * 0.1}s`
                                                }}>
                                                    <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#333' }}>{['JD', 'AS', 'MR', 'WK', 'LB', 'ST', 'PV', 'DM', 'CK'][i]}</div>
                                                    {/* Status Dot */}
                                                    <div style={{
                                                        position: 'absolute',
                                                        bottom: '0',
                                                        right: '0',
                                                        width: '12px',
                                                        height: '12px',
                                                        background: i % 3 === 0 ? '#fbbf24' : '#22c55e', // Mix of green (talking) and yellow (ringing)
                                                        borderRadius: '50%',
                                                        border: '2px solid white'
                                                    }} />
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </>
                        )}

                        {activeTab === 'knowledge' && (
                            <>
                                {/* Central Card: Knowledge Hub */}
                                <div className="features-card-responsive features-card-span-2 features-card-row"
                                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.05)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                                >
                                    <div className="features-split-text">
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#111' }}>
                                            Instant Knowledge Sync
                                        </h3>
                                        <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6, marginBottom: '2rem' }}>
                                            Train your AI agent in seconds. Upload PDFs, connect URLs, or plain text. It learns your business instantly and stays up-to-date with a single click.
                                        </p>
                                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                            {['PDFs', 'Websites', 'Docs', 'Notion', 'Zendesk'].map((item, i) => (
                                                <span key={i} style={{ background: 'white', border: '1px solid #e5e7eb', padding: '0.3rem 0.8rem', borderRadius: '6px', fontSize: '0.8rem', color: '#666' }}>{item}</span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Visualization: File Sync Interface */}
                                    <div className="features-card-visual-responsive features-split-visual mb-0">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #f3f4f6', paddingBottom: '1rem' }}>
                                            <div style={{ fontWeight: 600, color: '#333' }}>Company Knowledge</div>
                                            <div style={{ background: '#111', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '6px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                <Loader2 size={12} className="spin-slow" /> Re-syncing
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                            {/* File Item 1 */}
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.8rem', background: '#f9fafb', borderRadius: '12px', opacity: 1, transform: 'translateY(0)', transition: 'all 0.3s' }}>
                                                <div style={{ width: '40px', height: '40px', background: '#fee2e2', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444', fontWeight: 700, fontSize: '0.7rem' }}>PDF</div>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#333' }}>Product_Manual_v2.pdf</div>
                                                    <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>1.2 MB • Just now</div>
                                                </div>
                                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <div style={{ width: '10px', height: '10px', background: '#22c55e', borderRadius: '50%' }} />
                                                </div>
                                            </div>

                                            {/* File Item 2 */}
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.8rem', background: '#f9fafb', borderRadius: '12px' }}>
                                                <div style={{ width: '40px', height: '40px', background: '#dbeafe', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', fontWeight: 700, fontSize: '0.7rem' }}>URL</div>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#333' }}>website.com/pricing</div>
                                                    <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>Synced 2m ago</div>
                                                </div>
                                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Loader2 size={12} color="#3b82f6" className="spin-fast" />
                                                </div>
                                            </div>
                                        </div>

                                        <style jsx>{`
                                            .spin-slow { animation: spin 3s linear infinite; }
                                            .spin-fast { animation: spin 1s linear infinite; }
                                            @keyframes spin { 100% { transform: rotate(360deg); } }
                                         `}</style>

                                        {/* Upload Drop Zone Hint */}
                                        <div style={{ marginTop: '1.5rem', border: '2px dashed #e5e7eb', borderRadius: '12px', padding: '1rem', textAlign: 'center', color: '#9ca3af', fontSize: '0.8rem' }}>
                                            Drop files here to upload
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Bottom CTA Row (Interactive) */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        <button style={{
                            background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
                            color: 'white',
                            padding: '1rem 2.5rem',
                            borderRadius: '99px',
                            fontSize: '1rem',
                            fontWeight: 600,
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.4)',
                            transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 15px 30px -5px rgba(79, 70, 229, 0.5)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(79, 70, 229, 0.4)'; }}
                        >
                            <Phone size={18} /> Book a Demo Call
                        </button>
                        <button style={{
                            background: '#f3f4f6',
                            color: '#1f2937',
                            padding: '1rem 2.5rem',
                            borderRadius: '99px',
                            fontSize: '1rem',
                            fontWeight: 600,
                            border: '1px solid transparent',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            transition: 'all 0.2s ease'
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = '#e5e7eb'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = '#f3f4f6'; }}
                        >
                            Learn More
                        </button>
                    </div>

                </div>
            </div>

            {/* SECTION 3: Bottom Marquee Text (RESTORED) */}
            <div style={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                padding: '5rem 0 2rem',
                background: 'white',
                borderTop: '1px solid #f0f0f0',
                position: 'relative',
                zIndex: 10
            }}>
                <h2 className="marquee-text" style={{
                    fontSize: '10vw',
                    fontWeight: 800,
                    background: 'linear-gradient(to bottom, #d1d1d1, #f0f0f0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textTransform: 'uppercase',
                    margin: 0,
                    lineHeight: 1,
                    letterSpacing: '-0.04em'
                }}>
                    Infinite Scale. Natural Voice. Intelligent Interaction.
                </h2>
            </div>

        </section>
    );
}
