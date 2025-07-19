'use client';

import { SwiperProps, SwiperSlide } from "swiper/react";
import SwiperSlider from "@/components/ui/swiperSlider";

import { faqData } from "@/components/FAQ/faqData";
import FAQItem from "@/components/FAQ/faqItem";

import { Link } from "react-scroll";

export default function Page() {
	const settings: SwiperProps = {
		spaceBetween:14,
		breakpoints: { 640: {slidesPerView: 4}},
		autoplay: true,
		pagination: { clickable: true },
		loop: true 
	}

	return (
		<main className="text-center">
			<section className="max-w-4xl mx-auto">
				<div className="mx-5 py-14">
					<div>
						<p className="text-2xl text-blue font-semibold leading-tight">Transforme a tua vida em um <span className="bg-blue-cyan text-white px-3">fluxo de ultra produtividade e propósito</span>, sem esforço excessivo ou confusão.</p>
						<p className="text-lg text-black/80 mt-3">Nosso template é o impulso que faltava para tu sair da estagnação e conquistar uma jornada de crescimento constante, motivação real e evolução contínua. Chega de ficar parado, comece hoje a construir a vida que você deseja.</p>
						<img src="/pduImage1.png" style={{marginTop: '2rem', marginBottom: '3rem'}}/>
						<Link 
						to="checkout"
						smooth={true}
  					duration={500}
						offset={-30}
						className="text-white text-base font-bold bg-blue-cyan hover:bg-blue-cyan/80 mt-5 p-4 rounded-xl cursor-pointer">
							EU QUERO RESULTADOS REAIS!
						</Link>
					</div>
				
					<div className="mt-12">
						<p className="text-2xl text-blue font-semibold md:leading-relaxed leading-[41px]">Se sente preso em um <span className="text-blue-cyan border-blue-cyan border-2 px-2">ciclo de frustração e falta de direção</span>, sem conseguir <span className="text-blue-cyan border-blue-cyan border-2 px-2">organizar a vida</span> de maneira que realmente faça sentido?</p>
						<p className="text-lg text-black/80 mt-3">O Despertando Lendas vai transformar a tua vida de forma leve, prática e totalmente visual. Desenvolvido especialmente para pessoas que buscam mais clareza, foco e equilíbrio, esse sistema proporciona uma visão panorâmica da vida, ajudando a focar no que realmente importa. Imagine ter tudo o que é essencial, organizado, integrado e com progresso visível num único só lugar, tornando a jornada mais simples, prazerosa e alinhada ao teu propósito.</p>
						<img src="/pduImage2.png" style={{marginTop: '2rem', marginBottom: '2rem'}}/>
					</div>
				</div>
			</section> 

			<section className="bg-black/85 py-14 text-white">
				<div className="max-w-2xl mx-auto">
					<div className="mx-5">
						<p className="text-2xl font-semibold">O que tu vai conquistar com <br/>o Despertando Lendas?</p>

						<ul className="mt-5 py-5 text-base font-semibold bg-blue-cyan/80 rounded-tl-3xl rounded-br-3xl flex flex-col gap-3">
							<li>🧔🏾‍♂️ Crescimento pessoal</li>
							<li>💣 Redução da procrastinação</li>
							<li>🎯 Clareza de objetivos e metas</li>
							<li>💊 Criação de hábitos positivos</li>
							<li>🔥 Aumento da produtividade</li>
							<li>👨🏾‍💻 Crescimento profissional</li>
							<li>🕹️ Equilibrio entre a vida Pessoal <br/>e Profissional</li>
						</ul>
					</div>
				</div>
				
				<div className="max-w-4xl mx-auto mt-10">
					<div className="mx-5">
						<p className="text-lg">Um sistema completo e intuitivo para organizar tua vida de forma prática, estratégica e consciente, proporcionando mais clareza, foco e produtividade em tempo recorde. Liberte-se da bagunça e foque no que realmente importa.</p>
						
						<div className="md:grid md:grid-cols-3 md:gap-3 flex flex-col gap-3 mt-8 text-base font-semibold">
							<div className="bg-blue-cyan p-5 rounded-xl"><p>🎨 100% Personalizável</p></div>
							<div className="bg-blue-cyan p-5 rounded-xl col-span-2"><p>🎲 Design intuitivo e amigável</p></div>
							<div className="bg-blue-cyan p-5 rounded-xl col-span-3"><p>🚀 Foco em metas e produtividade</p></div>
							<div className="bg-blue-cyan p-5 rounded-xl col-span-2"><p>🖥️ Acessível de qualquer dispositivo</p></div>
							<div className="bg-blue-cyan p-5 rounded-xl"><p>🍾 Resultados tangíveis</p></div>
							<div className="bg-blue-cyan p-5 rounded-xl col-span-2 col-start-2"><p>🎧 Suporte técnico dedicado</p></div>
						</div>
					</div>
				</div>
			</section>

			<section className="text-blue py-14 mx-5">
				<div className="max-w-4xl mx-auto">
					<p className="text-2xl font-semibold">Cansado de acordar sem saber o que precisar se feito e terminar o dia se sentindo sobrecarregado e com pendencias que te desanimam? Então <span className="eading-relaxedl bg-blue-cyan text-white px-3">transforme tua rotina em uma jornada fluída, onde você se torna o protagonista da vida que sempre desejou</span>, com clareza, foco e controle total sobre seus objetivos.</p>
					
					<div className="sm:flex sm:gap-5 sm:items-center sm:justify-center inline-block mt-5">
						<div className="max-w-72">
							<img src="/manImage.png" alt="" className="bg-blue rounded-t-3xl p-16"/>
							<div className="border-b-2 border-l-2 border-r-2 border-blue p-5">
								<p className="text-lg mb-2 font-semibold">De confusão e estagnação…</p>

								<div className="text-start text-base">
									<p>🔴 ESTAGNAÇÃO</p>
									<p>🔴 CANSAÇO MENTAL</p>
									<p>🔴 COMO FAÇO ISSO?</p>
									<p>🔴 PUTZ, EU ESQUECI...</p>
									<p>🔴 ESTUDOS ATRASADOS</p>
									<p>🔴 O QUE EU FAÇO AGORA?</p>
									<p>🔴 DEMANDAS NÃO SUPRIDAS</p>
									<p>🔴 TAREFAS NÃO CONCLUIDAS</p>
									<p>🔴 DESORGANIZAÇÃO</p>
									<p>🔴 CONFUSÃO MENTAL</p>
									<p>🔴 IMPREVISTOS</p>
								</div>
							</div>
						</div>
						
						<span className="sm:flex sm:items-center inline-block my-4">❌</span>

						<div className="max-w-72">
							<img src="/manImage2.png" alt="" className="bg-blue rounded-t-3xl p-16"/>
							<div className="border-b-2 border-l-2 border-r-2 border-blue p-5">
								<p className="text-lg mb-2 font-semibold">Para clareza e <br/>evolução contínua.</p>
								<div className="text-start text-base">
									<p>🟢 ROTINAS PRODUTIVAS E REDUÇÃO DO CANSAÇO</p>
									<p>🟢 EQUILÍBRIO ENTRE A VIDA PESSOAL E PROFISSIONAL</p>
									<p>🟢 DESENVOLVIMENTO DE HÁBITOS POSITIVOS</p>
									<p>🟢 GESTÃO CLARA DE PROJETOS E TAREFAS</p>
									<p>🟢 CAMINHO MAIS CLARO ATÉ OS SEUS OBJETIVOS.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div className="mt-14">
					<p className="text-2xl text-blue-cyan font-semibold">O sistema certo para <br/>pessoas que desejam:</p>

					<ul className="font-semibold text-base max-w-md mx-auto py-8 mt-5 mb-8 flex flex-col gap-1 border-2 border-blue-cyan rounded-3xl">
						<li>✅ Crescimento pessoal</li>
						<li>✅ Parar de apagar incêndios</li>
						<li>✅ Crescimento profissional</li>
						<li>✅ Visualizar o seu progresso</li>
						<li>✅ Uma vida leve e equilibrada</li>
						<li>✅ Gerenciar a vida com eficácia</li>
						<li>✅ Clareza nos seus objetivos</li>
						<li>✅ Saber o que precisa ser feito</li>
						<li>✅ Aumentar a produtividade</li>
						<li>✅ Elevar o nível da organização</li>
						<li>✅ Sistemas descomplicados</li>
						<li>✅ Parar com a estagnação</li>
					</ul>

					<Link
					to="checkout"
					smooth={true}
					duration={500}
					offset={-30}
					className="font-bold text-base text-white bg-blue hover:bg-blue/80 p-4 rounded-xl cursor-pointer">
						CHEGA DE ADIAR MINHA EVOLUÇÃO!
					</Link>
				</div>
			</section>

			<section className="bg-black/90 text-center">
				<div className="py-14 mx-5">
					<p className="text-white text-2xl font-semibold">TUDO ISSO... <br/>te espera do outro lado!</p>
					<ul className="text-white text-base font-semibold mt-3 leading-loose max-w-xl mx-auto">
						<li className="bg-blue/90 rounded-xl py-2">Dashboard personalizável</li>
						<li className="bg-blue/90 rounded-xl py-2 my-3">Agenda pessoal e profissional</li>
						<li className="bg-blue/90 rounded-xl py-2">Sistema de gerenciamento de hábitos</li>
						<li className="bg-blue/90 rounded-xl py-2 my-3">Sistema de organização de viagens</li>
						<li className="bg-blue/90 rounded-xl py-2">Diário pessoal</li>
						<li className="bg-blue/90 rounded-xl py-2 my-3">Gestão de objetivos e metas</li>
						<li className="bg-blue/90 rounded-xl py-2">Planejamento de estudos e leituras</li>
						<li className="bg-blue/90 rounded-xl py-2 my-3">Sistema de controle de compras</li>
						<li className="bg-blue/90 rounded-xl py-2">Dados de acessos (logins e senhas)</li>
					</ul>

					<div className="mt-14 max-w-4xl mx-auto no-bullets">
						<div className="font-semibold mb-8">
							<p className="text-white text-2xl">Mais do que um sistema, <br/>uma vantagem real!</p>
							<p className="text-white/70">Complementos gratuitos que <br/>potencializam sua evolução:</p>
						</div>

						<SwiperSlider settings={settings}>
							<SwiperSlide>
								<span className="flex justify-center">
									<img src="/bonusImage1.png" className="rounded-xl"/>
								</span>
							</SwiperSlide>

							<SwiperSlide>
								<span className="flex justify-center">
									<img src="/bonusImage2.png" className="rounded-xl"/>
								</span>
							</SwiperSlide>

							<SwiperSlide>
								<span className="flex justify-center">
									<img src="/bonusImage3.png" className="rounded-xl"/>
								</span>
							</SwiperSlide>

							<SwiperSlide>
								<span className="flex justify-center">
									<img src="/bonusImage7.png" className="rounded-xl"/>
								</span>
							</SwiperSlide>

							<SwiperSlide>
								<span className="flex justify-center">
									<img src="/bonusImage4.png" className="rounded-xl"/>
								</span>
							</SwiperSlide>

							<SwiperSlide>
								<span className="flex justify-center">
									<img src="/bonusImage5.png" className="rounded-xl"/>
								</span>
							</SwiperSlide>

							<SwiperSlide>
								<span className="flex justify-center">
									<img src="/bonusImage6.png" className="rounded-xl"/>
								</span>
							</SwiperSlide>
						</SwiperSlider>
					</div>

					<div className="text-white max-w-md mx-auto mt-14" id="checkout">
						<p className="font-semibold text-2xl">Pague uma única vez, <br/>use para sempre!</p>
						<div className="bg-blue-cyan py-14 mt-8 rounded-xl shadow-2xl shadow-blue-cyan">
							<span className="font-semibold text-xl border-white border-b-2">TENHA ACESSO AO <br/>DESPERTANDO LENDAS</span>
							<p className="mt-3 mb-10 text-base font-semibold">Pelo investimento de:</p>
							
							<div className="flex flex-col justify-center gap-5 items-center">
								<span className="line-through text-white/80">R$129,99</span>
								<span className="font-semibold text-5xl">R$97,00</span>
								<p className="text-white/80">ou 12x 10,03</p>
							</div>

							<div className="text-white/80 font-bold my-10">
								<p className="border-t-2 w-72 mx-auto my-10"/>
								<p>✅ 7 DIAS DE GARANTIA</p>
								<p className="my-2">✅ 6 BÔNUS EXCLUSIVOS</p>
								<p>✅ SUPORTE VITALÍCIO</p>
							</div>
							
							<a 
							href="https://pay.kiwify.com.br/bUTI7Oj" 
							target="_blank" 
							rel="noopener noreferrer" 
							className="p-5 bg-white text-blue font-bold text-base rounded-lg">
								EU ESCOLHO UMA VIDA LENDÁRIA!
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="my-14 mx-5">
				<p className="text-blue text-xl font-bold mb-8">PERGUNTAS FREQUENTES!</p>
				{faqData.map((item, index) => (
        	<FAQItem 
					key={index} 
					question={item.question} 
					answer={item.answer}/>
      	))}
			</section>
		</main>
	)
}                                                                                                                                          