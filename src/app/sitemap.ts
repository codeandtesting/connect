import { Industry, industriesData } from './industries/data';
import { industriesDataRu } from './industries/data_ru';
import { industriesDataLv } from './industries/data_lv';

export default async function sitemap() {
    const baseUrl = 'https://conekt.ai';
    const lastModified = new Date();

    const staticRoutes = [
        '',
        '/terms',
        '/privacy',
    ];

    const entries = [];

    // Static routes in all languages
    staticRoutes.forEach(route => {
        entries.push({
            url: `${baseUrl}${route}`,
            lastModified,
            changeFrequency: 'weekly',
            priority: route === '' ? 1 : 0.5,
        });
    });

    // Dynamic industry routes based on our data
    // Even though it's a single page app route currently, 
    // we can help AI crawlers by listing them as virtual targets 
    // or improving the main Industries page indexing.
    entries.push({
        url: `${baseUrl}/industries`,
        lastModified,
        changeFrequency: 'daily',
        priority: 0.9,
    });

    return entries;
}
