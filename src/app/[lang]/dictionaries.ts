'server only'

const dictionaries = {
  en: () => import('./dictionaries/en').then(module => module.default),
  es: () => import('./dictionaries/es').then(module => module.default),
}

export type DictionaryKind = keyof typeof dictionaries

export const getDictionary = async (locale: DictionaryKind = 'es') => await dictionaries[locale]()