export interface Operation {
    name: string;
    type: string;
    purpose: string;
    integrations: string;
}

export interface SubSector {
    name: string;
    operations: Operation[];
}

export interface Industry {
    name: string;
    subSectors: SubSector[];
}

export const industriesData: Industry[] = [
    {
        name: "Healthcare",
        subSectors: [
            {
                name: "Hospitals & Clinics",
                operations: [
                    { name: "Appointment Scheduling", type: "Inbound", purpose: "Scheduling patient visits, managing doctor calendar, reducing 3.5 calls per booking to 1", integrations: "EHR/EMR (Epic, Cerner, Meditech, Allscripts), Calendar systems (Google, Outlook), SMS notification services, Patient portals" },
                    { name: "Rescheduling/Cancellation", type: "Inbound", purpose: "Rescheduling appointments, managing cancellations", integrations: "EHR/EMR systems, Calendar APIs, SMS confirmations" },
                    { name: "Prescription Refills", type: "Inbound", purpose: "Refilling medications, routing to pharmacy", integrations: "Pharmacy management systems, EHR prescription modules, E-prescribing systems" },
                    { name: "Lab Results", type: "Inbound", purpose: "Providing non-critical test results to patients", integrations: "Lab information systems (LIS), EHR results portal, Secure messaging" },
                    { name: "Insurance Verification", type: "Inbound", purpose: "Verifying insurance coverage, eligibility checks", integrations: "Insurance clearinghouses (Availity, Change Healthcare), Payer APIs, EHR insurance modules" },
                    { name: "Billing Inquiries", type: "Inbound", purpose: "Billing inquiries, payment arrangements", integrations: "Medical billing systems (Kareo, AdvancedMD), Payment processors, Patient accounting" },
                    { name: "Appointment Reminders", type: "Outbound", purpose: "Reducing no-shows, confirming appointments 24-48h before", integrations: "EHR appointment schedules, SMS/Voice notification platforms, Calendar integrations" },
                    { name: "Result Notifications", type: "Outbound", purpose: "Notifying patients of test results", integrations: "Lab systems, EHR, Secure messaging platforms" },
                    { name: "Satisfaction Surveys", type: "Outbound", purpose: "Collecting patient feedback, HCAHPS surveys", integrations: "Survey platforms, CRM systems, Quality management tools" }
                ]
            },
            {
                name: "Private Practices",
                operations: [
                    { name: "Consultation Scheduling", type: "Inbound", purpose: "Scheduling consultations with specialists", integrations: "Practice management software (Athenahealth, DrChrono), Calendars" }
                ]
            },
            {
                name: "Dental Practices",
                operations: [
                    { name: "Dental Appointment Scheduling", type: "Inbound", purpose: "Scheduling dental appointments, cleanings, procedures", integrations: "Dental practice management (Dentrix, Eaglesoft, Open Dental), Calendars, SMS" },
                    { name: "Visit Reminders", type: "Outbound", purpose: "Reducing no-shows for dental appointments", integrations: "Dental PM systems, Automated reminder services" }
                ]
            },
            {
                name: "Pharmacies",
                operations: [
                    { name: "Prescription Status", type: "Inbound", purpose: "Checking prescription status, refill readiness", integrations: "Pharmacy management systems (QS/1, PioneerRx), Prescription databases" },
                    { name: "Medication Delivery", type: "Inbound", purpose: "Coordinating home delivery of medications", integrations: "Pharmacy systems, Delivery management, Route optimization" }
                ]
            },
            {
                name: "Labs & Diagnostics",
                operations: [
                    { name: "Lab Test Scheduling", type: "Inbound", purpose: "Scheduling lab tests, specimen collection", integrations: "Lab information systems, Appointment scheduling" }
                ]
            }
        ]
    },
    {
        name: "Banking & Finance",
        subSectors: [
            {
                name: "Retail Banking",
                operations: [
                    { name: "Balance Inquiry", type: "Inbound", purpose: "Checking account balance, recent transactions", integrations: "Core banking systems (Temenos, FIS, Fiserv), Mobile banking APIs, Account databases" },
                    { name: "Transaction History", type: "Inbound", purpose: "Reviewing transaction history", integrations: "Core banking, Transaction databases, Mobile banking" },
                    { name: "Card Activation", type: "Inbound", purpose: "Activating new debit/credit cards", integrations: "Card management systems, Core banking, Mobile apps" },
                    { name: "PIN Reset", type: "Inbound", purpose: "Resetting card PIN codes", integrations: "Card management systems, IVR systems, Security protocols" },
                    { name: "Card Blocking", type: "Inbound", purpose: "Blocking lost/stolen cards", integrations: "Card management, Fraud systems, Real-time processing" },
                    { name: "Online Banking Support", type: "Inbound", purpose: "Technical support for online/mobile banking", integrations: "Digital banking platforms, Help desk systems, Knowledge bases" },
                    { name: "Fraud Alerts", type: "Outbound", purpose: "Fraud alert verification, suspicious activity confirmation", integrations: "Fraud detection systems, Real-time analytics, SMS/Voice platforms" },
                    { name: "Payment Reminders", type: "Outbound", purpose: "Payment due reminders, overdue notifications", integrations: "Core banking, Payment systems, CRM" },
                    { name: "Customer Surveys", type: "Outbound", purpose: "Customer satisfaction surveys, NPS collection", integrations: "Survey platforms, CRM (Salesforce, Dynamics)" }
                ]
            },
            {
                name: "Credit Cards",
                operations: [
                    { name: "Credit Card Activation", type: "Inbound", purpose: "Activating new credit cards", integrations: "Credit card platforms, Core banking" },
                    { name: "Loyalty Program", type: "Inbound", purpose: "Checking rewards points, redemption options", integrations: "Loyalty platforms, Rewards management" }
                ]
            },
            {
                name: "Loans & Mortgages",
                operations: [
                    { name: "Loan Application Status", type: "Inbound", purpose: "Checking loan/mortgage application status", integrations: "Loan origination systems (Encompass, Calyx Point), Document management" },
                    { name: "Pre-approval", type: "Inbound", purpose: "Pre-qualification questions, initial screening", integrations: "Credit bureaus APIs, Loan calculators, Decision engines" },
                    { name: "Payment Schedule", type: "Inbound", purpose: "Payment schedule inquiries, payoff quotes", integrations: "Loan servicing systems, Amortization calculators" }
                ]
            },
            {
                name: "Insurance (Financial)",
                operations: [
                    { name: "Quote Request", type: "Inbound", purpose: "Getting insurance quotes, policy information", integrations: "Insurance platforms, Quote engines, CRM" }
                ]
            }
        ]
    },
    {
        name: "E-commerce & Retail",
        subSectors: [
            {
                name: "Online Stores",
                operations: [
                    { name: "Order Tracking", type: "Inbound", purpose: "Checking order status, delivery ETA", integrations: "E-commerce platforms (Shopify, WooCommerce, Magento), Shipping APIs (FedEx, UPS, DHL), Order management systems" },
                    { name: "Product Information", type: "Inbound", purpose: "Product specifications, availability, pricing", integrations: "Product catalogs, Inventory management, PIM systems" },
                    { name: "Returns/Exchanges", type: "Inbound", purpose: "Processing returns, exchanges, refunds", integrations: "Return management systems, E-commerce platforms, Payment processors" },
                    { name: "Payment Issues", type: "Inbound", purpose: "Payment failures, alternative payment methods", integrations: "Payment gateways (Stripe, PayPal, Square), Fraud detection" },
                    { name: "Order Confirmation", type: "Outbound", purpose: "Order confirmation, payment confirmation", integrations: "E-commerce platforms, Email/SMS services, Order management" },
                    { name: "Delivery Notifications", type: "Outbound", purpose: "Shipping notifications, delivery updates", integrations: "Shipping carriers APIs, Tracking systems, Notification services" },
                    { name: "Abandoned Cart", type: "Outbound", purpose: "Cart abandonment follow-up, recovery", integrations: "E-commerce analytics, Marketing automation, CRM" }
                ]
            },
            {
                name: "Marketplaces",
                operations: [
                    { name: "Seller Order Status", type: "Inbound", purpose: "Multi-seller order management", integrations: "Marketplace platforms (Amazon, eBay APIs), Seller tools" }
                ]
            },
            {
                name: "Food Delivery",
                operations: [
                    { name: "Food Delivery Status", type: "Inbound", purpose: "Delivery ETA, driver location", integrations: "Delivery platforms (DoorDash, Uber Eats APIs), GPS tracking" },
                    { name: "Order Modification", type: "Inbound", purpose: "Modifying orders before preparation", integrations: "Restaurant POS, Order management, Kitchen display systems" }
                ]
            }
        ]
    },
    {
        name: "Real Estate",
        subSectors: [
            {
                name: "Agencies",
                operations: [
                    { name: "Property Inquiry", type: "Inbound", purpose: "Property details, pricing, availability", integrations: "MLS systems, Property databases, CRM (Follow Up Boss, kvCORE, LionDesk)" },
                    { name: "Viewing Scheduling", type: "Inbound", purpose: "Scheduling property viewings", integrations: "Calendar systems, MLS, Showing scheduling tools (ShowingTime)" },
                    { name: "Financing Questions", type: "Inbound", purpose: "Mortgage pre-qualification, financing options", integrations: "Mortgage calculators, Lender APIs, Financial tools" },
                    { name: "Neighborhood Information", type: "Inbound", purpose: "Neighborhood info, schools, amenities", integrations: "MLS data, Local databases, Google Maps API" },
                    { name: "FSBO Cold Calls", type: "Outbound", purpose: "Prospecting For Sale By Owner leads", integrations: "FSBO databases, Lead management, CRM" },
                    { name: "Expired Listings", type: "Outbound", purpose: "Following up on expired listings", integrations: "MLS expired listing data, CRM" },
                    { name: "Viewing Confirmation", type: "Outbound", purpose: "Confirming viewing appointments", integrations: "Calendar systems, SMS services, CRM" },
                    { name: "Price Updates", type: "Outbound", purpose: "Price drop notifications, new listings alerts", integrations: "MLS, Email/SMS marketing platforms, CRM" }
                ]
            },
            {
                name: "Property Management",
                operations: [
                    { name: "Maintenance Requests", type: "Inbound", purpose: "Tenant maintenance requests", integrations: "Property management software (AppFolio, Buildium, Propertyware), Work order systems" },
                    { name: "Leasing Questions", type: "Inbound", purpose: "Rent payment inquiries, lease questions", integrations: "Property management systems, Payment portals" }
                ]
            },
            {
                name: "Commercial Real Estate",
                operations: [
                    { name: "Investment Information", type: "Inbound", purpose: "Investment property inquiries, ROI calculations", integrations: "Commercial databases (CoStar, LoopNet), Financial modeling tools" }
                ]
            }
        ]
    },
    {
        name: "Insurance",
        subSectors: [
            {
                name: "Health Insurance",
                operations: [
                    { name: "Coverage Questions", type: "Inbound", purpose: "Coverage details, benefits verification", integrations: "Insurance platforms (Guidewire, Duck Creek), Payer systems, Member portals" },
                    { name: "Claim Status", type: "Inbound", purpose: "Checking claim status, processing timeline", integrations: "Claims management systems, EDI systems" },
                    { name: "Provider Network", type: "Inbound", purpose: "Finding in-network doctors, hospitals", integrations: "Provider directories, Network databases, APIs" },
                    { name: "Pre-authorization", type: "Inbound", purpose: "Pre-authorization for procedures", integrations: "Utilization management systems, Clinical databases" },
                    { name: "Claim Updates", type: "Outbound", purpose: "Claim status updates, payment notifications", integrations: "Claims systems, Payment processing, Notification platforms" },
                    { name: "Document Requests", type: "Outbound", purpose: "Missing documentation requests", integrations: "Document management, ECM systems, Secure messaging" }
                ]
            },
            {
                name: "Auto Insurance",
                operations: [
                    { name: "Accident Claim Filing", type: "Inbound", purpose: "Accident claim filing, initial report", integrations: "Claims systems, FNOL (First Notice of Loss), Photos/document upload" },
                    { name: "Policy Quotes", type: "Inbound", purpose: "Getting auto insurance quotes", integrations: "Rating engines, Underwriting systems, Quote platforms" }
                ]
            },
            {
                name: "Home/Property",
                operations: [
                    { name: "Damage Claim", type: "Inbound", purpose: "Property damage claims, theft reports", integrations: "Claims management, Adjuster dispatch, Photo capture" }
                ]
            },
            {
                name: "Life Insurance",
                operations: [
                    { name: "Policy Information", type: "Inbound", purpose: "Policy value, beneficiary changes", integrations: "Policy admin systems, Agent portals" }
                ]
            }
        ]
    },
    {
        name: "Automotive",
        subSectors: [
            {
                name: "Service Department",
                operations: [
                    { name: "Service Appointment", type: "Inbound", purpose: "Scheduling oil changes, repairs, maintenance", integrations: "DMS (CDK Global, Reynolds & Reynolds, DealerSocket), Service scheduling, Calendar" },
                    { name: "Repair Status", type: "Inbound", purpose: "Checking repair status, completion time", integrations: "DMS service module, Work order tracking" },
                    { name: "Service Pricing", type: "Inbound", purpose: "Service pricing inquiries, estimates", integrations: "DMS pricing, Parts catalogs, Labor guides" },
                    { name: "Warranty Questions", type: "Inbound", purpose: "Warranty coverage verification", integrations: "DMS warranty module, OEM warranty systems" },
                    { name: "Loaner Car Availability", type: "Inbound", purpose: "Loaner vehicle availability, rental cars", integrations: "DMS loaner management, Rental car APIs" },
                    { name: "Service Reminders", type: "Outbound", purpose: "Maintenance due reminders based on mileage/time", integrations: "DMS service history, Customer database, SMS/Voice" },
                    { name: "Appointment Confirmation", type: "Outbound", purpose: "Appointment confirmations 24h before", integrations: "DMS appointments, Calendar, SMS" },
                    { name: "Pickup Notification", type: "Outbound", purpose: "Vehicle ready for pickup notifications", integrations: "DMS work orders, SMS/Voice platforms" },
                    { name: "Recall Notifications", type: "Outbound", purpose: "Recall notifications from manufacturer", integrations: "OEM recall databases, DMS, Customer records" }
                ]
            },
            {
                name: "Sales (BDC)",
                operations: [
                    { name: "Vehicle Information", type: "Inbound", purpose: "Vehicle inventory, pricing, features", integrations: "DMS inventory module, Website integration" },
                    { name: "Test Drive Scheduling", type: "Inbound", purpose: "Scheduling test drives", integrations: "DMS appointment scheduling, Calendar" },
                    { name: "Trade-in Appraisal", type: "Inbound", purpose: "Trade-in value inquiries", integrations: "DMS appraisal tools, KBB/NADA APIs" }
                ]
            },
            {
                name: "Parts Department",
                operations: [
                    { name: "Part Availability", type: "Inbound", purpose: "Parts availability, pricing", integrations: "DMS parts module, Parts catalogs, Distributor APIs" },
                    { name: "Part Order Status", type: "Inbound", purpose: "Parts order status, delivery ETA", integrations: "DMS parts ordering, Supplier tracking" }
                ]
            }
        ]
    },
    {
        name: "Travel & Hospitality",
        subSectors: [
            {
                name: "Hotels",
                operations: [
                    { name: "Room Availability Check", type: "Inbound", purpose: "Room availability, rate inquiries", integrations: "PMS (Opera, Cloudbeds, Mews), Channel manager, Central reservation system" },
                    { name: "Room Reservation", type: "Inbound", purpose: "Making new reservations", integrations: "PMS, Booking engine, Payment gateway" },
                    { name: "Reservation Modification", type: "Inbound", purpose: "Modifying dates, room type, guest count", integrations: "PMS reservation module, Calendar management" },
                    { name: "Reservation Cancellation", type: "Inbound", purpose: "Processing cancellations per policy", integrations: "PMS, Payment processing, Refund systems" },
                    { name: "Amenities Information", type: "Inbound", purpose: "Hotel amenities, services, policies", integrations: "PMS property data, Website content" },
                    { name: "Reservation Confirmation", type: "Outbound", purpose: "Reservation confirmations", integrations: "PMS, Email/SMS platforms" },
                    { name: "Pre-arrival Call", type: "Outbound", purpose: "Pre-arrival calls, upgrade offers", integrations: "PMS guest profiles, Upsell platforms" },
                    { name: "Post-stay Survey", type: "Outbound", purpose: "Post-stay satisfaction surveys", integrations: "Guest feedback systems, Review platforms" }
                ]
            },
            {
                name: "Airlines",
                operations: [
                    { name: "Flight Status", type: "Inbound", purpose: "Flight status, delays, gate changes", integrations: "Airline reservation systems, Flight tracking APIs" },
                    { name: "Ticket Modification", type: "Inbound", purpose: "Ticket changes, cancellations", integrations: "GDS (Amadeus, Sabre), Airline systems" }
                ]
            },
            {
                name: "Travel Agencies",
                operations: [
                    { name: "Package Information", type: "Inbound", purpose: "Package tour information, pricing", integrations: "Booking systems, GDS, Tour operator platforms" }
                ]
            },
            {
                name: "Vacation Rentals",
                operations: [
                    { name: "Accommodation Information", type: "Inbound", purpose: "Property details, availability", integrations: "Vacation rental software (Guesty, Hostaway), Channel managers" }
                ]
            }
        ]
    },
    {
        name: "Logistics & Transportation",
        subSectors: [
            {
                name: "Freight & Shipping",
                operations: [
                    { name: "Shipment Tracking", type: "Inbound", purpose: "Shipment tracking, delivery ETA", integrations: "TMS (Transportation Management System: SAP TM, Oracle TMS), Carrier APIs, GPS tracking" },
                    { name: "Delivery Status", type: "Inbound", purpose: "Delivery status, location updates", integrations: "TMS, Real-time tracking, Route optimization" },
                    { name: "Pickup Scheduling", type: "Inbound", purpose: "Scheduling pickups", integrations: "TMS dispatch module, Calendar, Driver apps" },
                    { name: "Address Change", type: "Inbound", purpose: "Address changes, delivery instructions", integrations: "TMS, Route management, Driver communication" },
                    { name: "Document Request", type: "Inbound", purpose: "POD (Proof of Delivery), customs docs", integrations: "Document management, EDI systems, Customer portals" },
                    { name: "Rate Inquiries", type: "Inbound", purpose: "Rate quotes, pricing inquiries", integrations: "TMS rating engine, Tariff systems" },
                    { name: "Delivery Notifications", type: "Outbound", purpose: "Delivery notifications, attempted delivery alerts", integrations: "TMS, SMS/Email platforms, Customer notification systems" },
                    { name: "Pickup Confirmation", type: "Outbound", purpose: "Pickup confirmations", integrations: "TMS dispatch, Driver routing" }
                ]
            },
            {
                name: "Last-Mile Delivery",
                operations: [
                    { name: "Delivery Status", type: "Inbound", purpose: "Final mile delivery tracking", integrations: "Last-mile platforms (Onfleet, Bringg), GPS tracking" }
                ]
            },
            {
                name: "Warehousing",
                operations: [
                    { name: "Order Status", type: "Inbound", purpose: "Order fulfillment status", integrations: "WMS (Warehouse Management System), Inventory tracking" }
                ]
            }
        ]
    },
    {
        name: "Beauty & Wellness",
        subSectors: [
            {
                name: "Hair Salons",
                operations: [
                    { name: "Haircut Appointment", type: "Inbound", purpose: "Booking haircut appointments", integrations: "Salon software (Phorest, Vagaro, Booker, Square Appointments), Calendar" },
                    { name: "Rescheduling", type: "Inbound", purpose: "Rescheduling, cancellations", integrations: "Salon booking systems, SMS notifications" },
                    { name: "Service Inquiries", type: "Inbound", purpose: "Service descriptions, pricing", integrations: "Salon software service catalog" },
                    { name: "Visit Reminders", type: "Outbound", purpose: "Appointment reminders to reduce no-shows", integrations: "Salon software, SMS/Email automation" }
                ]
            },
            {
                name: "Spas",
                operations: [
                    { name: "Treatment Scheduling", type: "Inbound", purpose: "Booking spa treatments, massages", integrations: "Spa management software (Mindbody, Zenoti), Calendar" },
                    { name: "Package Information", type: "Inbound", purpose: "Spa package information, pricing", integrations: "Spa software, Service menus" }
                ]
            },
            {
                name: "Nail Salons",
                operations: [
                    { name: "Manicure Appointment", type: "Inbound", purpose: "Booking nail services", integrations: "Booking systems, Calendar" }
                ]
            },
            {
                name: "Barbershops",
                operations: [
                    { name: "Barber Appointment", type: "Inbound", purpose: "Booking barber appointments", integrations: "Barber shop software, Calendar integrations" }
                ]
            },
            {
                name: "Fitness Studios",
                operations: [
                    { name: "Class Booking", type: "Inbound", purpose: "Booking fitness classes, yoga sessions", integrations: "Studio management (Mindbody, ClassPass), Class scheduling" }
                ]
            }
        ]
    },
    {
        name: "Restaurants",
        subSectors: [
            {
                name: "Full-Service",
                operations: [
                    { name: "Table Reservation", type: "Inbound", purpose: "Table reservations", integrations: "Reservation systems (OpenTable, Resy, Yelp Reservations), POS integration" },
                    { name: "Reservation Modification", type: "Inbound", purpose: "Modifying reservations, party size changes", integrations: "Reservation platforms, Table management" },
                    { name: "Menu Inquiries", type: "Inbound", purpose: "Menu inquiries, dietary restrictions", integrations: "Digital menus, POS menu data" },
                    { name: "Wait Time", type: "Inbound", purpose: "Wait time inquiries, waitlist status", integrations: "Waitlist management (Nowait, Yelp), Host systems" },
                    { name: "Reservation Confirmation", type: "Outbound", purpose: "Reservation confirmations", integrations: "Reservation systems, SMS/Email" }
                ]
            },
            {
                name: "Takeout/Delivery",
                operations: [
                    { name: "Order Placement", type: "Inbound", purpose: "Placing takeout orders by phone", integrations: "POS systems (Toast, Square, Clover), Online ordering integration" },
                    { name: "Order Status", type: "Inbound", purpose: "Checking order preparation status", integrations: "POS, Kitchen display systems, Order tracking" },
                    { name: "Order Modification", type: "Inbound", purpose: "Modifying orders before preparation", integrations: "POS, Kitchen management" },
                    { name: "Ready Notification", type: "Outbound", purpose: "Order ready notifications for pickup", integrations: "POS, SMS/Push notification systems" }
                ]
            },
            {
                name: "Fast Food",
                operations: [
                    { name: "Drive-thru Order", type: "Inbound", purpose: "Drive-thru order taking", integrations: "POS with drive-thru module, Menu boards" }
                ]
            },
            {
                name: "Catering",
                operations: [
                    { name: "Catering Inquiry", type: "Inbound", purpose: "Catering inquiries, event planning", integrations: "Catering management software, CRM, Proposal tools" }
                ]
            }
        ]
    },
    {
        name: "Legal Services",
        subSectors: [
            {
                name: "Law Firms",
                operations: [
                    { name: "Initial Consultation", type: "Inbound", purpose: "Initial case inquiry, case type classification", integrations: "Legal CRM (Clio, Lawmatics, Filevine), Intake software (LawRuler)" },
                    { name: "Appointment Scheduling", type: "Inbound", purpose: "Scheduling consultations with attorneys", integrations: "Calendar (Clio Schedule), Attorney availability" },
                    { name: "Case Qualification", type: "Inbound", purpose: "Case qualification, information gathering", integrations: "Legal intake software (Caseopp, LCC), Case management" },
                    { name: "Case Status", type: "Inbound", purpose: "Case status updates", integrations: "Case management systems (Clio Manage, MyCase), Client portals" },
                    { name: "Document Request", type: "Inbound", purpose: "Document submission instructions", integrations: "Document management, Secure file sharing" },
                    { name: "Billing Inquiries", type: "Inbound", purpose: "Billing inquiries, payment arrangements", integrations: "Legal billing software, Payment processors" },
                    { name: "Meeting Reminders", type: "Outbound", purpose: "Appointment reminders", integrations: "Calendar systems, SMS/Email" },
                    { name: "Document Request", type: "Outbound", purpose: "Document request follow-ups", integrations: "Document management, Task tracking" }
                ]
            },
            {
                name: "Mass Tort",
                operations: [
                    { name: "Case Screening", type: "Inbound", purpose: "High-volume case screening", integrations: "Mass tort intake software, Lead management" }
                ]
            }
        ]
    },
    {
        name: "Education",
        subSectors: [
            {
                name: "Universities",
                operations: [
                    { name: "Program Information", type: "Inbound", purpose: "Degree programs, admission requirements", integrations: "Student Information System (SIS: Ellucian Banner, Oracle PeopleSoft), CRM (Slate, Salesforce)" },
                    { name: "Application Status", type: "Inbound", purpose: "Application status checks", integrations: "Admissions systems, Application portals" },
                    { name: "Financial Aid", type: "Inbound", purpose: "Financial aid, scholarship inquiries", integrations: "Financial aid systems, FAFSA integration" },
                    { name: "Tour Scheduling", type: "Inbound", purpose: "Campus tour scheduling", integrations: "Visit management systems, Calendar" },
                    { name: "Course Registration", type: "Inbound", purpose: "Course registration assistance", integrations: "SIS registration module, Course catalogs" },
                    { name: "Housing Information", type: "Inbound", purpose: "Housing inquiries, dorm assignments", integrations: "Housing management systems, Room selection portals" },
                    { name: "Deadline Reminders", type: "Outbound", purpose: "Application deadline reminders", integrations: "CRM campaigns, Marketing automation" },
                    { name: "Follow-up Calls", type: "Outbound", purpose: "Prospective student follow-up", integrations: "CRM, Call center software, Lead tracking" }
                ]
            },
            {
                name: "K-12 Schools",
                operations: [
                    { name: "School Enrollment", type: "Inbound", purpose: "Enrollment inquiries, registration", integrations: "School management systems, Registration portals" },
                    { name: "Absence Information", type: "Inbound", purpose: "Attendance reporting, absence notifications", integrations: "Student information systems, Attendance tracking" }
                ]
            },
            {
                name: "Online Courses",
                operations: [
                    { name: "Course Tech Support", type: "Inbound", purpose: "Course access, technical issues", integrations: "LMS (Canvas, Moodle, Blackboard), Help desk" }
                ]
            }
        ]
    },
    {
        name: "Telecommunications",
        subSectors: [
            {
                name: "Mobile/Fixed Line",
                operations: [
                    { name: "Bill Payment", type: "Inbound", purpose: "Bill payment, balance inquiries", integrations: "Billing systems (Amdocs, CSG), Payment gateways, IVR" },
                    { name: "Outage Reporting", type: "Inbound", purpose: "Service outage reporting, network issues", integrations: "Network management systems, Trouble ticketing" },
                    { name: "Plan Information", type: "Inbound", purpose: "Plan information, upgrade options", integrations: "Product catalogs, CRM, Billing systems" },
                    { name: "Tech Support", type: "Inbound", purpose: "Basic troubleshooting, device issues", integrations: "Knowledge bases, Diagnostic tools, Remote access" },
                    { name: "Equipment Order", type: "Inbound", purpose: "Device orders, SIM card requests", integrations: "Order management, Inventory systems, Shipping" }
                ]
            },
            {
                name: "Internet/Cable",
                operations: [
                    { name: "Connection Issues", type: "Inbound", purpose: "Internet connectivity troubleshooting", integrations: "Network diagnostic tools, Provisioning systems" },
                    { name: "Installation Scheduling", type: "Inbound", purpose: "Installation appointment scheduling", integrations: "Field service management, Technician dispatch" }
                ]
            }
        ]
    },
    {
        name: "Utilities",
        subSectors: [
            {
                name: "Electric/Gas/Water",
                operations: [
                    { name: "Balance Request", type: "Inbound", purpose: "Account balance, usage inquiries", integrations: "Utility billing systems (Oracle Utilities, SAP IS-U), Meter data management" },
                    { name: "Start/Stop Service", type: "Inbound", purpose: "Service connection, disconnection", integrations: "Customer information systems, Work order management" },
                    { name: "Payment", type: "Inbound", purpose: "Bill payment processing", integrations: "Payment systems, Multiple payment channels" },
                    { name: "Outage Reporting", type: "Inbound", purpose: "Outage reporting with location", integrations: "Outage management systems (OMS), GIS mapping, IVR with location" },
                    { name: "Usage Inquiries", type: "Inbound", purpose: "Usage pattern inquiries, high bill explanations", integrations: "Meter data analytics, Customer portals" },
                    { name: "Visit Scheduling", type: "Inbound", purpose: "Meter reading, service appointments", integrations: "Field service management, Scheduling" },
                    { name: "Outage Notifications", type: "Outbound", purpose: "Outage notifications, restoration updates", integrations: "OMS, Mass notification systems, SMS/Voice" },
                    { name: "Payment Reminders", type: "Outbound", purpose: "Bill due reminders, disconnect warnings", integrations: "Billing systems, Collections management" }
                ]
            }
        ]
    },
    {
        name: "Home Services",
        subSectors: [
            {
                name: "HVAC",
                operations: [
                    { name: "Emergency Repair", type: "Inbound", purpose: "Emergency heating/cooling service", integrations: "Field service management (ServiceTitan, Jobber, Housecall Pro), Dispatch" },
                    { name: "Service Scheduling", type: "Inbound", purpose: "Scheduling maintenance, repairs", integrations: "FSM software, Calendar, Technician scheduling" },
                    { name: "Price Quote", type: "Inbound", purpose: "Service pricing, estimates", integrations: "Pricing databases, Quote tools" },
                    { name: "Service Area Check", type: "Inbound", purpose: "Service area verification", integrations: "GIS mapping, Coverage databases" },
                    { name: "Maintenance Reminders", type: "Outbound", purpose: "Seasonal maintenance reminders", integrations: "FSM customer database, Marketing automation" }
                ]
            },
            {
                name: "Plumbing",
                operations: [
                    { name: "Emergency Call", type: "Inbound", purpose: "Emergency plumbing service", integrations: "FSM dispatch, GPS routing" },
                    { name: "Repair Scheduling", type: "Inbound", purpose: "Scheduling plumbing repairs", integrations: "FSM scheduling, Calendar" }
                ]
            },
            {
                name: "Electrical",
                operations: [
                    { name: "Emergency Electrical", type: "Inbound", purpose: "Emergency electrical service", integrations: "FSM dispatch, Priority routing" },
                    { name: "Job Scheduling", type: "Inbound", purpose: "Scheduling electrical work", integrations: "FSM, Permit tracking" }
                ]
            },
            {
                name: "Cleaning",
                operations: [
                    { name: "Cleaning Scheduling", type: "Inbound", purpose: "Scheduling cleaning services", integrations: "Cleaning software (ZenMaid, Housecall Pro), Route optimization" }
                ]
            }
        ]
    },
    {
        name: "Fitness & Gyms",
        subSectors: [
            {
                name: "Gyms",
                operations: [
                    { name: "Membership Information", type: "Inbound", purpose: "Membership plans, pricing", integrations: "Gym management (Mindbody, ClubReady, Glofox), Membership databases" },
                    { name: "Class Booking", type: "Inbound", purpose: "Booking fitness classes", integrations: "Class scheduling, Capacity management" },
                    { name: "Booking Cancellation", type: "Inbound", purpose: "Class cancellations, membership holds", integrations: "Membership management, Billing" },
                    { name: "Tour Scheduling", type: "Inbound", purpose: "Scheduling facility tours", integrations: "CRM, Tour scheduling, Sales tracking" },
                    { name: "Guest Pass", type: "Inbound", purpose: "Guest pass requests", integrations: "Access control systems, Visitor management" },
                    { name: "Class Reminders", type: "Outbound", purpose: "Class reminders, waitlist notifications", integrations: "Class management, SMS/Push notifications" }
                ]
            },
            {
                name: "Personal Training",
                operations: [
                    { name: "Trainer Booking", type: "Inbound", purpose: "Personal training session booking", integrations: "Trainer scheduling, Calendar" }
                ]
            }
        ]
    },
    {
        name: "Veterinary",
        subSectors: [
            {
                name: "Clinics",
                operations: [
                    { name: "Appointment Scheduling", type: "Inbound", purpose: "Scheduling vet appointments", integrations: "Veterinary software (Avimark, ezyVet, VetEnvi), Appointment scheduling" },
                    { name: "Pet Prescription", type: "Inbound", purpose: "Pet prescription refills", integrations: "Veterinary systems, Pharmacy integration" },
                    { name: "Emergency Triage", type: "Inbound", purpose: "Emergency pet care assessment", integrations: "Triage protocols, Emergency scheduling" },
                    { name: "General Questions", type: "Inbound", purpose: "General pet health questions", integrations: "Knowledge bases, Pet care info" },
                    { name: "Visit Reminders", type: "Outbound", purpose: "Appointment reminders, vaccination due", integrations: "Veterinary software, Automated reminders" },
                    { name: "Vaccination Reminders", type: "Outbound", purpose: "Vaccination schedule reminders", integrations: "Pet health records, Reminder systems" }
                ]
            }
        ]
    },
    {
        name: "Professional Services",
        subSectors: [
            {
                name: "Accounting",
                operations: [
                    { name: "Consultation Request", type: "Inbound", purpose: "Initial consultation scheduling", integrations: "Practice management (Karbon, Jetpack Workflow), CRM" },
                    { name: "Appointment Scheduling", type: "Inbound", purpose: "Appointment scheduling with accountant", integrations: "Calendar systems, Client portals" },
                    { name: "Document Instructions", type: "Inbound", purpose: "Document submission guidance", integrations: "Document management (ShareFile, SmartVault), Secure portals" },
                    { name: "Billing Inquiries", type: "Inbound", purpose: "Billing inquiries", integrations: "Accounting software, Invoicing systems" }
                ]
            },
            {
                name: "Consulting",
                operations: [
                    { name: "Consultation Request", type: "Inbound", purpose: "Consultation inquiries", integrations: "CRM, Proposal software" },
                    { name: "Meeting Scheduling", type: "Inbound", purpose: "Meeting scheduling", integrations: "Calendar, Video conferencing integration" }
                ]
            }
        ]
    },
    {
        name: "Recruiting & HR",
        subSectors: [
            {
                name: "Recruiting Agencies",
                operations: [
                    { name: "Job Vacancy Information", type: "Inbound", purpose: "Job opening information", integrations: "ATS (Applicant Tracking System: Greenhouse, Lever, iCIMS), Job boards" },
                    { name: "Application Status", type: "Inbound", purpose: "Application status inquiries", integrations: "ATS candidate tracking" },
                    { name: "Interview Scheduling", type: "Inbound", purpose: "Interview scheduling", integrations: "ATS scheduling, Calendar, Video interview platforms" },
                    { name: "Initial Screening", type: "Inbound", purpose: "Initial candidate screening questions", integrations: "ATS screening forms, Automated qualification" },
                    { name: "Interview Reminders", type: "Outbound", purpose: "Interview reminders, preparation instructions", integrations: "ATS, SMS/Email, Calendar invites" },
                    { name: "Follow-up Calls", type: "Outbound", purpose: "Candidate follow-up, status updates", integrations: "ATS, Candidate communication logs" }
                ]
            },
            {
                name: "Corporate HR",
                operations: [
                    { name: "Employee Inquiries", type: "Inbound", purpose: "Employee inquiries, HR questions", integrations: "HRIS (Workday, BambooHR, ADP), Employee self-service" }
                ]
            }
        ]
    },
    {
        name: "Property Management",
        subSectors: [
            {
                name: "Residential",
                operations: [
                    { name: "Maintenance Request", type: "Inbound", purpose: "Tenant maintenance requests", integrations: "Property management software (AppFolio, Buildium, Propertyware), Work order systems" },
                    { name: "Rent Inquiries", type: "Inbound", purpose: "Rent payment inquiries, lease questions", integrations: "Property management systems, Payment portals, Lease management" },
                    { name: "Viewing Scheduling", type: "Inbound", purpose: "Property showing scheduling", integrations: "Showing software, Calendar, Lockbox systems" },
                    { name: "Emergency Routing", type: "Inbound", purpose: "Emergency maintenance routing", integrations: "On-call systems, Vendor dispatch, Priority protocols" }
                ]
            },
            {
                name: "Commercial",
                operations: [
                    { name: "Space Information", type: "Inbound", purpose: "Commercial space inquiries", integrations: "Commercial property software, CRM" }
                ]
            }
        ]
    },
    {
        name: "Dental",
        subSectors: [
            {
                name: "Dental Offices",
                operations: [
                    { name: "Dentist Appointment", type: "Inbound", purpose: "Scheduling dental appointments", integrations: "Dental practice management (Dentrix, Eaglesoft, Open Dental), Calendar" },
                    { name: "Insurance Verification", type: "Inbound", purpose: "Dental insurance verification", integrations: "Insurance verification systems, Dental software insurance modules" },
                    { name: "Procedure Information", type: "Inbound", purpose: "Treatment information, pricing", integrations: "Treatment planning tools, Fee schedules" },
                    { name: "Visit Reminders", type: "Outbound", purpose: "Appointment reminders to reduce no-shows", integrations: "Dental PM systems, Automated reminder services" }
                ]
            },
            {
                name: "Orthodontics",
                operations: [
                    { name: "Braces Consultation", type: "Inbound", purpose: "Orthodontic consultation scheduling", integrations: "Ortho software, Treatment planning" }
                ]
            }
        ]
    },
    {
        name: "Government",
        subSectors: [
            {
                name: "DMV/Motor Vehicles",
                operations: [
                    { name: "DMV Appointment", type: "Inbound", purpose: "DMV appointment scheduling", integrations: "Government scheduling systems, Queue management" },
                    { name: "License Information", type: "Inbound", purpose: "License/permit information", integrations: "DMV databases, State systems" }
                ]
            },
            {
                name: "Permits & Licensing",
                operations: [
                    { name: "Permit Inquiry", type: "Inbound", purpose: "Permit inquiries, application status", integrations: "Permit tracking systems, Case management" }
                ]
            },
            {
                name: "Social Services",
                operations: [
                    { name: "Program Information", type: "Inbound", purpose: "Program eligibility, benefits information", integrations: "Benefits management systems, Eligibility systems" }
                ]
            },
            {
                name: "Public Services",
                operations: [
                    { name: "Application Status", type: "Inbound", purpose: "Application status checks", integrations: "Case management, Document tracking" }
                ]
            }
        ]
    },
    {
        name: "IT Support",
        subSectors: [
            {
                name: "Help Desk",
                operations: [
                    { name: "Password Reset", type: "Inbound", purpose: "Password reset requests", integrations: "Active Directory, IAM systems, MFA platforms" },
                    { name: "Ticket Creation", type: "Inbound", purpose: "IT ticket submission", integrations: "Help desk software (ServiceNow, Zendesk, Jira Service Management), Ticketing systems" },
                    { name: "Basic Diagnostics", type: "Inbound", purpose: "Basic troubleshooting", integrations: "Knowledge bases, Remote access tools, Diagnostic scripts" },
                    { name: "Software Inquiries", type: "Inbound", purpose: "Software inquiries, license questions", integrations: "Software asset management, License tracking" },
                    { name: "Ticket Status", type: "Inbound", purpose: "Ticket status updates", integrations: "Help desk systems, Status tracking" }
                ]
            },
            {
                name: "Managed Services",
                operations: [
                    { name: "System Monitoring", type: "Inbound", purpose: "System monitoring alerts", integrations: "RMM tools (ConnectWise, Datto), Monitoring platforms" }
                ]
            }
        ]
    },
    {
        name: "Entertainment",
        subSectors: [
            {
                name: "Theaters/Venues",
                operations: [
                    { name: "Event Information", type: "Inbound", purpose: "Event information, show times", integrations: "Ticketing systems (Ticketmaster, Eventbrite, AXS), Event management" },
                    { name: "Ticket Availability", type: "Inbound", purpose: "Ticket availability inquiries", integrations: "Ticketing platforms, Seating charts" },
                    { name: "Booking/Purchase", type: "Inbound", purpose: "Ticket booking, purchases", integrations: "Ticketing systems, Payment processing, Seat selection" },
                    { name: "Seating Information", type: "Inbound", purpose: "Seating information, accessibility", integrations: "Venue mapping, Seating databases" },
                    { name: "Event Reminders", type: "Outbound", purpose: "Event reminders, show time notifications", integrations: "Ticketing systems, SMS/Email platforms" }
                ]
            },
            {
                name: "Movie Theaters",
                operations: [
                    { name: "Showtime Schedule", type: "Inbound", purpose: "Movie showtimes, ticket availability", integrations: "Cinema management systems, Ticket sales" }
                ]
            },
            {
                name: "Concerts/Events",
                operations: [
                    { name: "Group Bookings", type: "Inbound", purpose: "Group ticket inquiries", integrations: "Group sales systems, CRM" }
                ]
            }
        ]
    }
];
