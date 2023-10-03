import Image from 'next/image'
import emojiIcon from "../../public/emoji.svg";
import gifImage from "../../public/build.gif";


export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center p-0 m-0 h-full p-8 text-center'>
      <h1 className='font-bold text-4xl md:text-6xl lg:text-8xl uppercase'>WSK Soft</h1>
      <h2 className='text-2xl md:text-4xl lg:text-6xl'>Conexión sin límites</h2>
      <Image priority src={gifImage} alt="WSK Soft - Sitio Web" className="object-cover my-8"/>
       <p className='text-xl lg:text-3xl'>Estamos construyendo nuestro sitio web</p>
       <p className='text-xl lg:text-3xl flex flex-row gap-2'>
        <strong>¡ESPÉRANOS!</strong>
        <Image
          width={24}
          height={24}
          priority
          src={emojiIcon}
          alt="Emoji sonriente"
        />
      </p>
    </main>
  )
}
