'use client';
import { useState } from 'react';

import { Element } from 'react-scroll';
import { ButtonWhite } from '../ui/button';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, email, whatsapp, message}) });

      const data = await res.json();

      if (data.success) 
      {setStatus('success');
      setName('');
      setEmail('');
      setWhatsapp('');
      setMessage('');} 
      else {setStatus('error');}
    } 
    
    catch (err)
    {console.error(err);
    setStatus('error');}
  };

  return (
    <Element name="contact">
      <section className="bg-gradient-to-r from-blue to-blue-cyan py-16">
        <div className="mx-5">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="font-bold text-2xl text-white">CONTATO</h2>
            <p className="py-2 text-base text-white/80">Sinta-se à vontade para entrar em contato comigo, seja para conversar sobre suas dúvidas, dicas de livros, séries e filmes ou até mesmo para um bate-papo sobre sua ideia ou necessidade!</p>

            <form onSubmit={handleSubmit} className="mt-8">
              <input
              placeholder="Como você se chama?"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-2 pl-4 mb-4 rounded-lg bg-transparent border border-white placeholder-white focus:outline-none focus:border-white/50 focus:placeholder-white"
              required/>

              <div className="grid gap-4 md:grid-cols-2">
                <input
                placeholder="Seu melhor e-mail..."
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-2 pl-4 rounded-lg bg-transparent border border-white placeholder-white focus:outline-none focus:border-white/50 focus:placeholder-white"
                required/>

                <input
                placeholder="Agora seu Whatsapp..."
                type="tel"
                id="whatsapp"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="py-2 pl-4 rounded-lg bg-transparent border border-white placeholder-white focus:outline-none focus:border-white/50 focus:placeholder-white"
                required/>
              </div>

              <textarea
              placeholder="Fale um pouco sobre sua ideia ou necessidade!"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full py-2 pl-4 my-4 rounded-lg bg-transparent border border-white placeholder-white focus:outline-none focus:border-white/50 focus:placeholder-white"
              required/>
              
              <ButtonWhite
              type="submit"
              disabled={status === 'loading'}>
                {status === 'loading' ? 'ENVIANDO...' : 'ENTRE EM CONTATO'}
              </ButtonWhite>

              <div className="mt-4">
                {status === 'success' && (<p className="text-green-200">Mensagem enviada com sucesso!</p>)}
                {status === 'error' && (<p className="text-red-200">Erro ao enviar mensagem. Tente novamente.</p>)}
              </div>
            </form>
          </div>
        </div>
      </section>
    </Element>
  );
}