import { TranslationDict } from '../types';

export const lv: TranslationDict = {
    navbar: {
        overview: 'Pārskats',
        features: 'Funkcijas',
        industries: 'Nozares',
        integrations: 'Integrācijas',
        languages: 'Valodas',
        reviews: 'Atsauksmes',
        contact: 'Kontakti',
        book_demo: 'Pieteikt demo'
    },
    hero: {
        title_part1: 'Jūsu personīgais',
        title_gradient: 'AI zvanu vadītājs',
        title_part2: 'Globāla mēroga risinājums jebkurā valodā',
        description: 'Pārvērtiet sava uzņēmuma tālruņa sistēmu no izmaksu centra par jaudīgu izaugsmes dzinējspēku. Novērsiet gaidīšanas laiku un cilvēcisko faktoru kļūdas ar intelektuāliem AI aģentiem, kas spēj apstrādāt jebkuru zvanu apjomu.',
        book_demo: 'Pieteikt demo',
        try_demo: 'Izmēģināt demo zvanu',
        ai_capabilities: 'AI iespējas',
        real_time_call: 'Reāllaika zvani',
        fully_automate: 'Pilna automatizācija',
        call_breakdowns: 'Zvanu analīze'
    },
    features: {
        badge: 'Platformas funkcijas',
        title: 'Viss nepieciešamais balss operāciju automatizācijai',
        description: 'Mūsu AI aģenti ir apmācīti uz miljoniem zvanu, nodrošinot nevainojamu valodas prasmi un padziļinātu nozares ekspertīzi jau pirmajā dienā.',
        use_cases_title: 'Lietošanas scenāriji',
        use_cases_highlight: 'nozarēs',
        use_cases_desc: 'Uzziniet, kā Conekt AI aģenti strādā dažādos biznesa scenārijos',
        how_it_works_title: 'Kā tas',
        how_it_works_highlight: 'strādā',
        how_it_works_desc: 'Vienkārša uzstādīšana — izcili rezultāti. Ieviesiet AI aģentus dažu minūšu laikā.',
        self_service_title: 'Pašapkalpošanās platforma',
        self_service_desc: 'Konfigurējiet savu AI aģentu, izmantojot mūsu intuitīvo tīmekļa saskarni. Pielāgojiet atbildes, iestatiet biznesa noteikumus un uzsāciet darbu bez programmēšanas zināšanām.',
        full_service_title: 'Pilna servisa risinājums',
        full_service_desc: 'Mūsu komanda parūpēsies par visu — no konfigurācijas līdz ieviešanai. Mēs analizējam jūsu darba procesus un ieviešam ideālo risinājumu jūsu biznesam.',
        seamless_integration_title: 'Nevainojama integrācija',
        seamless_integration_desc: 'Savienojiet ar esošajām sistēmām: CRM, ERP, kalendāriem un nozarei specifiskām platformām. Divvirzienu datu sinhronizācija nodrošina vienmēr aktuālu informāciju.',
        deployment_process_title: 'Ieviešanas process',
        step_01_title: 'Aģenta izveide',
        step_01_desc: 'Definējiet sava aģenta personību, zināšanu bāzi un atbilžu modeļus',
        step_02_title: 'Testēšana un uzlabošana',
        step_02_desc: 'Veiciet testa zvanus, pārskatiet atšifrējumus un optimizējiet veiktspēju',
        step_03_title: 'Uzsākšana darba režīmā',
        step_03_desc: 'Sāciet darbu ar pārliecību — pārraugiet zvanus un veiciet korekcijas jebkurā laikā',
        analytics_badge: '• Visi zvani tiek ierakstīti',
        analytics_title: 'Zvanu ieraksti un analītika',
        analytics_desc: 'Katra saruna tiek atšifrēta, analizēta un saglabāta. Eksportējiet datus jebkurā formātā (XLS, CSV, JSON, PDF) vai automātiski sinhronizējiet tos ar savu CRM, kalendāru vai ERP.',
        analytics_tag1: 'Reāllaika analītika',
        analytics_tag2: 'Kalendāra sinhronizācija',
        analytics_tag3: 'CRM integrācija',
        analytics_tag4: 'Pielāgotas atskaites',
        realistic_badge: 'REĀLISTISKI',
        turing_test_text: 'Balss tehnoloģija, kas iztur',
        listen_samples: 'Tjūringa testu. Klausieties paraugus.',
        explore_more: 'Skatīt citas nozares',
        stop_demo: 'Apturēt demo',
        live_demo: 'Tiešraides demo',
        streaming_agent: 'Straumē {industry} balss aģentu...',
        sample_conversation: 'Sarunas paraugs: {sample}'
    },
    industries: {
        healthcare: {
            label: "Medicīna",
            demo: "Atskaņot medicīnas demo zvanu",
            sample: "Pacients pierakstās uz vizīti",
            title: "Pierakstīšanās uz medicīnas pakalpojumiem",
            desc: "AI aģents apstrādā pierakstus, atcelšanu, pārcelšanu un sūta automātiskus atgādinājumus. Integrējas ar EHR sistēmām (Epic, Cerner) un sūta SMS apstiprinājumus. Samazina neierašanos par 38%.",
            ops: [
                {
                    title: 'Pierakstu plānošana',
                    purpose: 'Pierakstīt, pārcelt un atcelt pacientu vizītes',
                    integrations: 'EHR/EMR (Epic, Cerner, Meditech), kalendāru sistēmas, SMS paziņojumi'
                },
                {
                    title: 'Recepšu atjaunošana',
                    purpose: 'Apstrādāt medikamentu recepšu atjaunošanas pieprasījumus',
                    integrations: 'Aptieku vadības sistēmas, e-recepšu platformas'
                },
                {
                    title: 'Apdrošināšanas pārbaude',
                    purpose: 'Pārbaudīt pacienta apdrošināšanas segumu un tiesības',
                    integrations: 'Apdrošināšanas norēķinu centri, maksātāju API'
                }
            ]
        },
        automotive: {
            label: "Auto nozare",
            demo: "Atskaņot auto nozares demo zvanu",
            sample: "Pieraksts uz servisa apkopi",
            title: "Auto servisa plānošana",
            desc: "Automatizēta 87% servisa pierakstu apstrāde, rezerves daļu pieprasījumi un apkopes atgādinājumi. Integrējas ar DMS sistēmām (CDK Global, Reynolds & Reynolds).",
            ops: [
                {
                    title: 'Servisa pierakstu plānošana',
                    purpose: 'Plānot apkopes, remontdarbus un servisa vizītes',
                    integrations: 'DMS (CDK Global, Reynolds & Reynolds), servisa plānotājs, kalendārs'
                },
                {
                    title: 'Rezerves daļu pieejamība',
                    purpose: 'Pārbaudīt rezerves daļu pieejamību un cenas',
                    integrations: 'DMS rezerves daļu modulis, detaļu katalogi, izplatītāju API'
                },
                {
                    title: 'Apkopes atgādinājumi',
                    purpose: 'Proaktīvi atgādinājumi, balstoties uz nobraukumu un apkopes vēsturi',
                    integrations: 'DMS servisa vēsture, klientu datu bāze, SMS/Balss platformas'
                }
            ]
        },
        realestate: {
            label: "Nekustamais īpašums",
            demo: "Atskaņot nekustamā īpašuma demo zvanu",
            sample: "Īpašuma apskates pieprasījums",
            title: "Interesentu vadība nekustamajā īpašumā",
            desc: "Kvalificējiet interesentus 24/7, plānojiet īpašumu apskates un atbildiet uz jautājumiem. Integrējas ar MLS sistēmām un CRM platformām.",
            ops: [
                {
                    title: 'Īpašuma apskates plānošana',
                    purpose: 'Plānot īpašumu izrādīšanu un atvērto durvju dienas',
                    integrations: 'MLS sistēmas, kalendāru sistēmas, apskašu plānošanas rīki'
                },
                {
                    title: 'Interesentu kvalificēšana',
                    purpose: 'Atlasīt potenciālos pircējus un apkopot prasības',
                    integrations: 'CRM systems (Follow Up Boss, kvCORE), interesentu vadības sistēmas'
                },
                {
                    title: 'Informācija par īpašumu',
                    purpose: 'Sniegt informāciju par īpašuma detaļām, cenu un pieejamību',
                    integrations: 'MLS datu bāzes, īpašumu vadības sistēmas'
                }
            ]
        },
        banking: {
            label: "Bankas",
            demo: "Atskaņot bankas demo zvanu",
            sample: "Bilances pārbaude",
            title: "Banku klientu apkalpošana",
            desc: "80% automatizācija bilances pieprasījumiem, karšu pakalpojumiem un maksājumu apstrādei. Atbilst GDPR un PCI-DSS prasībām.",
            ops: [
                {
                    title: 'Bilances un transakciju pārbaude',
                    purpose: 'Sniegt informāciju par konta atlikumu un darījumu vēsturi',
                    integrations: 'Bankas pamatdarbības sistēmas (Temenos, FIS, Fiserv), mobilās bankas API'
                },
                {
                    title: 'Karšu pakalpojumi',
                    purpose: 'Kartes aktivizēšana, PIN koda maiņa, kartes bloķēšana',
                    integrations: 'Karšu vadības sistēmas, krāpniecības apkarošanas sistēmas'
                },
                {
                    title: 'Krāpniecības brīdinājumi',
                    purpose: 'Pārbaudīt aizdomīgus darījumus un brīdinājumus',
                    integrations: 'Krāpniecības noteikšanas sistēmas, reāllaika analītikas platformas'
                }
            ]
        },
        ecommerce: {
            label: "E-komercija",
            demo: "Atskaņot e-komercijas demo zvanu",
            sample: "Pasūtījuma izsekošana",
            title: "E-komercijas atbalsts",
            desc: "85% automatizācija pasūtījumu izsekošanai, atgriešanai un preču jautājumiem. Spēj apstrādāt 300%+ noslodzes pieaugumu Melnajā piektdienā.",
            ops: [
                {
                    title: 'Pasūtījumu izsekošana',
                    purpose: 'Sniegt reāllaika informāciju par pasūtījuma statusu un piegādi',
                    integrations: 'E-komercijas platformas (Shopify, WooCommerce), piegādes dienestu API'
                },
                {
                    title: 'Atgriešana un apmaiņa',
                    purpose: 'Apstrādāt preču atgriešanas un apmaiņas pieprasījumus',
                    integrations: 'Atgriešanas vadības sistēmas, maksājumu procesori'
                },
                {
                    title: 'Informācija par produktu',
                    purpose: 'Atbildēt uz jautājumiem par produktiem un to specifikācijām',
                    integrations: 'Produktu katalogi, krājumu vadības sistēmas'
                }
            ]
        },
        restaurant: {
            label: "Restorāni",
            demo: "Atskaņot restorāna demo zvanu",
            sample: "Galdiņa rezervācija",
            title: "Restorānu rezervācijas",
            desc: "77% automatizācija rezervācijām, līdzi ņemšanas pasūtījumiem un galdiņu vadībai. Integrējas ar OpenTable, Resy, POS sistēmām.",
            ops: [
                {
                    title: 'Galdiņu rezervēšana',
                    purpose: 'Rezervēt, mainīt un apstiprināt galdiņu rezervācijas',
                    integrations: 'Rezervāciju sistēmas (OpenTable, Resy), POS integrācija'
                },
                {
                    title: 'Līdzi ņemšanas pasūtījumi',
                    purpose: 'Pieņemt pasūtījumus saņemšanai uz vietas vai piegādei',
                    integrations: 'POS sistēmas (Toast, Square, Clover), tiešsaistes pasūtījumu platformas'
                },
                {
                    title: 'Gaidīšanas laika pieprasījumi',
                    purpose: 'Sniegt informāciju par gaidīšanas laiku un vadīt rindu',
                    integrations: 'Rindu vadības sistēmas, viesu uzņemšanas sistēmas'
                }
            ]
        }
    },
    industries_section: {
        title_main: 'Nozares, kuras mēs',
        title_highlight: 'apkalpojam',
        subtitle: 'Visaptveroši risinājumi vairāk nekā 25 nozarēm ar specializētiem AI aģentiem',
        filter_all: 'Visas nozares',
        filter_healthcare: 'Medicīna',
        filter_business: 'Biznesa pakalpojumi',
        filter_retail: 'Mazumtirdzniecība',
        filter_automotive: 'Auto nozare',
        filter_hospitality: 'Viesmīlība',
        footer_text: "Neredzat savu nozari? Mēs varam izstrādāt pielāgotu risinājumu jebkuram biznesam.",
        cta_button: 'Atrast jūsu nozari',
        purpose_label: 'Mērķis:',
        integrations_label: 'Integrācijas:'
    },
    channels: {
        title_main: 'Vairāki saziņas',
        title_highlight: 'kanāli',
        subtitle: 'Sazinieties ar klientiem tur, kur viņiem ir ērtāk',
        batch_title: 'Masa zvanu kampaņas',
        batch_desc: 'Veiciet vērienīgas izejošo zvanu kampaņas ar tūkstošiem vienlaicīgu zvanu. Ideāli piemērots atgādinājumiem, paziņojumiem par apmaksu un mārketingam.',
        sip_title: 'SIP zvani',
        sip_desc: 'Standarta telefonijas integrācija ar jūsu esošajām tālruņu sistēmām. Atbalsts visiem lielākajiem VoIP pakalpojumu sniedzējiem un PBX sistēmām.',
        web_title: 'Tīmekļa zvani',
        web_desc: 'Zvani tieši no jūsu vietnes, izmantojot pārlūkprogrammu. Tālruņa numurs nav nepieciešams — klienti vienkārši nospiež pogu un sāk sarunu.',
        sms_title: 'SMS',
        sms_desc: 'Teksta saziņa ar pilnu konteksta izpratni. Apstiprinājumi, atgādinājumi un divvirzienu saziņa ar SMS starpniecību.',
        messengers_title: 'Mesendžeri',
        messengers_desc: 'Integrācija ar WhatsApp, Telegram, Facebook Messenger un citiem. Sasniedziet klientus viņu iecienītākajās platformās.',
        api_title: 'Pielāgots API',
        api_desc: 'Savienojiet ar praktiski jebkuru pielāgotu API. Bez šuvēm integrējiet AI aģentus savos unikālajos darba procesos un iekšējos rīkos.',
        integrations_title: 'Nevainojama integrācija',
        integrations_subtitle: 'Savienojieties ar saviem pašreizējiem rīkiem un sistēmām bez darba procesu pārtraukšanas'
    },
    composition: {
        title: 'Neatšķirami no realitātes.',
        subtitle: 'Ieklausieties paši. Sešas dažādas personības, viens jaudīgs AI kodols.',
        role_support: 'Atbalsts',
        role_sales: 'Pārdošana',
        role_scheduling: 'Plānošana',
        role_technical: 'Tehniskais',
        role_global: 'Globālais',
        role_executive: 'Biznesa',
        try_live_title: 'Izmēģiniet tiešraidē',
        try_live_subtitle: 'Pie zvaniet mūsu AI aģentiem tūlīt un pieredziet klientu apkalpošanas nākotni',
        agent_healthcare: 'Medicīnas aģents',
        agent_automotive: 'Auto nozares aģents',
        agent_realestate: 'Nekustamā īpašuma aģents',
        sub_healthcare: 'Pieteikt vizīti',
        sub_automotive: 'Plānot servisu',
        sub_realestate: 'Interesēties par īpašumu',
        neural_engine: 'Darbojas ar mūsu patentēto neironu balss dzinēju'
    },
    faq: {
        title_main: 'Jautājumi un',
        title_highlight: 'kontakti',
        subtitle: 'Viss, kas jums jāzina, lai uzsāktu darbu',
        get_in_touch: 'Sazināties ar mums',
        business_inquiries: 'Biznesa jautājumi',
        customer_support: 'Klientu atbalsts',
        integrations: 'Integrācijas',
        custom_integration_text: 'Nepieciešama īpaša integrācija?',
        ready_text: 'Vēlaties redzēt sistēmu darbībā?',
        book_demo_button: 'Pieteikt demo',
        q1: "Kā veidojas cenas?",
        a1: "Mēs piedāvājam elastīgu cenu noteikšanu, kas tiek pielāgota individuāli katram biznesam, balstoties uz zvanu apjomu un nepieciešamajām funkcijām. Uzņēmumu plāni ietver pielāgotas integrācijas un īpašu atbalstu. Sazinieties ar mums, lai saņemtu personīgu piedāvājumu.",
        q2: "Kādas valodas tiek atbalstītas?",
        a2: "Mēs atbalstām vairāk nekā 50 valodas, tostarp angļu, spāņu, vācu, franču, krievu, ķīniešu, japāņu, arābu un daudzas citas. Katra valoda ietver reģionālos akcentus un kultūras adaptāciju dabiskai saziņai.",
        q3: "Cik ilgu laiku aizņem uzstādīšana?",
        a3: "Pamata uzstādīšana aizņem 1-2 dienas. Jūs varat konfigurēt savu pirmo AI aģentu un sākt testēt dažu stundu laikā. Pilna ieviešana ar pielāgotām integrācijām parasti aizņem 1-2 nedēļas. Mūsu komanda parūpējas par visu procesu.",
        q4: "Vai sistēma atbilst HIPAA/GDPR standartiem?",
        a4: "Jā! Mēs pilnībā atbilstam HIPAA, GDPR, PCI-DSS un SOC 2 Type II standartiem. Visi zvani ir šifrēti, un mēs ievērojam stingrus datu apstrādes protokolus.",
        q5: "Vai varu pielāgot aģenta balsi un personību?",
        a5: "Noteikti! Jūs varat pielāgot balss toni, runas tempu, rakstura īpašības un saziņas stilu. Izvēlieties no vairāk nekā 50 balss iespējām vai izveidojiet unikālu sava zīmola balsi. Aģents var būt profesionāls, draudzīgs vai jebkurā citā stilā pēc jūsu izvēles.",
        q6: "Kas notiek, ja aģents nevar atbildēt uz jautājumu?",
        a6: "AI aģents nemanāmi nodod sarežģītus jautājumus personālam, nododot visu sarunas kontekstu. Jūs paši iestatāt eskalācijas noteikumus. Aģents var arī pieņemt ziņu vai ieplānot atzvanīšanu.",
        q7: "Kā es varu integrēt sistēmu ar savām esošajām programmām?",
        a7: "Mēs piedāvājam gatavas integrācijas ar vairāk nekā 100 populārām sistēmām (CRM, ERP, kalendāriem). Pielāgotām sistēmām mēs piedāvājam REST API un webhooks. Mūsu tehniskā komanda var palīdzēt ar izstrādi.",
        q8: "Vai jūs piedāvājat atbalstu un apmācību?",
        a8: "Jā! Visi plāni ietver e-pasta atbalstu. Premium un Enterprise plāni saņem īpašus kontu menedžerus, prioritāru tālruņa atbalstu un apmācību sesijas jūsu komandai."
    },
    footer: {
        talk_with_us: "Sazināties ar mums",
        customer_care: "Klientu atbalsts",
        product_title: "Produkts",
        industries_title: "Nozares",
        company_title: "Uzņēmums",
        use_cases: "Lietošanas piemēri",
        how_it_works: "Kā tas strādā",
        live_demo: "Tiešraides demo",
        channels: "Kanāli",
        integrations: "Integrācijas",
        healthcare: "Medicīna",
        automotive: "Auto nozare",
        realestate: "Nekustamais īpašums",
        banking: "Bankas",
        other: "Citi",
        testimonials: "Atsauksmes",
        faq: "BUJ",
        contact: "Kontakti",
        privacy: "Privātuma politika",
        terms: "Lietošanas noteikumi",
        copyright: "© 2026 CONEKT"
    },
    product_showcase: {
        worldwide_badge: "Visā pasaulē",
        global_reach_badge: "Globāls pārklājums",
        global_scale: "Globāls mērogs",
        title_part1: "Globāla balss,",
        title_gradient: "Vietējā valoda.",
        desc: "Novērsiet valodas barjeras acumirklī. Mūsu AI aģenti pārvalda vairāk nekā 50 valodas ar reģionālajiem akcentiem un padziļinātu kultūras izpratni, nodrošinot, ka jūsu zīmols jūtas kā vietējais katrā tirgū.",
        cta_button: "Klausīties paraugus",
        stat1_title: "Daudzvalodu kodols",
        stat1_value: "50+ valodas",
        stat1_sub: "Dzimtās valodas līmenis",
        stat2_title: "Tirgus paplašināšana",
        stat2_value: "Tūlītēji",
        stat2_sub: "Uzsāciet darbu globāli dažu minūšu laikā",
        stat3_title: "Uzticamība",
        stat3_value: "24/7/365",
        stat3_sub: "Darbība bez aiztures visā pasaulē"
    },
    testimonials: {
        title_main: "Mums uzticas",
        title_highlight: "tirgus līderi",
        stories_title: "Veiksmes stāsti",
        stories_subtitle: "Reāli darba procesi, ko nodrošina Conekt",
        t1_title: "Augsts ROI un efektivitāte",
        t1_text: "Ar 28 gadu pieredzi mēs zinām, cik svarīgi ir sekot līdzi laikam. Balss AI palielināja mūsu klientu piesaisti par 321%, tērējot tikai 1/10 daļu no iepriekšējā budžeta. AI ignorēšana vairs nav risinājums.",
        t2_title: "Profesionalitāte un stabilitāte",
        t2_text: "Aukstie zvani ir grūti cilvēciskās neparedzamības dēļ. AI aģents paveica izcilu darbu — nodrošināja konsekventus, profesionālus zvanus dažādās laika joslās un sasniedza rezultātus, kurus mēs uzskatījām par neiespējamiem.",
        t3_title: "Cilvēciska kvalitāte",
        t3_text: "Restorānu biznesā siltums un viesmīlība ir viss. AI zvani bija tik dabiski, ka klienti pat jautāja, vai varētu satikt to “jauko puisi”, ar kuru runāja! Tas palīdzēja mums izturēties pret katru klientu kā pret ģimenes locekli.",
        t4_title: "Jauns bizness un interesentu piesaiste",
        t4_text: "Kā jauns restorāns mēs atklājām, ka parastais e-pasta mārketings vairs nedarbojas. 1:1 personalizētais balss kontakts palīdzēja mums nodrošināt stabilu klientu plūsmu rekordīsā laikā.",
        t5_title: "Tehniskais atbalsts un loģistika",
        t5_text: "Loģistikā ir vitāli svarīgi uzturēt saziņu ar vadītājiem 24/7. AI aģents nemanāmi apstrādā sarežģītus jautājumus par kravām, nodrošinot vienotu risinājumu, kas pilnībā aizstāja mūsu privāto zvanu centru.",
        medical_title: "Medicīnas pieraksts",
        medical_step1_title: "Pacienta zvans",
        medical_step1_desc: "AI aģents atbild 24/7, apkopo informāciju par nepieciešamo vizītes veidu",
        medical_step2_title: "Pieraksta izveide",
        medical_step2_desc: "Dati sinhronizējas ar klīnikas EHR sistēmu un rezervē laiku",
        medical_step3_title: "Kalendāra sinhronizācija",
        medical_step3_desc: "Vizīte tiek automātiski pievienota pacienta Google/Outlook kalendāram",
        medical_step4_title: "Atgādinājuma zvans",
        medical_step4_desc: "AI aģents zvana 24h pirms vizītes, lai apstiprinātu ierašanos",
        auto_title: "Auto servisa cikls",
        auto_step1_title: "Klienta zvans",
        auto_step1_desc: "AI aģents pārbauda transportlīdzekļa vēsturi un pieejamos laikus",
        auto_step2_title: "DMS integrācija",
        auto_step2_desc: "Rezervācija sinhronizējas ar dīlera vadības sistēmu (CDK/Reynolds)",
        auto_step3_title: "SMS apstiprinājums",
        auto_step3_desc: "Klients saņem ziņu ar pieraksta informāciju un meistara-konsultanta vārdu",
        auto_step4_title: "Paziņojums par готовность",
        auto_step4_desc: "AI zvana, kad auto ir gatavs saņemšanai, un norāda kopējās izmaksas",
        restaurant_title: "Restorāna rezervācijas process",
        restaurant_step1_title: "Viesa zvans",
        restaurant_step1_desc: "AI aģents pārbauda galdiņu pieejamību vēlamajam cilvēku skaitam un laikam",
        restaurant_step2_title: "Galdiņš rezervēts",
        restaurant_step2_desc: "Rezervācija sinhronizējas ar OpenTable/Resy un restorāna POS sistēmu",
        restaurant_step3_title: "E-pasta apstiprinājums",
        restaurant_step3_desc: "Klients saņem apstiprinājumu ar visām rezervācijas detaļām",
        restaurant_step4_title: "Atgādinājums vizītes dienā",
        restaurant_step4_desc: "SMS atgādinājums tiek nosūtīts 2 stundas pirms rezervācijas"
    },
    multilingual_support: {
        title: "Patiesi universāls.",
        desc: "Nevainojama vairāk nekā 50 valodu pārvaldīšana ar reģionālajiem akcentiem un perfektu kultūras izpratni.",
        lang_english: "Angļu",
        lang_french: "Franču",
        lang_german: "Vācu",
        lang_japanese: "Japāņu",
        lang_spanish: "Spāņu",
        lang_british: "Britu angļu",
        lang_chinese: "Ķīniešu",
        lang_korean: "Korejiešu",
        lang_italian: "Itāļu",
        lang_portuguese: "Portugāļu",
        lang_russian: "Krievu",
        lang_turkish: "Turku",
        lang_hindi: "Hindi",
        lang_arabic: "Arābu",
        lang_dutch: "Nīderlandiešu",
        lang_swedish: "Zviedru",
        lang_portugal: "Portugāļu (Portugāle)",
        lang_mexico: "Spāņu (Meksika)",
        lang_canada: "Kanādas angļu",
        lang_australia: "Austrālijas angļu",
        lang_swiss: "Šveices",
        lang_polish: "Poļu",
        lang_vietnam: "Vjetnamiešu",
        lang_thai: "Taizemiešu",
        lang_indonesia: "Indonēziešu",
        lang_hebrew: "Ivrits",
        lang_greek: "Grieķu",
        lang_norway: "Norvēģu",
        lang_denmark: "Dāņu",
        lang_finland: "Somu",
        lang_belgium: "Beļģu",
        lang_austria: "Austriešu",
        lang_latvian: "Latviešu"
    },
    industries_page: {
        badge: "Maksimāls pārklājums",
        title_main: "Iespējas jūsu",
        title_highlight: "nozarei",
        description: "Izpētiet mūsu datu bāzi ar vairāk nekā 200 iepriekš apmācītām AI operācijām. Izvēlieties savu nozari, lai uzzinātu, kā mūsu aģenti var automatizēt jūsu darba procesus.",
        sidebar_title: "Izvēlieties nozari",
        custom_title: "Nepieciešams individuāls risinājums?",
        custom_desc: "Mēs varam apmācīt aģentu jūsu unikālajiem darba procesiem tikai 48 stundu laikā.",
        cta_button: "Sazināties ar pārdošanas nodaļu",
        search_placeholder: "Meklēt operācijas...",
        found_ops: "Atrastas {count} specializētas operācijas",
        inbound: "Iejošie",
        outbound: "Izejošie",
        tech_integrations: "Tehniskās integrācijas",
        more_labels: "un vēl {count}",
        no_results: "Rezultāti vaicājumam \"{query}\" kategorijā {industry} netika atrasti"
    }
};
