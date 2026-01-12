import r1 from "../assets/results/result-1.png"
import r2 from "../assets/results/result-2.png"
import r3 from "../assets/results/result-3.png"
import r4 from "../assets/results/result-4.png"
import r5 from "../assets/results/result-5.png"
import r6 from "../assets/results/result-6.png"

import helena from '../assets/team/helena.png'
import lucas from '../assets/team/lucas.png'
import camila from '../assets/team/camila.png'



export interface NavItem {
  id: string
  label: string
}

export interface Treatment {
  category: string
  name: string
  benefit: string
  duration: string
  priceFrom: string
}

export interface Testimonial {
  name: string
  text: string
  source: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

export interface FAQItem {
  question: string
  answer: string
}
export interface ResultItem {
  image: string
}

export const navItems: NavItem[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'tratamentos', label: 'Tratamentos' },
  { id: 'resultados', label: 'Resultados' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'equipe', label: 'Equipe' },
  { id: 'contato', label: 'Contato' },
  { id: 'faq', label: 'FAQ' },
]

export const trustItems = [
  {
    label: "Profissionais habilitados",
    image: "/src/assets/misc/benefit-profissionais.png",
  },
  {
    label: "Protocolos seguros",
    image: "/src/assets/misc/benefit-protocolos.png",
  },
  {
    label: "Tecnologia de ponta",
    image: "/src/assets/misc/benefit-tecnologia.png",
  },
  {
    label: "Atendimento humanizado",
    image: "/src/assets/misc/benefit-atendimento.png",
  },
]



export const treatments: Treatment[] = [
  {
    category: 'Facial',
    name: 'Limpeza de pele premium',
    benefit: 'Renovacao suave com conforto e hidratacao imediata.',
    duration: '60 min',
    priceFrom: 'A partir de R$ 189',
  },
  {
    category: 'Facial',
    name: 'Peeling suave',
    benefit: 'Uniformiza o tom e melhora a textura da pele.',
    duration: '40 min',
    priceFrom: 'A partir de R$ 220',
  },
  {
    category: 'Facial',
    name: 'Microagulhamento',
    benefit: 'Estimula colageno e suaviza marcas.',
    duration: '60 min',
    priceFrom: 'A partir de R$ 390',
  },
  {
    category: 'Facial',
    name: 'Skinbooster / Hidratacao profunda',
    benefit: 'Reposicao intensa de hidratacao e vico.',
    duration: '50 min',
    priceFrom: 'A partir de R$ 550',
  },
  {
    category: 'Corporal',
    name: 'Drenagem linfatica',
    benefit: 'Alivia inchaco e ativa circulacao.',
    duration: '50 min',
    priceFrom: 'A partir de R$ 160',
  },
  {
    category: 'Corporal',
    name: 'Massagem modeladora',
    benefit: 'Define contornos e melhora a textura da pele.',
    duration: '50 min',
    priceFrom: 'A partir de R$ 170',
  },
  {
    category: 'Laser',
    name: 'Depilacao a laser',
    benefit: 'Reducao progressiva com tecnologia segura.',
    duration: 'Sessao',
    priceFrom: 'A partir de R$ 99',
  },
  {
    category: 'Facial',
    name: 'Rejuvenescimento facial',
    benefit: 'Restaura luminosidade e firmeza da pele.',
    duration: '60 min',
    priceFrom: 'A partir de R$ 450',
  },
  {
    category: "Spa",
    name: "Spa relaxante premium",
    benefit: "Relaxamento profundo com técnicas terapêuticas para corpo e mente.",
    duration: "60 min",
    priceFrom: "A partir de R$ 280",
  }


]
export const results: ResultItem[] = [
  { image: r1 },
  { image: r2 },
  { image: r3 },
  { image: r4 },
  { image: r5 },
  { image: r6 },
]


export const testimonials: Testimonial[] = [
  {
    name: 'Marina S.',
    text: 'Atendimento impecavel e resultados naturais. Me senti segura em todo o processo.',
    source: 'Google',
  },
  {
    name: 'Fernanda L.',
    text: 'Clinica sofisticada, equipe atenciosa e protocolos muito bem explicados.',
    source: 'Google',
  },
  {
    name: 'Paula R.',
    text: 'A avaliacao foi completa e o plano ficou totalmente personalizado.',
    source: 'Google',
  },
  {
    name: 'Carolina M.',
    text: 'Ambiente elegante, higienizacao impecavel e profissionais qualificados.',
    source: 'Google',
  },
  {
    name: 'Juliana A.',
    text: 'Me senti acolhida e confiante em cada etapa do tratamento.',
    source: 'Google',
  },
]

export const team: TeamMember[] = [
  {
    name: 'Dra. Helena Araujo',
    role: 'Dermatologista',
    bio: 'Especialista em harmonizacao facial e protocolos combinados.',
    image: '/src/assets/team/helena.png'
  },
  {
    name: 'Dr. Lucas Vieira',
    role: 'Dermatologista',
    bio: 'Foco em tecnologias a laser e rejuvenescimento seguro.',
    image: '/src/assets/team/lucas.png'
  },
  {
    name: 'Camila Duarte',
    role: 'Esteticista',
    bio: 'Atendimento humanizado e acompanhamento pre e pos-procedimento.',
    image:'/src/assets/team/camila.png'
  },
]

export const faq: FAQItem[] = [
  {
    question: 'Os procedimentos sao dolorosos?',
    answer: 'A maioria dos tratamentos possui minimo desconforto e conta com analgesia local quando necessario.',
  },
  {
    question: 'Quantas sessoes sao necessarias?',
    answer: 'A quantidade varia conforme o protocolo. Durante a avaliacao definimos o melhor plano para voce.',
  },
  {
    question: 'Ha tempo de recuperacao?',
    answer: 'Alguns procedimentos sao realizados com retorno imediato as atividades. Outros podem exigir cuidados simples.',
  },
  {
    question: 'Existem contraindicacoes?',
    answer: 'Sim, por isso realizamos anamnese detalhada para garantir seguranca.',
  },
  {
    question: 'A avaliacao e obrigatoria?',
    answer: 'Sim. A avaliacao garante que o protocolo seja adequado ao seu objetivo e perfil.',
  },
  {
    question: 'Quanto tempo duram os resultados?',
    answer: 'A duracao varia conforme o tratamento e manutencao. Orientamos um cronograma personalizado.',
  },
]

export const contact = {
  address: 'Av. Central, 1200 - Jardim Aurora, Sao Paulo',
  hours: 'Seg a Sab - 08h as 20h',
  phone: '(11) 4000-1234',
  whatsapp: '(11) 98888-7777',
  instagram: '@auraestetica',
}
