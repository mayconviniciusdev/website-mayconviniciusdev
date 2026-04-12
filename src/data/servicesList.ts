import { faChartLine, faCode, faGlobe, faPalette, faPenRuler, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

/*
  Arquivo: src/data/servicesList.ts

  Resumo:
  - Contém a lista de serviços exibidos na seção "Services".
  - Cada item representa um serviço com título, descrição e ícone.
*/

// Lista de serviços oferecidos
export const servicesList = [
  {
    title: `CRIAÇÃO DE IDENTIDADE VISUAL`,
    description: "Desenvolvimento da identidade visual do projeto, definindo cores, tipografia e elementos gráficos que representam a marca e fortalecem sua presença digital.",
    icon: faPalette,
  },

  {
    title: "CRIAÇÃO DE LAYOUT",
    description: "Planejamento e design da interface do site, focado em estética, organização das informações e experiência do usuário.",
    icon: faPenRuler,
  },

  {
    title: "DESENVOLVIMENTO WEB",
    description: "Construção completa do site utilizando tecnologias modernas, garantindo performance, responsividade e estabilidade.",
    icon: faCode,
  },

  {
    title: "SEO E OTIMIZAÇÃO",
    description: "Aplicação de boas práticas de SEO para melhorar a estrutura do site e aumentar sua visibilidade nos mecanismos de busca.",
    icon: faChartLine,
  },

  {
    title: "HOSPEDAGEM E GESTÃO",
    description: "Configuração de hospedagem, domínio e gerenciamento técnico do site para manter sua presença online segura e estável.",
    icon: faGlobe,
  },

  {
    title: "MANUTENÇÃO E SUPORTE",
    description: "Serviços de manutenção, correções e melhorias contínuas para garantir o bom funcionamento e a atualização do site.",
    icon: faScrewdriverWrench,
  },
];