import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como o site do Dr. Samir Salles coleta, usa e protege dados pessoais, em conformidade com a LGPD.",
};

const LAST_UPDATED = "3 de setembro de 2026";

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <Header />
      <main>
        <Section id="topo" narrow className="bg-branco pt-12 sm:pt-16">
          <h1 className="font-heading text-3xl font-bold text-verde-escuro sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="mt-3 font-body text-sm text-verde-escuro/60">
            Última atualização: {LAST_UPDATED}
          </p>

          <div className="mt-10 flex flex-col gap-8 font-body text-base leading-relaxed text-verde-escuro/85 sm:text-lg">
            <p>
              Esta Política de Privacidade explica como o site de {SITE.name} ({SITE.url}) trata
              dados pessoais de quem o visita, em conformidade com a Lei Geral de Proteção de
              Dados (Lei nº 13.709/2018, LGPD). Ao continuar navegando neste site, você concorda
              com os termos descritos aqui.
            </p>

            <section>
              <h2 className="font-heading text-xl font-bold text-verde-escuro sm:text-2xl">
                1. Quem é o controlador dos dados
              </h2>
              <p className="mt-3">
                O controlador dos dados tratados por este site é {SITE.name}, {SITE.crm}. Dúvidas
                ou solicitações sobre esta política podem ser enviadas pelo WhatsApp, usando
                qualquer um dos botões de contato deste site.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-verde-escuro sm:text-2xl">
                2. Quais dados coletamos
              </h2>
              <p className="mt-3">Coletamos dois tipos de informação:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Dados de navegação:</strong> quando ferramentas de análise estão
                  ativas, podemos coletar automaticamente informações como páginas visitadas,
                  tempo de permanência, tipo de dispositivo, navegador, origem do acesso
                  (por exemplo, redes sociais ou busca no Google) e endereço IP aproximado.
                </li>
                <li>
                  <strong>Dados enviados por você via WhatsApp:</strong> ao clicar em qualquer
                  botão de contato ou agendamento, você é direcionado ao WhatsApp, onde pode
                  compartilhar voluntariamente seu nome, telefone e outras informações
                  diretamente com {SITE.name}. Esse envio acontece dentro do WhatsApp, uma
                  plataforma da Meta, e está sujeito também à política de privacidade do
                  WhatsApp.
                </li>
              </ul>
              <p className="mt-3">
                Este site não possui formulários próprios de cadastro, login ou upload de
                arquivos, e não armazena dados de saúde ou prontuários. Informações clínicas
                compartilhadas em consulta são tratadas separadamente, sob o sigilo médico
                previsto no Código de Ética Médica.
              </p>
            </section>

            <section id="cookies">
              <h2 className="font-heading text-xl font-bold text-verde-escuro sm:text-2xl">
                3. Cookies e ferramentas de análise
              </h2>
              <p className="mt-3">
                Este site pode usar as seguintes ferramentas, cada uma com sua própria política
                de privacidade:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Google Analytics:</strong> mede visitas e uso do site, de forma
                  agregada, para entender o que funciona bem e o que pode melhorar.
                </li>
                <li>
                  <strong>Meta Pixel (Facebook/Instagram):</strong> ajuda a medir a
                  eficácia de campanhas de anúncios e a exibir conteúdo mais relevante para
                  quem já visitou o site.
                </li>
              </ul>
              <p className="mt-3">
                Essas ferramentas usam cookies, pequenos arquivos salvos no seu navegador. Você
                pode bloquear ou apagar cookies a qualquer momento nas configurações do seu
                navegador, o que pode afetar algumas funcionalidades do site, mas não impede a
                navegação ou o contato pelo WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-verde-escuro sm:text-2xl">
                4. Para que usamos seus dados
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Entender como as pessoas usam o site e melhorar seu conteúdo e navegação.</li>
                <li>Avaliar o desempenho de campanhas de divulgação.</li>
                <li>Responder ao contato iniciado por você via WhatsApp.</li>
              </ul>
              <p className="mt-3">
                Não usamos seus dados para nenhuma outra finalidade além das descritas aqui, e
                não vendemos dados pessoais a terceiros.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-verde-escuro sm:text-2xl">
                5. Com quem compartilhamos dados
              </h2>
              <p className="mt-3">
                Dados de navegação coletados pelas ferramentas de análise citadas acima são
                processados pela Google e pela Meta, conforme suas próprias políticas de
                privacidade. Mensagens enviadas pelo botão de contato são recebidas diretamente
                por {SITE.name} através do WhatsApp. O site é hospedado na Vercel, que processa
                dados técnicos de acesso necessários para entregar as páginas ao seu navegador.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-verde-escuro sm:text-2xl">
                6. Por quanto tempo guardamos os dados
              </h2>
              <p className="mt-3">
                Dados de navegação ficam armazenados pelo período padrão das ferramentas de
                análise utilizadas, geralmente entre 14 e 26 meses, após o qual são
                automaticamente anonimizados ou excluídos por essas plataformas. Conversas de
                WhatsApp ficam guardadas conforme a necessidade do atendimento, e podem ser
                apagadas a pedido do paciente.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-verde-escuro sm:text-2xl">
                7. Seus direitos como titular dos dados
              </h2>
              <p className="mt-3">A LGPD garante a você o direito de solicitar, a qualquer momento:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Confirmação de que seus dados estão sendo tratados.</li>
                <li>Acesso aos dados que temos sobre você.</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desacordo com a lei.</li>
                <li>Portabilidade dos dados a outro fornecedor de serviço.</li>
                <li>Eliminação dos dados tratados com o seu consentimento.</li>
                <li>Informação sobre com quem seus dados foram compartilhados.</li>
                <li>Revogação do consentimento, a qualquer momento.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-verde-escuro sm:text-2xl">
                8. Como exercer seus direitos
              </h2>
              <p className="mt-3">
                Para exercer qualquer um dos direitos acima, entre em contato pelo WhatsApp
                através de qualquer botão de contato deste site. Faremos o possível para
                responder e atender à sua solicitação dentro de um prazo razoável.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-verde-escuro sm:text-2xl">
                9. Segurança das informações
              </h2>
              <p className="mt-3">
                Este site é servido exclusivamente por conexão segura (HTTPS), o que protege os
                dados trafegados entre o seu navegador e o servidor contra interceptação. Não
                mantemos banco de dados próprio de visitantes, o que reduz a superfície de risco
                em caso de incidentes de segurança.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-verde-escuro sm:text-2xl">
                10. Crianças e adolescentes
              </h2>
              <p className="mt-3">
                Este site não se destina a menores de 18 anos e não coleta intencionalmente
                dados de crianças ou adolescentes sem a devida representação ou assistência dos
                pais ou responsáveis legais.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-verde-escuro sm:text-2xl">
                11. Alterações nesta política
              </h2>
              <p className="mt-3">
                Esta política pode ser atualizada periodicamente, para refletir mudanças no site
                ou na legislação aplicável. A data no topo desta página indica a versão mais
                recente. Recomendamos revisá-la de tempos em tempos.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-bold text-verde-escuro sm:text-2xl">
                12. Contato
              </h2>
              <p className="mt-3">
                Dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados
                podem ser enviadas a qualquer momento pelo WhatsApp, usando os botões de contato
                disponíveis neste site.
              </p>
            </section>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
