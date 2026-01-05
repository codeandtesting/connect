import { CheckCircle } from 'lucide-react';

export default function PricingSection() {
    const products = [
        { name: "Silver", color: "#e5e5e5" },
        { name: "Grey", color: "#4b4b4b" },
        { name: "Pink", color: "#ff9999" },
        { name: "Blue", color: "#6699cc" },
    ];

    return (
        <section style={{
            background: '#ffffff',
            padding: '8rem 0 4rem',
            position: 'relative'
        }}>
            <div className="container">

                {/* Headline */}
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <h2 style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.1, color: '#111' }}>
                        Choose the perfect <br /> product for you
                    </h2>
                </div>

                {/* Product Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '2rem',
                    marginBottom: '5rem'
                }}>
                    {products.map((p, i) => (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                            {/* Product Image Placeholder */}
                            <div style={{
                                width: '100%',
                                aspectRatio: '1',
                                background: '#f9f9f9',
                                marginBottom: '1.5rem',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#ccc'
                            }}>
                                [Headphone]
                            </div>

                            {/* Color Swatch */}
                            <div style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                background: p.name === 'Pink' ? 'linear-gradient(135deg, #ffafbd, #ffc3a0)' : p.color,
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                marginBottom: '1rem'
                            }} />

                            <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{p.name}</span>
                        </div>
                    ))}
                </div>

                {/* Big CTA Bar */}
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto 6rem',
                    display: 'flex',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    borderRadius: '4px',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        flex: 1,
                        background: '#222',
                        color: 'white',
                        padding: '1.5rem',
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 700
                    }}>
                        Just $999
                    </div>
                    <button style={{
                        flex: 1,
                        background: 'linear-gradient(90deg, #FF006E 0%, #7928CA 100%)',
                        color: 'white',
                        padding: '1.5rem',
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        border: 'none',
                        cursor: 'pointer'
                    }}>
                        Purchase now
                    </button>
                </div>

                {/* Trust Indicators */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '2rem', // Reduced margin since footer is gone
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    color: '#888',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem'
                }}>
                    <span>SECURE</span>
                    <span>•</span>
                    <span>FREE</span>
                    <span>•</span>
                    <span>CONTACTLESS DELIVERY</span>
                </div>

            </div>
        </section>
    );
}
