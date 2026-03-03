export interface TranslationKeys {
  nav: {
    home: string;
    whyIonyx: string;
    docs: string;
    examples: string;
    comparison: string;
    faq: string;
    resources: string;
  };
  common: {
    getStarted: string;
    learnMore: string;
    github: string;
    discord: string;
    documentation: string;
    frameworkComparison: string;
  };
  docs: {
    introduction: string;
    installation: string;
    quickStart: string;
    architecture: string;
    apiReference: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  features: {
    title: string;
    subtitle: string;
    minimalist: {
      title: string;
      description: string;
    };
    fast: {
      title: string;
      description: string;
    };
    secure: {
      title: string;
      description: string;
    };
  };
}

export const translations: Record<string, TranslationKeys> = {
  en: {
    nav: {
      home: 'Home',
      whyIonyx: 'Why Ionyx?',
      docs: 'Documentation',
      examples: 'Examples',
      comparison: 'Framework Comparison',
      faq: 'FAQ',
      resources: 'Resources',
    },
    common: {
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      github: 'GitHub',
      discord: 'Discord',
      documentation: 'Documentation',
      frameworkComparison: 'Framework Comparison',
    },
    docs: {
      introduction: 'Introduction',
      installation: 'Installation',
      quickStart: 'Quick Start',
      architecture: 'Architecture',
      apiReference: 'API Reference',
    },
    hero: {
      title: 'Desktop Application',
      subtitle: 'Without the Bloat',
      description: 'Ionyx is a minimalist framework for building modern desktop applications with Rust backend and agnostic frontend. 1.66MB single binary distribution.',
    },
    features: {
      title: 'Engineering Philosophy',
      subtitle: 'Minimalist by design, powerful by nature',
      minimalist: {
        title: 'Minimalist Design',
        description: 'Only what you need, nothing more. Sub-3MB runtime target.',
      },
      fast: {
        title: 'Lightning Fast',
        description: '<30ms startup time, 10-20MB memory usage.',
      },
      secure: {
        title: 'Secure by Default',
        description: 'Rust backend with system WebView for maximum security.',
      },
    },
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      whyIonyx: 'Neden Ionyx?',
      docs: 'Dokümantasyon',
      examples: 'Örnekler',
      comparison: 'Framework Karşılaştırması',
      faq: 'SSS',
      resources: 'Kaynaklar',
    },
    common: {
      getStarted: 'Hemen Başla',
      learnMore: 'Daha Fazla',
      github: 'GitHub',
      discord: 'Discord',
      documentation: 'Dokümantasyon',
      frameworkComparison: 'Framework Karşılaştırması',
    },
    docs: {
      introduction: 'Giriş',
      installation: 'Kurulum',
      quickStart: 'Hızlı Başlangıç',
      architecture: 'Mimari',
      apiReference: 'API Referansı',
    },
    hero: {
      title: 'Masaüstü Uygulama',
      subtitle: 'Hantallığına Son',
      description: 'Ionyx, Rust backend ve frontend-agnostik yapı ile modern masaüstü uygulamaları geliştirmek için tasarlanmış, minimalist bir framework\'tür. 1.66MB tek binary dağıtımı.',
    },
    features: {
      title: 'Mühendislik Felsefesi',
      subtitle: 'Tasarımda minimalist, doğada güçlü',
      minimalist: {
        title: 'Minimalist Tasarım',
        description: 'Sadece ihtiyacınız olan, fazlası yok. Sub-3MB runtime hedefi.',
      },
      fast: {
        title: 'Yıldırım Hızında',
        description: '<30ms başlangıç süresi, 10-20MB memory kullanımı.',
      },
      secure: {
        title: 'Varsayılan Olarak Güvenli',
        description: 'Maksimum güvenlik için Rust backend ve sistem WebView.',
      },
    },
  },
};

export function useTranslations(locale: string = 'en'): TranslationKeys {
  return translations[locale] || translations.en;
}

export function t(key: string, locale: string = 'en'): string {
  const keys = key.split('.');
  let value: any = translations[locale] || translations.en;
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}
