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

Todas as imagens do site são, por enquanto, placeholders locais em SVG (para que o `next/image` funcione normalmente sem depender de assets externos). Substitua os arquivos abaixo em `public/images/` mantendo os mesmos nomes de arquivo (ou atualize as referências em `src/lib/site.ts` e nos componentes de seção se preferir novos nomes):

| Arquivo | Onde aparece | Proporção recomendada |
| --- | --- | --- |
| `public/images/doctor.jpg` | Foto do médico na seção Hero (já substituída pela foto real) | 4:5 (retrato) |
| `public/images/clinic.svg` | Foto do consultório na seção Localização | 4:3 |
| `public/images/service-consulta-clinica.svg` | Card "Consulta Clínica" | 4:3 |
| `public/images/service-acupuntura.svg` | Card "Acupuntura" | 4:3 |
| `public/images/service-implanon.svg` | Card "Implanon" | 4:3 |
| `public/images/service-emagrecimento.svg` | Card "Protocolo de Emagrecimento" | 4:3 |
| `public/images/service-domiciliar.svg` | Card "Atendimento Médico Domiciliar" | 4:3 |
| `public/images/og-image.svg` | Imagem de compartilhamento (Open Graph / Twitter) | 1200x630 |

**Importante sobre a imagem de Open Graph:** alguns serviços (WhatsApp, Facebook, LinkedIn) nem sempre renderizam SVG corretamente em pré-visualizações de link. Antes de divulgar o site, recomenda-se substituir `og-image.svg` por uma versão `.png` ou `.jpg` de 1200x630px e atualizar a referência em `src/app/layout.tsx` (`openGraph.images` e `twitter.images`).

### Logo

O componente `src/components/layout/Logo.tsx` contém um placeholder do símbolo de infinito (dois círculos), desenhado em SVG inline. Quando os arquivos finais da logo forem enviados, basta substituir o conteúdo desse componente por uma tag `<Image>` apontando para o arquivo definitivo (ex: `public/logo.svg` ou `public/logo.png`).

O favicon e o ícone para iOS (`src/app/icon.tsx` e `src/app/apple-icon.tsx`) também usam esse mesmo placeholder gerado dinamicamente. Após receber a logo definitiva, esses arquivos podem ser trocados por um `favicon.ico` / `icon.png` estático em `src/app/`.

## Estrutura do projeto

```
src/
  app/
    layout.tsx        # fontes, metadata (SEO/OG), analytics
    page.tsx           # monta as seções da página única
    globals.css
    icon.tsx            # favicon gerado (placeholder da logo)
    apple-icon.tsx
    robots.ts
    sitemap.ts
  components/
    layout/             # Header, Footer, Logo
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
