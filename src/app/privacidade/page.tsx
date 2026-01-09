import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da Advision - Agência de Tráfego Pago em Pouso Alegre. Saiba como coletamos, usamos e protegemos seus dados pessoais.",
};

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link href="/" className="text-electric-500 hover:text-electric-600 mb-8 inline-block">
          ← Voltar para o início
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-foreground/80">
          <p className="text-sm text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introdução</h2>
            <p>
              A Advision ("nós", "nosso" ou "empresa") está comprometida em proteger a privacidade e os dados pessoais de nossos usuários e clientes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
            <p>
              Ao utilizar nosso site (advisionagencia.com.br) e nossos serviços, você concorda com as práticas descritas nesta política.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Dados que Coletamos</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2.1. Dados Fornecidos por Você</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dados de Contato:</strong> Nome, e-mail, telefone, WhatsApp</li>
              <li><strong>Dados da Empresa:</strong> Nome da empresa, CNPJ, segmento de atuação</li>
              <li><strong>Dados de Comunicação:</strong> Mensagens enviadas através de formulários, WhatsApp ou e-mail</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.2. Dados Coletados Automaticamente</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas, tempo de permanência</li>
              <li><strong>Cookies:</strong> Informações armazenadas no seu dispositivo para melhorar sua experiência</li>
              <li><strong>Dados de Dispositivo:</strong> Tipo de dispositivo, sistema operacional, resolução de tela</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Como Usamos Seus Dados</h2>
            <p>Utilizamos seus dados pessoais para as seguintes finalidades:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Prestação de Serviços:</strong> Fornecer nossos serviços de gestão de tráfego pago e marketing digital</li>
              <li><strong>Comunicação:</strong> Responder suas solicitações, enviar propostas comerciais e atualizações sobre nossos serviços</li>
              <li><strong>Análise e Melhoria:</strong> Analisar o uso do site para melhorar nossos serviços e experiência do usuário</li>
              <li><strong>Marketing:</strong> Enviar comunicações de marketing (com seu consentimento prévio)</li>
              <li><strong>Cumprimento Legal:</strong> Cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Base Legal para Tratamento de Dados</h2>
            <p>Tratamos seus dados pessoais com base nas seguintes bases legais previstas na LGPD:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consentimento:</strong> Quando você nos fornece seus dados voluntariamente</li>
              <li><strong>Execução de Contrato:</strong> Para prestação de nossos serviços</li>
              <li><strong>Legítimo Interesse:</strong> Para análise de dados e melhoria de serviços</li>
              <li><strong>Cumprimento de Obrigação Legal:</strong> Quando exigido por lei</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Compartilhamento de Dados</h2>
            <p>Podemos compartilhar seus dados com:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Prestadores de Serviços:</strong> Google Ads, Meta Ads, TikTok Ads, ferramentas de análise e CRM</li>
              <li><strong>WhatsApp:</strong> Para comunicação direta com você</li>
              <li><strong>Autoridades:</strong> Quando exigido por lei ou ordem judicial</li>
            </ul>
            <p className="mt-4">
              <strong>Não vendemos, alugamos ou comercializamos seus dados pessoais com terceiros.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Cookies e Tecnologias Similares</h2>
            <p>Utilizamos cookies para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Melhorar a funcionalidade do site</li>
              <li>Analisar o tráfego e comportamento dos usuários</li>
              <li>Personalizar conteúdo e anúncios</li>
              <li>Lembrar suas preferências</li>
            </ul>
            <p className="mt-4">
              Você pode gerenciar ou desativar cookies através das configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Segurança dos Dados</h2>
            <p>
              Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, perda, destruição ou alteração. Isso inclui:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Criptografia de dados em trânsito (HTTPS/SSL)</li>
              <li>Controles de acesso restrito</li>
              <li>Monitoramento de segurança</li>
              <li>Backups regulares</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Retenção de Dados</h2>
            <p>
              Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, ou conforme exigido por lei. Após esse período, os dados serão excluídos ou anonimizados de forma segura.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Seus Direitos (LGPD)</h2>
            <p>De acordo com a LGPD, você tem os seguintes direitos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Confirmação e Acesso:</strong> Confirmar se tratamos seus dados e acessá-los</li>
              <li><strong>Correção:</strong> Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li><strong>Anonimização, Bloqueio ou Eliminação:</strong> Solicitar anonimização, bloqueio ou eliminação de dados desnecessários</li>
              <li><strong>Portabilidade:</strong> Solicitar a portabilidade de seus dados a outro fornecedor</li>
              <li><strong>Revogação do Consentimento:</strong> Revogar seu consentimento a qualquer momento</li>
              <li><strong>Oposição:</strong> Opor-se ao tratamento de dados</li>
              <li><strong>Informação sobre Compartilhamento:</strong> Saber com quem compartilhamos seus dados</li>
            </ul>
            <p className="mt-4">
              Para exercer seus direitos, entre em contato conosco através do e-mail: <strong>contato@advisionagencia.com.br</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Dados de Menores de Idade</h2>
            <p>
              Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente dados de menores. Se tomarmos conhecimento de que coletamos dados de um menor, tomaremos medidas para excluí-los imediatamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">11. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre alterações significativas através do nosso site ou por e-mail. A data da última atualização será sempre indicada no topo desta página.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">12. Contato</h2>
            <p>
              Para dúvidas, solicitações ou exercício de seus direitos relacionados a esta Política de Privacidade, entre em contato:
            </p>
            <div className="bg-muted p-6 rounded-lg mt-4">
              <p><strong>Advision - Agência de Tráfego Pago</strong></p>
              <p>E-mail: contato@advisionagencia.com.br</p>
              <p>WhatsApp: (35) 9 9237-7121</p>
              <p>Endereço: Pouso Alegre - MG, Brasil</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">13. Encarregado de Dados (DPO)</h2>
            <p>
              Para questões específicas sobre proteção de dados, você pode entrar em contato com nosso Encarregado de Dados através do e-mail: <strong>dpo@advisionagencia.com.br</strong>
            </p>
          </section>
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
