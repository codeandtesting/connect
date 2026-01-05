import { PlayCircle } from 'lucide-react';

export default function Hero() {
    return (
        <section id="overview" style={{
            position: 'relative',
            height: 'calc(100vh - var(--header-height))',
            width: '100%',
            maxWidth: 'var(--container-width)',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '4rem' // Optical balance
        }}>

            {/* Background/Main Text */}
            <div style={{
                textAlign: 'center',
                zIndex: 1
            }}>
                <h1 className="text-gradient" style={{
                    fontSize: '18vw', // Massive responsive text
                    lineHeight: 0.8,
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    margin: 0,
                    userSelect: 'none',
                    pointerEvents: 'none'
                }}>
                    listening
                </h1>
            </div>

            {/* Floating Info Elements (Replacing Headphones Context) */}
            <div style={{
                position: 'absolute',
                bottom: '15%',
                left: '2rem',
                textAlign: 'left'
            }}>
                <span style={{ display: 'block', fontSize: '1rem', color: '#666', marginBottom: '0.25rem' }}>AI Capabilities</span>
                <strong style={{ fontSize: '1.5rem', fontWeight: 600 }}>Real-Time Call</strong>
            </div>

            <div style={{
                position: 'absolute',
                bottom: '15%',
                right: '2rem',
                textAlign: 'right'
            }}>
                <span style={{ display: 'block', fontSize: '1rem', color: '#666', marginBottom: '0.25rem' }}>Fully Automate</span>
                <strong style={{ fontSize: '1.5rem', fontWeight: 600 }}>Call Breakdowns</strong>
            </div>

            {/* Play Video CTA */}
            <div style={{
                position: 'absolute',
                bottom: '8%',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10
            }}>
                <button className="play-btn" style={{
                    background: 'white',
                    padding: '0.8rem 2rem',
                    borderRadius: 'var(--radius-pill)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    color: '#333',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    border: '1px solid rgba(0,0,0,0.05)'
                }}>
                    ACTIVATE
                    <span style={{
                        color: 'var(--accent-pink)',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <PlayCircle size={24} fill="currentColor" stroke="none" />
                    </span>
                </button>
            </div>

        </section >
    );
}
