import { useEffect, useState } from "react";
import { ButtonWhite } from "./buttons";

export default function Banner() {
  const texts = ["Vamos conversar sobre seu projeto...", "e dar vida à sua ideia?"]
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 50 : 150;
    const timeout = setTimeout(() => {
      const currentText = texts[textIndex];
      if (!isDeleting) {
      setDisplayedText(currentText.slice(0, charIndex + 1));
      setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentText.length) 
        {setTimeout(() => setIsDeleting(true), 1000);}
      } 
      
      else {
      setDisplayedText(currentText.slice(0, charIndex - 1));
      setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length)
        }
      }
    }, speed);

    return() => clearTimeout(timeout);
  }, [charIndex, isDeleting, texts]);

  return (
    <section className="text-center flex flex-col items-center">
      <h1 className="text-[#F6F6F6] pb-5 text-[20px] font-bold max-w-130">Criando experiências digitais que geram resultados reais para empresas e projetos independentes...</h1>
      <ButtonWhite text={displayedText}/>
    </section>
  )
}