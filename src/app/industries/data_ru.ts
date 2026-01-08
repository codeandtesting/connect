import { Industry } from './data';

export const industriesDataRu: Industry[] = [
    {
        name: "Healthcare",
        subSectors: [
            {
                name: "Больницы и клиники",
                operations: [
                    { name: "Запись на прием", type: "Inbound", purpose: "Планирование визитов пациентов, управление календарем врача, сокращение количества звонков на одну запись с 3.5 до 1", integrations: "EHR/EMR (Epic, Cerner, Meditech, Allscripts), Календари (Google, Outlook), SMS-уведомления, Порталы пациентов" },
                    { name: "Перенос/Отмена", type: "Inbound", purpose: "Изменение времени приема, обработка отмен", integrations: "Системы EHR/EMR, API календарей, SMS-подтверждения" },
                    { name: "Продление рецептов", type: "Inbound", purpose: "Оформление повторных рецептов, перенаправление в аптеку", integrations: "Системы управления аптеками, модули электронных рецептов EHR" },
                    { name: "Результаты анализов", type: "Inbound", purpose: "Предоставление пациентам результатов некритических тестов", integrations: "Лабораторные информационные системы (LIS), портал результатов EHR" },
                    { name: "Проверка страховки", type: "Inbound", purpose: "Проверка страхового покрытия и прав на обслуживание", integrations: "Страховые расчетные центры, API плательщиков" },
                    { name: "Вопросы по счетам", type: "Inbound", purpose: "Консультации по оплате, согласование графиков платежей", integrations: "Системы медицинского биллинга, платежные процессоры" },
                    { name: "Напоминания о приеме", type: "Outbound", purpose: "Снижение количества неявок, подтверждение записи за 24-48 часов", integrations: "Расписания EHR, платформы SMS/голосовых уведомлений" },
                    { name: "Уведомление о результатах", type: "Outbound", purpose: "Информирование пациентов о готовности анализов", integrations: "Лабораторные системы, EHR, платформы защищенного обмена сообщениями" }
                ]
            }
        ]
    },
    {
        name: "Banking & Finance",
        subSectors: [
            {
                name: "Розничное банковское обслуживание",
                operations: [
                    { name: "Запрос баланса", type: "Inbound", purpose: "Проверка остатка на счете и последних транзакций", integrations: "АБС (Temenos, FIS, Fiserv), API мобильного банкинга, базы данных счетов" },
                    { name: "История транзакций", type: "Inbound", purpose: "Просмотр истории операций", integrations: "АБС, базы транзакций, мобильный банкинг" },
                    { name: "Активация карты", type: "Inbound", purpose: "Активация новых дебетовых/кредитных карт", integrations: "Системы управления картами, АБС, мобильные приложения" },
                    { name: "Сброс ПИН-кода", type: "Inbound", purpose: "Смена или сброс ПИН-кодов карт", integrations: "Системы управления картами, IVR, протоколы безопасности" },
                    { name: "Блокировка карты", type: "Inbound", purpose: "Блокировка утерянных/украденных карт", integrations: "Управление картами, антифрод-системы, процессинг в реальном времени" },
                    { name: "Поддержка онлайн-банкинга", type: "Inbound", purpose: "Техническая помощь по работе с личным кабинетом и приложением", integrations: "Цифровые платформы, системы Help Desk, базы знаний" },
                    { name: "Оповещения о мошенничестве", type: "Outbound", purpose: "Подтверждение подозрительных операций и алерты безопасности", integrations: "Антифрод-системы, аналитика реального времени, SMS/Голос" }
                ]
            }
        ]
    },
    {
        name: "E-commerce & Retail",
        subSectors: [
            {
                name: "Интернет-магазины",
                operations: [
                    { name: "Отслеживание заказа", type: "Inbound", purpose: "Проверка статуса и примерного времени доставки", integrations: "E-commerce платформы (Shopify, WooCommerce, Magento), API служб доставки (FedEx, UPS, DHL), системы управления заказами" },
                    { name: "Информация о товаре", type: "Inbound", purpose: "Характеристики, наличие на складе, актуальные цены", integrations: "Каталоги товаров, управление запасами, PIM-системы" },
                    { name: "Возвраты и обмены", type: "Inbound", purpose: "Обработка заявок на возврат и замену товаров", integrations: "Системы управления возвратами, платежные шлюзы" },
                    { name: "Проблемы с оплатой", type: "Inbound", purpose: "Помощь при сбоях транзакций, выбор альтернативных способов оплаты", integrations: "Платежные шлюзы (Stripe, PayPal), антифрод-системы" },
                    { name: "Подтверждение заказа", type: "Outbound", purpose: "Оповещение об успешном создании и оплате заказа", integrations: "E-commerce платформы, SMS-сервисы" },
                    { name: "Уведомление о доставке", type: "Outbound", purpose: "Информирование об отправке и перемещении посылки", integrations: "API перевозчиков, системы трекинга" }
                ]
            }
        ]
    },
    {
        name: "Real Estate",
        subSectors: [
            {
                name: "Агентства недвижимости",
                operations: [
                    { name: "Запрос по объекту", type: "Inbound", purpose: "Детали объекта, цены, актуальность предложения", integrations: "MLS-системы, базы данных недвижимости, CRM (Follow Up Boss, kvCORE)" },
                    { name: "Запись на просмотр", type: "Inbound", purpose: "Планирование показов объектов", integrations: "Календари, MLS, инструменты планирования показов (ShowingTime)" },
                    { name: "Вопросы финансирования", type: "Inbound", purpose: "Консультация по ипотеке и вариантам оплаты", integrations: "Ипотечные калькуляторы, API кредитных организаций" },
                    { name: "Холодные звонки (FSBO)", type: "Outbound", purpose: "Поиск и квалификация собственников, продающих жилье самостоятельно", integrations: "Базы FSBO, управление лидами, CRM" },
                    { name: "Подтверждение показа", type: "Outbound", purpose: "Подтверждение встречи перед просмотром объекта", integrations: "Календари, SMS-сервисы, CRM" }
                ]
            }
        ]
    },
    {
        name: "Automotive",
        subSectors: [
            {
                name: "Сервисный отдел",
                operations: [
                    { name: "Запись на сервис", type: "Inbound", purpose: "Планирование ТО, ремонта и обслуживания", integrations: "DMS (CDK Global, Reynolds & Reynolds), планировщики сервиса, календари" },
                    { name: "Статус ремонта", type: "Inbound", purpose: "Проверка текущего состояния работ и времени готовности", integrations: "Модули DMS, системы трекинга заказ-нарядов" },
                    { name: "Цены на обслуживание", type: "Inbound", purpose: "Расчет стоимости работ и запчастей", integrations: "Прайс-листы DMS, каталоги запчастей, нормы времени" },
                    { name: "Напоминания о ТО", type: "Outbound", purpose: "Проактивные уведомления на основе пробега и истории владения", integrations: "История обслуживания DMS, клиентская база, SMS/Голос" },
                    { name: "Уведомление о готовности", type: "Outbound", purpose: "Оповещение клиента о завершении ремонта", integrations: "DMS, SMS/Голосовые платформы" }
                ]
            }
        ]
    },
    {
        name: "Restaurants",
        subSectors: [
            {
                name: "Полный сервис (FSR)",
                operations: [
                    { name: "Бронирование столика", type: "Inbound", purpose: "Резервирование столиков на нужное количество человек", integrations: "Системы бронирования (OpenTable, Resy), POS-системы" },
                    { name: "Информация о меню", type: "Inbound", purpose: "Консультации по блюдам и аллергенам", integrations: "Цифровые меню, данные POS" },
                    { name: "Время ожидания", type: "Inbound", purpose: "Узнать текущую загрузку и время ожидания", integrations: "Управление листами ожидания (Yelp), хост-системы" },
                    { name: "Заказы на вынос", type: "Inbound", purpose: "Прием заказов на самовывоз по телефону", integrations: "POS (Toast, Square, Clover), онлайн-заказы" }
                ]
            }
        ]
    },
    {
        name: "Insurance",
        subSectors: [
            {
                name: "Медицинское страхование",
                operations: [
                    { name: "Вопросы по покрытию", type: "Inbound", purpose: "Детали полиса, проверка льгот и выплат", integrations: "Страховые платформы (Guidewire, Duck Creek), личные кабинеты участников" },
                    { name: "Статус претензии", type: "Inbound", purpose: "Проверка состояния рассмотрения страхового случая", integrations: "Системы управления претензиями, EDI-системы" },
                    { name: "Поиск провайдера", type: "Inbound", purpose: "Поиск врачей и клиник в сети страховой компании", integrations: "Справочники провайдеров, базы данных сетей" },
                    { name: "Обновления по кейсу", type: "Outbound", purpose: "Информирование об изменении статуса выплаты", integrations: "Claims systems, уведомления" }
                ]
            }
        ]
    },
    {
        name: "Logistics & Transportation",
        subSectors: [
            {
                name: "Грузоперевозки",
                operations: [
                    { name: "Отслеживание груза", type: "Inbound", purpose: "Статус отправления и расчетное время прибытия", integrations: "TMS (SAP TM, Oracle), API перевозчиков, GPS-трекинг" },
                    { name: "Запрос документов", type: "Inbound", purpose: "Получение подтверждений доставки (POD) и таможенных документов", integrations: "Systems EDI, системы документооборота" },
                    { name: "Уведомление о доставке", type: "Outbound", purpose: "Оповещение о прибытии или попытке вручения", integrations: "TMS, SMS/Email платформы" }
                ]
            }
        ]
    },
    {
        name: "Legal Services",
        subSectors: [
            {
                name: "Юридические фирмы",
                operations: [
                    { name: "Первичная консультация", type: "Inbound", purpose: "Прием заявок, классификация типа дела", integrations: "Legal CRM (Clio, Lawmatics), софт для приема заявок (LawRuler)" },
                    { name: "Статус дела", type: "Inbound", purpose: "Информирование клиента о ходе процесса", integrations: "Системы управления делами, клиентские порталы" },
                    { name: "Напоминание о встрече", type: "Outbound", purpose: "Уведомление клиента о назначенной встрече с адвокатом", integrations: "Календари, SMS" }
                ]
            }
        ]
    },
    {
        name: "IT Support",
        subSectors: [
            {
                name: "Служба поддержки",
                operations: [
                    { name: "Сброс пароля", type: "Inbound", purpose: "Автоматизация запросов на восстановление доступа", integrations: "Active Directory, системы IAM, MFA платформы" },
                    { name: "Создание тикета", type: "Inbound", purpose: "Регистрация обращений в службу поддержки", integrations: "ServiceNow, Zendesk, Jira Service Management" },
                    { name: "Статус заявки", type: "Inbound", purpose: "Проверка прогресса решения IT-проблемы", integrations: "Help Desk системы, трекинг статусов" }
                ]
            }
        ]
    }
];
