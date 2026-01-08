'use client';

import { useState } from 'react';
import { Plus, Minus, Stethoscope, Car, Building2, ShoppingBag, Home, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/i18n/context';

type Industry = {
    id: string;
    category: string;
    title: string;
    icon: any;
    operations: {
        title: string;
        purpose: string;
        integrations: string;
    }[];
};

export default function IndustriesSection() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [expandedIds, setExpandedIds] = useState<string[]>([]);
    const { t } = useTranslation();

    const industriesData: Industry[] = [
        {
            id: 'healthcare',
            category: 'healthcare',
            title: t.industries.healthcare.label,
            icon: <Stethoscope size={24} />,
            operations: t.industries.healthcare.ops
        },
        {
            id: 'automotive',
            category: 'automotive',
            title: t.industries.automotive.label,
            icon: <Car size={24} />,
            operations: t.industries.automotive.ops
        },
        {
            id: 'banking',
            category: 'business',
            title: t.industries.banking.label,
            icon: <Building2 size={24} />,
            operations: t.industries.banking.ops
        },
        {
            id: 'retail',
            category: 'retail',
            title: t.industries.ecommerce.label,
            icon: <ShoppingBag size={24} />,
            operations: t.industries.ecommerce.ops
        },
        {
            id: 'realestate',
            category: 'business',
            title: t.industries.realestate.label,
            icon: <Home size={24} />,
            operations: t.industries.realestate.ops
        },
        {
            id: 'hospitality',
            category: 'hospitality',
            title: t.industries.restaurant.label,
            icon: <UtensilsCrossed size={24} />,
            operations: t.industries.restaurant.ops
        }
    ];

    const filters = [
        { id: 'all', label: t.industries_section.filter_all },
        { id: 'healthcare', label: t.industries_section.filter_healthcare },
        { id: 'business', label: t.industries_section.filter_business },
        { id: 'retail', label: t.industries_section.filter_retail },
        { id: 'automotive', label: t.industries_section.filter_automotive },
        { id: 'hospitality', label: t.industries_section.filter_hospitality }
    ];

    const toggleExpand = (id: string) => {
        setExpandedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const filteredIndustries = activeFilter === 'all'
        ? industriesData
        : industriesData.filter(ind => ind.category === activeFilter);

    return (
        <section id="industries" style={{ padding: '6rem 0', background: '#ffffff', position: 'relative' }}>
            {/* Background Grid Lines to match Features Section */}
            <div className="grid-lines" style={{ zIndex: 0, opacity: 0.5 }}>
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto', padding: '0 clamp(1rem, 5vw, 2rem)' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 8vw, 3.5rem)',
                        fontWeight: 800,
                        marginBottom: '1rem',
                        color: '#111',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1
                    }}>
                        {t.industries_section.title_main} <span className="text-gradient">{t.industries_section.title_highlight}</span>
                    </h2>
                    <p style={{
                        fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                        color: '#666',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        {t.industries_section.subtitle}
                    </p>
                </div>

                {/* Filter Buttons */}
                <div style={{ position: 'relative', margin: '0 -2rem' }}>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        overflowX: 'auto',
                        gap: '0.8rem',
                        justifyContent: 'flex-start',
                        padding: '0.5rem 2rem 1.5rem',
                        marginBottom: '2.5rem',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }} className="no-scrollbar">
                        {filters.map(filter => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                style={{
                                    padding: '0.6rem 1.4rem',
                                    borderRadius: '99px',
                                    background: activeFilter === filter.id ? '#111' : '#f3f4f6',
                                    color: activeFilter === filter.id ? 'white' : '#666',
                                    border: 'none',
                                    fontSize: '0.95rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    whiteSpace: 'nowrap',
                                    flexShrink: 0,
                                    boxShadow: activeFilter === filter.id ? '0 4px 12px rgba(0,0,0,0.2)' : 'none'
                                }}
                            >
                                {filter.label}
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

                {/* Industries List (Accordion) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {filteredIndustries.map(industry => {
                        const isExpanded = expandedIds.includes(industry.id);
                        return (
                            <div key={industry.id} style={{
                                background: 'white',
                                borderRadius: '24px',
                                border: '1px solid #e5e7eb',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                boxShadow: isExpanded ? '0 10px 30px -5px rgba(0,0,0,0.08)' : '0 2px 4px rgba(0,0,0,0.02)'
                            }}>
                                <div
                                    onClick={() => toggleExpand(industry.id)}
                                    style={{
                                        padding: 'clamp(1rem, 4vw, 1.5rem) clamp(1rem, 5vw, 2rem)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        cursor: 'pointer',
                                        background: isExpanded ? '#f9fafb' : 'white'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{
                                            color: '#333',
                                            background: '#f3f4f6',
                                            padding: '0.6rem',
                                            borderRadius: '12px'
                                        }}>
                                            {industry.icon}
                                        </div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111', margin: 0 }}>
                                            {industry.title}
                                        </h3>
                                    </div>
                                    <div style={{
                                        width: '32px', height: '32px', borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        background: isExpanded ? '#111' : '#f3f4f6',
                                        color: isExpanded ? 'white' : '#111',
                                        transition: 'all 0.2s ease'
                                    }}>
                                        {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                <div style={{
                                    height: isExpanded ? 'auto' : 0,
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div style={{ padding: '0 clamp(1rem, 5vw, 2rem) 2rem clamp(1rem, 5vw, 2rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem', borderTop: '1px solid #f0f0f0', marginTop: '0.5rem', paddingTop: '1.5rem' }}>
                                        {industry.operations.map((op, i) => (
                                            <div key={i}>
                                                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#111', marginBottom: '0.5rem' }}>
                                                    {op.title}
                                                </h4>
                                                <div style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                                                    <strong style={{ color: '#444' }}>{t.industries_section.purpose_label}</strong> {op.purpose}
                                                </div>
                                                <div style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>
                                                    <strong style={{ color: '#444' }}>{t.industries_section.integrations_label}</strong> {op.integrations}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer CTA */}
                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        {t.industries_section.footer_text}
                    </p>
                    <Link href="/industries">
                        <button style={{
                            background: '#111',
                            color: 'white',
                            padding: '1rem 2rem',
                            borderRadius: '99px',
                            fontSize: '1rem',
                            fontWeight: 600,
                            border: 'none',
                            cursor: 'pointer',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                            transition: 'transform 0.2s ease'
                        }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            {t.industries_section.cta_button}
                        </button>
                    </Link>
                </div>
            </div>
        </section >
    );
}
