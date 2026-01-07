import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | CONEKT AI",
    description: "Detailed information on how CONEKT handles voice data, AI processing, and user privacy in accordance with global standards.",
};

export default function PrivacyPage() {
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
                        Privacy <span className="text-gradient">Policy</span>
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '3rem' }}>
                        Effective Date: January 7, 2026 | Version 2.0
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: '#334155', lineHeight: 1.8 }}>

                        <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                            <p style={{ fontWeight: 600, color: '#0f172a', marginBottom: 0 }}>
                                CONEKT is committed to the highest standards of data protection. This policy outlines our rigorous approach to voice data privacy, AI ethics, and global compliance for businesses using our platform.
                            </p>
                        </div>

                        <section>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', color: '#0f172a' }}>1. Scope of Voice Data Collection</h2>
                            <p>
                                When your business uses CONEKT AI Voice Agents, we process several layers of data to ensure native-level performance:
                            </p>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <li><strong>Audio Recordings:</strong> Full digital captures of calls for transcription and sentiment analysis.</li>
                                <li><strong>Voice Biometrics:</strong> We do not store "voice prints" unless explicitly enabled for authentication purposes in highly secure workflows.</li>
                                <li><strong>Telephony Metadata:</strong> Time, date, duration, and phone numbers involved in the exchange.</li>
                                <li><strong>Contextual Data:</strong> Information retrieved from your integrated CRM, EPR, or ERP systems during live processing.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', color: '#0f172a' }}>2. AI Processing & Model Training</h2>
                            <p>
                                CONEKT utilizes Large Language Models (LLMs) and advanced Speech-to-Text (STT) technologies.
                            </p>
                            <div style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-purple)', background: '#fdfaff', marginTop: '1rem' }}>
                                <p style={{ fontStyle: 'italic', margin: 0 }}>
                                    <strong>Important:</strong> By default, CONEKT does NOT use your proprietary business data or customer voice recordings to train our "Global Core" models. Your specific agent "personalities" and custom workflows remain isolated within your encrypted account silo.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', color: '#0f172a' }}>3. Data Retention & Erasure</h2>
                            <p>
                                We adhere to strict data minimization principles:
                            </p>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                                <li><strong>Transcripts:</strong> Retained for the duration of your service contract or until deleted by your admin.</li>
                                <li><strong>Audio Logs:</strong> Automatically purged after 30 days unless your specific compliance profile (e.g., HIPAA or GDPR) requires longer audited retention.</li>
                                <li><strong>Automatic Redaction:</strong> Our AI can be configured to automatically redact PII (Personally Identifiable Information) like credit card numbers or IDs from transcripts in real-time.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', color: '#0f172a' }}>4. Global Compliance</h2>
                            <p>
                                CONEKT is designed for international operations and complies with:
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                                <div style={{ padding: '1rem', background: '#f1f5f9', borderRadius: '12px', textAlign: 'center' }}>
                                    <strong style={{ color: '#0f172a' }}>GDPR</strong>
                                    <p style={{ fontSize: '0.85rem', margin: '0.5rem 0 0' }}>EU Data Sovereignty</p>
                                </div>
                                <div style={{ padding: '1rem', background: '#f1f5f9', borderRadius: '12px', textAlign: 'center' }}>
                                    <strong style={{ color: '#0f172a' }}>HIPAA</strong>
                                    <p style={{ fontSize: '0.85rem', margin: '0.5rem 0 0' }}>Healthcare Grade Security</p>
                                </div>
                                <div style={{ padding: '1rem', background: '#f1f5f9', borderRadius: '12px', textAlign: 'center' }}>
                                    <strong style={{ color: '#0f172a' }}>CCPA</strong>
                                    <p style={{ fontSize: '0.85rem', margin: '0.5rem 0 0' }}>California Privacy Rights</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', color: '#0f172a' }}>5. Third-Party Sub-processors</h2>
                            <p>
                                To maintain speed and accuracy, we partner with specialized sub-processors for infrastructure (AWS/Azure) and specific AI compute tasks. All partners are bound by Data Processing Agreements (DPAs) that meet or exceed CONEKT's own privacy standards.
                            </p>
                        </section>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
