'use client'

import { DictionaryKind } from "@/app/[lang]/dictionaries";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { PropsWithTranslations } from "@/interfaces/interfaces";
import { HeaderDictionary } from "@/types/types";
import { FlagIcon, Paintbrush } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Flag from "react-world-flags";
import ColorIndicator, { ColorIndicatorProps } from "./color-indicator";

const themes: (Pick<ColorIndicatorProps, 'variant'> & { label: string })[] = [
  // { variant: 'red', text: 'Rojo' }, // FIXME: No pasa la prueba de contraste
  // { variant: 'rose', text: 'Rosa' }, // FIXME: No pasa la prueba de contraste 
  { variant: 'orange', label: 'Naranja' },
  { variant: 'green', label: 'Verde' },
  { variant: 'blue', label: 'Azul' },
  { variant: 'yellow', label: 'Amarillo' },
  // { variant: 'violet', text: 'Violeta' }, // FIXME: No pasa la prueba de contraste
]

const flags: Record<DictionaryKind, string> = {
  en: 'usa',
  es: 'esp'
}

const langs: { lang: DictionaryKind, label: string }[] = [
  { lang: 'en', label: 'ENG' },
  { lang: 'es', label: 'ESP' },
]

export default function HeaderSection({
  translations = { brand: 'Josescap', customize: 'Personalizar', lang: 'es' }
}: PropsWithTranslations<HeaderDictionary>) {
  const { setTheme, theme } = useTheme()
  const { brand, customize } = translations

  return (
    <header className="border-b z-50 fixed w-screen top-0 bg-background">
      <div className="max-w-7xl mx-auto w-11/12 py-4 flex flex-row justify-between items-center">
        <h2 className="uppercase text-md font-bold text-primary">{brand}</h2>
        <div className="flex flex-row gap-x-2">
          {/* SELECCION DE IDIOMA */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <FlagIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="gap-y-4 w-10">
              {
                langs.map(l => (
                  <Link href={`/${l.lang}`} key={l.lang}>
                    <DropdownMenuItem key={l.lang} className="gap-4 cursor-pointer">
                      <div className="w-6 h-6 flex items-center">
                        <Flag code={flags[l.lang]} height="16px" />
                      </div>
                      {l.label}
                    </DropdownMenuItem>
                  </Link>
                ))
              }
            </DropdownMenuContent>
          </DropdownMenu>
          {/* SELECCION DE TEMA */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Paintbrush /> {customize}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="gap-y-4">
              {
                themes.map((t) => (
                  <DropdownMenuItem key={t.label} onClick={() => setTheme(t.variant ?? '')} className="gap-4 cursor-pointer">
                    <ColorIndicator variant={t.variant} active={theme === t.variant} /> {t.label}
                  </DropdownMenuItem>
                ))
              }
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
