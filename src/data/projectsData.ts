type ProjectsType = {
  title: string;
  description: string;
  image: string;
  link: string;
  techs: string[];
};

export const ProjectsData: ProjectsType[] = [
  {
    title: "powerblessed",
    description:
      "Uma landing page moderna desenvolvida para apresentar os serviços e sanar dúvidas.",
    image: "https://i.imgur.com/ZWsBzXr.png",
    link: "https://powerblessed.vercel.app/",
    techs: ["vue", "less", "typescript"],
  },
  {
    title: "haru-hub",
    description:
      "Uma plataforma que consome a API da Steam para exibir de forma interativa a minha biblioteca de jogos.",
    image: "https://i.imgur.com/0APFotZ.png",
    link: "https://haru-hub-frontend.vercel.app/",
    techs: ["react", "typescript", "tailwind"],
  },
  {
    title: "andesFinance",
    description:
      "Um dashboard financeiro desenvolvido para gestão inteligente de gastos mensais. Oferecendo um controle financeiro simplificado e visualmente intuitivo.",
    image: "https://i.imgur.com/P1Wd6pD.png",
    link: "https://andesfinance.vercel.app/",
    techs: ["react", "typescript", "tailwind"],
  },
  {
    title: "esteticaGio",
    description:
      "Uma landing page elegante para apresentar serviços de estética profissional. O projeto transmite confiança e profissionalismo para atrair clientes de forma eficiente.",
    image: "https://i.imgur.com/RfRY1k7.png",
    link: "https://esteticagio.vercel.app/",
    techs: ["vue", "typescript", "less"],
  },
];
