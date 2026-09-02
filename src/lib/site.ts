export const SITE = {
  name: "Dr. Samir Salles",
  role: "Atendimento Clínico",
  crm: "CRM-MG 83196",
  url: "https://www.drsamirsalles.com.br",
  whatsappNumber: "5531995111530",
  address: {
    line1: "Casa Gestar",
    line2: "Rua Pelotas, 390, Jardim Panorama, Ipatinga/MG",
    mapsUrl: "https://maps.google.com/?q=Rua+Pelotas,+390,+Jardim+Panorama,+Ipatinga/MG",
  },
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
  { label: "Localização", href: "#localizacao" },
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
    image: "/images/service-consulta-clinica.svg",
    whatsappMessage: WHATSAPP_MESSAGES.consultaClinica,
  },
  {
    slug: "acupuntura",
    title: "Acupuntura",
    description:
      "Técnica milenar utilizada como recurso complementar ao tratamento clínico, sempre sob indicação médica, em busca do equilíbrio entre corpo e mente.",
    image: "/images/service-acupuntura.svg",
    whatsappMessage: WHATSAPP_MESSAGES.acupuntura,
  },
  {
    slug: "implanon",
    title: "Implanon",
    description:
      "Método contraceptivo de longa duração, seguro e eficaz, aplicado e acompanhado com todo o rigor médico necessário.",
    image: "/images/service-implanon.svg",
    whatsappMessage: WHATSAPP_MESSAGES.implanon,
  },
  {
    slug: "protocolo-emagrecimento",
    title: "Protocolo de Emagrecimento",
    description:
      "Acompanhamento médico voltado à saúde metabólica, com foco em resultados reais e sustentáveis. Sem modismos, sem promessas vazias.",
    image: "/images/service-emagrecimento.svg",
    whatsappMessage: WHATSAPP_MESSAGES.emagrecimento,
  },
  {
    slug: "atendimento-domiciliar",
    title: "Atendimento Médico Domiciliar",
    description:
      "Cuidado médico humanizado levado até a segurança do lar, pensado para idosos, pessoas com dificuldade de locomoção ou que necessitam de atenção especial. Disponível para Ipatinga e cidades vizinhas.",
    image: "/images/service-domiciliar.svg",
    whatsappMessage: WHATSAPP_MESSAGES.domiciliar,
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
