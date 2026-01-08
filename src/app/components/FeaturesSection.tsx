'use client';

import { Mic, VolumeX, Zap, Heart, GitBranch, MessageSquare, Phone, Shield, CheckCircle, ArrowRight, Loader2, Users, Car, Home, Landmark, ShoppingCart, Utensils, Play, Layout, Plug, Bot, Settings2, Rocket, BarChart3, FileText, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from '@/i18n/context';

export default function FeaturesSection() {
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const [activeTab, setActiveTab] = useState<'healthcare' | 'automotive' | 'realestate' | 'banking' | 'ecommerce' | 'restaurant'>('healthcare');
    const [isPlaying, setIsPlaying] = useState(false);
    const { t } = useTranslation();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        // Reset playing state after some time to simulate track end
        if (!isPlaying) {
            setTimeout(() => {
                setIsPlaying(false);
            }, 15000);
        }
    };

    // Reset playing state when switching tabs
    useEffect(() => {
        setIsPlaying(false);
    }, [activeTab]);


    const industries = {
        healthcare: {
            icon: <Heart size={16} />,
            label: t.industries.healthcare.label,
            demo: t.industries.healthcare.demo,
            sample: t.industries.healthcare.sample,
            title: t.industries.healthcare.title,
            desc: t.industries.healthcare.desc,
            color: "#3b82f6",
            gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
            secondary: "#e0f2fe",
            visualIcon: <Heart size={32} color="white" />
        },
        automotive: {
            icon: <Car size={16} />,
            label: t.industries.automotive.label,
            demo: t.industries.automotive.demo,
            sample: t.industries.automotive.sample,
            title: t.industries.automotive.title,
            desc: t.industries.automotive.desc,
            color: "#ef4444",
            gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
            secondary: "#fee2e2",
            visualIcon: <Car size={32} color="white" />
        },
        realestate: {
            icon: <Home size={16} />,
            label: t.industries.realestate.label,
            demo: t.industries.realestate.demo,
            sample: t.industries.realestate.sample,
            title: t.industries.realestate.title,
            desc: t.industries.realestate.desc,
            color: "#10b981",
            gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            secondary: "#d1fae5",
            visualIcon: <Home size={32} color="white" />
        },
        banking: {
            icon: <Landmark size={16} />,
            label: t.industries.banking.label,
            demo: t.industries.banking.demo,
            sample: t.industries.banking.sample,
            title: t.industries.banking.title,
            desc: t.industries.banking.desc,
            color: "#f59e0b",
            gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
            secondary: "#fef3c7",
            visualIcon: <Landmark size={32} color="white" />
        },
        ecommerce: {
            icon: <ShoppingCart size={16} />,
            label: t.industries.ecommerce.label,
            demo: t.industries.ecommerce.demo,
            sample: t.industries.ecommerce.sample,
            title: t.industries.ecommerce.title,
            desc: t.industries.ecommerce.desc,
            color: "#8b5cf6",
            gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
            secondary: "#ede9fe",
            visualIcon: <ShoppingCart size={32} color="white" />
        },
        restaurant: {
            icon: <Utensils size={16} />,
            label: t.industries.restaurant.label,
            demo: t.industries.restaurant.demo,
            sample: t.industries.restaurant.sample,
            title: t.industries.restaurant.title,
            desc: t.industries.restaurant.desc,
            color: "#ec4899",
            gradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
            secondary: "#fce7f3",
            visualIcon: <Utensils size={32} color="white" />
        }
    };

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
        <section id="features" ref={sectionRef} style={{ background: '#ffffff', paddingBottom: '0', position: 'relative', overflow: 'hidden' }}>

            {/* Background Grid Lines */}
            <div className="grid-lines" style={{ zIndex: 0 }}>
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
            </div>



            {/* SECTION 2: Use Cases Across Industries */}
            <div style={{
                background: '#ffffff',
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

                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(1rem, 5vw, 2rem)', position: 'relative', zIndex: 1 }}>

                    {/* Header Section */}
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            lineHeight: 1.05,
                            fontWeight: 800,
                            letterSpacing: '-0.03em',
                            color: '#111',
                            marginBottom: '1rem',
                        }}>
                            {t.features.use_cases_title} <span className="text-gradient">{t.features.use_cases_highlight}</span>
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#666',
                            maxWidth: '600px',
                            margin: '0 auto 3rem',
                            lineHeight: 1.6
                        }}>
                            {t.features.use_cases_desc}
                        </p>

                        {/* Filter Pills (Interactive) */}
                        <div style={{ position: 'relative', margin: '0 -2rem' }}>
                            <div className="features-filter-container" style={{
                                flexWrap: 'nowrap',
                                overflowX: 'auto',
                                justifyContent: 'flex-start',
                                padding: '0.5rem 2rem 1.5rem',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            }}>
                                {(Object.keys(industries) as Array<keyof typeof industries>).map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => setActiveTab(key)}
                                        style={{
                                            padding: '0.6rem 1.2rem',
                                            background: activeTab === key ? industries[key].secondary : '#f3f4f6',
                                            color: activeTab === key ? industries[key].color : '#666',
                                            borderRadius: '99px',
                                            fontSize: '0.9rem',
                                            fontWeight: activeTab === key ? 600 : 500,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            border: '1px solid transparent',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            whiteSpace: 'nowrap',
                                            flexShrink: 0,
                                            boxShadow: activeTab === key ? `0 2px 5px ${industries[key].color}20` : 'none'
                                        }}
                                    >
                                        {industries[key].icon} {industries[key].label}
                                    </button>
                                ))}
                            </div>
                            {/* Scroll indicators for mobile */}
                            <div className="hide-desktop" style={{
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                bottom: '1rem',
                                width: '40px',
                                background: 'linear-gradient(to left, white, transparent)',
                                pointerEvents: 'none',
                                zIndex: 2
                            }} />
                        </div>
                    </div>

                    {/* Main Content Card */}
                    <div className="features-content-grid" style={{ maxWidth: '900px', margin: '0 auto', display: 'block' }}>
                        <div className="features-card-responsive"
                            style={{ padding: '0', overflow: 'hidden', background: 'white', borderRadius: '24px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)', border: '1px solid #f3f4f6' }}
                        >
                            {/* Top Section: Visualization / Demo Player */}
                            <div style={{
                                background: '#f8fafc',
                                padding: 'clamp(2rem, 8vw, 4rem) clamp(1rem, 4vw, 2rem)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottom: '1px solid #e5e7eb',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                {/* Animated Background Elements based on Industry Color */}
                                <div style={{
                                    position: 'absolute',
                                    width: '300px',
                                    height: '300px',
                                    background: industries[activeTab].gradient,
                                    opacity: 0.05,
                                    borderRadius: '50%',
                                    filter: 'blur(40px)',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    transition: 'background 0.5s ease'
                                }} />

                                <div style={{ zIndex: 2, textAlign: 'center', position: 'relative' }}>
                                    {/* Pulsing Visual Effect Container */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: '-20px',
                                        background: industries[activeTab].color,
                                        borderRadius: '50%',
                                        opacity: isPlaying ? 0.2 : 0,
                                        transform: isPlaying ? 'scale(1.2)' : 'scale(0.8)',
                                        filter: 'blur(20px)',
                                        transition: 'all 0.5s ease',
                                        zIndex: -1,
                                        animation: isPlaying ? 'pulse-glow 2s infinite' : 'none'
                                    }} />

                                    <button
                                        onClick={togglePlay}
                                        style={{
                                            background: isPlaying ? '#1e293b' : industries[activeTab].gradient,
                                            color: 'white',
                                            padding: '1.2rem 2.5rem',
                                            borderRadius: '99px',
                                            fontSize: '1.1rem',
                                            fontWeight: 700,
                                            border: 'none',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            boxShadow: isPlaying
                                                ? `0 0 30px ${industries[activeTab].color}80`
                                                : `0 10px 25px -5px ${industries[activeTab].color}60`,
                                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                            marginBottom: '2rem',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isPlaying) e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isPlaying) e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        }}
                                    >
                                        {isPlaying ? (
                                            <>
                                                <div style={{ display: 'flex', gap: '3px', height: '18px', alignItems: 'flex-end' }}>
                                                    <div className="wave-bar" style={{ animationDelay: '0s' }} />
                                                    <div className="wave-bar" style={{ animationDelay: '0.2s' }} />
                                                    <div className="wave-bar" style={{ animationDelay: '0.4s' }} />
                                                    <div className="wave-bar" style={{ animationDelay: '0.1s' }} />
                                                </div>
                                                {t.features.stop_demo}
                                            </>
                                        ) : (
                                            <>
                                                <div style={{
                                                    background: 'rgba(255,255,255,0.2)',
                                                    borderRadius: '50%',
                                                    padding: '8px',
                                                    display: 'flex'
                                                }}>
                                                    <Play size={20} fill="white" />
                                                </div>
                                                {industries[activeTab].demo}
                                            </>
                                        )}
                                    </button>

                                    {/* Visual Waveform Effect when playing */}
                                    {isPlaying && (
                                        <div style={{
                                            display: 'flex',
                                            gap: '4px',
                                            height: '60px',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '1.5rem',
                                            padding: '0 2rem'
                                        }}>
                                            {[...Array(24)].map((_, i) => {
                                                const randomDuration = 0.5 + Math.random() * 1;
                                                return (
                                                    <div
                                                        key={i}
                                                        style={{
                                                            width: '3px',
                                                            height: activeTab === 'healthcare' ? '30%' : '50%',
                                                            background: industries[activeTab].color,
                                                            borderRadius: '2px',
                                                            animation: `waveform ${randomDuration}s ease-in-out infinite`,
                                                            animationDelay: `${i * 0.05}s`,
                                                            opacity: 0.4 + (Math.random() * 0.6)
                                                        }}
                                                    />
                                                );
                                            })}
                                        </div>
                                    )}

                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                                        {isPlaying && (
                                            <span style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.4rem',
                                                background: '#fee2e2',
                                                color: '#ef4444',
                                                padding: '0.2rem 0.6rem',
                                                borderRadius: '4px',
                                                fontSize: '0.75rem',
                                                fontWeight: 800,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                animation: 'pulse-live 2s infinite'
                                            }}>
                                                <div style={{ width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%' }} />
                                                {t.features.live_demo}
                                            </span>
                                        )}
                                        <p style={{
                                            color: isPlaying ? industries[activeTab].color : '#64748b',
                                            fontSize: '1rem',
                                            fontWeight: isPlaying ? 600 : 400,
                                            transition: 'all 0.3s ease'
                                        }}>
                                            {isPlaying ? t.features.streaming_agent.replace('{industry}', industries[activeTab].label) : industries[activeTab].sample ? t.features.sample_conversation.replace('{sample}', industries[activeTab].sample) : 'Sample conversation available'}
                                        </p>
                                    </div>
                                </div>

                                <style jsx>{`
                                    @keyframes pulse-live {
                                        0%, 100% { opacity: 1; }
                                        50% { opacity: 0.5; }
                                    }
                                    @keyframes pulse-glow {
                                        0% { transform: scale(1); opacity: 0.2; }
                                        50% { transform: scale(1.6); opacity: 0.1; }
                                        100% { transform: scale(1); opacity: 0.2; }
                                    }
                                    @keyframes waveform {
                                        0%, 100% { height: 8px; transform: scaleY(1); }
                                        50% { height: 40px; transform: scaleY(1.2); }
                                    }
                                    .wave-bar {
                                        width: 3px;
                                        background: white;
                                        border-radius: 1px;
                                        animation: wave-animation 0.8s ease-in-out infinite;
                                    }
                                    @keyframes wave-animation {
                                        0%, 100% { height: 4px; }
                                        50% { height: 16px; }
                                    }
                                `}</style>
                            </div>

                            {/* Bottom Section: Content */}
                            <div style={{ padding: 'clamp(1.5rem, 5vw, 3rem)' }}>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1e293b' }}>
                                    {industries[activeTab].title}
                                </h3>
                                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                                    {industries[activeTab].desc}
                                </p>

                                {/* Optional: Add Integration Icons or features here if needed in future */}
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {/* Placeholder for dynamic tags if needed */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <Link href="/industries">
                            <button style={{
                                background: '#111',
                                color: 'white',
                                padding: '1rem 3rem',
                                borderRadius: '99px',
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
                                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
                            >
                                {t.features.explore_more}
                            </button>
                        </Link>
                    </div>

                </div>
            </div>



            {/* SECTION: How It Works */}
            <div id="how-it-works" className="container" style={{ padding: '8rem 2rem 6rem', position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        color: '#111',
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em'
                    }}>
                        {t.features.how_it_works_title} <span className="text-gradient">{t.features.how_it_works_highlight}</span>
                    </h2>
                    <p style={{
                        fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                        color: '#666',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        {t.features.how_it_works_desc}
                    </p>
                </div>

                {/* Service Options & Integration Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                    gap: '2rem',
                    marginBottom: '6rem',
                    maxWidth: '1200px',
                    margin: '0 auto 6rem'
                }}>
                    {/* Self-Service */}
                    <div style={{
                        background: '#fff',
                        padding: '2.5rem',
                        borderRadius: '24px',
                        border: '1px solid #f0f0f0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)'
                    }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '12px',
                            background: '#eff6ff',
                            color: '#3b82f6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem'
                        }}>
                            <Layout size={24} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#111' }}>{t.features.self_service_title}</h3>
                        <p style={{ color: '#666', lineHeight: 1.6 }}>{t.features.self_service_desc}</p>
                    </div>

                    {/* Full-Service */}
                    <div style={{
                        background: '#fff',
                        padding: '2.5rem',
                        borderRadius: '24px',
                        border: '1px solid #f0f0f0',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)'
                    }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '12px',
                            background: '#fef3c7',
                            color: '#d97706',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem'
                        }}>
                            <Users size={24} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#111' }}>{t.features.full_service_title}</h3>
                        <p style={{ color: '#666', lineHeight: 1.6 }}>{t.features.full_service_desc}</p>
                    </div>

                    {/* Integration */}
                    <div style={{
                        background: '#111',
                        padding: '2.5rem',
                        borderRadius: '24px',
                        color: 'white',
                    }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '12px',
                            background: 'rgba(255,255,255,0.1)',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem'
                        }}>
                            <Plug size={24} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>{t.features.seamless_integration_title}</h3>
                        <p style={{ color: '#aaa', lineHeight: 1.6 }}>{t.features.seamless_integration_desc}</p>
                    </div>
                </div>

                {/* Deployment Process Steps */}
                <div id="deployment-process" style={{ marginBottom: '8rem', maxWidth: '1000px', margin: '0 auto 8rem' }}>
                    <h3 style={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, marginBottom: '4rem', color: '#111', letterSpacing: '-0.01em' }}>{t.features.deployment_process_title}</h3>
                    <div className="deployment-grid">
                        {[
                            { step: "01", title: t.features.step_01_title, desc: t.features.step_01_desc, icon: <Bot size={24} /> },
                            { step: "02", title: t.features.step_02_title, desc: t.features.step_02_desc, icon: <Settings2 size={24} /> },
                            { step: "03", title: t.features.step_03_title, desc: t.features.step_03_desc, icon: <Rocket size={24} /> }
                        ].map((item, i) => (
                            <div key={i} style={{ textAlign: 'center', padding: '0 1rem', position: 'relative' }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: i === 1 ? '#34d399' : '#fff',
                                    border: i === 1 ? 'none' : '2px solid #e5e7eb',
                                    color: i === 1 ? 'white' : '#666',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1.5rem',
                                    fontSize: '1.2rem',
                                    fontWeight: 700,
                                    position: 'relative',
                                    zIndex: 2
                                }}>
                                    {item.step}
                                </div>
                                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: '#111' }}>{item.title}</h4>
                                <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.5 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call Recording & Analytics */}
                <div className="analytics-wrapper">
                    <div className="analytics-grid">
                        <div className="analytics-info">
                            <span style={{
                                display: 'inline-block',
                                padding: '0.4rem 1rem',
                                borderRadius: '99px',
                                background: '#fee2e2',
                                color: '#ef4444',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                marginBottom: '1.5rem',
                                letterSpacing: '0.02em'
                            }}>
                                {t.features.analytics_badge}
                            </span>
                            <h3 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 700, marginBottom: '1.5rem', color: '#0f172a', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                                {t.features.analytics_title}
                            </h3>
                            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                                {t.features.analytics_desc}
                            </p>
                            <div className="analytics-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {[t.features.analytics_tag1, t.features.analytics_tag2, t.features.analytics_tag3, t.features.analytics_tag4].map((tag) => (
                                    <span key={tag} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.5rem 1rem',
                                        background: 'white',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '8px',
                                        color: '#64748b',
                                        fontSize: '0.9rem',
                                        fontWeight: 500
                                    }}>
                                        <CheckCircle size={14} color="#34d399" /> {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {/* Visual Placeholder for Analytics Dashboard */}
                        <div style={{
                            background: 'white',
                            borderRadius: '24px',
                            boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.15)',
                            padding: '1.5rem',
                            border: '1px solid #e2e8f0',
                            minHeight: '380px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Header: Live Status */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <div style={{ width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%', animation: 'pulse 1.5s infinite' }} />
                                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Live Call Intelligence</span>
                                </div>
                                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>ID: #8829-X</span>
                            </div>

                            {/* Voice Waveform Animation */}
                            <div style={{
                                height: '60px',
                                background: '#f8fafc',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '3px',
                                padding: '0 1rem',
                                border: '1px solid #f1f5f9'
                            }}>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((i) => (
                                    <div key={i} style={{
                                        width: '3px',
                                        height: `${Math.random() * 30 + 10}px`,
                                        background: i > 12 ? '#cbd5e1' : '#3b82f6',
                                        borderRadius: '10px',
                                        animation: `wave 1s ease-in-out infinite ${i * 0.05}s`
                                    }} />
                                ))}
                            </div>

                            {/* Scrolling Transcript */}
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                                <div style={{ padding: '0.75rem', background: '#f1f5f9', borderRadius: '12px 12px 12px 0', alignSelf: 'flex-start', maxWidth: '85%', color: '#475569' }}>
                                    "I'm looking to reschedule my service appointment for Tuesday."
                                </div>
                                <div style={{ padding: '0.75rem', background: '#3b82f6', borderRadius: '12px 12px 0 12px', alignSelf: 'flex-end', maxWidth: '85%', color: 'white' }}>
                                    "I can certainly help with that. Looking at Tuesday, I have 10:00 AM or 2:30 PM available."
                                </div>
                                <div style={{ padding: '0.75rem', background: '#f1f5f9', borderRadius: '12px 12px 12px 0', alignSelf: 'flex-start', maxWidth: '85%', color: '#475569', opacity: 0.6 }}>
                                    "Let's go with 2:30 PM please..."
                                </div>
                            </div>

                            {/* Insight Bar */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                                <div style={{ padding: '0.3rem 0.6rem', background: '#dcfce7', color: '#166534', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <div style={{ width: '4px', height: '4px', background: '#166534', borderRadius: '50%' }} /> SENTIMENT: POSITIVE
                                </div>
                                <div style={{ padding: '0.3rem 0.6rem', background: '#fef9c3', color: '#854d0e', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 700 }}>
                                    INTENT: RESCHEDULE
                                </div>
                                <div style={{ padding: '0.3rem 0.6rem', background: '#f1f5f9', color: '#475569', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 700 }}>
                                    CRM SYNC: SUCCESS
                                </div>
                            </div>

                            <style jsx>{`
                                @keyframes wave {
                                    0%, 100% { height: 10px; }
                                    50% { height: 35px; }
                                }
                                @keyframes pulse {
                                    0% { opacity: 1; transform: scale(1); }
                                    50% { opacity: 0.5; transform: scale(1.2); }
                                    100% { opacity: 1; transform: scale(1); }
                                }
                            `}</style>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                    <span style={{
                        background: '#34D399',
                        color: 'white',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        padding: '0.3rem 0.8rem',
                        borderRadius: '99px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        {t.features.realistic_badge}
                    </span>
                    <p style={{ fontSize: '0.95rem', color: '#555' }}>
                        {t.features.turing_test_text} <span
                            onClick={() => document.getElementById('samples')?.scrollIntoView({ behavior: 'smooth' })}
                            style={{ textDecoration: 'underline', color: '#111', fontWeight: 'bold', cursor: 'pointer' }}
                        >
                            {t.features.listen_samples}
                        </span>
                    </p>
                </div>
            </div>


        </section >
    );
}
