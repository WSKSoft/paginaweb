import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WSKSoft - Conexión Sin Limites',
  description: 'Empresa tecnologica enfocada en el desarrollo de software, especializado en el desarrollo web y microservicios.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className='h-full'>
      <body className='h-full bg-white'>{children}</body>
    </html>
  )
}
