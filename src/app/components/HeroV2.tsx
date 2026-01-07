"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { PlayCircle, ShoppingBag } from 'lucide-react';

const particleVertex = `
    attribute float scale;
    uniform float uTime;

    void main() {
        vec3 p = position;
        float s = scale;

        // More dramatic wave motion
        p.y += (sin(p.x * 0.5 + uTime) * 1.2) + (cos(p.z * 0.5 + uTime) * 0.8);
        p.x += (sin(p.y * 0.2 + uTime) * 0.3);
        
        // Dynamic scaling based on wave height
        s += (sin(p.x + uTime) * 0.5 + 1.0) * 0.5;

        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        // Increased point size for better visibility
        gl_PointSize = s * 25.0 * (1.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
    }
`;

const particleFragment = `
    void main() {
        // Create a perfect circle mask
        float distance = length(gl_PointCoord - vec2(0.5));
        if (distance > 0.5) discard;

        // Bolder, more saturated magenta color
        vec3 color = vec3(0.9, 0.1, 0.5); 
        float alpha = 0.9; 
        
        // Add a subtle inner glow
        float glow = 1.0 - (distance * 2.0);
        gl_FragColor = vec4(color, alpha * pow(glow, 0.5));
    }
`;

export default function HeroV2() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const config = {
            canvas: canvasRef.current,
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
            aspectRatio: window.innerWidth / window.innerHeight,
        };

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, config.aspectRatio, 0.01, 1000);
        camera.position.set(0, 5, 12); // Moved back slightly for more coverage

        const renderer = new THREE.WebGLRenderer({
            canvas: config.canvas,
            antialias: true,
            alpha: true
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(config.winWidth, config.winHeight);

        // Increased Density: 200x200 = 40,000 particles
        const gap = 0.25;
        const amountX = 200;
        const amountY = 200;
        const particleNum = amountX * amountY;
        const particlePositions = new Float32Array(particleNum * 3);
        const particleScales = new Float32Array(particleNum);

        let i = 0;
        let j = 0;

        for (let ix = 0; ix < amountX; ix++) {
            for (let iy = 0; iy < amountY; iy++) {
                particlePositions[i] = ix * gap - ((amountX * gap) / 2);
                particlePositions[i + 1] = 0;
                particlePositions[i + 2] = iy * gap - ((amountY * gap) / 2);
                particleScales[j] = 1.2; // Slightly larger base scale
                i += 3;
                j++;
            }
        }

        const particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
        particleGeometry.setAttribute('scale', new THREE.BufferAttribute(particleScales, 1));

        const particleMaterial = new THREE.ShaderMaterial({
            transparent: true,
            vertexShader: particleVertex,
            fragmentShader: particleFragment,
            uniforms: {
                uTime: { value: 0 }
            }
        });

        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        const onResize = () => {
            config.winWidth = window.innerWidth;
            config.winHeight = window.innerHeight;
            camera.aspect = config.winWidth / config.winHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(config.winWidth, config.winHeight);
        };

        const mouse = new THREE.Vector2(0, 0);
        const onMouseMove = (e: MouseEvent) => {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('resize', onResize);
        window.addEventListener('mousemove', onMouseMove);

        let animationFrameId: number;
        const animate = () => {
            particleMaterial.uniforms.uTime.value += 0.03;

            // Subtle camera tilt based on mouse
            camera.position.x += (mouse.x * 3 - camera.position.x) * 0.05;
            camera.position.z += (12 - mouse.y * 2 - camera.position.z) * 0.05;

            camera.lookAt(new THREE.Vector3(0, 0, 0));
            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', onResize);
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationFrameId);
            scene.remove(particles);
            particleGeometry.dispose();
            particleMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <section id="overview" style={{
            position: 'relative',
            minHeight: 'calc(100vh - var(--header-height))',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '4rem 2rem',
            textAlign: 'center'
        }}>
            {/* Background Canvas - Set to full opacity */}
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    pointerEvents: 'none',
                    opacity: 1
                }}
            />

            {/* Main Content */}
            <div style={{
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem',
                maxWidth: '1000px',
                position: 'relative' // Ensure content is above canvas
            }}>
                <h1 style={{
                    fontSize: 'clamp(2.4rem, 4.8vw, 4.4rem)',
                    lineHeight: 1.05,
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    margin: 0,
                    color: 'var(--foreground)',
                    textShadow: '0 0 40px rgba(255,255,255,0.5)'
                }}>
                    Your personal <span className="text-gradient">AI call manager</span>.<br />
                    World wide in any language
                </h1>

                <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: '#444',
                    maxWidth: '700px',
                    margin: 0,
                    fontWeight: 500
                }}>
                    Transform your phone system from a cost center into a growth engine. Eliminate wait times and human error with intelligent AI agents that handle any volume, in any language—fixing your biggest operational pain points while maximizing your ROI.
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

                    <button className="play-btn">
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
                textAlign: 'left',
                zIndex: 10
            }} className="hide-mobile">
                <span style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '0.25rem' }}>AI Capabilities</span>
                <strong style={{ fontSize: '1.2rem', fontWeight: 600 }}>Real-Time Call</strong>
            </div>

            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '3rem',
                textAlign: 'right',
                zIndex: 10
            }} className="hide-mobile">
                <span style={{ display: 'block', fontSize: '0.9rem', color: '#666', marginBottom: '0.25rem' }}>Fully Automate</span>
                <strong style={{ fontSize: '1.2rem', fontWeight: 600 }}>Call Breakdowns</strong>
            </div>
        </section >
    );
}
