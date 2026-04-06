import Image from "next/image";
import Menu from "../menu";
import Hero from "../hero";

/*
  Componente: Header
  Arquivo: src/components/sections/header.tsx

  Resumo:
  - Exibe uma imagem de fundo utilizando `next/image`.
  - Inclui o componente de navegação (Menu) e o banner principal.
  - Utiliza posicionamento relativo para permitir sobreposição de elementos.
*/

export default function Header() {
  return (
   <header className="pb-25 relative w-full">
      {/* Imagem de fundo do header */}
      <Image
      src="/initial/backgroundImage.svg"
      className="object-cover object-center -z-10"
      alt="Background"
      fill
      priority/>

      <Menu/>{/* Componente de navegação */}
      <Hero/>{/* Seção de apresentação */}
    </header>
  )
}