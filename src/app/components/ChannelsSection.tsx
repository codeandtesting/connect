'use client';

import { PhoneCall, Server, Globe, MessageSquareText, Send, ArrowRight, Webhook } from 'lucide-react';

export default function ChannelsSection() {
    const channels = [
        {
            icon: <PhoneCall size={32} />,
            title: "Batch Calls",
            desc: "Run massive outbound campaigns with thousands of simultaneous calls. Perfect for appointment reminders, payment notifications, and marketing campaigns.",
            color: "#3b82f6", // Blue
            bg: "#eff6ff"
        },
        {
            icon: <Server size={32} />, // SIP often relates to servers/infrastructure
            title: "SIP Calls",
            desc: "Standard telephony integration with your existing phone systems. Support for all major VoIP providers and PBX systems.",
            color: "#8b5cf6", // Purple
            bg: "#f3e8ff"
        },
        {
            icon: <Globe size={32} />,
            title: "Web Calls",
            desc: "Browser-based calling directly from your website. No phone number needed - customers click and talk instantly.",
            color: "#10b981", // Emerald
            bg: "#ecfdf5"
        },
        {
            icon: <MessageSquareText size={32} />,
            title: "SMS",
            desc: "Text message conversations with full context awareness. Confirmations, reminders, and two-way communication via SMS.",
            color: "#f59e0b", // Amber
            bg: "#fffbeb"
        },
        {
            icon: <Send size={32} />,
            title: "Messengers",
            desc: "Integrate with WhatsApp, Telegram, Facebook Messenger, and more. Meet customers on their preferred platforms.",
            color: "#ec4899", // Pink
            bg: "#fdf2f8"
        },
        {
            icon: <Webhook size={32} />,
            title: "Custom API",
            desc: "Connect with almost any custom API. Seamlessly integrate AI agents into your unique workflows and internal tools.",
            color: "#ef4444", // Red
            bg: "#fef2f2"
        }
    ];

    return (
        <section style={{
            padding: '8rem 0',
            background: '#ffffff',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Grid Lines to match Features Section */}
            <div className="grid-lines" style={{ zIndex: 0, opacity: 0.5 }}>
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
            </div>

            {/* Background Decor */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.05), transparent)'
            }} />

            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{
                        fontSize: '3.5rem',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        color: '#111',
                        marginBottom: '1.5rem'
                    }}>
                        Multiple Communication <span className="text-gradient">Channels</span>
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#666',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Connect with your customers however they prefer
                    </p>
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem',
                    marginBottom: '4rem'
                }}>
                    {channels.map((active, i) => (
                        <div key={i} style={{
                            padding: '2.5rem',
                            borderRadius: '24px',
                            background: 'white',
                            border: '1px solid #f0f0f0',
                            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                            transition: 'transform 0.2s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '16px',
                                background: active.bg,
                                color: active.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {active.icon}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.8rem', color: '#111' }}>{active.title}</h3>
                                <p style={{ color: '#666', lineHeight: 1.6, fontSize: '1rem' }}>{active.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Seamless Integrations Section */}
                <div id="integrations" className="scroll-mt-24" style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <h3 style={{
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        marginBottom: '1rem',
                        color: '#111'
                    }}>
                        Seamless Integrations
                    </h3>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#666',
                        maxWidth: '600px',
                        margin: '0 auto 4rem',
                        lineHeight: 1.6
                    }}>
                        Connect with your existing tools and systems - no disruption to your workflow
                    </p>

                    {/* Infinite Marquee Container */}
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        overflow: 'hidden',
                        padding: '2rem 0',
                        background: '#fcfcfc',
                        borderTop: '1px solid #f0f0f0',
                        borderBottom: '1px solid #f0f0f0'
                    }}>
                        {/* Fade Gradients */}
                        <div style={{
                            position: 'absolute',
                            left: 0, top: 0, bottom: 0,
                            width: '10%',
                            background: 'linear-gradient(to right, #ffffff, transparent)',
                            zIndex: 2,
                            pointerEvents: 'none'
                        }} />
                        <div style={{
                            position: 'absolute',
                            right: 0, top: 0, bottom: 0,
                            width: '10%',
                            background: 'linear-gradient(to left, #ffffff, transparent)',
                            zIndex: 2,
                            pointerEvents: 'none'
                        }} />

                        {/* Marquee Track */}
                        <div style={{
                            display: 'flex',
                            width: 'max-content',
                            animation: 'marquee 40s linear infinite',
                            gap: '4rem',
                            alignItems: 'center'
                        }}>
                            {/* Double the logos to ensure seamless loop */}
                            {[
                                "1200px-SendGrid_2016_Logo.png",
                                "CDK_Global_logo_2021.svg.png",
                                "Google_Calendar_icon_(2020).svg.png",
                                "Microsoft_Outlook_logo_(2024–2025).svg.png",
                                "PayPal.svg.png",
                                "Resy_logo.svg.png",
                                "Shopify_logo_2018.svg.png",
                                "Stripe_Logo,_revised_2016.svg.png",
                                "Twilio-logo-red.svg.png",
                                "WooCommerce2025_logo.svg.png",
                                "hubspot.png",
                                "1200px-SendGrid_2016_Logo.png",
                                "CDK_Global_logo_2021.svg.png",
                                "Google_Calendar_icon_(2020).svg.png",
                                "Microsoft_Outlook_logo_(2024–2025).svg.png",
                                "PayPal.svg.png",
                                "Resy_logo.svg.png",
                                "Shopify_logo_2018.svg.png",
                                "Stripe_Logo,_revised_2016.svg.png",
                                "Twilio-logo-red.svg.png",
                                "WooCommerce2025_logo.svg.png",
                                "hubspot.png"
                            ].map((logo, i) => (
                                <div key={i} style={{
                                    flexShrink: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '60px',
                                    opacity: 0.6,
                                    filter: 'grayscale(100%)',
                                    transition: 'all 0.3s ease'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.opacity = '1';
                                        e.currentTarget.style.filter = 'grayscale(0%)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.opacity = '0.6';
                                        e.currentTarget.style.filter = 'grayscale(100%)';
                                    }}
                                >
                                    <img
                                        src={`/logos/${logo}`}
                                        alt="Integration Partner"
                                        style={{
                                            maxHeight: '40px',
                                            maxWidth: '120px',
                                            objectFit: 'contain'
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
