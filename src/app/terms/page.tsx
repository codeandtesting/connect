import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | CONEKT AI",
    description: "Our comprehensive Terms of Service covering AI voice agent usage, business responsibilities, and service reliability standards.",
};

export default function TermsPage() {
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
                <div className="grid-lines" style={{ zIndex: 0, opacity: 0.5 }}>
                    <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                    <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                    <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                    <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 800,
                        marginBottom: '1.5rem',
                        color: '#0f172a',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1
                    }}>
                        Terms of <span className="text-gradient">Service</span>
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '3rem' }}>
                        Last Revised: January 7, 2026 | Enterprise Edition
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: '#334155', lineHeight: 1.8 }}>

                        <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0', borderLeft: '4px solid #111' }}>
                            <p style={{ fontWeight: 600, color: '#0f172a', margin: 0 }}>
                                These terms constitute a legally binding agreement between you (the "Business User") and CONEKT regarding the deployment and operation of AI Voice Agents.
                            </p>
                        </div>

                        <section>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', color: '#0f172a' }}>1. Deployment Responsibilities</h2>
                            <p>
                                As a Business User of CONEKT, you acknowledge and agree to the following when deploying AI Voice Agents:
                            </p>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <li><strong>Public Disclosure:</strong> In many jurisdictions, you are legally required to notify callers that they are speaking with an Artificial Intelligence agent. CONEKT provides standard disclosure scripts, but final compliance is your responsibility.</li>
                                <li><strong>Outbound Compliance:</strong> If using agents for outbound dialing, you MUST comply with TCPA (US), TSR, and regional "Do Not Call" registries. CONEKT prohibits the use of its platform for unsolicited "robocalling."</li>
                                <li><strong>Agent Identity:</strong> You may not configure agents to impersonate specific individuals or licensed professionals (e.g., doctors, legal counsel) without the appropriate legal framework.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', color: '#0f172a' }}>2. AI Capabilities & Limitations</h2>
                            <p>
                                CONEKT delivers state-of-the-art voice technology, however:
                            </p>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <li><strong>Accuracy:</strong> While our models target ~99.9% accuracy, AI "hallucinations" or misunderstandings can occur. CONEKT is not liable for business decisions made based on AI-interpreted data.</li>
                                <li><strong>Latency:</strong> Processing speed varies by network conditions and language complexity. We target "human-speed" interaction but do not guarantee sub-millisecond responses.</li>
                                <li><strong>Emergency Services:</strong> <strong>CONEKT IS NOT A REPLACEMENT FOR 911 OR EMERGENCY SERVICES.</strong> Do not use our platform for life-critical dispatch or emergency reporting.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', color: '#0f172a' }}>3. Service Availability (SLA)</h2>
                            <p>
                                For Enterprise tier users, CONEKT guarantees 99.95% uptime for its API and voice processing cores. Scheduled maintenance will be communicated 48 hours in advance through the admin dashboard. Any outages falling below this threshold are subject to service credits as defined in our Enterprise Service Level Agreement.
                            </p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', color: '#0f172a' }}>4. Intellectual Property</h2>
                            <p>
                                <strong>Your Data:</strong> You retain 100% ownership of your customer lists, CRM data, and call transcripts.
                                <br />
                                <strong>Our Tech:</strong> CONEKT retains all rights to the underlying AI models, proprietary prompt engineering, voice synthesis algorithms, and platform architecture. Custom "personas" developed within the system are licensed to you for the duration of your subscription.
                            </p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', color: '#0f172a' }}>5. Limitation of Liability</h2>
                            <p>
                                To the maximum extent permitted by law, CONEKT shall not be liable for any indirect, incidental, or consequential damages resulting from the use of autonomous voice agents, including but not limited to loss of profits, data, or brand reputation arising from AI-driven customer interactions.
                            </p>
                        </section>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
