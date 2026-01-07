import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Information & Resources",
    description: "Learn more about CONEKT's mission to break language barriers and automate communication workflows with professional AI voice agents.",
};

export default function InformationPage() {
    return (
        <main>
            <Navbar />
            <section style={{
                position: 'relative',
                paddingTop: 'calc(var(--header-height) + 4rem)',
                paddingBottom: '8rem',
                minHeight: '100vh',
                background: '#ffffff'
            }}>
                {/* Background Grid Lines */}
                <div className="grid-lines" style={{ zIndex: 0, opacity: 0.5 }}>
                    <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                    <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                    <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                    <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: '800px', margin: '0 0 4rem 0' }}>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 800,
                            marginBottom: '1.5rem',
                            color: 'var(--foreground)',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.1
                        }}>
                            Information
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            color: '#666',
                            lineHeight: 1.6,
                            marginBottom: '2rem'
                        }}>
                            Everything you need to know about our platform and services.
                        </p>
                        <div style={{ width: '60px', height: '4px', background: 'var(--accent-purple)', borderRadius: '2px' }}></div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {/* Content Block 1 */}
                        <div style={{
                            background: '#f9fafb',
                            padding: '2.5rem',
                            borderRadius: '24px',
                            border: '1px solid #e5e7eb'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>About Us</h3>
                            <p style={{ color: '#555', lineHeight: 1.6 }}>
                                We are dedicated to providing the best AI call management solutions. Our technology connects you with the world in any language.
                            </p>
                        </div>

                        {/* Content Block 2 */}
                        <div style={{
                            background: '#f9fafb',
                            padding: '2.5rem',
                            borderRadius: '24px',
                            border: '1px solid #e5e7eb'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Our Mission</h3>
                            <p style={{ color: '#555', lineHeight: 1.6 }}>
                                To break down language barriers and automate communication workflows with intelligence and precision.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
