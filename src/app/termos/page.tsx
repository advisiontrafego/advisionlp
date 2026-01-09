import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso da Advision - Agência de Tráfego Pago em Pouso Alegre. Conheça as regras e condições para utilização de nossos serviços.",
};

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link href="/" className="text-electric-500 hover:text-electric-600 mb-8 inline-block">
          ← Voltar para o início
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Termos de Uso</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-foreground/80">
          <p className="text-sm text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p>
              Bem-vindo à Advision! Estes Termos de Uso ("Termos") regem o acesso e uso do site advisionagencia.com.br e dos serviços oferecidos pela Advision ("nós", "nosso" ou "empresa").
            </p>
            <p>
              Ao acessar ou usar nosso site e serviços, você concorda em cumprir e estar vinculado a estes Termos. Se você não concordar com qualquer parte destes Termos, não deverá usar nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Sobre a Advision</h2>
            <p>
              A Advision é uma agência especializada em gestão de tráfego pago, oferecendo serviços de marketing digital incluindo Google Ads, Meta Ads (Facebook e Instagram), TikTok Ads e outras plataformas de publicidade online.
            </p>
            <p>

              <strong>Endereço:</strong> Pouso Alegre - MG, Brasil
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Serviços Oferecidos</h2>
            <p>A Advision oferece os seguintes serviços:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Gestão de Tráfego Pago:</strong> Criação, otimização e gerenciamento de campanhas publicitárias</li>
              <li><strong>Google Ads:</strong> Campanhas de pesquisa, display, shopping e YouTube</li>
              <li><strong>Meta Ads:</strong> Campanhas no Facebook e Instagram</li>
              <li><strong>TikTok Ads:</strong> Campanhas na plataforma TikTok</li>
              <li><strong>Consultoria:</strong> Análise e estratégia de marketing digital</li>
              <li><strong>Relatórios:</strong> Análise de performance e ROI</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Uso do Site</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">4.1. Licença de Uso</h3>
            <p>
              Concedemos a você uma licença limitada, não exclusiva, intransferível e revogável para acessar e usar nosso site para fins pessoais e comerciais legítimos.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.2. Restrições de Uso</h3>
            <p>Você concorda em NÃO:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Usar o site para fins ilegais ou não autorizados</li>
              <li>Tentar obter acesso não autorizado ao site ou sistemas relacionados</li>
              <li>Copiar, modificar, distribuir ou vender qualquer conteúdo do site sem autorização</li>
              <li>Usar bots, scrapers ou ferramentas automatizadas para acessar o site</li>
              <li>Interferir no funcionamento adequado do site</li>
              <li>Transmitir vírus, malware ou código malicioso</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Contratação de Serviços</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">5.1. Proposta Comercial</h3>
            <p>
              A contratação de nossos serviços será formalizada através de proposta comercial específica, que detalhará escopo, prazos, valores e condições de pagamento.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.2. Aceitação</h3>
            <p>
              A aceitação da proposta comercial constitui um contrato vinculante entre você e a Advision, sujeito a estes Termos de Uso e às condições específicas da proposta.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.3. Investimento em Mídia</h3>
            <p>
              O investimento em mídia paga (budget de anúncios) é de responsabilidade do cliente e será cobrado diretamente pelas plataformas (Google, Meta, TikTok, etc.). A Advision cobra apenas pela gestão e otimização das campanhas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Obrigações do Cliente</h2>
            <p>Ao contratar nossos serviços, você concorda em:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer informações precisas e completas sobre seu negócio</li>
              <li>Fornecer acesso às plataformas de anúncios necessárias</li>
              <li>Responder prontamente às solicitações de informações</li>
              <li>Cumprir com os prazos de pagamento acordados</li>
              <li>Respeitar as políticas das plataformas de anúncios (Google, Meta, TikTok)</li>
              <li>Não solicitar práticas que violem as políticas das plataformas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Obrigações da Advision</h2>
            <p>A Advision se compromete a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prestar os serviços com qualidade e profissionalismo</li>
              <li>Manter a confidencialidade das informações do cliente</li>
              <li>Fornecer relatórios periódicos de performance</li>
              <li>Otimizar campanhas visando o melhor ROI possível</li>
              <li>Cumprir com os prazos acordados na proposta comercial</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Pagamento e Faturamento</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">8.1. Valores</h3>
            <p>
              Os valores dos serviços serão definidos na proposta comercial e podem variar conforme o escopo do projeto.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">8.2. Forma de Pagamento</h3>
            <p>
              Aceitamos pagamentos via PIX, transferência bancária, boleto bancário ou cartão de crédito, conforme acordado na proposta.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">8.3. Atraso no Pagamento</h3>
            <p>
              Em caso de atraso no pagamento, poderemos suspender a prestação dos serviços até a regularização. Multa de 2% e juros de 1% ao mês poderão ser aplicados sobre o valor em atraso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Resultados e Garantias</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">9.1. Natureza dos Serviços</h3>
            <p>
              Os serviços de gestão de tráfego pago são de meio, não de resultado. Isso significa que nos comprometemos a aplicar as melhores práticas e estratégias, mas não podemos garantir resultados específicos de vendas, leads ou conversões.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.2. Fatores Externos</h3>
            <p>
              Os resultados dependem de diversos fatores fora do nosso controle, incluindo: qualidade do produto/serviço, preço, concorrência, sazonalidade, qualidade do site/landing page, processo de vendas, entre outros.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.3. Compromisso</h3>
            <p>
              Nos comprometemos a otimizar continuamente as campanhas, fornecer relatórios transparentes e trabalhar para maximizar o retorno sobre o investimento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Propriedade Intelectual</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">10.1. Conteúdo do Site</h3>
            <p>
              Todo o conteúdo do site advisionagencia.com.br, incluindo textos, imagens, logos, gráficos e código, é de propriedade da Advision e protegido por leis de direitos autorais.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">10.2. Materiais Criados</h3>
            <p>
              Os materiais criados para as campanhas (anúncios, criativos, textos) são de propriedade do cliente após o pagamento integral dos serviços. As estratégias e metodologias permanecem de propriedade da Advision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">11. Confidencialidade</h2>
            <p>
              Ambas as partes concordam em manter confidenciais todas as informações comerciais, estratégicas e técnicas compartilhadas durante a prestação dos serviços. Esta obrigação permanece válida mesmo após o término do contrato.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">12. Rescisão</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">12.1. Rescisão pelo Cliente</h3>
            <p>
              O cliente pode rescindir o contrato mediante aviso prévio de 30 dias. Valores já pagos referentes a serviços prestados não serão reembolsados.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">12.2. Rescisão pela Advision</h3>
            <p>
              Podemos rescindir o contrato imediatamente em caso de: inadimplência, violação destes Termos, solicitação de práticas ilegais ou antiéticas, ou impossibilidade de prestação dos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">13. Limitação de Responsabilidade</h2>
            <p>
              A Advision não será responsável por:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Suspensão ou banimento de contas nas plataformas de anúncios devido a violações de políticas pelo cliente</li>
              <li>Resultados de vendas ou conversões abaixo do esperado</li>
              <li>Problemas técnicos nas plataformas de terceiros (Google, Meta, TikTok)</li>
              <li>Danos indiretos, lucros cessantes ou perda de oportunidades</li>
              <li>Ações de concorrentes ou mudanças no mercado</li>
            </ul>
            <p className="mt-4">
              Nossa responsabilidade total está limitada ao valor pago pelos serviços nos últimos 3 meses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">14. Isenção de Garantias</h2>
            <p>
              O site e os serviços são fornecidos "como estão" e "conforme disponíveis". Não garantimos que o site estará sempre disponível, livre de erros ou vírus.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">15. Links para Sites de Terceiros</h2>
            <p>
              Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo, políticas de privacidade ou práticas desses sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">16. Modificações dos Termos</h2>
            <p>
              Reservamos o direito de modificar estes Termos a qualquer momento. Alterações significativas serão comunicadas através do site ou por e-mail. O uso continuado dos serviços após as alterações constitui aceitação dos novos Termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">17. Lei Aplicável e Foro</h2>
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de Pouso Alegre - MG para dirimir quaisquer controvérsias decorrentes destes Termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">18. Disposições Gerais</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Se qualquer disposição destes Termos for considerada inválida, as demais permanecerão em vigor</li>
              <li>A falha em exercer qualquer direito não constitui renúncia a esse direito</li>
              <li>Estes Termos constituem o acordo integral entre as partes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">19. Contato</h2>
            <p>
              Para dúvidas ou questões sobre estes Termos de Uso, entre em contato:
            </p>
            <div className="bg-muted p-6 rounded-lg mt-4">
              <p><strong>Advision - Agência de Tráfego Pago</strong></p>
              <p>E-mail: contato@advisionagencia.com.br</p>
              <p>WhatsApp: (35) 9 9237-7121</p>
              <p>Endereço: Pouso Alegre - MG, Brasil</p>
              <p>Site: advisionagencia.com.br</p>
            </div>
          </section>

          <div className="bg-electric-500/10 border border-electric-500/20 p-6 rounded-lg mt-8">
            <p className="font-semibold">
              Ao utilizar nossos serviços, você declara ter lido, compreendido e concordado com estes Termos de Uso e nossa Política de Privacidade.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link href="/" className="text-electric-500 hover:text-electric-600">
            ← Voltar para o início
          </Link>
        </div>
      </div>
    </main>
  );
}
