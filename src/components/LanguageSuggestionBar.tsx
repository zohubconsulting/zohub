'use client';

import { useRouter } from 'next/navigation';
import { langBarMessages } from '../app/utils/langBarMessages';
import { langLabels } from '../app/utils/langLabels';

type Props = {
  detectedLang: string;
  currentLocale: string;
};

export default function LanguageSuggestionBar({ detectedLang, currentLocale }: Props) {
  const router = useRouter();

  const messages = langBarMessages[detectedLang as keyof typeof langBarMessages] ?? langBarMessages['en'];
  const langName = langLabels[detectedLang] ?? detectedLang;

  return (
    <div className="w-full bg-yellow-100 border-b border-yellow-300 text-yellow-900 text-sm px-4 py-2 text-center">
      {messages.message}{' '}
      <button
        onClick={() => {
          localStorage.setItem('preferredLanguage', detectedLang);
          router.push(`/${detectedLang}`);
        }}
        className="ml-1 font-medium underline hover:cursor-pointer hover:text-yellow-800 transition"
      >
        {messages.action(langName)}
      </button>
      <span className="ml-2">
        {messages.note}&nbsp;
        <a
          href={`/${currentLocale}/langs`}
          className="underline hover:text-yellow-800 transition"
        >
          {messages.linkText}
        </a>.
      </span>
    </div>
  );
}
