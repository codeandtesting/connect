import { TranslationDict } from '../types';

export const en: TranslationDict = {
    navbar: {
        overview: 'Overview',
        features: 'Features',
        industries: 'Industries',
        integrations: 'Integrations',
        languages: 'Languages',
        reviews: 'Reviews',
        contact: 'Contact',
        book_demo: 'Book a Demo'
    },
    hero: {
        title_part1: 'Your personal',
        title_gradient: 'AI call manager',
        title_part2: 'World wide in any language',
        description: 'Transform your phone system from a cost center into a growth engine. Eliminate wait times and human error with intelligent AI agents that handle any volume, in any language—fixing your biggest operational pain points while maximizing your ROI.',
        book_demo: 'Book a Demo',
        try_demo: 'Try Live Demo',
        ai_capabilities: 'AI Capabilities',
        real_time_call: 'Real-Time Call',
        fully_automate: 'Fully Automate',
        call_breakdowns: 'Call Breakdowns'
    },
    features: {
        badge: 'Platform Features',
        title: 'Everything you need to automate your voice operations',
        description: 'Our AI agents are pre-trained on millions of calls, meaning they start with native-level fluency and industry expertise on day one.',
        use_cases_title: 'Use Cases Across',
        use_cases_highlight: 'Industries',
        use_cases_desc: 'See how Conekt AI agents work in different business scenarios',
        how_it_works_title: 'How It',
        how_it_works_highlight: 'Works',
        how_it_works_desc: 'Simple setup, powerful results - deploy AI agents in minutes',
        self_service_title: 'Self-Service Platform',
        self_service_desc: 'Configure your AI agent through our intuitive web interface. Customize responses, set business rules, and deploy in minutes without any coding required.',
        full_service_title: 'Full-Service Setup',
        full_service_desc: 'Our team handles everything - from configuration to deployment. We analyze your workflows and implement the perfect solution for your business.',
        seamless_integration_title: 'Seamless Integration',
        seamless_integration_desc: 'Connect with your existing systems: CRM, ERP, calendars, and industry-specific platforms. Two-way data sync ensures everything stays updated.',
        deployment_process_title: 'Deployment Process',
        step_01_title: 'Create Agent',
        step_01_desc: "Define your agent's personality, knowledge base, and response patterns",
        step_02_title: 'Test & Refine',
        step_02_desc: 'Run test calls, review transcripts, and optimize performance',
        step_03_title: 'Deploy Live',
        step_03_desc: 'Go live with confidence - monitor calls and make adjustments anytime',
        analytics_badge: '• All calls are recorded',
        analytics_title: 'Call Recording & Analytics',
        analytics_desc: 'Every conversation is transcribed, analyzed, and stored. Export data in any format (XLS, CSV, JSON, PDF) or automatically sync with your CRM, calendar, ERP, and other business systems.',
        analytics_tag1: 'Real-time Analytics',
        analytics_tag2: 'Calendar Sync',
        analytics_tag3: 'CRM Integration',
        analytics_tag4: 'Custom Reports',
        realistic_badge: 'REALISTIC',
        turing_test_text: 'Voice technology that passes the',
        listen_samples: 'Turing test. Listen to samples.',
        explore_more: 'Explore More Industries',
        stop_demo: 'Stop Demo',
        live_demo: 'Live demo',
        streaming_agent: 'Streaming {industry} Voice Agent...',
        sample_conversation: 'Sample conversation: {sample}'
    },
    industries: {
        healthcare: {
            label: "Healthcare",
            demo: "Play Healthcare Demo Call",
            sample: "Patient scheduling appointment",
            title: "Healthcare Appointment Scheduling",
            desc: "AI agent handles appointment bookings, cancellations, rescheduling, and sends automatic reminders. Integrates with EHR systems like Epic, Cerner, and sends SMS confirmations. Reduces missed appointments by 38% and eliminates 4.4-minute wait times.",
            ops: [
                {
                    title: 'Appointment Scheduling',
                    purpose: 'Book, reschedule, and cancel patient appointments',
                    integrations: 'EHR/EMR (Epic, Cerner, Meditech), Calendar systems, SMS notifications'
                },
                {
                    title: 'Prescription Refills',
                    purpose: 'Process medication refill requests',
                    integrations: 'Pharmacy management systems, E-prescribing platforms'
                },
                {
                    title: 'Insurance Verification',
                    purpose: 'Verify patient insurance coverage and eligibility',
                    integrations: 'Insurance clearinghouses (Availity, Change Healthcare), Payer APIs'
                }
            ]
        },
        automotive: {
            label: "Automotive",
            demo: "Play Automotive Demo Call",
            sample: "Service appointment booking",
            title: "Auto Service Scheduling",
            desc: "87% automation of service appointments, parts inquiries, and maintenance reminders. Integrates with DMS systems (CDK Global, Reynolds & Reynolds). Captures $720K+ annual revenue from missed calls.",
            ops: [
                {
                    title: 'Service Appointment Scheduling',
                    purpose: 'Schedule maintenance, repairs, and service appointments',
                    integrations: 'DMS (CDK Global, Reynolds & Reynolds), Service scheduling, Calendar'
                },
                {
                    title: 'Parts Availability Inquiry',
                    purpose: 'Check parts availability and pricing',
                    integrations: 'DMS parts module, Parts catalogs, Distributor APIs'
                },
                {
                    title: 'Maintenance Reminders',
                    purpose: 'Proactive reminders based on mileage and service history',
                    integrations: 'DMS service history, Customer database, SMS/Voice platforms'
                }
            ]
        },
        realestate: {
            label: "Real Estate",
            demo: "Play Real Estate Demo Call",
            sample: "Property viewing request",
            title: "Real Estate Lead Management",
            desc: "Qualify leads 24/7, schedule property viewings, answer property questions. Integrates with MLS systems and CRM platforms. Solves the 60% unanswered calls problem and 3-day response times.",
            ops: [
                {
                    title: 'Property Viewing Scheduling',
                    purpose: 'Schedule property showings and open houses',
                    integrations: 'MLS systems, Calendar systems, Showing scheduling tools (ShowingTime)'
                },
                {
                    title: 'Lead Qualification',
                    purpose: 'Qualify potential buyers and gather requirements',
                    integrations: 'CRM (Follow Up Boss, kvCORE), Lead management systems'
                },
                {
                    title: 'Property Information',
                    purpose: 'Provide property details, pricing, and availability',
                    integrations: 'MLS databases, Property management systems'
                }
            ]
        },
        banking: {
            label: "Bank",
            demo: "Play Banking Demo Call",
            sample: "Balance inquiry",
            title: "Banking Customer Service",
            desc: "80% automation of balance inquiries, card services, and payment processing. GDPR and PCI-DSS compliant. Integrates with core banking systems. Saves $1.82M annually for large banks.",
            ops: [
                {
                    title: 'Balance & Transaction Inquiries',
                    purpose: 'Provide account balance and transaction history',
                    integrations: 'Core banking systems (Temenos, FIS, Fiserv), Mobile banking APIs'
                },
                {
                    title: 'Card Services',
                    purpose: 'Card activation, PIN reset, card blocking',
                    integrations: 'Card management systems, Fraud detection systems'
                },
                {
                    title: 'Fraud Alerts',
                    purpose: 'Verify suspicious transactions and fraud alerts',
                    integrations: 'Fraud detection systems, Real-time analytics platforms'
                }
            ]
        },
        ecommerce: {
            label: "E-commerce",
            demo: "Play E-commerce Demo Call",
            sample: "Order tracking",
            title: "E-commerce Support",
            desc: "85% automation of order tracking, returns, and product inquiries. Handles 300%+ peak surge during Black Friday. Integrates with Shopify, WooCommerce, shipping APIs.",
            ops: [
                {
                    title: 'Order Tracking',
                    purpose: 'Provide real-time order status and delivery updates',
                    integrations: 'E-commerce platforms (Shopify, WooCommerce), Shipping APIs (FedEx, UPS, DHL)'
                },
                {
                    title: 'Returns & Exchanges',
                    purpose: 'Process product returns and exchanges',
                    integrations: 'Return management systems, Payment processors'
                },
                {
                    title: 'Product Information',
                    purpose: 'Answer product questions and provide specifications',
                    integrations: 'Product catalogs, Inventory management systems'
                }
            ]
        },
        restaurant: {
            label: "Restaurant",
            demo: "Play Restaurant Demo Call",
            sample: "Table reservation",
            title: "Restaurant Reservations",
            desc: "77% automation of reservations, takeout orders, and table management. Integrates with OpenTable, Resy, POS systems. Never miss a booking during rush hours.",
            ops: [
                {
                    title: 'Table Reservations',
                    purpose: 'Book, modify, and confirm restaurant reservations',
                    integrations: 'Reservation systems (OpenTable, Resy), POS integration'
                },
                {
                    title: 'Takeout Orders',
                    purpose: 'Take phone orders for pickup and delivery',
                    integrations: 'POS systems (Toast, Square, Clover), Online ordering platforms'
                },
                {
                    title: 'Wait Time Inquiries',
                    purpose: 'Provide current wait times and waitlist management',
                    integrations: 'Waitlist management (Nowait, Yelp), Host systems'
                }
            ]
        }
    },
    industries_section: {
        title_main: 'Industries We',
        title_highlight: 'Serve',
        subtitle: 'Comprehensive solutions for 25+ industries with specialized AI agents',
        filter_all: 'All Industries',
        filter_healthcare: 'Healthcare',
        filter_business: 'Business Services',
        filter_retail: 'Retail & E-commerce',
        filter_automotive: 'Automotive',
        filter_hospitality: 'Hospitality',
        footer_text: "Don't see your industry? We can customize solutions for any business.",
        cta_button: 'Find Your Industry',
        purpose_label: 'Purpose:',
        integrations_label: 'Integrations:'
    },
    channels: {
        title_main: 'Multiple Communication',
        title_highlight: 'Channels',
        subtitle: 'Connect with your customers however they prefer',
        batch_title: 'Batch Calls',
        batch_desc: 'Run massive outbound campaigns with thousands of simultaneous calls. Perfect for appointment reminders, payment notifications, and marketing campaigns.',
        sip_title: 'SIP Calls',
        sip_desc: 'Standard telephony integration with your existing phone systems. Support for all major VoIP providers and PBX systems.',
        web_title: 'Web Calls',
        web_desc: 'Browser-based calling directly from your website. No phone number needed - customers click and talk instantly.',
        sms_title: 'SMS',
        sms_desc: 'Text message conversations with full context awareness. Confirmations, reminders, and two-way communication via SMS.',
        messengers_title: 'Messengers',
        messengers_desc: 'Integrate with WhatsApp, Telegram, Facebook Messenger, and more. Meet customers on their preferred platforms.',
        api_title: 'Custom API',
        api_desc: 'Connect with almost any custom API. Seamlessly integrate AI agents into your unique workflows and internal tools.',
        integrations_title: 'Seamless Integrations',
        integrations_subtitle: 'Connect with your existing tools and systems - no disruption to your workflow'
    },
    composition: {
        title: 'Indistinguishable From Reality.',
        subtitle: 'Listen for yourself. Six distinct personalities, one powerful AI core.',
        role_support: 'Support',
        role_sales: 'Sales',
        role_scheduling: 'Scheduling',
        role_technical: 'Technical',
        role_global: 'Global',
        role_executive: 'Executive',
        try_live_title: 'Try It Live',
        try_live_subtitle: 'Call our AI agents now and experience the future of customer service',
        agent_healthcare: 'Healthcare Agent',
        agent_automotive: 'Automotive Agent',
        agent_realestate: 'Real Estate Agent',
        sub_healthcare: 'Book an appointment',
        sub_automotive: 'Schedule service',
        sub_realestate: 'Inquire about property',
        neural_engine: 'Powered by our Proprietary Neural Voice Engine'
    },
    faq: {
        title_main: 'Questions &',
        title_highlight: 'Contact',
        subtitle: 'Everything you need to know to get started',
        get_in_touch: 'Get in touch',
        business_inquiries: 'Business Inquiries',
        customer_support: 'Customer Support',
        integrations: 'Integrations',
        custom_integration_text: 'Need a custom integration?',
        ready_text: 'Ready to see it in action?',
        book_demo_button: 'Book a Live Demo',
        q1: "How does pricing work?",
        a1: "We offer flexible pricing tailored individually to each business based on call volume and features needed. Enterprise plans include custom integrations, dedicated support, and unlimited scalability. Contact us for a personalized quote.",
        q2: "What languages are supported?",
        a2: "We support 50+ languages including English, Spanish, German, French, Russian, Chinese, Japanese, Arabic, and many more. Each language includes regional accent variations and cultural adaptations for natural conversations.",
        q3: "How long does setup take?",
        a3: "Basic setup takes 1-2 days. You can configure your first AI agent and start testing within hours. Full deployment with custom integrations typically takes 1-2 weeks. Our team handles the entire process if you choose full-service setup.",
        q4: "Is it HIPAA/GDPR compliant?",
        a4: "Yes! We're fully compliant with HIPAA, GDPR, PCI-DSS, and SOC 2 Type II. All calls are encrypted end-to-end, and we maintain strict data handling protocols. We can sign BAAs for healthcare clients.",
        q5: "Can I customize the agent's voice and personality?",
        a5: "Absolutely! You can customize voice tone, speaking pace, personality traits, and conversation style. Choose from 50+ voice options or create a custom voice that matches your brand. The agent can be professional, friendly, casual, or any style you prefer.",
        q6: "What happens if the agent can't answer a question?",
        a6: "The AI agent seamlessly transfers complex queries to human staff with full conversation context. You set escalation rules and priorities. The agent can also take messages, schedule callbacks, or provide alternative contact methods. Transfer success rate is 99.8%.",
        q7: "How do I integrate with my existing systems?",
        a7: "We offer pre-built integrations with 100+ popular systems (CRM, ERP, calendars, etc.). For custom systems, we provide REST APIs and webhooks. Our technical team can build custom integrations or you can use our API documentation to build them yourself.",
        q8: "Do you offer support and training?",
        a8: "Yes! All plans include email support. Premium and Enterprise plans get dedicated account managers, priority phone support, and custom training sessions for your team. We also provide comprehensive documentation, video tutorials, and a knowledge base."
    },
    footer: {
        talk_with_us: "Let's talk with us",
        customer_care: "Get customer care",
        product_title: "Product",
        industries_title: "Industries",
        company_title: "Company",
        use_cases: "Use Cases",
        how_it_works: "How It Works",
        live_demo: "Live Demo",
        channels: "Channels",
        integrations: "Integrations",
        healthcare: "Healthcare",
        automotive: "Automotive",
        realestate: "Real Estate",
        banking: "Banking",
        other: "Other",
        testimonials: "Testimonials",
        faq: "FAQ",
        contact: "Contact",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        copyright: "© 2026 CONEKT"
    },
    product_showcase: {
        worldwide_badge: "Worldwide",
        global_reach_badge: "Global Reach",
        global_scale: "Global Scale",
        title_part1: "Global Voice,",
        title_gradient: "Local Fluency.",
        desc: "Eliminate language barriers instantly. Our AI agents master 50+ languages with native speed, regional accents, and deep cultural nuance, ensuring your brand feels local in every market.",
        cta_button: "Hear the Fluency",
        stat1_title: "Polyglot Core",
        stat1_value: "50+ Languages",
        stat1_sub: "Native-level accuracy",
        stat2_title: "Market Expansion",
        stat2_value: "Instant",
        stat2_sub: "Deploy globally in minutes",
        stat3_title: "Reliability",
        stat3_value: "24/7/365",
        stat3_sub: "Zero latency globe-wide"
    },
    testimonials: {
        title_main: "Loved by most",
        title_highlight: "valuable customers",
        stories_title: "Success Stories",
        stories_subtitle: "Real-world workflows powered by Conekt",
        t1_title: "High ROI & Efficiency Focus",
        t1_text: "With 28 years of experience, we know the value of staying current. Voice AI increased our client reach by 321% for 1/10th of the budget. Ignoring AI is no longer an option.",
        t2_title: "Professionalism & Consistency",
        t2_text: "Cold calling is tough due to human unpredictability. The AI Agent nailed it—delivering consistent, professional calls across time zones and achieving results we never thought possible.",
        t3_title: "Human-Like Quality",
        t3_text: "In the restaurant business, warmth is everything. The AI calls were so natural that customers actually asked to meet the 'nice guy' they spoke with! It has helped us treat every customer like family.",
        t4_title: "New Business & Lead Generation",
        t4_text: "As a new restaurant, we found that standard email marketing just doesn't work anymore. The 1:1 personalized voice contact helped us secure a stable flow of clients in record time.",
        t5_title: "Technical Support & Operations",
        t5_text: "In logistics, staying connected with drivers 24/7 is vital. The AI agent handles complex cargo queries seamlessly, providing a unified solution that completely replaced our private call center.",
        medical_title: "Medical Appointment Flow",
        medical_step1_title: "Patient calls",
        medical_step1_desc: "AI agent answers 24/7, gathers details about needed appointment type",
        medical_step2_title: "Schedule created",
        medical_step2_desc: "Data syncs to clinic's EHR system (Epic/Cerner) and reserves time slot",
        medical_step3_title: "Calendar sync",
        medical_step3_desc: "Appointment added to patient's Google/Outlook calendar automatically",
        medical_step4_title: "Reminder calls",
        medical_step4_desc: "AI agent calls 24h before appointment to confirm attendance",
        auto_title: "Auto Service Flow",
        auto_step1_title: "Customer calls",
        auto_step1_desc: "AI agent checks vehicle history and available service slots",
        auto_step2_title: "DMS integration",
        auto_step2_desc: "Booking syncs to dealer management system (CDK/Reynolds)",
        auto_step3_title: "SMS confirmation",
        auto_step3_desc: "Customer receives text with appointment details and service advisor info",
        auto_step4_title: "Ready notification",
        auto_step4_desc: "AI calls when vehicle is ready for pickup with total cost",
        restaurant_title: "Restaurant Booking Flow",
        restaurant_step1_title: "Diner calls",
        restaurant_step1_desc: "AI agent checks table availability for requested party size and time",
        restaurant_step2_title: "Table reserved",
        restaurant_step2_desc: "Booking syncs to OpenTable/Resy and restaurant POS system",
        restaurant_step3_title: "Email confirmation",
        restaurant_step3_desc: "Customer receives confirmation with reservation details",
        restaurant_step4_title: "Day-of reminder",
        restaurant_step4_desc: "SMS reminder sent 2 hours before reservation"
    },
    multilingual_support: {
        title: "Truly Universal.",
        desc: "Native fluency in 50+ languages with regional accents and perfect cultural nuance.",
        lang_english: "English",
        lang_french: "French",
        lang_german: "German",
        lang_japanese: "Japanese",
        lang_spanish: "Spanish",
        lang_british: "British",
        lang_chinese: "Chinese",
        lang_korean: "Korean",
        lang_italian: "Italian",
        lang_portuguese: "Portuguese",
        lang_russian: "Russian",
        lang_turkish: "Turkish",
        lang_hindi: "Hindi",
        lang_arabic: "Arabic",
        lang_dutch: "Dutch",
        lang_swedish: "Swedish",
        lang_portugal: "Portugal",
        lang_mexico: "Mexico",
        lang_canada: "Canada",
        lang_australia: "Australia",
        lang_swiss: "Swiss",
        lang_polish: "Polish",
        lang_vietnam: "Vietnam",
        lang_thai: "Thai",
        lang_indonesia: "Indonesia",
        lang_hebrew: "Hebrew",
        lang_greek: "Greek",
        lang_norway: "Norway",
        lang_denmark: "Denmark",
        lang_finland: "Finland",
        lang_belgium: "Belgium",
        lang_austria: "Austria",
        lang_latvian: "Latvian"
    },
    industries_page: {
        badge: "Comprehensive Coverage",
        title_main: "Industry",
        title_highlight: "Capabilities",
        description: "Explore our database of 200+ pre-trained AI operations. Select your industry to see exactly how our agents can automate your workflows.",
        sidebar_title: "Select Industry",
        custom_title: "Need something custom?",
        custom_desc: "We can train agents for unique workflows in just 48 hours.",
        cta_button: "Talk to Sales",
        search_placeholder: "Search operations...",
        found_ops: "Found {count} specialized operations",
        inbound: "Inbound",
        outbound: "Outbound",
        tech_integrations: "Technical Integrations",
        more_labels: "{count} more",
        no_results: "No operations found matching \"{query}\" in {industry}"
    }
};
