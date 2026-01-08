export type Language = 'en' | 'ru' | 'lv';

export interface TranslationDict {
    navbar: {
        overview: string;
        features: string;
        industries: string;
        integrations: string;
        languages: string;
        reviews: string;
        contact: string;
        book_demo: string;
    };
    hero: {
        title_part1: string;
        title_gradient: string;
        title_part2: string;
        description: string;
        book_demo: string;
        try_demo: string;
        ai_capabilities: string;
        real_time_call: string;
        fully_automate: string;
        call_breakdowns: string;
    };
    features: {
        badge: string;
        title: string;
        description: string;
        use_cases_title: string;
        use_cases_highlight: string;
        use_cases_desc: string;
        how_it_works_title: string;
        how_it_works_highlight: string;
        how_it_works_desc: string;
        self_service_title: string;
        self_service_desc: string;
        full_service_title: string;
        full_service_desc: string;
        seamless_integration_title: string;
        seamless_integration_desc: string;
        deployment_process_title: string;
        step_01_title: string;
        step_01_desc: string;
        step_02_title: string;
        step_02_desc: string;
        step_03_title: string;
        step_03_desc: string;
        analytics_badge: string;
        analytics_title: string;
        analytics_desc: string;
        analytics_tag1: string;
        analytics_tag2: string;
        analytics_tag3: string;
        analytics_tag4: string;
        realistic_badge: string;
        turing_test_text: string;
        listen_samples: string;
        explore_more: string;
        stop_demo: string;
        live_demo: string;
        streaming_agent: string;
        sample_conversation: string;
    };
    industries: {
        healthcare: {
            label: string; demo: string; sample: string; title: string; desc: string;
            ops: { title: string; purpose: string; integrations: string; }[]
        };
        automotive: {
            label: string; demo: string; sample: string; title: string; desc: string;
            ops: { title: string; purpose: string; integrations: string; }[]
        };
        realestate: {
            label: string; demo: string; sample: string; title: string; desc: string;
            ops: { title: string; purpose: string; integrations: string; }[]
        };
        banking: {
            label: string; demo: string; sample: string; title: string; desc: string;
            ops: { title: string; purpose: string; integrations: string; }[]
        };
        ecommerce: {
            label: string; demo: string; sample: string; title: string; desc: string;
            ops: { title: string; purpose: string; integrations: string; }[]
        };
        restaurant: {
            label: string; demo: string; sample: string; title: string; desc: string;
            ops: { title: string; purpose: string; integrations: string; }[]
        };
    };
    industries_section: {
        title_main: string;
        title_highlight: string;
        subtitle: string;
        filter_all: string;
        filter_healthcare: string;
        filter_business: string;
        filter_retail: string;
        filter_automotive: string;
        filter_hospitality: string;
        footer_text: string;
        cta_button: string;
        purpose_label: string;
        integrations_label: string;
    };
    channels: {
        title_main: string;
        title_highlight: string;
        subtitle: string;
        batch_title: string;
        batch_desc: string;
        sip_title: string;
        sip_desc: string;
        web_title: string;
        web_desc: string;
        sms_title: string;
        sms_desc: string;
        messengers_title: string;
        messengers_desc: string;
        api_title: string;
        api_desc: string;
        integrations_title: string;
        integrations_subtitle: string;
    };
    composition: {
        title: string;
        subtitle: string;
        role_support: string;
        role_sales: string;
        role_scheduling: string;
        role_technical: string;
        role_global: string;
        role_executive: string;
        try_live_title: string;
        try_live_subtitle: string;
        agent_healthcare: string;
        agent_automotive: string;
        agent_realestate: string;
        sub_healthcare: string;
        sub_automotive: string;
        sub_realestate: string;
        neural_engine: string;
    };
    faq: {
        title_main: string;
        title_highlight: string;
        subtitle: string;
        get_in_touch: string;
        business_inquiries: string;
        customer_support: string;
        integrations: string;
        custom_integration_text: string;
        ready_text: string;
        book_demo_button: string;
        q1: string; a1: string;
        q2: string; a2: string;
        q3: string; a3: string;
        q4: string; a4: string;
        q5: string; a5: string;
        q6: string; a6: string;
        q7: string; a7: string;
        q8: string; a8: string;
    };
    footer: {
        talk_with_us: string;
        customer_care: string;
        product_title: string;
        industries_title: string;
        company_title: string;
        use_cases: string;
        how_it_works: string;
        live_demo: string;
        channels: string;
        integrations: string;
        healthcare: string;
        automotive: string;
        realestate: string;
        banking: string;
        other: string;
        testimonials: string;
        faq: string;
        contact: string;
        privacy: string;
        terms: string;
        copyright: string;
    };
    product_showcase: {
        worldwide_badge: string;
        global_reach_badge: string;
        global_scale: string;
        title_part1: string;
        title_gradient: string;
        desc: string;
        cta_button: string;
        stat1_title: string;
        stat1_value: string;
        stat1_sub: string;
        stat2_title: string;
        stat2_value: string;
        stat2_sub: string;
        stat3_title: string;
        stat3_value: string;
        stat3_sub: string;
    };
    testimonials: {
        title_main: string;
        title_highlight: string;
        stories_title: string;
        stories_subtitle: string;
        t1_title: string; t1_text: string;
        t2_title: string; t2_text: string;
        t3_title: string; t3_text: string;
        t4_title: string; t4_text: string;
        t5_title: string; t5_text: string;
        medical_title: string;
        medical_step1_title: string; medical_step1_desc: string;
        medical_step2_title: string; medical_step2_desc: string;
        medical_step3_title: string; medical_step3_desc: string;
        medical_step4_title: string; medical_step4_desc: string;
        auto_title: string;
        auto_step1_title: string; auto_step1_desc: string;
        auto_step2_title: string; auto_step2_desc: string;
        auto_step3_title: string; auto_step3_desc: string;
        auto_step4_title: string; auto_step4_desc: string;
        restaurant_title: string;
        restaurant_step1_title: string; restaurant_step1_desc: string;
        restaurant_step2_title: string; restaurant_step2_desc: string;
        restaurant_step3_title: string; restaurant_step3_desc: string;
        restaurant_step4_title: string; restaurant_step4_desc: string;
    };
    multilingual_support: {
        title: string;
        desc: string;
        lang_english: string;
        lang_french: string;
        lang_german: string;
        lang_japanese: string;
        lang_spanish: string;
        lang_british: string;
        lang_chinese: string;
        lang_korean: string;
        lang_italian: string;
        lang_portuguese: string;
        lang_russian: string;
        lang_turkish: string;
        lang_hindi: string;
        lang_arabic: string;
        lang_dutch: string;
        lang_swedish: string;
        lang_portugal: string;
        lang_mexico: string;
        lang_canada: string;
        lang_australia: string;
        lang_swiss: string;
        lang_polish: string;
        lang_vietnam: string;
        lang_thai: string;
        lang_indonesia: string;
        lang_hebrew: string;
        lang_greek: string;
        lang_norway: string;
        lang_denmark: string;
        lang_finland: string;
        lang_belgium: string;
        lang_austria: string;
        lang_latvian: string;
    };
    industries_page: {
        badge: string;
        title_main: string;
        title_highlight: string;
        description: string;
        sidebar_title: string;
        custom_title: string;
        custom_desc: string;
        cta_button: string;
        search_placeholder: string;
        found_ops: string;
        inbound: string;
        outbound: string;
        tech_integrations: string;
        more_labels: string;
        no_results: string;
    };
}
