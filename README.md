# Site institucional, Dr. Samir Salles

Site institucional de página única para o Dr. Samir Salles, construído com Next.js (App Router), TypeScript e Tailwind CSS.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 3
- `next/font/google` (Merriweather e Public Sans)
- `next/image` para otimização de imagens
- Google Analytics (gtag) e Meta Pixel, carregados condicionalmente via variáveis de ambiente

## Como rodar localmente

Pré-requisitos: Node.js 18.18 ou superior.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Outros comandos úteis:

```bash
npm run build   # build de produção
npm run start   # roda o build de produção localmente
npm run lint    # checagem de lint
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha os IDs conforme necessário:

```bash
cp .env.example .env.local
```

| Variável | Descrição |
| --- | --- |
| `NEXT_PUBLIC_GA_ID` | ID de medição do Google Analytics (GA4), no formato `G-XXXXXXXXXX`. |
| `NEXT_PUBLIC_META_PIXEL_ID` | ID do Meta Pixel (Facebook/Instagram Ads). |
| `NEXT_PUBLIC_BOOKING_URL` | Link da plataforma de agendamento online. Veja a seção [Agendamento online](#agendamento-online-futuro) abaixo. |

Se uma variável não for preenchida, o respectivo script/seção simplesmente não é carregado, sem quebrar o build. Isso significa que o site funciona normalmente em desenvolvimento sem nenhuma dessas variáveis configuradas.

## Deploy no Vercel

1. Suba o repositório para o GitHub (ou outro provedor suportado).
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. O framework é detectado automaticamente como Next.js, nenhuma configuração de build é necessária.
4. Em **Settings > Environment Variables**, adicione `NEXT_PUBLIC_GA_ID` e `NEXT_PUBLIC_META_PIXEL_ID` (se aplicável).
5. Clique em **Deploy**.

Para atualizações futuras, basta dar push na branch conectada ao projeto na Vercel.

## Onde entram as imagens reais

Todas as imagens do site já são os arquivos reais enviados pelo cliente (nenhum placeholder restante). Para trocar alguma, basta substituir o arquivo em `public/images/` mantendo o mesmo nome (ou atualizar a referência em `src/lib/site.ts` / no componente de seção, se preferir um novo nome):

| Arquivo | Onde aparece | Status |
| --- | --- | --- |
| `public/images/doctor.jpg` | Foto do médico na seção Hero | Foto real |
| `public/images/doctor-bio.jpg` | Foto do médico na seção "Sobre o Dr. Samir" | Foto real |
| `public/images/logo-horizontal.png` | Logo completa no Header | Logo real |
| `public/images/logo-icon-light.png` | Ícone da logo no Footer | Logo real |
| `public/images/og-image.png` | Imagem de compartilhamento (Open Graph / Twitter) | Logo real |
| `src/app/icon.png` / `src/app/apple-icon.png` / `src/app/favicon.ico` | Favicon e ícone iOS | Logo real |
| `public/images/service-consulta-clinica.jpg` | Card "Consulta Clínica" (reaproveita a foto do consultório) | Foto real |
| `public/images/service-acupuntura.jpg` | Card "Acupuntura" | Foto real |
| `public/images/service-implanon.jpg` | Card "Implanon" | Foto real (gerada por IA) |
| `public/images/service-emagrecimento.jpg` | Card "Protocolo de Emagrecimento" | Foto real |
| `public/images/service-domiciliar.jpg` | Card "Atendimento Médico Domiciliar" | Foto real (gerada por IA) |

### Logo

A logo definitiva (símbolo de infinito com dois círculos) já está aplicada em três formatos, todos recortados a partir dos arquivos enviados pelo cliente:

- `public/images/logo-horizontal.png`: versão completa (ícone + "Dr. Samir Salles" + "Atendimento Clínico" + CRM), em verde escuro, usada no Header sobre fundo claro.
- `public/images/logo-icon-light.png`: apenas o ícone, em bege, usado no Footer sobre fundo verde escuro.
- `src/app/icon.png`, `src/app/apple-icon.png` e `src/app/favicon.ico`: ícone bege sobre fundo verde escuro, gerados a partir do mesmo arquivo.

Se o cliente enviar uma versão vetorial (SVG) da logo, é possível trocar os arquivos PNG por SVG diretamente, mantendo os mesmos caminhos.

## Estrutura do projeto

```
src/
  app/
    layout.tsx        # fontes, metadata (SEO/OG), analytics
    page.tsx           # monta as seções da página única
    globals.css
    icon.png            # favicon (logo real)
    apple-icon.png      # ícone iOS (logo real)
    favicon.ico
    robots.ts
    sitemap.ts
  components/
    layout/             # Header, Footer
    sections/            # Hero, About, Bio, Services, ServiceCard, Testimonials, Booking, FAQ
    ui/                   # Button, Card, Container, Section (componentes genéricos)
    analytics/             # GoogleAnalytics, MetaPixel
    WhatsAppButton.tsx      # botão reutilizável que abre o WhatsApp com mensagem pré-definida
  lib/
    site.ts               # conteúdo, dados de serviços, FAQ, links de navegação
    whatsapp.ts             # geração de URL do WhatsApp com mensagem codificada
