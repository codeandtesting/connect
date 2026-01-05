import { Star, ArrowRight, Volume2, Headphones, CircuitBoard } from 'lucide-react';
import MultilingualSupport from './MultilingualSupport';

export default function ProductShowcase() {
    return (
        <section id="design" style={{
            position: 'relative',
            paddingTop: '4rem',
            paddingBottom: '8rem',
            overflow: 'hidden',
            background: '#ffffff' // Hides the global dot pattern
        }}>

            {/* Background Grid Lines */}
            <div className="grid-lines" style={{ zIndex: 0 }}>
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* Top Trusted Rating */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginBottom: '6rem'
                }}>
                    <div style={{
                        background: '#FDB022',
                        color: 'white',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '6px',
                        display: 'flex',
                        gap: '2px'
                    }}>
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" stroke="none" />)}
                    </div>
                    <span style={{ fontSize: '1rem', fontWeight: 500, color: '#444' }}>
                        Customers wish they could rate us <strong style={{ textDecoration: 'underline' }}>6 stars out of 5</strong>
                    </span>
                </div>

                {/* Main Content Grid */}
                <div className="product-showcase-grid">

                    {/* Left: Product Image Placeholder */}
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '1' }}>
                        <MultilingualSupport />

                        {/* Floating Badge (Superior Sound) */}
                        <div className="circle-badge" style={{
                            width: '140px',
                            height: '140px',
                            position: 'absolute',
                            top: '-20px',
                            left: '-20px',
                            border: '8px solid rgba(255,255,255,0.8)',
                            background: 'var(--gradient-text)', // Match title gradient
                            zIndex: 50 // Ensure it sits above flags
                        }}>
                            <CircuitBoard size={32} color="white" style={{ marginBottom: '0.5rem' }} />
                            <span style={{ fontSize: '0.8rem', fontWeight: 700, lineHeight: 1.2 }}>
                                AI<br />POWERED
                            </span>
                        </div>
                    </div>

                    {/* Right: Feature Text */}
                    <div style={{ paddingLeft: '0' }}>
                        <div style={{ marginBottom: '1.5rem', color: '#ccc' }}>
                            <Headphones size={48} strokeWidth={1} />
                        </div>
                        <h2 className="product-showcase-title">
                            Slash Overhead. <br />
                            Boost Service.
                        </h2>
                        <p className="product-showcase-text">
                            Why hire a massive call center? Cut operational overhead by up to 40% by automating routine reception tasks with intelligent, human-like voice AI.
                        </p>

                        <button style={{
                            background: '#222',
                            color: 'white',
                            padding: '1rem 2rem',
                            borderRadius: '6px',
                            fontSize: '1rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            transition: 'background 0.2s',
                            margin: '0 auto' // Center button on mobile if needed via flex parent, but text-align center handles text. 
                            // For button, we might need explicit centering if it's block level or flex child.
                            // Keeping it simple for now, relying on parent text-align center in mobile query.
                        }}>
                            Calculate Savings <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Bottom Features Grid (01, 02, 03) */}
                <div className="features-grid">
                    {[
                        { id: '01', title: 'Fraction of the Cost.', sub: 'Enterprise support on a startup budget.' },
                        { id: '02', title: 'No Training Required.', sub: 'Pre-trained agents ready to work immediately.' },
                        { id: '03', title: 'Performance Tracking.', sub: 'Real-time analytics on every conversation.' },
                    ].map((item) => (
                        <div key={item.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                            <div className="shadow-float" style={{
                                width: '60px',
                                height: '60px',
                                background: 'white',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                color: '#111',
                                flexShrink: 0
                            }}>
                                {item.id}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#111', marginBottom: '0.5rem', marginTop: '0' }}>
                                    {item.title}
                                </h3>
                                <p style={{ fontSize: '1rem', lineHeight: 1.5, color: '#666', margin: 0 }}>
                                    {item.sub}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
