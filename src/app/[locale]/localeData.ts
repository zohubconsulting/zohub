// Tipos possíveis para os idiomas
export const supportedLocales = ['pt-br', 'en', 'es', 'hi', 'ja'] as const;
type Locale = typeof supportedLocales[number];

export const texts: Record<Locale, { hero: { title: string; description: string; descriptionHighlight: string; button: string } }> = {
  'pt-br': {
    hero: {
      title: 'Transforme sua gestão com soluções Zoho personalizadas',
      description: 'Consultoria especializada para implementar, automatizar e escalar sua operação com as',
      descriptionHighlight: 'ferramentas Zoho',
      button: 'Fale com um especialista',
    }
  },
  en: {
    hero: {
      title: 'Transform your management with customized Zoho solutions',
      description: 'Specialized consultancy to implement, automate, and scale your operations with',
      descriptionHighlight: 'Zoho tools',
      button: 'Talk to a specialist',
    }
  },
  ja: {
    hero: {
      title: 'カスタマイズされたZohoソリューションで管理を変革する',
      description: 'Zohoツールを使用して運用の実装、自動化、スケールアップを行う専門コンサルティング',
      descriptionHighlight: 'Zohoツール',
      button: '専門家に相談する',
    }
  },
  hi: {
    hero: {
      title: 'Zoho कस्टमाइज़ समाधान के साथ अपनी प्रबंधन प्रक्रिया को बदलें',
      description: 'Zoho उपकरणों के साथ अपनी प्रक्रियाओं को लागू करने, स्वचालित करने और स्केल करने के लिए विशेष परामर्श',
      descriptionHighlight: 'Zoho उपकरण',
      button: 'एक विशेषज्ञ से बात करें',
    }
  },
  es: {
    hero: {
      title: 'Transforma tu gestión con soluciones Zoho personalizadas',
      description: 'Consultoría especializada para implementar, automatizar y escalar tus operaciones con',
      descriptionHighlight: 'herramientas Zoho',
      button: 'Habla con un especialista',
    }
  }
};
