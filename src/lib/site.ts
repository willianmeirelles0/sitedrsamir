export const SITE = {
  name: "Dr. Samir Salles",
  role: "Atendimento Clínico",
  crm: "CRM-MG 83196",
  url: "https://www.drsamirsalles.com.br",
  whatsappNumber: "5531995111530",
  location: "Atendimento presencial em Ipatinga/MG e online para todo o Brasil.",
  googleReviewsUrl:
    "https://www.google.com/maps/place/Dr.+Samir+Salles/@-19.4719978,-42.5997834,13z/data=!4m18!1m9!3m8!1s0x8ddb8f7620338af1:0xf1e038116114140b!2sDr.+Samir+Salles!8m2!3d-19.4720834!4d-42.5585837!9m1!1b1!16s%2Fg%2F11yz9thp9h!3m7!1s0x8ddb8f7620338af1:0xf1e038116114140b!8m2!3d-19.4720834!4d-42.5585837!9m1!1b1!16s%2Fg%2F11yz9thp9h",
  googleRating: 5,
  googleReviewCount: 15,
} as const;

export const WHATSAPP_MESSAGES = {
  generic: "Olá! Gostaria de mais informações sobre os atendimentos do Dr. Samir.",
  consultaClinica: "Olá! Gostaria de agendar uma Consulta Clínica com o Dr. Samir.",
  acupuntura: "Olá! Gostaria de agendar uma sessão de Acupuntura com o Dr. Samir.",
  implanon: "Olá! Gostaria de agendar a aplicação do Implanon com o Dr. Samir.",
  emagrecimento: "Olá! Gostaria de saber mais sobre o Protocolo de Emagrecimento.",
  domiciliar: "Olá! Gostaria de saber mais sobre o Atendimento Médico Domiciliar.",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Dúvidas", href: "#duvidas" },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  whatsappMessage: string;
};

export const SERVICES: Service[] = [
  {
    slug: "consulta-clinica",
    title: "Consulta Clínica",
    description:
      "Avaliação médica completa, com tempo dedicado ao diagnóstico preciso e à orientação clara. Um cuidado que acompanha o paciente além do consultório.",
    image: "/images/service-consulta-clinica.jpg",
    whatsappMessage: WHATSAPP_MESSAGES.consultaClinica,
  },
  {
    slug: "acupuntura",
    title: "Acupuntura",
    description:
      "Técnica milenar utilizada como recurso complementar ao tratamento clínico, sempre sob indicação médica, em busca do equilíbrio entre corpo e mente.",
    image: "/images/service-acupuntura.jpg",
    whatsappMessage: WHATSAPP_MESSAGES.acupuntura,
  },
  {
    slug: "implanon",
    title: "Implanon",
    description:
      "Método contraceptivo de longa duração, seguro e eficaz, aplicado e acompanhado com todo o rigor médico necessário.",
    image: "/images/service-implanon.jpg",
    whatsappMessage: WHATSAPP_MESSAGES.implanon,
  },
  {
    slug: "protocolo-emagrecimento",
    title: "Protocolo de Emagrecimento",
    description:
      "Acompanhamento médico voltado à saúde metabólica, com foco em resultados reais e sustentáveis. Sem modismos, sem promessas vazias.",
    image: "/images/service-emagrecimento.jpg",
    whatsappMessage: WHATSAPP_MESSAGES.emagrecimento,
  },
  {
    slug: "atendimento-domiciliar",
    title: "Atendimento Médico Domiciliar",
    description:
      "Cuidado médico humanizado levado até a segurança do lar, pensado para idosos, pessoas com dificuldade de locomoção ou que necessitam de atenção especial. Disponível para Ipatinga e cidades vizinhas.",
    image: "/images/service-domiciliar.jpg",
    whatsappMessage: WHATSAPP_MESSAGES.domiciliar,
  },
];

export const BIO_REASONS: string[] = [
  "Renovação de receitas de uso contínuo",
  "Análise e explicação de exames",
  "Ajustes de medicação",
  "Ansiedade, insônia, dores crônicas ou cansaço persistente",
  "Entender melhor o que está acontecendo com a própria saúde",
];

export type Testimonial = {
  name: string;
  rating: number;
  text: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Josilaine Rosa",
    rating: 5,
    text: "O Dr. Samir é um profissional excepcional. Desde a primeira consulta, demonstrou uma empatia e atenção que raramente encontramos. Ele explica tudo com muita atenção e clareza, tirando todas as dúvidas. Só tenho a agradecer pelo cuidado humano e dedicação. Super recomendo, excelente.",
  },
  {
    name: "Tiago Ferreira",
    rating: 5,
    text: "Fui muito bem atendido pelo Dr. Samir, ele foi extremamente atencioso e transmitiu segurança total durante o atendimento.",
  },
  {
    name: "José Vitoriano da Cunha Filho",
    rating: 5,
    text: "Atendimento super especial. Anamnese completa. Consulta sem pressa. Senti-me acolhido e fui ouvido. Fiz acupuntura e gostei muito.",
  },
  {
    name: "Jéssica Costa Ferreira",
    rating: 5,
    text: "Tive um dos melhores atendimentos com o Dr. Samir. Coloquei o Implanon e todo o procedimento foi realizado com atenção e de forma humanizada. Indico muito.",
  },
  {
    name: "Gabrielle Oliveira",
    rating: 5,
    text: "Minha experiência no consultório foi excelente. Desde o primeiro contato, fui recebida com atenção e cordialidade. O ambiente é limpo, organizado e transmite muita tranquilidade. O Dr. Samir demonstra profundo conhecimento em acupuntura, explicando cada etapa do tratamento com clareza e cuidado. Já percebi melhora significativa nos meus sintomas e um bem-estar geral. Recomendo fortemente para quem busca um atendimento humanizado e resultados reais.",
  },
  {
    name: "Aline Molon",
    rating: 5,
    text: "Fiz uma consulta online com o Dr. Samir e foi incrível. Ele me escutou, pediu exames e conseguiu me ajudar em uma questão autoimune que eu tinha havia anos e que nenhum outro médico havia dado a devida atenção. Com medicação e suplementação das vitaminas, hoje tenho outra qualidade de vida por conta dele. Recomendo demais, atendimento humano e centrado no paciente.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Como funciona a consulta?",
    answer:
      "Cada consulta é individual, com tempo reservado para ouvir, avaliar e explicar com clareza. O olhar vai além do sintoma, busca entender o paciente como um todo.",
  },
  {
    question: "A acupuntura pode ser associada ao tratamento clínico?",
    answer:
      "Sim. Quando indicada, a acupuntura complementa o cuidado clínico, sempre com avaliação e acompanhamento médico.",
  },
  {
    question: "O atendimento domiciliar cobre quais cidades?",
    answer:
      "Ipatinga e municípios vizinhos. Consulte a disponibilidade para o seu endereço pelo WhatsApp.",
  },
  {
    question: "A consulta é particular ou aceita convênio?",
    answer:
      "O atendimento é exclusivamente particular, o que garante tempo integral e cuidado sem pressa. Emitimos recibo para reembolso junto ao seu plano de saúde, quando disponível.",
  },
  {
    question: "Como faço para agendar?",
    answer:
      "De forma simples, pelo WhatsApp. Basta clicar em qualquer botão Agende sua Consulta para falar com a equipe.",
  },
];
