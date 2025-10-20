import React, { createContext, useState, useEffect } from 'react';

// Define translations for each supported language
const translations = {
  en: {
    navTravel: 'Journey',
    navEvents: 'Upcoming Events',
    navAboutUs: 'About Us',
    headerWeAre: 'We are . . .',
    introduce: "",
    // Add more translations as needed
  },
  th: {
    navTravel: 'การเดินทาง',
    navEvents: 'กิจกรรมที่ต่อไป',
    navAboutUs: 'รู้จักพวกเรา',
    headerWeAre: 'พวกเราคือ . . .',
    introduce: "",
    
    // Add more translations as needed
  }
  // You can add more languages as needed
};

// Create the context
export const LanguageContext = createContext();

// Create the provider component
export const LanguageProvider = ({ children }) => {
  // Get initial language from localStorage or default to Thai
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem('language') || 'th'
  );

  // Save language choice to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
    // You can also set html lang attribute here
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  // Function to toggle between languages
  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'th' ? 'en' : 'th');
  };

  // Function to get translations
  const translate = (key) => {
    return translations[currentLanguage][key] || key;
  };

  // Create the value object with all needed properties and functions
  const contextValue = {
    language: {
      current: currentLanguage,
      toggleLanguage,
    },
    translate,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};