import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center p-0 m-0 h-full'>
      <h1 className='font-bold text-4xl md:text-6xl lg:text-8xl'>WSK Soft</h1>
      <h2 className='text-2xl md:text-4xl lg:text-6xl'>Conexión sin limites</h2>
      <img src="build.gif" alt="WSK Soft - Sitio Web" className="object-cover"/> 
    </main>
  )
}
