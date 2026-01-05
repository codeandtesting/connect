import { Facebook, Twitter, Instagram, Linkedin, Dribbble } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer-wrapper">
            <div className="container">
                <div className="footer-content">
                    {/* Contact Info */}
                    <div className="footer-contact-info">
                        <h4>Let's talk with us</h4>
                        <p className="footer-phone">1-800-222-000</p>

                        <ul className="footer-links">
                            {['Overview', 'Features', 'Technology', 'Design', 'Review'].map(link => (
                                <li key={link}><a href="#">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Social & Email */}
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
