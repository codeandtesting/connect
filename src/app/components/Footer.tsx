import { Facebook, Twitter, Instagram, Linkedin, Dribbble } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer-wrapper">
            <div className="container">
                <div className="footer-content" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                    {/* Contact Info (Left) */}
                    <div className="footer-contact-info">
                        <h4>Let's talk with us</h4>
                        <p className="footer-phone">1-800-222-000</p>
                    </div>

                    {/* Links Columns (Center) */}
                    <div style={{ display: 'flex', gap: '4rem', justifyContent: 'center', flex: 1, minWidth: '300px' }}>
                        {/* Product Column */}
                        <div>
                            <h5 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>Product</h5>
                            <ul className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: 0 }}>
                                {['Use Cases', 'How It Works', 'Live Demo', 'Channels', 'Integrations'].map((link, i) => {
                                    const hrefs = ['#industries', '#features', '#features', '#integrations', '#integrations'];
                                    return <li key={link}><a href={hrefs[i]}>{link}</a></li>
                                })}
                            </ul>
                        </div>

                        {/* Industries Column */}
                        <div>
                            <h5 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>Industries</h5>
                            <ul className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: 0 }}>
                                {['Healthcare', 'Automotive', 'Real Estate', 'Banking', 'E-commerce'].map(link => (
                                    <li key={link}><a href="#industries">{link}</a></li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div>
                            <h5 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>Company</h5>
                            <ul className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: 0 }}>
                                {['Testimonials', 'FAQ', 'Contact', 'Privacy Policy', 'Terms of Service'].map((link, i) => {
                                    const hrefs = ['#reviews', '#faq', '#faq', '#faq', '#faq'];
                                    return <li key={link}><a href={hrefs[i]}>{link}</a></li>
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* Social & Email (Right) */}
                    <div className="footer-social-section">
                        <div className="footer-social-icons">
                            <Facebook size={20} />
                            <Dribbble size={20} />
                            <Twitter size={20} />
                            <Instagram size={20} />
                            <Linkedin size={20} />
                        </div>

                        <h4>Get customer care</h4>
                        <p className="footer-email">info@domain.com</p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-copyright">
                    © 2026 <strong style={{ color: '#333' }}>CONEKT</strong>
                </div>
            </div>
        </footer>
    );
}
