'use client'

import { DictionaryKind } from "@/app/[lang]/dictionaries";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { PropsWithTranslations } from "@/interfaces/interfaces";
import { HeaderDictionary } from "@/types/types";
import { VariantProps } from "class-variance-authority";
import { ChevronsUpDown, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useMemo, useState } from "react";
import Flag from "react-world-flags";
import ColorIndicator, { colorIndicatorVariants } from "./color-indicator";

const THEMES: (Pick<VariantProps<typeof colorIndicatorVariants>, 'variant'> & { label: string })[] = [
  // { variant: 'red', text: 'Rojo' }, // FIXME: No pasa la prueba de contraste
  // { variant: 'rose', text: 'Rosa' }, // FIXME: No pasa la prueba de contraste 
  { variant: 'orange', label: 'Naranja' },
  { variant: 'green', label: 'Verde' },
  { variant: 'blue', label: 'Azul' },
  { variant: 'yellow', label: 'Amarillo' },
  // { variant: 'violet', text: 'Violeta' }, // FIXME: No pasa la prueba de contraste
]

const FLAGS: Record<DictionaryKind, string> = {
  en: 'usa',
  es: 'esp'
}

const LANGS: { lang: DictionaryKind, label: string }[] = [
  { lang: 'en', label: 'English' },
  { lang: 'es', label: 'Español' },
]

export default function HeaderSection({
  translations
}: PropsWithTranslations<HeaderDictionary>) {
  const { setTheme, theme } = useTheme()
  const { brand, customize, description, colors, langs, lang } = translations
  const [sheet, setSheet] = useState(false)
  
  const [selectedVariant, otherVariants] = useMemo(() => {
    if (theme === undefined) return [null, null]

    const selectedVariant = THEMES.find((t) => t.variant === theme)
    const otherVariants = THEMES.filter((t) => t.variant !== theme)

    return [selectedVariant, otherVariants]
  }, [theme])

  const [selectedLang, otherLangs] = useMemo(() => {
    const selectedLang = LANGS.find((l) => l.lang === lang)
    const otherLangs = LANGS.filter((l) => l.lang !== lang)

    return [selectedLang, otherLangs]
  }, [lang])

  return (
    <header className="border-b z-50 fixed w-screen top-0 bg-background">
      <div className="max-w-7xl mx-auto w-11/12 py-4 flex flex-row justify-between items-center">
        <Link href="/" className="uppercase text-md font-bold text-primary">
          {brand}
        </Link>
        {/* MENU PARA DESKTOP ---------------------------- */}
        <div className="hidden lg:block">
          <Sheet open={sheet} onOpenChange={setSheet}>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>{brand}</SheetTitle>
                <SheetDescription>{description}</SheetDescription>
              </SheetHeader>
              <Separator className="my-4" />
              {/* SELECCION DE COLOR ---------------------------------------- */}
              <Collapsible className="space-y-2">
                <div className="flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-sm font-semibold">
                    {colors}
                  </h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                      <ChevronsUpDown className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                {
                  !!selectedVariant && (
                    <div className="rounded-md border-2 hover:bg-secondary border-primary px-4 py-3 flex flex-row gap-4 items-center font-mono text-sm cursor-pointer">
                      <ColorIndicator variant={selectedVariant.variant} active /> {selectedVariant.label}
                    </div>
                  )
                }
                <CollapsibleContent className="space-y-2">
                  {
                    !!otherVariants &&
                    otherVariants.length &&
                    otherVariants.map((v) => (
                      <div
                        onClick={() => setTheme(v.variant ?? '')}
                        key={v.variant}
                        className="rounded-md hover:bg-secondary px-4 py-3 flex flex-row gap-4 items-center font-mono text-sm cursor-pointer">
                        <ColorIndicator variant={v.variant} active /> {v.label}
                      </div>
                    ))
                  }
                </CollapsibleContent>
              </Collapsible>
              <Separator className="my-4" />
              {/* SELECCION DE IDIOMA --------------------------------------- */}
              <Collapsible className="space-y-2">
                <div className="flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-sm font-semibold">
                    {langs}
                  </h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                      <ChevronsUpDown className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                {
                  !!selectedLang && (
                    <Link
                      className="rounded-md border-2 border-primary px-4 py-3 flex flex-row gap-4 items-center font-mono text-sm"
                      href={`/${selectedLang.lang}`}
                    >
                      <div className="w-6 h-6 flex items-center">
                        <Flag code={FLAGS[selectedLang.lang]} height="16px" />
                      </div>
                      {selectedLang.label}
                    </Link>
                  )
                }
                <CollapsibleContent>
                  {
                    !!otherLangs &&
                    otherLangs.length &&
                    otherLangs.map((l) => (
                      <Link
                        key={l.lang}
                        className="rounded-md hover:bg-secondary px-4 py-3 flex flex-row gap-4 items-center font-mono text-sm"
                        href={`/${l.lang}`}
                      >
                        <div className="w-6 h-6 flex items-center">
                          <Flag code={FLAGS[l.lang]} height="16px" />
                        </div>
                        {l.label}
                      </Link>
                    ))
                  }
                </CollapsibleContent>
              </Collapsible>
            </SheetContent>
          </Sheet>
        </div>
        {/* MENU PARA MOBILE ------------------------------------- */}
        <div className="block lg:hidden">
          {/* <Drawer>
            <DrawerTrigger asChild>
              <Button variant="secondary" size="icon">
                <Menu />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <h3 className="uppercase text-md font-bold text-primary">{brand}</h3>
              </DrawerHeader>
            </DrawerContent>
          </Drawer> */}
          {/* <DropdownMenu>
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
          </DropdownMenu> */}
        </div>
      </div>
    </header>
  )
}
