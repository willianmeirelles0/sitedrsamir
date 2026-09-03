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

Se uma variável não for preenchida, o respectivo script simplesmente não é carregado, sem quebrar o build. Isso significa que o site funciona normalmente em desenvolvimento sem nenhum analytics configurado.

## Deploy no Vercel

1. Suba o repositório para o GitHub (ou outro provedor suportado).
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. O framework é detectado automaticamente como Next.js, nenhuma configuração de build é necessária.
4. Em **Settings > Environment Variables**, adicione `NEXT_PUBLIC_GA_ID` e `NEXT_PUBLIC_META_PIXEL_ID` (se aplicável).
5. Clique em **Deploy**.

Para atualizações futuras, basta dar push na branch conectada ao projeto na Vercel.

## Onde entram as imagens reais

A logo e a foto do médico já são os arquivos reais enviados pelo cliente. As demais imagens ainda são placeholders locais em SVG (para que o `next/image` funcione normalmente sem depender de assets externos). Substitua os arquivos abaixo em `public/images/` mantendo os mesmos nomes de arquivo (ou atualize as referências em `src/lib/site.ts` e nos componentes de seção se preferir novos nomes):

| Arquivo | Onde aparece | Status |
| --- | --- | --- |
| `public/images/doctor.jpg` | Foto do médico na seção Hero | Foto real |
| `public/images/logo-horizontal.png` | Logo completa no Header | Logo real |
| `public/images/logo-icon-light.png` | Ícone da logo no Footer | Logo real |
| `public/images/og-image.png` | Imagem de compartilhamento (Open Graph / Twitter) | Logo real |
| `src/app/icon.png` / `src/app/apple-icon.png` / `src/app/favicon.ico` | Favicon e ícone iOS | Logo real |
| `public/images/service-acupuntura.jpg` | Card "Acupuntura" | Foto real |
| `public/images/service-emagrecimento.jpg` | Card "Protocolo de Emagrecimento" | Foto real |
| `public/images/clinic.jpg` | Foto do consultório na seção Localização | Foto real (gerada por IA) |
| `public/images/service-implanon.jpg` | Card "Implanon" | Foto real (gerada por IA) |
| `public/images/service-domiciliar.jpg` | Card "Atendimento Médico Domiciliar" | Foto real (gerada por IA) |
| `public/images/service-consulta-clinica.svg` | Card "Consulta Clínica" (4:3) | Placeholder |

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
    sections/            # Hero, About, Services, ServiceCard, Location, FAQ
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

## Regra de conteúdo

Por definição do cliente, o site não utiliza travessão ("—" ou "--") em nenhum texto. Ao editar textos, prefira vírgula, ponto final ou reformular a frase.
