import { useEffect, useState } from "react";
import { PrimaryButton, SecondaryButton } from "./ui/buttons";
import Image from "next/image";

/*
  Componente: Banner
  Arquivo: src/components/banner.tsx

  Resumo:
  - Exibe a seção principal (hero) do site.
  - Contém imagem, título, texto dinâmico e botões de ação.
  - Implementa efeito de digitação (typewriter) com uso de estados e `useEffect`.
  - Alterna entre escrever e apagar o texto automaticamente.
*/

export default function Hero() {
  // Lista de textos que serão exibidos no efeito de digitação.
  const texts = ["Desenvolvo sites profissionais, rápidos e estratégicos que ajudam negócios a se destacarem no ambiente digital."]
  const [displayedText, setDisplayedText] = useState(""); // Estado que armazena o texto atualmente exibido.
  const [isDeleting, setIsDeleting] = useState(false); // Controla se o texto está sendo apagado.
  const [textIndex, setTextIndex] = useState(0); // Índice do texto atual dentro do array `texts`.
  const [charIndex, setCharIndex] = useState(0); // Índice do caractere atual sendo exibido.
 
  // useEffect responsável pelo efeito de digitação.
  useEffect(() => {
    const speed = isDeleting ? 50 : 150;
    const timeout = setTimeout(() => {
      const currentText = texts[textIndex];

      // Lógica para digitar o texto
      if (!isDeleting) {
      setDisplayedText(currentText.slice(0, charIndex + 1));
      setCharIndex(charIndex + 1);
        // Quando termina de escrever, espera antes de apagar
        if (charIndex + 1 === currentText.length) 
        {setTimeout(() => setIsDeleting(true), 3000);}
      } 
      
      // Lógica para apagar o texto
      else {
      setDisplayedText(currentText.slice(0, charIndex - 1));
      setCharIndex(charIndex - 1);
        // Quando termina de apagar, reinicia o ciclo
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length)
        }
      }
    }, speed);

    // Limpa o timeout para evitar efeitos colaterais
    return() => clearTimeout(timeout);
  }, [charIndex, isDeleting, texts]);

  return (
    <section className="mt-25 px-5 text-center flex flex-col items-center">
      <Image
      src={"/avatar.svg"}
      alt="Imagem de Maycon Vinícius | Dev"
      quality={100}
      width={320}
      height={320}/>

      <h1 className="font-extrabold text-3xl max-w-155 mt-7 mb-4 text-[#D9D9D9]">Criando experiências digitais que geram resultados reais para empresas e projetos independentes...</h1>
      <p className="pb-5 text-[18px] font-light font-mono max-w-140 text-[#C5C5C5]">{displayedText}<span className="animate-pulse">|</span></p>
     
     <div className="mt-2 flex gap-3">
        <PrimaryButton text="Ver Projetos"/>
        <SecondaryButton text="Fale Comigo"/>
     </div>
    </section>
  )
}