import { Industry } from './data';

export const industriesDataLv: Industry[] = [
    {
        name: "Healthcare",
        subSectors: [
            {
                name: "Slimnīcas un klīnikas",
                operations: [
                    { name: "Pieraksta plānošana", type: "Inbound", purpose: "Pacientu vizīšu plānošana, ārstu kalendāra pārvaldība, zvanu skaita samazināšana no 3.5 līdz 1 uz vienu pierakstu", integrations: "EHR/EMR (Epic, Cerner, Meditech), kalendāri (Google, Outlook), SMS paziņojumi" },
                    { name: "Pārcelšana un atcelšana", type: "Inbound", purpose: "Vizīšu laiku maiņa vai atcelšana pēc pacienta pieprasījuma", integrations: "EHR sistēmas, kalendāru API, SMS apstiprinājumi" },
                    { name: "Recepšu pagarināšana", type: "Inbound", purpose: "Atkārtotu recepšu pieprasījumu apstrāde un nosūtīšana uz aptieku", integrations: "Aptieku vadības sistēmas, e-veselības moduļi" },
                    { name: "Analīžu rezultāti", type: "Inbound", purpose: "Informācijas sniegšana par gataviem analīžu rezultātiem", integrations: "Laboratoriju informācijas sistēmas (LIS), pacientu portāli" },
                    { name: "Apdrošināšanas pārbaude", type: "Inbound", purpose: "Pacienta polises derīguma un seguma pārbaude reāllaikā", integrations: "Apdrošinātāju platformas, norēķinu centri" },
                    { name: "Pieraksta atgādinājumi", type: "Outbound", purpose: "Neierašanās gadījumu samazināšana, zvanot 24-48h pirms vizītes", integrations: "EHR grafiki, balss/SMS ziņojumu platformas" }
                ]
            }
        ]
    },
    {
        name: "Banking & Finance",
        subSectors: [
            {
                name: "Mazumtirdzniecības banku pakalpojumi",
                operations: [
                    { name: "Konta atlikuma pieprasījums", type: "Inbound", purpose: "Informācijas sniegšana par konta bilanci un pēdējiem darījumiem", integrations: "Bankas pamatdarbības sistēmas (Core Banking), API" },
                    { name: "Kartes aktivizēšana", type: "Inbound", purpose: "Jaunu debeta vai kredītkaršu aktivizēšana pa tālruni", integrations: "Karšu vadības sistēmas, drošības protokoli" },
                    { name: "PIN koda maiņa", type: "Inbound", purpose: "Palīdzība karšu PIN kodu atiestatīšanā vai maiņā", integrations: "Karšu sistēmas, IVR drošības moduļi" },
                    { name: "Kartes bloķēšana", type: "Inbound", purpose: "Tūlītēja kartes bloķēšana nozaudēšanas vai zādzības gadījumā", integrations: "Karšu vadība, krāpniecības novēršanas rīki" },
                    { name: "Krāpniecības brīdinājumi", type: "Outbound", purpose: "Aizdomīgu darījumu apstiprināšana ar klientu", integrations: "Antifraud sistēmas, reāllaika analītika" }
                ]
            }
        ]
    },
    {
        name: "E-commerce & Retail",
        subSectors: [
            {
                name: "Interneta veikali",
                operations: [
                    { name: "Pasūtījuma izsekošana", type: "Inbound", purpose: "Informācijas sniegšana par pasūtījuma statusu un piegādes laiku", integrations: "E-komercijas platformas (Shopify, Magento), loģistikas API (Omniva, DPD, Itella)" },
                    { name: "Preču atgriešana", type: "Inbound", purpose: "Atgriešanas pieteikumu apstrāde un informācijas sniegšana par procesu", integrations: "Atgriešanas vadības sistēmas, maksājumu procesori" },
                    { name: "Informācija par pieejamību", type: "Inbound", purpose: "Konsultācijas par preču atlikumiem noliktavā", integrations: "Krājumu vadības sistēmas, PIM" }
                ]
            }
        ]
    },
    {
        name: "Real Estate",
        subSectors: [
            {
                name: "Nekustamā īpašuma aģentūras",
                operations: [
                    { name: "Apskates pieteikšana", type: "Inbound", purpose: "Īpašumu apskates laiku plānošana", integrations: "Kalendāru sistēmas, CRM (Pipedrive, Hubspot)" },
                    { name: "Interesentu kvalificēšana", type: "Inbound", purpose: "Sākotnējā pircēju prasību apkopošana un atlase", integrations: "Interesentu vadības platformas, CRM" },
                    { name: "Apskates apstiprināšana", type: "Outbound", purpose: "Atgādinājums un apstiprinājums pirms plānotās īpašuma apskates", integrations: "SMS platformas, CRM" }
                ]
            }
        ]
    },
    {
        name: "Automotive",
        subSectors: [
            {
                name: "Autoserviss",
                operations: [
                    { name: "Pieraksts uz servisu", type: "Inbound", purpose: "Tehniskās apkopes un remonta vizīšu plānošana", integrations: "DMS sistēmas, servisa plānotāji" },
                    { name: "Remonta statuss", type: "Inbound", purpose: "Informācijas sniegšana par darbu gaitu un gatavības laiku", integrations: "DMS darba uzdevumu moduļi" },
                    { name: "Apkopes atgādinājumi", type: "Outbound", purpose: "Paziņojumi par nepieciešamo eļļas maiņu vai tehnisko apskati", integrations: "Klientu datu bāzes, DMS vēsture" }
                ]
            }
        ]
    },
    {
        name: "Restaurants",
        subSectors: [
            {
                name: "Restorānu rezervācijas",
                operations: [
                    { name: "Galdiņa rezervēšana", type: "Inbound", purpose: "Rezervāciju pieņemšana, mainīšana un apstiprināšana", integrations: "OpenTable, Resy, POS integrācijas" },
                    { name: "Pasūtījumi līdzņemšanai", type: "Inbound", purpose: "Zvanu pieņemšana pasūtījumiem, ko klienti saņems uz vietas", integrations: "POS (Square, Clover), tiešsaistes platformas" }
                ]
            }
        ]
    },
    {
        name: "Logistics & Transportation",
        subSectors: [
            {
                name: "Kravu pārvadājumi",
                operations: [
                    { name: "Kravas izsekošana", type: "Inbound", purpose: "Reāllaika informācija par kravas atrašanās vietu un ETA", integrations: "TMS sistēmas, GPS trekinga API" },
                    { name: "Dokumentu pieprasījums", type: "Inbound", purpose: "Pavadzīmju (CMR) un piegādes apliecinājumu (POD) izsniegšana", integrations: "Dokumentu vadības sistēmas, EDI" },
                    { name: "Piegādes paziņojums", type: "Outbound", purpose: "Autovadītāju vai klientu informēšana par kravas piegādes laiku", integrations: "TMS, SMS/Balss paziņojumi" }
                ]
            }
        ]
    }
];
