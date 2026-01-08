"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, TranslationDict } from './types';
import { en } from './dictionaries/en';
import { ru } from './dictionaries/ru';
import { lv } from './dictionaries/lv';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationDict;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const dictionaries = { en, ru, lv };

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en');

    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && (savedLang === 'en' || savedLang === 'ru' || savedLang === 'lv')) {
            setLanguageState(savedLang);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: dictionaries[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }
    return context;
}