```

O uso do App Router (mesmo sendo uma página única) permite adicionar novas rotas no futuro, como `/blog` ou `/politica-de-privacidade`, sem precisar reestruturar o projeto.

## WhatsApp

O número de WhatsApp e as mensagens pré-definidas de cada contexto (Hero, Header, cada serviço, FAQ) ficam centralizados em `src/lib/site.ts`. O componente `WhatsAppButton` monta a URL `https://wa.me/<numero>?text=<mensagem>` com a mensagem já codificada e abre em uma nova aba.

## Endereço

A seção "Onde atendemos" foi removida temporariamente porque o consultório está mudando de endereço. Enquanto isso, a Hero traz uma linha curta deixando claro que o atendimento é presencial em Ipatinga/MG e também online (texto em `SITE.location`, `src/lib/site.ts`). Quando o novo endereço for definido, é possível recriar uma seção de localização (ela existiu em `src/components/sections/Location.tsx` até ser removida) apontando para o novo endereço.

## Depoimentos

A seção "O que dizem os pacientes" exibe avaliações reais do Google, copiadas manualmente pelo cliente (nome, nota e texto), em `TESTIMONIALS` (`src/lib/site.ts`). Não há integração automática com a API do Google, então novas avaliações precisam ser adicionadas manualmente nesse array. O link "ver todas" aponta para `SITE.googleReviewsUrl`, a ficha do Google Maps do Dr. Samir; `SITE.googleRating` e `SITE.googleReviewCount` controlam o resumo de nota/quantidade exibido no topo da seção.

## Agendamento online (futuro)

O componente `src/components/sections/Booking.tsx` já está pronto no projeto, mas fica invisível (retorna `null`) enquanto a variável `NEXT_PUBLIC_BOOKING_URL` não estiver definida, seguindo o mesmo padrão usado pelo Google Analytics e Meta Pixel. A plataforma de agendamento (Calendly, Cal.com, Doctoralia, etc.) ainda não foi escolhida.

Quando a plataforma for definida, para ativar a seção:

1. Preencha `NEXT_PUBLIC_BOOKING_URL` com o link de agendamento (no `.env.local` e nas variáveis de ambiente da Vercel).
2. A seção "Agende sua consulta online" passa a aparecer automaticamente entre Depoimentos e Dúvidas, com um botão que abre o link em uma nova aba.

Se a plataforma escolhida oferecer um widget embutido (calendário inline, em vez de um link que abre em outra aba), o componente pode ser ajustado depois para embutir um `<iframe>` ou o script da plataforma, no lugar do botão atual.

## Rodapé, desenvolvido por

O rodapé traz o crédito "Desenvolvido por" com a logo da Andrioli Marketing & Performance (`public/images/amp-logo-white.png`), linkando para o Instagram da agência. A logo original tinha fundo creme com letras em vinho e dourado; foi recortada e convertida para branco com fundo transparente, para contrastar com o verde escuro do rodapé.

## Regra de conteúdo

Por definição do cliente, o site não utiliza travessão ("—" ou "--") em nenhum texto. Ao editar textos, prefira vírgula, ponto final ou reformular a frase.
