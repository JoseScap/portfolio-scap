'use client'

import { DictionaryKind } from "@/app/[lang]/dictionaries";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { PropsWithTranslations } from "@/interfaces/interfaces";
import { HeaderDictionary } from "@/types/types";
import { VariantProps } from "class-variance-authority";
import { ChevronsUpDown, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useId, useMemo, useState } from "react";
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
  const { brand, customize, description, colors, langs, lang, close } = translations
  const [sheet, setSheet] = useState(false)
  const langBaseId = useId()
  
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
              <Separator className="my-4" />
              <SheetFooter>
                <SheetClose
                  className="hover:bg-secondary/50 rounded-md py-2 px-4"
                >
                  {close}
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        {/* MENU PARA MOBILE ------------------------------------- */}
        <div className="block lg:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="secondary" size="icon">
                <Menu />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>{brand}</DrawerTitle>
                <DrawerDescription>{description}</DrawerDescription>
              </DrawerHeader>
              <Separator className="my-1 mx-2" />
              {/* SELECCION DE COLOR ---------------------------------------- */}
              <div className="p-2 gap-y-4 flex flex-col">
                <div className="px-2 flex items-center justify-between">
                  <h4 className="text-sm font-semibold">
                    {colors}
                  </h4>
                  <ColorIndicator active variant={selectedVariant?.variant} size="sm" />
                </div>
                <Select
                  value={selectedVariant?.variant ?? ''}
                  onValueChange={value => setTheme(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{colors}</SelectLabel>
                      {
                        THEMES.map((v)  => (
                          <SelectItem
                            key={v.variant ?? ''}
                            value={v.variant ?? ''}
                          >
                            {v.label}
                          </SelectItem>
                        ))
                      }
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Separator className="my-1 mx-2" />
              <div className="p-2 gap-y-4 flex flex-col">
                <div className="px-2">
                  <h4 className="text-sm font-semibold">
                    {langs}
                  </h4>
                </div>
                {
                  LANGS.map((l)  => (
                    <Link
                      id={`${langBaseId}-${l.lang}`}
                      href={`/${l.lang}`}
                      key={l.lang}
                      className="hidden"
                    >
                      {l.label} {`${langBaseId}-${l.lang}`}
                    </Link>
                  ))
                }
                <Select
                  value={selectedLang?.lang ?? ''}
                  onValueChange={value => document.getElementById(`${langBaseId}-${value}`)?.click()}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{langs}</SelectLabel>
                      {
                        LANGS.map((l)  => (
                          <SelectItem
                            key={l.lang}
                            value={l.lang ?? ''}
                          >
                            {l.label}
                          </SelectItem>
                        ))
                      }
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Separator className="my-1 mx-2" />
              <DrawerFooter>
                <DrawerClose 
                  className="hover:bg-secondary/50 rounded-md py-2"
                >
                  {close}
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  )
}
