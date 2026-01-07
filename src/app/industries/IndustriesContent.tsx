"use client";

import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { industriesData, Industry } from './data';
import { Search, ChevronRight, PhoneIncoming, PhoneOutgoing, Globe, Zap } from 'lucide-react';

export default function IndustriesContent() {
    const [selectedIndustry, setSelectedIndustry] = useState<Industry>(industriesData[0]);
    const [searchQuery, setSearchQuery] = useState('');

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
            <section style={{
                background: '#ffffff',
                padding: 'calc(var(--header-height) + 3rem) 2rem 4rem',
                borderBottom: '1px solid #e2e8f0',
                position: 'relative',
                overflow: 'hidden'
            }}>
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
                            <Globe size={14} /> Comprehensive Coverage
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 800,
                            color: '#0f172a',
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                            marginBottom: '1.5rem'
                        }}>
                            Industry <span className="text-gradient">Capabilities</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#64748b', lineHeight: 1.6, maxWidth: '650px' }}>
                            Explore our database of 200+ pre-trained AI operations. Select your industry to see exactly how our agents can automate your workflows.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="container" style={{
                maxWidth: '1400px',
                flex: 1,
                padding: '3rem 2rem',
                display: 'grid',
                gridTemplateColumns: 'minmax(250px, 300px) 1fr',
                gap: '3rem',
                alignItems: 'start'
            }}>

                {/* Sidebar Navigation */}
                <aside style={{ position: 'sticky', top: 'calc(var(--header-height) + 2rem)' }}>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', color: '#94a3b8', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                        Select Industry
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {industriesData.map((ind) => (
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
                                {ind.name}
                                {selectedIndustry.name === ind.name && <ChevronRight size={18} />}
                            </button>
                        ))}
                    </div>

                    {/* CTA Box */}
                    <div style={{
                        marginTop: '3rem',
                        padding: '1.5rem',
                        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                        borderRadius: '20px',
                        border: '1px solid #bae6fd'
                    }}>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0369a1', marginBottom: '0.5rem' }}>Need something custom?</h4>
                        <p style={{ fontSize: '0.9rem', color: '#0c4a6e', lineHeight: 1.5, marginBottom: '1rem' }}>
                            We can train agents for unique workflows in just 48 hours.
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
                            Talk to Sales
                        </button>
                    </div>
                </aside>

                {/* Content Panel */}
                <div style={{ minWidth: 0 }}>
                    {/* Toolbar */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '3rem',
                        flexWrap: 'wrap',
                        gap: '1rem'
                    }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>{selectedIndustry.name}</h2>
                            <p style={{ color: '#64748b' }}>
                                Found {selectedIndustry.subSectors.reduce((acc, sub) => acc + sub.operations.length, 0)} specialized operations
                            </p>
                        </div>

                        {/* Search */}
                        <div style={{ position: 'relative', width: '100%', maxWidth: '350px' }}>
                            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                            <input
                                type="text"
                                placeholder="Search operations..."
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

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                                    gap: '1.5rem'
                                }}>
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
                                                            <PhoneIncoming size={12} /> Inbound
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
                                                            <PhoneOutgoing size={12} /> Outbound
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
                                                    <Zap size={12} /> Technical Integrations
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
                                                            +{op.integrations.split(',').length - 3} more
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
                                <p>No operations found matching "{searchQuery}" in {selectedIndustry.name}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
