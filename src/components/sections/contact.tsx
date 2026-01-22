'use client';
import { useState } from 'react';
import { Element } from 'react-scroll';
import { ButtonForm } from '../ui/buttons';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from 'react-hook-form';

const ContactSchema = z.object({
  name: z.string().min(3, { message: 'Precisa de pelo menos 3 letras' }).max(20, { message: 'O máximo de letras é 20' }),
  email: z.string().email({ message: 'Digite um e-mail válido...' }),
  whatsapp: z.string().refine((value) => /^[0-9]{11}$/.test(value), {message: 'Digite um número de telefone válido (somente números, 11 dígitos)'}),
  message: z.string().min(15, { message: 'Sua mensagem deve ser mais comprida' })
    .refine((value) => /^[a-zA-Z0-9\s.,!?()\[\]\-\u00C0-\u00FF]+$/.test(value),
    { message: 'A mensagem contém caracteres não aceitos' }),
});

type ContactFormType = z.infer<typeof ContactSchema>;

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormType>({ resolver: zodResolver(ContactSchema)});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const sendEmail: SubmitHandler<ContactFormType> = async (data) => {
    setStatus('loading');

    try {
      const res = await fetch('/php/send-email.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),});

      const result = await res.json();

      if (result.success) {
      setStatus('success'); 
      reset();}

      else {setStatus('error');}
    } 
    
    catch (error) {
    console.error(error);
    setStatus('error');}
  };

  return (
    <Element name="contact">
      <section className="bg-linear-to-r from-[#004369] to-[#0E7178] py-16">
        <div className="px-5">
          <div className="max-w-270 mx-auto">
            <h2 className="font-bold text-2xl text-[#F6F6F6]">CONTATO</h2>
            <p className="pt-2 text-[18px] text-[#F6F6F6]/50">Sinta-se à vontade para entrar em contato comigo, seja para conversar sobre suas dúvidas, dicas de livros, séries e filmes ou até mesmo para um bate-papo sobre sua ideia ou necessidade!</p>

            <form onSubmit={handleSubmit(sendEmail)} className="mt-8 [:not(:placeholder-shown)]:text-[#F6F6F6]/50 [:not(:placeholder-shown)]:text-sm">
              <input placeholder="Como você se chama?" type="text" {...register('name')} required
              className="w-full py-4 pl-4 rounded-lg bg-transparent border border-[#F6F6F6] focus:border-[#F6F6F6]/50 focus:outline-none focus:placeholder-[#F6F6F6]/80 placeholder:text-sm placeholder-[#F6F6F6]"/>
              {errors.name && <p className="text-red-200 text-sm ml-1 mt-1">{errors.name.message}</p>}

              <div className="my-4 grid gap-4 md:grid-cols-2">
                <div className="flex flex-col">
                  <input placeholder="Seu melhor e-mail..." type="email" {...register('email')} required
                  className="py-4 pl-4 rounded-lg bg-transparent border border-[#F6F6F6] focus:border-[#F6F6F6]/50 focus:outline-none focus:placeholder-[#F6F6F6]/80 placeholder:text-sm placeholder-[#F6F6F6]"/>
                  {errors.email && <p className="text-red-200 text-sm ml-1 mt-1">{errors.email.message}</p>}
                </div>
                
                <div className="flex flex-col">
                  <input placeholder="Agora seu Whatsapp..." type="tel" {...register('whatsapp')} required
                  className="py-4 pl-4 rounded-lg bg-transparent border border-[#F6F6F6] focus:border-[#F6F6F6]/50 focus:outline-none focus:placeholder-[#F6F6F6]/80 placeholder:text-sm placeholder-[#F6F6F6]"/>
                  {errors.whatsapp && <p className="text-red-200 text-sm ml-1 mt-1">{errors.whatsapp.message}</p>}
                </div>
              </div>

              <textarea placeholder="Fale um pouco sobre sua ideia ou necessidade!" {...register('message')} required
              className="w-full py-4 pl-4 rounded-lg bg-transparent border border-[#F6F6F6] focus:border-[#F6F6F6]/50 focus:outline-none focus:placeholder-[#F6F6F6]/80 placeholder:text-sm placeholder-[#F6F6F6]"/>
              {errors.message && <p className="text-red-200 text-sm ml-1 mt-1 mb-4">{errors.message.message}</p>}

              <ButtonForm type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'ENVIANDO...' : 'ENTRE EM CONTATO'}
              </ButtonForm>

              <div className="ml-1 mt-4">
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