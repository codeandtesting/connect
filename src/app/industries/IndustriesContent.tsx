"use client";

import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { industriesData, Industry } from './data';
import { industriesDataRu } from './data_ru';
import { industriesDataLv } from './data_lv';
import { Search, ChevronRight, PhoneIncoming, PhoneOutgoing, Globe, Zap } from 'lucide-react';
import { useTranslation } from '@/i18n/context';

export default function IndustriesContent() {
    const { t, language } = useTranslation();
    const currentData = language === 'ru' ? industriesDataRu : language === 'lv' ? industriesDataLv : industriesData;

    // Use initial industry from localized data if possible
    const [selectedIndustry, setSelectedIndustry] = useState<Industry>(currentData[0]);

    // Update selected industry when language changes to match translated object
    useEffect(() => {
        const found = currentData.find(ind => ind.name === selectedIndustry.name) || currentData[0];
        setSelectedIndustry(found);
    }, [language]);

    const [searchQuery, setSearchQuery] = useState('');

    const getLocalizedIndustryName = (name: string) => {
        const key = name.toLowerCase().replace(/ & /g, '').replace(/ /g, '');
        // Mapping for data names to translation keys if they differ
        const mapping: Record<string, string> = {
            'healthcare': t.industries.healthcare.label,
            'bankingfinance': t.industries.banking.label,
            'ecommerceretail': t.industries.ecommerce.label,
            'realestate': t.industries.realestate.label,
            'automotive': t.industries.automotive.label,
            'restaurants': t.industries.restaurant.label,
            'logisticstransportation': t.footer.other, // Fallback
            'professionalservices': t.navbar.overview, // fallback
            // Add more mappings as needed or use a default
        };
        return mapping[key] || name;
    };

    const filteredSubSectors = selectedIndustry.subSectors.map(sub => ({
        ...sub,
        operations: sub.operations.filter(op =>
            op.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            op.purpose.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(sub => sub.operations.length > 0);

    return (
        <main style={{ background: '#f8fafc', minHeight: '100vh' }}>
            <Navbar />

            {/* Header / Hero */}
            <section className="industries-header">
                <div className="grid-lines" style={{ zIndex: 0, opacity: 0.4 }}>
                    <div className="grid-line" style={{ background: 'rgba(0,0,0,0.04)' }} />
                    <div className="grid-line" style={{ background: 'rgba(0,0,0,0.04)' }} />
                </div>

                <div className="container" style={{ maxWidth: '1400px', position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: '800px' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.4rem 1rem',
                            background: '#f0f9ff',
                            color: '#0284c7',
                            borderRadius: '99px',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            marginBottom: '1.5rem',
                            border: '1px solid #e0f2fe'
                        }}>
                            <Globe size={14} /> {t.industries_page.badge}
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 800,
                            color: '#0f172a',
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                            marginBottom: '1.5rem'
                        }}>
                            {t.industries_page.title_main} <span className="text-gradient">{t.industries_page.title_highlight}</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#64748b', lineHeight: 1.6, maxWidth: '650px' }}>
                            {t.industries_page.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="container industries-layout" style={{
                maxWidth: '1400px',
                flex: 1
            }}>

                {/* Sidebar Navigation */}
                <aside className="industries-sidebar">
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                        {t.industries_page.sidebar_title}
                    </h3>
                    <div className="industries-nav-list">
                        {currentData.map((ind) => (
                            <button
                                key={ind.name}
                                onClick={() => setSelectedIndustry(ind)}
                                style={{
                                    textAlign: 'left',
                                    padding: '1rem 1.25rem',
                                    borderRadius: '12px',
                                    background: selectedIndustry.name === ind.name ? '#111' : 'white',
                                    color: selectedIndustry.name === ind.name ? 'white' : '#64748b',
                                    border: selectedIndustry.name === ind.name ? 'none' : '1px solid transparent',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    boxShadow: selectedIndustry.name === ind.name ? '0 10px 25px -5px rgba(0,0,0,0.3)' : 'none'
                                }}
                                onMouseEnter={(e) => {
                                    if (selectedIndustry.name !== ind.name) {
                                        e.currentTarget.style.background = '#f1f5f9';
                                        e.currentTarget.style.color = '#0f172a';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (selectedIndustry.name !== ind.name) {
                                        e.currentTarget.style.background = 'white';
                                        e.currentTarget.style.color = '#64748b';
                                    }
                                }}
                            >
                                {getLocalizedIndustryName(ind.name)}
                                {selectedIndustry.name === ind.name && <ChevronRight size={18} />}
                            </button>
                        ))}
                    </div>

                    {/* CTA Box */}
                    <div className="industries-cta-box" style={{
                        marginTop: '3rem',
                        padding: '1.5rem',
                        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                        borderRadius: '20px',
                        border: '1px solid #bae6fd'
                    }}>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0369a1', marginBottom: '0.5rem' }}>{t.industries_page.custom_title}</h4>
                        <p style={{ fontSize: '0.9rem', color: '#0c4a6e', lineHeight: 1.5, marginBottom: '1rem' }}>
                            {t.industries_page.custom_desc}
                        </p>
                        <button style={{
                            background: 'white',
                            color: '#0284c7',
                            padding: '0.6rem 1rem',
                            borderRadius: '8px',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            border: '1px solid #bae6fd',
                            width: '100%',
                            cursor: 'pointer'
                        }}>
                            {t.industries_page.cta_button}
                        </button>
                    </div>
                </aside>

                {/* Content Panel */}
                <div style={{ minWidth: 0 }}>
                    {/* Toolbar */}
                    <div className="toolbar-container">
                        <div>
                            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>{getLocalizedIndustryName(selectedIndustry.name)}</h2>
                            <p style={{ color: '#64748b' }}>
                                {t.industries_page.found_ops.replace('{count}', selectedIndustry.subSectors.reduce((acc, sub) => acc + sub.operations.length, 0).toString())}
                            </p>
                        </div>

                        {/* Search */}
                        <div className="toolbar-search" style={{ position: 'relative', width: '100%', maxWidth: '350px' }}>
                            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                            <input
                                type="text"
                                placeholder={t.industries_page.search_placeholder}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.8rem 1rem 0.8rem 3rem',
                                    borderRadius: '12px',
                                    border: '1px solid #e2e8f0',
                                    background: 'white',
                                    fontSize: '0.95rem',
                                    outline: 'none',
                                    transition: 'border-color 0.2s',
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.02)'
                                }}
                            />
                        </div>
                    </div>

                    {/* Sub-sectors List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {filteredSubSectors.map((subSector) => (
                            <div key={subSector.name}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ height: '1px', flex: 1, background: '#e2e8f0' }} />
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#334155' }}>{subSector.name}</h3>
                                    <div style={{ height: '1px', flex: 1, background: '#e2e8f0' }} />
                                </div>

                                <div className="operations-grid">
                                    {subSector.operations.map((op, idx) => (
                                        <div key={idx} style={{
                                            background: 'white',
                                            padding: '2rem',
                                            borderRadius: '24px',
                                            border: '1px solid #f1f5f9',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            gap: '1.5rem',
                                            transition: 'transform 0.2s, box-shadow 0.2s',
                                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.01)'
                                        }}>
                                            <div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                                                    {op.type === 'Inbound' ? (
                                                        <span style={{
                                                            padding: '0.3rem 0.8rem',
                                                            borderRadius: '99px',
                                                            background: '#ecfdf5',
                                                            color: '#059669',
                                                            fontSize: '0.75rem',
                                                            fontWeight: 700,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0.3rem',
                                                            textTransform: 'uppercase'
                                                        }}>
                                                            <PhoneIncoming size={12} /> {t.industries_page.inbound}
                                                        </span>
                                                    ) : (
                                                        <span style={{
                                                            padding: '0.3rem 0.8rem',
                                                            borderRadius: '99px',
                                                            background: '#fef2f2',
                                                            color: '#dc2626',
                                                            fontSize: '0.75rem',
                                                            fontWeight: 700,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0.3rem',
                                                            textTransform: 'uppercase'
                                                        }}>
                                                            <PhoneOutgoing size={12} /> {t.industries_page.outbound}
                                                        </span>
                                                    )}
                                                </div>

                                                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                                                    {op.name.split('(')[0]}
                                                </h4>
                                                <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6 }}>
                                                    {op.purpose}
                                                </p>
                                            </div>

                                            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #f8fafc' }}>
                                                <h5 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                    <Zap size={12} /> {t.industries_page.tech_integrations}
                                                </h5>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                    {op.integrations.split(',').slice(0, 3).map((integ, i) => (
                                                        <span key={i} style={{
                                                            fontSize: '0.8rem',
                                                            color: '#475569',
                                                            background: '#f1f5f9',
                                                            padding: '0.3rem 0.6rem',
                                                            borderRadius: '6px',
                                                            border: '1px solid #e2e8f0'
                                                        }}>
                                                            {integ.trim()}
                                                        </span>
                                                    ))}
                                                    {op.integrations.split(',').length > 3 && (
                                                        <span style={{ fontSize: '0.8rem', color: '#94a3b8', padding: '0.3rem' }}>
                                                            {t.industries_page.more_labels.replace('{count}', (op.integrations.split(',').length - 3).toString())}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {filteredSubSectors.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '4rem', color: '#94a3b8' }}>
                                <Search size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                                <p>{t.industries_page.no_results.replace('{query}', searchQuery).replace('{industry}', getLocalizedIndustryName(selectedIndustry.name))}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
