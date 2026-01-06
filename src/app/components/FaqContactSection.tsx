"use client";

import { useState } from 'react';
import { Phone, Mail, Calendar, ChevronDown, ChevronUp, Briefcase, LifeBuoy, Puzzle } from 'lucide-react';

export default function FaqContactSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            q: "How does pricing work?",
            a: "We offer flexible pricing based on call volume and features needed. Plans start at $299/month for up to 1,000 minutes. Enterprise plans include custom integrations, dedicated support, and unlimited scalability. Contact us for a personalized quote."
        },
        {
            q: "What languages are supported?",
            a: "We support 50+ languages including English, Spanish, German, French, Russian, Chinese, Japanese, Arabic, and many more. Each language includes regional accent variations and cultural adaptations for natural conversations."
        },
        {
            q: "How long does setup take?",
            a: "Basic setup takes 1-2 days. You can configure your first AI agent and start testing within hours. Full deployment with custom integrations typically takes 1-2 weeks. Our team handles the entire process if you choose full-service setup."
        },
        {
            q: "Is it HIPAA/GDPR compliant?",
            a: "Yes! We're fully compliant with HIPAA, GDPR, PCI-DSS, and SOC 2 Type II. All calls are encrypted end-to-end, and we maintain strict data handling protocols. We can sign BAAs for healthcare clients."
        },
        {
            q: "Can I customize the agent's voice and personality?",
            a: "Absolutely! You can customize voice tone, speaking pace, personality traits, and conversation style. Choose from 50+ voice options or create a custom voice that matches your brand. The agent can be professional, friendly, casual, or any style you prefer."
        },
        {
            q: "What happens if the agent can't answer a question?",
            a: "The AI agent seamlessly transfers complex queries to human staff with full conversation context. You set escalation rules and priorities. The agent can also take messages, schedule callbacks, or provide alternative contact methods. Transfer success rate is 99.8%."
        },
        {
            q: "How do I integrate with my existing systems?",
            a: "We offer pre-built integrations with 100+ popular systems (CRM, ERP, calendars, etc.). For custom systems, we provide REST APIs and webhooks. Our technical team can build custom integrations or you can use our API documentation to build them yourself."
        },
        {
            q: "Do you offer support and training?",
            a: "Yes! All plans include email support. Premium and Enterprise plans get dedicated account managers, priority phone support, and custom training sessions for your team. We also provide comprehensive documentation, video tutorials, and a knowledge base."
        }
    ];

    return (
        <section id="faq" style={{
            padding: '8rem 0',
            background: '#f9fafb'
        }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{
                        fontSize: '3rem',
                        fontWeight: 800,
                        color: '#111',
                        marginBottom: '1rem',
                        lineHeight: 1.1
                    }}>
                        Questions & <span className="text-gradient">Contact</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: '#666' }}>Everything you need to know to get started</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '4rem',
                    alignItems: 'start'
                }}>

                    {/* LEFT: Contact Information */}
                    <div style={{
                        position: 'sticky',
                        top: '100px'
                    }}>
                        <div style={{
                            background: '#111',
                            color: 'white',
                            padding: '3rem',
                            borderRadius: '24px',
                            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)'
                        }}>
                            <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>Get in touch</h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                                {/* Business Inquiries */}
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{
                                        width: '40px', height: '40px',
                                        background: 'rgba(255,255,255,0.1)',
                                        borderRadius: '10px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <Briefcase size={20} color="#60a5fa" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#60a5fa' }}>Business Inquiries</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', color: '#ccc' }}>
                                            <a href="tel:+15550001111" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Phone size={14} /> +1 (555) 000-1111
                                            </a>
                                            <a href="mailto:sales@conekt.ai" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Mail size={14} /> sales@conekt.ai
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Customer Support */}
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{
                                        width: '40px', height: '40px',
                                        background: 'rgba(255,255,255,0.1)',
                                        borderRadius: '10px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <LifeBuoy size={20} color="#34d399" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#34d399' }}>Customer Support</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', color: '#ccc' }}>
                                            <a href="tel:+15550002222" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Phone size={14} /> +1 (555) 000-2222
                                            </a>
                                            <a href="mailto:support@conekt.ai" style={{ color: '#ccc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <Mail size={14} /> support@conekt.ai
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Integrations (Example third category, sharing contacts or new ones) */}
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{
                                        width: '40px', height: '40px',
                                        background: 'rgba(255,255,255,0.1)',
                                        borderRadius: '10px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <Puzzle size={20} color="#a78bfa" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: '#a78bfa' }}>Integrations</h4>
                                        <p style={{ fontSize: '0.9rem', color: '#ccc', margin: 0 }}>
                                            Need a custom integration? <br />
                                            <a href="mailto:dev@conekt.ai" style={{ color: 'white', textDecoration: 'underline' }}>dev@conekt.ai</a>
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Divider */}
                            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '2.5rem 0' }} />

                            {/* Book a Demo */}
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ marginBottom: '1rem', color: '#ccc' }}>Ready to see it in action?</p>
                                <button style={{
                                    width: '100%',
                                    background: 'white',
                                    color: 'black',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    border: 'none',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.8rem',
                                    transition: 'transform 0.2s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                >
                                    <Calendar size={20} /> Book a Live Demo
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT: FAQ List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {faqs.map((item, i) => (
                            <div key={i} style={{
                                background: 'white',
                                borderRadius: '16px',
                                border: '1px solid #e5e7eb',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease'
                            }}>
                                <button
                                    onClick={() => toggleFaq(i)}
                                    style={{
                                        width: '100%',
                                        padding: '1.5rem',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        background: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left'
                                    }}
                                >
                                    <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111' }}>{item.q}</span>
                                    <span style={{
                                        width: '24px', height: '24px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        background: openIndex === i ? '#111' : '#f3f4f6',
                                        color: openIndex === i ? 'white' : '#666',
                                        borderRadius: '50%',
                                        transition: 'all 0.2s'
                                    }}>
                                        {openIndex === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                    </span>
                                </button>

                                <div style={{
                                    height: openIndex === i ? 'auto' : 0,
                                    overflow: 'hidden',
                                    transition: 'height 0.3s ease'
                                }}>
                                    <div style={{ padding: '0 1.5rem 1.5rem', color: '#666', lineHeight: 1.6, fontSize: '1rem' }}>
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
