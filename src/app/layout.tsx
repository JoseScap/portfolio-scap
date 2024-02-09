import { ThemeProvider } from '@/providers/theme-provider'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Josescap - Personal Page',
  description: 'Desarrollador Frontend con 4 años de experiencia. Experto en crear código robusto y escalable, con un fuerte énfasis en la mantenibilidad. Cuento con experiencia en el desarrollo e implementación de aplicaciones web y APIs RESTful. Busco con entusiasmo una oportunidad desafiante que enriquezca mi trayectoria profesional y me permita aportar un valor significativo.',
  keywords: ['Josescap', 'Portfolio', 'Next JS', 'Supabase'],
  authors: { name: 'Juan Jose Puente Scapolatempo', url: 'https://josescap.tech' }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
