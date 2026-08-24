'use client';
import { useState } from 'react';
import { Element } from 'react-scroll';
import { ButtonForm } from '../ui/buttons';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from 'react-hook-form';
import Image from 'next/image';

/*
  Componente: Contact
  Arquivo: src/components/sections/contact.tsx

  Resumo:
  - Seção de contato com formulário validado.
  - Utiliza `react-hook-form` + `zod` para validação de dados.
  - Envia os dados para um endpoint PHP via requisição POST.
  - Exibe feedback visual de envio (loading, sucesso ou erro).
*/

// Schema de validação do formulário utilizando Zod
const ContactSchema = z.object({
  name: z.string()
    .min(3, {message: 'Precisa de pelo menos 3 letras'})
    .max(20, {message: 'O máximo de letras é 20'}),

  email: z.string()
    .email({message: 'Digite um e-mail válido...'}),

  whatsapp: z.string()
    .refine(
      (value) => /^[0-9]{11}$/.test(value),
      {message: 'Digite um número de telefone válido (somente números, 11 dígitos)'}
    ),

  message: z.string()
    .min(15, {message: 'Sua mensagem deve ser mais comprida'})
    .refine(
      (value) => /^[a-zA-Z0-9\s.,!?()\[\]\-\u00C0-\u00FF]+$/.test(value),
      {message: 'A mensagem contém caracteres não aceitos'}
    ),
});

type ContactFormType = z.infer<typeof ContactSchema>; // Tipagem inferida automaticamente a partir do schema

export default function Contact() {
  const {register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormType>({ resolver: zodResolver(ContactSchema)}); // Hook do react-hook-form com integração do Zod
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle'); // Estado para controlar o status do envio do formulário

  // Função responsável por enviar os dados do formulário
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
    // Elemento âncora para navegação suave
    <Element name="contact">
      <section className='px-5 my-25'>
        <div className="flex flex-col items-center">
          {/* Título e descrição da seção */}
          <Image
          src="/initial/heading-contact.svg"
          alt="Contato"
          aria-hidden="true"
          quality={100}
          width={400}
          height={400}/>

          <p className="max-w-178 text-center text-[#191919] text-xl font-medium mt-4 my-10">Sinta-se à vontade para entrar em contato comigo, seja para conversar sobre suas dúvidas ou até mesmo para um bate-papo sobre sua ideia ou necessidade!</p>
        </div>

        {/* Formulário de contato */}
        <div className="max-w-215 mx-auto">
          <form onSubmit={handleSubmit(sendEmail)} className="[:not(:placeholder-shown)]:text-[#2F4F4F] [:not(:placeholder-shown)]:text-sm">
            {/* Campo nome */}
            <input
            required
            placeholder="Como você se chama?"
            type="text"
            {...register('name')}
            className="w-full py-4 pl-4 rounded-lg bg-transparent border border-[#004369] placeholder-[#2F4F4F] placeholder:text-sm
            focus:outline-none focus:border-[#004369]/50 focus:placeholder-[#2F4F4F]/80"/>
            {errors.name && <p className="text-red-200 text-sm ml-1 mt-1">{errors.name.message}</p>}

             {/* Campos email e whatsapp */}
            <div className="my-4 grid gap-4 md:grid-cols-2">
              <div className="flex flex-col">
                <input
                required
                placeholder="Seu melhor e-mail..."
                type="email"
                {...register('email')}
                className="py-4 pl-4 rounded-lg bg-transparent border border-[#004369] placeholder-[#2F4F4F] placeholder:text-sm
                focus:outline-none focus:border-[#004369]/50 focus:placeholder-[#2F4F4F]/80"/>
                {errors.email && <p className="text-red-200 text-sm ml-1 mt-1">{errors.email.message}</p>}
              </div>
              
              <div className="flex flex-col">
                <input
                required
                placeholder="Agora seu Whatsapp..."
                type="tel"
                {...register('whatsapp')}
                className="py-4 pl-4 rounded-lg bg-transparent border border-[#004369] placeholder-[#2F4F4F] placeholder:text-sm
                focus:outline-none focus:border-[#004369]/50 focus:placeholder-[#2F4F4F]/80"/>
                {errors.whatsapp && <p className="text-red-200 text-sm ml-1 mt-1">{errors.whatsapp.message}</p>}
              </div>
            </div>

            {/* Campo mensagem */}
            <textarea
            required
            placeholder="Fale um pouco sobre sua ideia..."
            {...register('message')} 
            className="w-full py-4 pl-4 rounded-lg bg-transparent border border-[#004369] placeholder-[#2F4F4F] placeholder:text-sm
            focus:outline-none focus:border-[#004369]/50 focus:placeholder-[#2F4F4F]/80"/>
            {errors.message && <p className="text-red-200 text-sm ml-1 mt-1 mb-4">{errors.message.message}</p>}

            {/* Botão de envio */}
            <ButtonForm type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'ENVIANDO...' : 'ENTRE EM CONTATO'}
            </ButtonForm>

            {/* Feedback de status */}
            <div className="ml-1 mt-4">
              {status === 'success' && (<p className="text-green-200">Mensagem enviada com sucesso!</p>)}
              {status === 'error' && (<p className="text-red-200">Erro ao enviar mensagem. Tente novamente!</p>)}
            </div>
          </form>
        </div>
      </section>
    </Element>
  );
}