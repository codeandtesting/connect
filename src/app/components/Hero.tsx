import { PlayCircle, ShoppingBag } from 'lucide-react';

export default function Hero() {
    return (
        <section id="overview" style={{
            position: 'relative',
            minHeight: 'calc(100vh - var(--header-height))',
            width: '100%',
            maxWidth: 'var(--container-width)',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '4rem 2rem',
            textAlign: 'center'
        }}>

            {/* Main Content */}
            <div style={{
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem',
                maxWidth: '1000px'
            }}>
                <h1 style={{
                    fontSize: 'clamp(2.4rem, 4.8vw, 4.4rem)',
                    lineHeight: 1.05,
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    margin: 0,
                    color: 'var(--foreground)'
                }}>
                    Your personal <span className="text-gradient">AI call manager</span>.<br />
                    World wide in any language
                </h1>

                <p style={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: '#555',
                    maxWidth: '700px',
                    margin: 0,
                    fontWeight: 500
                }}>
                    Transform your phone operations with intelligent AI agents that handle calls 24/7, in any language, with perfect accuracy and unlimited scalability.
                </p>

                {/* Buttons */}
                <div style={{
                    display: 'flex',
                    gap: '1.5rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: '1rem'
                }}>
                    <button className="order-btn" style={{
                        padding: '1rem 2.5rem',
                        fontSize: '1.1rem',
                        height: 'auto'
                    }}>
                        <ShoppingBag size={20} />
                        Book a Demo
                    </button>

                    <button className="play-btn" style={{
                        // Overriding some positioning styles from the class definition if needed, 
                        // or just relying on the flex container
                    }}>
                        Try Live Demo
                        <span style={{
                            color: 'var(--accent-pink)',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <PlayCircle size={24} fill="currentColor" stroke="none" />
                        </span>
                    </button>
                </div>
            </div>

            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '3rem',
                textAlign: 'left'
            }} className="hide-mobile">
                <span style={{ display: 'block', fontSize: '0.9rem', color: '#888', marginBottom: '0.25rem' }}>AI Capabilities</span>
                <strong style={{ fontSize: '1.2rem', fontWeight: 600 }}>Real-Time Call</strong>
            </div>

            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '3rem',
                textAlign: 'right'
            }} className="hide-mobile">
                <span style={{ display: 'block', fontSize: '0.9rem', color: '#888', marginBottom: '0.25rem' }}>Fully Automate</span>
                <strong style={{ fontSize: '1.2rem', fontWeight: 600 }}>Call Breakdowns</strong>
            </div>

        </section >
    );
}
