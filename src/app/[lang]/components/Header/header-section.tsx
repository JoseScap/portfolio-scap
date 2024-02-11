'use client'

import { DictionaryKind } from "@/app/[lang]/dictionaries";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { PropsWithTranslations } from "@/interfaces/interfaces";
import { HeaderDictionary } from "@/types/types";
import { VariantProps } from "class-variance-authority";
import { FlagIcon, Menu, Paintbrush } from "lucide-react";
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
  const { brand, homeLink, blogLink, description, colors, langs, lang, close } = translations
  const [sheet, setSheet] = useState(false)
  const langBaseId = useId()
  
  const [selectedVariant] = useMemo(() => {
    if (theme === undefined) return [null, null]

    const selectedVariant = THEMES.find((t) => t.variant === theme)
    const otherVariants = THEMES.filter((t) => t.variant !== theme)

    return [selectedVariant, otherVariants]
  }, [theme])

  const [selectedLang] = useMemo(() => {
    const selectedLang = LANGS.find((l) => l.lang === lang)
    const otherLangs = LANGS.filter((l) => l.lang !== lang)

    return [selectedLang, otherLangs]
  }, [lang])

  return (
    <header className="border-b z-50 fixed w-screen top-0 bg-background">
      <div className="max-w-7xl mx-auto w-11/12 py-4 flex flex-row justify-between items-center">
        <NavigationMenu>
          <NavigationMenuList className="space-x-2">
            <NavigationMenuItem>
              <Link href={`/${selectedLang?.lang ?? ''}`} className="uppercase text-md font-bold text-primary">
                <NavigationMenuLink>
                  {brand}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={`/${selectedLang?.lang ?? ''}`}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {homeLink}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="https://blog.josescap.tech/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {blogLink}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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
        {/* MENU PARA DESKTOP ---------------------------- */}
        <div className="hidden lg:block space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" className="gap-x-2">
                <FlagIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                {langs}
              </DropdownMenuLabel>
              <div className="space-y-1">
                <Separator />
                {
                  LANGS.map((l) => (
                    <DropdownMenuItem
                      key={l.lang}
                      className="cursor-pointer gap-x-2 hover:bg-secondary"
                      onClick={() => document.getElementById(`${langBaseId}-${l.lang}`)?.click()}
                    >
                      <div className="w-6 h-6 flex items-center">
                        <Flag code={FLAGS[l.lang]} height="16px" />
                      </div>
                      {l.label}
                    </DropdownMenuItem>
                  ))
                }
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" className="gap-x-2">
                <Paintbrush />
                <ColorIndicator size="md" variant={selectedVariant?.variant} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{colors}</DropdownMenuLabel>
              <div className="space-y-1">
                <Separator />
                {
                  THEMES.map((v) => (
                    <DropdownMenuItem
                      key={v.variant}
                      onClick={() => setTheme(v.variant ?? 'blue')}
                      className="cursor-pointer gap-x-2 hover:bg-secondary"
                    >
                      <ColorIndicator size="md" active={theme === v.variant} variant={v.variant} />
                      {v.label}
                    </DropdownMenuItem>
                  ))
                }
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* MENU PARA MOBILE ------------------------------------- */}
        <div className="block lg:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="secondary" size="icon" aria-label="Menu Button">
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
