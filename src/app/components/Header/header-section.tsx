'use client'

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { PropsWithTranslations } from "@/interfaces/interfaces";
import { HeaderDictionary } from "@/types/types";
import { Paintbrush } from "lucide-react";
import { useTheme } from "next-themes";
import ColorIndicator, { ColorIndicatorProps } from "./color-indicator";

const themes: (Pick<ColorIndicatorProps, 'variant'> & { text: string })[] = [
  // { variant: 'red', text: 'Rojo' }, // FIXME: No pasa la prueba de contraste
  // { variant: 'rose', text: 'Rosa' }, // FIXME: No pasa la prueba de contraste 
  { variant: 'orange', text: 'Naranja' },
  { variant: 'green', text: 'Verde' },
  { variant: 'blue', text: 'Azul' },
  { variant: 'yellow', text: 'Amarillo' },
  // { variant: 'violet', text: 'Violeta' }, // FIXME: No pasa la prueba de contraste
]

export default function HeaderSection({
  translations = { brand: 'Josescap', customize: 'Personalizar' }
}: PropsWithTranslations<HeaderDictionary>) {
  const { setTheme, theme } = useTheme()
  const { brand, customize } = translations

  return (
    <header className="border-b z-50 fixed w-screen top-0 bg-background">
      <div className="max-w-7xl mx-auto w-11/12 py-4 flex flex-row justify-between items-center">
        <h2 className="uppercase text-md font-bold text-primary">{brand}</h2>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Paintbrush /> {customize}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="gap-y-4">
              {
                themes.map((t) => (
                  <DropdownMenuItem key={t.text} onClick={() => setTheme(t.variant ?? '')} className="gap-4">
                    <ColorIndicator variant={t.variant} active={theme === t.variant} /> {t.text}
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
