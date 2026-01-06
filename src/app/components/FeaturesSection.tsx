'use client';

import { Mic, VolumeX, Zap, Heart, GitBranch, MessageSquare, Phone, Shield, CheckCircle, ArrowRight, Loader2, Users, Car, Home, Landmark, ShoppingCart, Utensils, Play, Layout, Plug, Bot, Settings2, Rocket, BarChart3, FileText, Calendar } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function FeaturesSection() {
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const [activeTab, setActiveTab] = useState<'healthcare' | 'automotive' | 'realestate' | 'banking' | 'ecommerce' | 'restaurant'>('healthcare');

    const industries = {
        healthcare: {
            icon: <Heart size={16} />,
            label: "Healthcare",
            demo: "Play Healthcare Demo Call",
            sample: "Patient scheduling appointment",
            title: "Healthcare Appointment Scheduling",
            desc: "AI agent handles appointment bookings, cancellations, rescheduling, and sends automatic reminders. Integrates with EHR systems like Epic, Cerner, and sends SMS confirmations. Reduces missed appointments by 38% and eliminates 4.4-minute wait times.",
            color: "#3b82f6",
            gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
            secondary: "#e0f2fe",
            visualIcon: <Heart size={32} color="white" />
        },
        automotive: {
            icon: <Car size={16} />,
            label: "Automotive",
            demo: "Play Automotive Demo Call",
            sample: "Service appointment booking",
            title: "Auto Service Scheduling",
            desc: "87% automation of service appointments, parts inquiries, and maintenance reminders. Integrates with DMS systems (CDK Global, Reynolds & Reynolds). Captures $720K+ annual revenue from missed calls.",
            color: "#ef4444",
            gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
            secondary: "#fee2e2",
            visualIcon: <Car size={32} color="white" />
        },
        realestate: {
            icon: <Home size={16} />,
            label: "Real Estate",
            demo: "Play Real Estate Demo Call",
            sample: "Property viewing request",
            title: "Real Estate Lead Management",
            desc: "Qualify leads 24/7, schedule property viewings, answer property questions. Integrates with MLS systems and CRM platforms. Solves the 60% unanswered calls problem and 3-day response times.",
            color: "#10b981",
            gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            secondary: "#d1fae5",
            visualIcon: <Home size={32} color="white" />
        },
        banking: {
            icon: <Landmark size={16} />,
            label: "Banking",
            demo: "Play Banking Demo Call",
            sample: "Balance inquiry",
            title: "Banking Customer Service",
            desc: "80% automation of balance inquiries, card services, and payment processing. GDPR and PCI-DSS compliant. Integrates with core banking systems. Saves $1.82M annually for large banks.",
            color: "#f59e0b",
            gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
            secondary: "#fef3c7",
            visualIcon: <Landmark size={32} color="white" />
        },
        ecommerce: {
            icon: <ShoppingCart size={16} />,
            label: "E-commerce",
            demo: "Play E-commerce Demo Call",
            sample: "Order tracking",
            title: "E-commerce Support",
            desc: "85% automation of order tracking, returns, and product inquiries. Handles 300%+ peak surge during Black Friday. Integrates with Shopify, WooCommerce, shipping APIs.",
            color: "#8b5cf6",
            gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
            secondary: "#ede9fe",
            visualIcon: <ShoppingCart size={32} color="white" />
        },
        restaurant: {
            icon: <Utensils size={16} />,
            label: "Restaurant",
            demo: "Play Restaurant Demo Call",
            sample: "Table reservation",
            title: "Restaurant Reservations",
            desc: "77% automation of reservations, takeout orders, and table management. Integrates with OpenTable, Resy, POS systems. Never miss a booking during rush hours.",
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
        <section ref={sectionRef} style={{ background: '#ffffff', paddingBottom: '0', position: 'relative', overflow: 'hidden' }}>

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

                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>

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
                            Use Cases Across <span className="text-gradient">Industries</span>
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: '#666',
                            maxWidth: '600px',
                            margin: '0 auto 3rem',
                            lineHeight: 1.6
                        }}>
                            See how Conekt AI agents work in different business scenarios
                        </p>

                        {/* Filter Pills (Interactive) */}
                        <div className="features-filter-container" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                            {(Object.keys(industries) as Array<keyof typeof industries>).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    style={{
                                        padding: '0.6rem 1.2rem',
                                        background: activeTab === key ? industries[key].secondary : 'transparent',
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
                                        boxShadow: activeTab === key ? `0 2px 5px ${industries[key].color}20` : 'none'
                                    }}
                                >
                                    {industries[key].icon} {industries[key].label}
                                </button>
                            ))}
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
                                padding: '4rem 2rem',
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

                                <div style={{ zIndex: 2, textAlign: 'center' }}>
                                    <button style={{
                                        background: industries[activeTab].gradient,
                                        color: 'white',
                                        padding: '1rem 2rem',
                                        borderRadius: '99px',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        border: 'none',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.8rem',
                                        boxShadow: `0 10px 20px -5px ${industries[activeTab].color}60`,
                                        transition: 'all 0.3s ease',
                                        marginBottom: '1.5rem'
                                    }}
                                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                                    >
                                        <Play size={20} fill="white" /> {industries[activeTab].demoUrl ? 'Play Demo Call' : industries[activeTab].demoTitle}
                                    </button>
                                    <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                                        {industries[activeTab].sample ? `Sample conversation: ${industries[activeTab].sample}` : 'Sample conversation available'}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Section: Content */}
                            <div style={{ padding: '3rem 3rem' }}>
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
                        <button style={{
                            background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                            color: 'white',
                            padding: '1rem 2.5rem',
                            borderRadius: '99px',
                            fontSize: '1rem',
                            fontWeight: 600,
                            border: 'none',
                            cursor: 'pointer',
                            boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.4)',
                            transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                        }}>
                            Explore More Industries
                        </button>
                    </div>

                </div>
            </div>



            {/* SECTION: How It Works */}
            <div className="container" style={{ padding: '8rem 2rem 6rem', position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <h2 style={{
                        fontSize: '3.5rem',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        color: '#111',
                        marginBottom: '1.5rem'
                    }}>
                        How It <span className="text-gradient">Works</span>
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#666',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        Simple setup, powerful results - deploy AI agents in minutes
                    </p>
                </div>

                {/* Service Options & Integration Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#111' }}>Self-Service Platform</h3>
                        <p style={{ color: '#666', lineHeight: 1.6 }}>Configure your AI agent through our intuitive web interface. Customize responses, set business rules, and deploy in minutes without any coding required.</p>
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
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#111' }}>Full-Service Setup</h3>
                        <p style={{ color: '#666', lineHeight: 1.6 }}>Our team handles everything - from configuration to deployment. We analyze your workflows and implement the perfect solution for your business.</p>
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
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Seamless Integration</h3>
                        <p style={{ color: '#aaa', lineHeight: 1.6 }}>Connect with your existing systems: CRM, ERP, calendars, and industry-specific platforms. Two-way data sync ensures everything stays updated.</p>
                    </div>
                </div>

                {/* Deployment Process Steps */}
                <div style={{ marginBottom: '8rem', maxWidth: '1000px', margin: '0 auto 8rem' }}>
                    <h3 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 700, marginBottom: '4rem', color: '#111' }}>Deployment Process</h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '2rem',
                        position: 'relative'
                    }}>
                        {[
                            { step: "01", title: "Create Agent", desc: "Define your agent's personality, knowledge base, and response patterns", icon: <Bot size={24} /> },
                            { step: "02", title: "Test & Refine", desc: "Run test calls, review transcripts, and optimize performance", icon: <Settings2 size={24} /> },
                            { step: "03", title: "Deploy Live", desc: "Go live with confidence - monitor calls and make adjustments anytime", icon: <Rocket size={24} /> }
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
                <div style={{
                    background: '#f8fafc',
                    borderRadius: '32px',
                    padding: '4rem',
                    marginBottom: '6rem',
                    border: '1px solid #e2e8f0',
                    maxWidth: '1200px',
                    margin: '0 auto 6rem'
                }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
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
                                • All calls are recorded
                            </span>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#0f172a', lineHeight: 1.2 }}>
                                Call Recording & Analytics
                            </h3>
                            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                                Every conversation is transcribed, analyzed, and stored. Export data in any format (XLS, CSV, JSON, PDF) or automatically sync with your CRM, calendar, ERP, and other business systems.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {['Real-time Analytics', 'Calendar Sync', 'CRM Integration', 'Custom Reports'].map((tag) => (
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
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                            padding: '2rem',
                            border: '1px solid #e2e8f0',
                            minHeight: '300px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem' }}>
                                <span style={{ fontWeight: 600, color: '#334155' }}>Call Volume</span>
                                <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Last 7 Days</span>
                            </div>
                            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '1rem 0' }}>
                                {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                                    <div key={i} style={{ width: '12%', height: `${h}%`, background: i === 5 ? '#3b82f6' : '#e2e8f0', borderRadius: '4px' }}></div>
                                ))}
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                <div style={{ flex: 1, background: '#f8fafc', padding: '1rem', borderRadius: '12px' }}>
                                    <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.2rem' }}>Conversion</div>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a' }}>24.8%</div>
                                </div>
                                <div style={{ flex: 1, background: '#f8fafc', padding: '1rem', borderRadius: '12px' }}>
                                    <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.2rem' }}>Avg Duration</div>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a' }}>4m 12s</div>
                                </div>
                            </div>
                        </div>
                    </div>
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
