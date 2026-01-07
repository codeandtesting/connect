"use client";

import { useState, useEffect } from 'react';
import { Star, Stethoscope, Car, Utensils, ShoppingBag } from 'lucide-react';

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const testimonials = [
        {
            company: "SIA GOD",
            website: "dvieluzavetaji.lv",
            text: "With 28 years of experience, we know the value of staying current. Voice AI increased our client reach by 321% for 1/10th of the budget. Ignoring AI is no longer an option.",
            title: "High ROI & Efficiency Focus"
        },
        {
            company: "MMD serviss",
            website: "mmdserviss.eu",
            text: "Cold calling is tough due to human unpredictability. The AI Agent nailed it—delivering consistent, professional calls across time zones and achieving results we never thought possible.",
            title: "Professionalism & Consistency"
        },
        {
            company: "Amber Asian Food",
            website: "amberrestaurant.no",
            text: "In the restaurant business, warmth is everything. The AI calls were so natural that customers actually asked to meet the 'nice guy' they spoke with! It has helped us treat every customer like family.",
            title: "Human-Like Quality"
        },
        {
            company: "Pasta Bar Restaurant",
            website: "pastabarrestaurant.no",
            text: "As a new restaurant, we found that standard email marketing just doesn't work anymore. The 1:1 personalized voice contact helped us secure a stable flow of clients in record time.",
            title: "New Business & Lead Generation"
        },
        {
            company: "SIA Kreiss",
            website: "kreiss.lv",
            text: "In logistics, staying connected with drivers 24/7 is vital. The AI agent handles complex cargo queries seamlessly, providing a unified solution that completely replaced our private call center.",
            title: "Technical Support & Operations"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const getIndex = (offset: number) => {
        return (activeIndex + offset + testimonials.length) % testimonials.length;
    };

    return (
        <section id="reviews" style={{
            background: '#ffffff',
            padding: isMobile ? '4rem 0' : '8rem 0',
            position: 'relative',
            overflow: 'hidden'
        }}>

            {/* Background Grid Lines */}
            <div className="grid-lines" style={{ zIndex: 0 }}>
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
                <div className="grid-line" style={{ background: 'rgba(0,0,0,0.06)' }} />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                    fontWeight: 800,
                    textAlign: 'center',
                    marginBottom: isMobile ? '4rem' : '6rem',
                    color: '#111',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em'
                }}>
                    Loved by most <br />
                    <span style={{
                        background: 'linear-gradient(to right, #2563eb, #db2777)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        valuable customers
                    </span>
                </h2>

                {/* Testimonials Carousel Container */}
                <div style={{
                    position: 'relative',
                    height: isMobile ? '450px' : '500px', // Adjusted height
                    maxWidth: '1200px',
                    margin: '0 auto 4rem auto',
                    perspective: '1000px'
                }}>
                    {testimonials.map((testimonial, i) => {
                        const offset = (i - activeIndex + testimonials.length) % testimonials.length;

                        // Define styles for each position slot
                        let style = {};
                        if (offset === 0) { // Active
                            style = {
                                left: '50%',
                                transform: 'translateX(-50%) scale(1)',
                                opacity: 1,
                                zIndex: 10,
                                filter: 'blur(0px)',
                                pointerEvents: 'auto'
                            };
                        } else if (offset === 1) { // Next
                            style = {
                                left: isMobile ? '150%' : '85%',
                                transform: 'translateX(-50%) scale(0.85)',
                                opacity: isMobile ? 0 : 0.4,
                                zIndex: 5,
                                filter: 'blur(2px)',
                                pointerEvents: 'none'
                            };
                        } else if (offset === testimonials.length - 1) { // Prev
                            style = {
                                left: isMobile ? '-50%' : '15%',
                                transform: 'translateX(-50%) scale(0.85)',
                                opacity: isMobile ? 0 : 0.4,
                                zIndex: 5,
                                filter: 'blur(2px)',
                                pointerEvents: 'none'
                            };
                        } else { // Hidden
                            const isHiddenRight = offset === 2;
                            style = {
                                left: isHiddenRight ? '150%' : '-50%',
                                transform: 'translateX(-50%) scale(0.5)',
                                opacity: 0,
                                zIndex: 0,
                                pointerEvents: 'none'
                            };
                        }

                        return (
                            <div key={i} style={{
                                position: 'absolute',
                                top: 0,
                                width: '600px', // Fixed width for consistent layout
                                maxWidth: '90vw',
                                background: 'white',
                                padding: '4rem 3rem 3rem',
                                borderRadius: '20px',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                                textAlign: 'center',
                                border: '1px solid #f0f0f0',
                                transition: 'all 0.8s cubic-bezier(0.25, 0.4, 0.25, 1)', // Smooth complex ease
                                ...style
                            }}>
                                {/* Avatar Floating Top */}
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: '#f3f3f3',
                                    position: 'absolute',
                                    top: '-40px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    border: '4px solid white',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    color: '#ccc',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                                }}>
                                    {testimonial.company.charAt(0)}
                                </div>

                                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem', color: '#222' }}>
                                    {testimonial.title}
                                </h3>
                                <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: 1.6, marginBottom: '2rem' }}>
                                    "{testimonial.text}"
                                </p>
                                <div>
                                    <strong style={{ display: 'block', color: '#FF006E', fontSize: '1.1rem' }}>{testimonial.company}</strong>
                                    <span style={{ fontSize: '0.9rem', color: '#888' }}>{testimonial.website}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* SUCCESS STORIES SECTION */}
                <div style={{ marginTop: '8rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h3 style={{
                            fontSize: 'clamp(2rem, 6vmax, 3rem)',
                            fontWeight: 800,
                            marginBottom: '1rem',
                            background: 'linear-gradient(to right, #2563eb, #db2777)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-block',
                            letterSpacing: '-0.02em'
                        }}>
                            Success Stories
                        </h3>
                        <p style={{ fontSize: '1.2rem', color: '#666' }}>Real-world workflows powered by Conekt</p>
                    </div>

                    <div className="stories-grid">
                        {[
                            {
                                icon: <Stethoscope size={24} color="#3b82f6" />,
                                title: "Medical Appointment Flow",
                                steps: [
                                    { title: "Patient calls", desc: "AI agent answers 24/7, gathers details about needed appointment type" },
                                    { title: "Schedule created", desc: "Data syncs to clinic's EHR system (Epic/Cerner) and reserves time slot" },
                                    { title: "Calendar sync", desc: "Appointment added to patient's Google/Outlook calendar automatically" },
                                    { title: "Reminder calls", desc: "AI agent calls 24h before appointment to confirm attendance" }
                                ]
                            },
                            {
                                icon: <Car size={24} color="#8b5cf6" />,
                                title: "Auto Service Flow",
                                steps: [
                                    { title: "Customer calls", desc: "AI agent checks vehicle history and available service slots" },
                                    { title: "DMS integration", desc: "Booking syncs to dealer management system (CDK/Reynolds)" },
                                    { title: "SMS confirmation", desc: "Customer receives text with appointment details and service advisor info" },
                                    { title: "Ready notification", desc: "AI calls when vehicle is ready for pickup with total cost" }
                                ]
                            },
                            {
                                icon: <Utensils size={24} color="#f59e0b" />,
                                title: "Restaurant Booking Flow",
                                steps: [
                                    { title: "Diner calls", desc: "AI agent checks table availability for requested party size and time" },
                                    { title: "Table reserved", desc: "Booking syncs to OpenTable/Resy and restaurant POS system" },
                                    { title: "Email confirmation", desc: "Customer receives confirmation with reservation details" },
                                    { title: "Day-of reminder", desc: "SMS reminder sent 2 hours before reservation" }
                                ]
                            },
                            /*
                            {
                                icon: <ShoppingBag size={24} color="#ec4899" />,
                                title: "E-commerce Order Flow",
                                steps: [
                                    { title: "Customer inquires", desc: "AI provides real-time order status from Shopify/WooCommerce" },
                                    { title: "Tracking shared", desc: "AI provides carrier tracking number and estimated delivery" },
                                    { title: "Issue resolution", desc: "If delay detected, AI proactively calls customer with update" },
                                    { title: "Delivery confirmation", desc: "AI calls to confirm receipt and collect feedback" }
                                ]
                            }
                            */
                        ].map((story, i) => (
                            <div key={i} style={{
                                background: 'white',
                                padding: isMobile ? '1.5rem' : '2.5rem',
                                borderRadius: '20px',
                                border: '1px solid #f0f0f0',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.05)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                    <div style={{
                                        width: '50px', height: '50px',
                                        borderRadius: '12px',
                                        background: '#f8fafc',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        {story.icon}
                                    </div>
                                    <h4 style={{ fontSize: 'clamp(1.15rem, 4vw, 1.4rem)', fontWeight: 700, margin: 0, color: '#111', letterSpacing: '-0.01em' }}>{story.title}</h4>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {story.steps.map((step, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '1rem' }}>
                                            <div style={{
                                                width: '24px', height: '24px',
                                                borderRadius: '50%',
                                                background: '#111',
                                                color: 'white',
                                                fontSize: '0.8rem',
                                                fontWeight: 700,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                flexShrink: 0,
                                                marginTop: '2px'
                                            }}>
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <strong style={{ display: 'block', color: '#333', marginBottom: '0.2rem' }}>{step.title}</strong>
                                                <span style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.4, display: 'block' }}>{step.desc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
