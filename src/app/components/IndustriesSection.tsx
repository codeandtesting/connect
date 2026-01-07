'use client';

import { useState } from 'react';
import { Plus, Minus, Stethoscope, Car, Building2, ShoppingBag, Home, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';

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

const industriesData: Industry[] = [
    {
        id: 'healthcare',
        category: 'healthcare',
        title: 'Healthcare & Medical',
        icon: <Stethoscope size={24} />,
        operations: [
            {
                title: 'Appointment Scheduling',
                purpose: 'Book, reschedule, and cancel patient appointments',
                integrations: 'EHR/EMR (Epic, Cerner, Meditech), Calendar systems, SMS notifications'
            },
            {
                title: 'Prescription Refills',
                purpose: 'Process medication refill requests',
                integrations: 'Pharmacy management systems, E-prescribing platforms'
            },
            {
                title: 'Insurance Verification',
                purpose: 'Verify patient insurance coverage and eligibility',
                integrations: 'Insurance clearinghouses (Availity, Change Healthcare), Payer APIs'
            }
        ]
    },
    {
        id: 'automotive',
        category: 'automotive',
        title: 'Automotive Dealerships',
        icon: <Car size={24} />,
        operations: [
            {
                title: 'Service Appointment Scheduling',
                purpose: 'Schedule maintenance, repairs, and service appointments',
                integrations: 'DMS (CDK Global, Reynolds & Reynolds), Service scheduling, Calendar'
            },
            {
                title: 'Parts Availability Inquiry',
                purpose: 'Check parts availability and pricing',
                integrations: 'DMS parts module, Parts catalogs, Distributor APIs'
            },
            {
                title: 'Maintenance Reminders',
                purpose: 'Proactive reminders based on mileage and service history',
                integrations: 'DMS service history, Customer database, SMS/Voice platforms'
            }
        ]
    },
    {
        id: 'banking',
        category: 'business',
        title: 'Banking & Finance',
        icon: <Building2 size={24} />,
        operations: [
            {
                title: 'Balance & Transaction Inquiries',
                purpose: 'Provide account balance and transaction history',
                integrations: 'Core banking systems (Temenos, FIS, Fiserv), Mobile banking APIs'
            },
            {
                title: 'Card Services',
                purpose: 'Card activation, PIN reset, card blocking',
                integrations: 'Card management systems, Fraud detection systems'
            },
            {
                title: 'Fraud Alerts',
                purpose: 'Verify suspicious transactions and fraud alerts',
                integrations: 'Fraud detection systems, Real-time analytics platforms'
            }
        ]
    },
    {
        id: 'retail',
        category: 'retail',
        title: 'E-commerce & Retail',
        icon: <ShoppingBag size={24} />,
        operations: [
            {
                title: 'Order Tracking',
                purpose: 'Provide real-time order status and delivery updates',
                integrations: 'E-commerce platforms (Shopify, WooCommerce), Shipping APIs (FedEx, UPS, DHL)'
            },
            {
                title: 'Returns & Exchanges',
                purpose: 'Process product returns and exchanges',
                integrations: 'Return management systems, Payment processors'
            },
            {
                title: 'Product Information',
                purpose: 'Answer product questions and provide specifications',
                integrations: 'Product catalogs, Inventory management systems'
            }
        ]
    },
    {
        id: 'realestate',
        category: 'business',
        title: 'Real Estate',
        icon: <Home size={24} />,
        operations: [
            {
                title: 'Property Viewing Scheduling',
                purpose: 'Schedule property showings and open houses',
                integrations: 'MLS systems, Calendar systems, Showing scheduling tools (ShowingTime)'
            },
            {
                title: 'Lead Qualification',
                purpose: 'Qualify potential buyers and gather requirements',
                integrations: 'CRM (Follow Up Boss, kvCORE), Lead management systems'
            },
            {
                title: 'Property Information',
                purpose: 'Provide property details, pricing, and availability',
                integrations: 'MLS databases, Property management systems'
            }
        ]
    },
    {
        id: 'hospitality',
        category: 'hospitality',
        title: 'Restaurants & Food Service',
        icon: <UtensilsCrossed size={24} />,
        operations: [
            {
                title: 'Table Reservations',
                purpose: 'Book, modify, and confirm restaurant reservations',
                integrations: 'Reservation systems (OpenTable, Resy), POS integration'
            },
            {
                title: 'Takeout Orders',
                purpose: 'Take phone orders for pickup and delivery',
                integrations: 'POS systems (Toast, Square, Clover), Online ordering platforms'
            },
            {
                title: 'Wait Time Inquiries',
                purpose: 'Provide current wait times and waitlist management',
                integrations: 'Waitlist management (Nowait, Yelp), Host systems'
            }
        ]
    }
];

const filters = [
    { id: 'all', label: 'All Industries' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'business', label: 'Business Services' },
    { id: 'retail', label: 'Retail & E-commerce' },
    { id: 'automotive', label: 'Automotive' },
    { id: 'hospitality', label: 'Hospitality' }
];

export default function IndustriesSection() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [expandedIds, setExpandedIds] = useState<string[]>([]);

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

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                        fontWeight: 800,
                        marginBottom: '1rem',
                        color: '#111',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1
                    }}>
                        Industries We <span className="text-gradient">Serve</span>
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#666',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Comprehensive solutions for 25+ industries with specialized AI agents
                    </p>
                </div>

                {/* Filter Buttons */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.8rem',
                    justifyContent: 'center',
                    marginBottom: '4rem'
                }}>
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
                                boxShadow: activeFilter === filter.id ? '0 4px 12px rgba(0,0,0,0.2)' : 'none'
                            }}
                        >
                            {filter.label}
                        </button>
                    ))}
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
                                        padding: '1.5rem 2rem',
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
                                    <div style={{ padding: '0 2rem 2rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', borderTop: '1px solid #f0f0f0', marginTop: '0.5rem', paddingTop: '1.5rem' }}>
                                        {industry.operations.map((op, i) => (
                                            <div key={i}>
                                                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#111', marginBottom: '0.5rem' }}>
                                                    {op.title}
                                                </h4>
                                                <div style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6, marginBottom: '0.5rem' }}>
                                                    <strong style={{ color: '#444' }}>Purpose:</strong> {op.purpose}
                                                </div>
                                                <div style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>
                                                    <strong style={{ color: '#444' }}>Integrations:</strong> {op.integrations}
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
                        Don't see your industry? We can customize solutions for any business.
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
                            Find Your Industry
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
