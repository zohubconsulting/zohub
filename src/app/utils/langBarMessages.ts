// utils/langBarMessages.ts

export const langBarMessages = {
  'pt-br': {
    message: 'Detectamos que seu idioma é diferente do padrão.',
    action: (langName: string) => `Deseja alterar para ${langName}?`,
    note: 'Você pode trocar de idioma a qualquer momento',
    linkText: 'aqui',
  },
  en: {
    message: 'We detected that your language is different from the default.',
    action: (langName: string) => `Would you like to switch to ${langName}?`,
    note: 'You can change the language at any time',
    linkText: 'here',
  },
  ja: {
    message: 'お使いの言語がデフォルトと異なることを検出しました。',
    action: (langName: string) => `${langName}に変更しますか？`,
    note: '言語はいつでも変更できます',
    linkText: 'こちら',
  },
  hi: {
    message: 'हमने पाया कि आपकी भाषा डिफ़ॉल्ट से अलग है।',
    action: (langName: string) => `क्या आप ${langName} में बदलना चाहेंगे?`,
    note: 'आप कभी भी भाषा बदल सकते हैं',
    linkText: 'यहाँ',
  },
};
