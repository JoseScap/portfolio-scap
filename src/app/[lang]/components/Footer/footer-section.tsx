import { PropsWithTranslations } from "@/interfaces/interfaces";
import { FooterDictionary } from "@/types/types";

export default function FooterSection({ translations }: PropsWithTranslations<FooterDictionary>) {
  return (
    <footer className="bg-neutral-900">
      <div className="max-w-5xl mx-auto w-11/12 py-8">
        <p className="text-center font-bold">
          {translations.madeWith} <span className="text-primary">❤</span> {translations.byJosescap}
        </p>
      </div>
    </footer>
  )
}
