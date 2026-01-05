"use client";

import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

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
            padding: '8rem 0',
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
                    fontSize: '3.5rem',
                    fontWeight: 800,
                    textAlign: 'center',
                    marginBottom: '6rem',
                    color: '#111',
                    lineHeight: 1.1
                }}>
                    Loved by most <br /> valuable customers
                </h2>

                {/* Testimonials Carousel Container */}
                <div style={{
                    position: 'relative',
                    height: '500px', // Fixed height for absolute cards
                    maxWidth: '1200px',
                    margin: '0 auto 4rem auto',
                    perspective: '1000px' // Adds depth for 3D feel
                }}>
                    {testimonials.map((testimonial, i) => {
                        // Calculate relative position in the loop
                        // 0 = Active
                        // 1 = Next
                        // 2, 3 = Hidden (Back)
                        // 4 = Prev
                        const offset = (i - activeIndex + testimonials.length) % testimonials.length;

                        // Define styles for each position slot
                        let style = {};
                        if (offset === 0) { // Active (Center)
                            style = {
                                left: '50%',
                                transform: 'translateX(-50%) scale(1)',
                                opacity: 1,
                                zIndex: 10,
                                filter: 'blur(0px)',
                                pointerEvents: 'auto'
                            };
                        } else if (offset === 1) { // Next (Right)
                            style = {
                                left: '85%',
                                transform: 'translateX(-50%) scale(0.85)',
                                opacity: 0.4,
                                zIndex: 5,
                                filter: 'blur(2px)',
                                pointerEvents: 'none'
                            };
                        } else if (offset === testimonials.length - 1) { // Prev (Left)
                            style = {
                                left: '15%',
                                transform: 'translateX(-50%) scale(0.85)',
                                opacity: 0.4,
                                zIndex: 5,
                                filter: 'blur(2px)',
                                pointerEvents: 'none'
                            };
                        } else { // Hidden (Behind/Off-screen)
                            // We position them far left/right so they can slide in
                            // offset 2 is 'Hidden Right', offset 3 is 'Hidden Left'
                            const isHiddenRight = offset === 2;
                            style = {
                                left: isHiddenRight ? '120%' : '-20%',
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


            </div>
        </section>
    );
}
