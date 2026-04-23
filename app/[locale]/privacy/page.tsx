import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";

// ─── Translated content ────────────────────────────────────────────────────

const content = {
  en: {
    back: "Back to home",
    label: "Legal",
    title: "Privacy Policy",
    updated: "Last updated: April 17, 2026",
    intro: [
      `Zelt LTDA ("Zelt", "we", "our", or "us") is committed to protecting your personal information. This Privacy Policy describes how we collect, use, share, and safeguard personal data when you access our website, APIs, dashboard, or card services (collectively, the "Services").`,
      "By using our Services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree, please discontinue use of our Services.",
    ],
    sections: [
      {
        title: "1. Information We Collect",
        body: [
          { type: "p", text: "We collect information you provide directly and information generated automatically when you use our Services." },
          { type: "h3", text: "1.1 Information You Provide" },
          { type: "ul", items: [
            "Identity data: full name, date of birth, nationality, government-issued ID (passport, driver's license, national ID).",
            "Contact data: email address, phone number, and mailing address.",
            "Financial data: bank account details, stablecoin wallet addresses, and transaction history.",
            "Business data (for corporate clients): company name, registration number, beneficial ownership information, and KYB documentation.",
            "Biometric data: facial geometry or liveness detection data used solely for identity verification by our KYC provider. This data is not stored by Zelt.",
          ]},
          { type: "h3", text: "1.2 Information We Collect Automatically" },
          { type: "ul", items: [
            "Device and usage data: IP address, browser type, operating system, pages visited, and session duration.",
            "Transaction data: card transaction records, authorization events, merchant details, amounts, and timestamps.",
            "Log data: API request logs, error reports, and authentication events.",
          ]},
          { type: "h3", text: "1.3 On-Chain Data" },
          { type: "p", text: "Stablecoin transactions executed on public blockchains (Ethereum, Solana, Tron, Polygon) are recorded on immutable public ledgers. Zelt does not control or delete on-chain records. Your wallet address may be publicly visible on these networks." },
        ],
      },
      {
        title: "2. How We Use Your Information",
        body: [
          { type: "p", text: "We use the information we collect for the following purposes:" },
          { type: "ul", items: [
            "Service delivery: To provision and manage your card program, process payments, and operate your account.",
            "Identity verification & compliance: To perform KYC/KYB checks, verify eligibility, and comply with applicable AML/CFT regulations and sanctions screening.",
            "Fraud prevention & security: To detect, investigate, and prevent unauthorized access, fraudulent transactions, and abuse of our Services.",
            "Customer support: To respond to inquiries, resolve disputes, and provide technical assistance.",
            "Legal obligations: To comply with applicable laws, respond to regulatory requests, and fulfill reporting obligations.",
            "Service improvement: To analyze usage patterns and improve our Services. We do not sell your personal data.",
            "Communications: To send operational notifications. Marketing communications are sent only with your consent.",
          ]},
        ],
      },
      {
        title: "3. How We Share Your Information",
        body: [
          { type: "p", text: "We do not sell your personal data. We share information only in the following circumstances:" },
          { type: "h3", text: "3.1 Service Providers" },
          { type: "p", text: "We engage trusted third-party providers to deliver our Services, including identity verification (Sumsub), blockchain analytics and AML monitoring (Chainalysis), digital asset custody (Fireblocks), cloud infrastructure, and payment network operators. All providers are bound by data processing agreements." },
          { type: "h3", text: "3.2 Card Network Partners" },
          { type: "p", text: "If you use a card issued under a partner's program, that partner may have access to cardholder data under their own privacy policy. Zelt is not responsible for how partners handle data they independently control." },
          { type: "h3", text: "3.3 Regulatory & Legal Disclosure" },
          { type: "p", text: "We may disclose your information to government authorities, financial regulators, law enforcement agencies, or courts when required by law or to protect the rights and safety of Zelt, our users, or third parties." },
          { type: "h3", text: "3.4 Business Transfers" },
          { type: "p", text: "In the event of a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity, subject to the same privacy protections described in this Policy." },
        ],
      },
      {
        title: "4. Data Retention",
        body: [
          { type: "p", text: "We retain your personal data for as long as necessary to provide our Services and comply with our legal obligations:" },
          { type: "ul", items: [
            "Account data is retained for the duration of your relationship with Zelt and for a minimum of 5 years after account closure to comply with AML/CFT record-keeping requirements.",
            "Transaction records are retained for a minimum of 7 years as required by applicable financial regulations.",
            "KYC documentation may be retained for up to 10 years depending on jurisdictional requirements.",
            "Inactive accounts with no activity for more than 5 years will have personal identifiers removed.",
          ]},
        ],
      },
      {
        title: "5. Your Rights",
        body: [
          { type: "p", text: "Depending on your jurisdiction, you may have the following rights regarding your personal data:" },
          { type: "ul", items: [
            "Access: Request a copy of the personal data we hold about you.",
            "Correction: Request correction of inaccurate or incomplete data.",
            "Deletion: Request deletion of your personal data, subject to our legal retention obligations.",
            "Restriction: Request that we restrict processing of your data in certain circumstances.",
            "Portability: Request your data in a structured, machine-readable format.",
            "Objection: Object to processing based on our legitimate interests.",
            "Withdrawal of consent: Where processing is based on consent, withdraw that consent at any time.",
          ]},
          { type: "p", text: "To exercise any of these rights, contact us at privacy@zelt.finance. We will respond within 10 business days." },
        ],
      },
      {
        title: "6. Security",
        body: [
          { type: "p", text: "We implement industry-standard technical and organizational measures to protect your personal data, including:" },
          { type: "ul", items: [
            "AES-256 encryption for data at rest.",
            "TLS 1.3 for all data in transit.",
            "Multi-party computation (MPC) custody for digital assets.",
            "Role-based access controls and audit logging.",
            "PCI-DSS compliance for card data.",
            "Regular security assessments and penetration testing.",
          ]},
          { type: "p", text: "No system is completely secure. In the event of a data breach that poses a risk to your rights, we will notify you and applicable regulators as required by law." },
        ],
      },
      {
        title: "7. International Data Transfers",
        body: [
          { type: "p", text: "Zelt operates globally. Your data may be transferred to and processed in countries other than your country of residence. We ensure that such transfers are protected by appropriate safeguards to maintain a level of data protection equivalent to that in your jurisdiction." },
        ],
      },
      {
        title: "8. Changes to This Policy",
        body: [
          { type: "p", text: "We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website. Your continued use of our Services after the effective date of any update constitutes your acceptance of the revised Policy." },
        ],
      },
      {
        title: "9. Contact Us",
        body: [
          { type: "p", text: "If you have questions or concerns about this Privacy Policy, please contact us:" },
          { type: "contact", name: "Zelt LTDA", role: "Privacy & Data Protection", email: "privacy@zelt.finance" },
        ],
      },
    ],
  },

  "pt-BR": {
    back: "Voltar ao início",
    label: "Legal",
    title: "Política de Privacidade",
    updated: "Última atualização: 17 de abril de 2026",
    intro: [
      `A Zelt LTDA ("Zelt", "nós", "nosso" ou "nos") está comprometida com a proteção das suas informações pessoais. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos dados pessoais quando você acessa nosso site, APIs, painel ou serviços de cartão (coletivamente, os "Serviços").`,
      "Ao utilizar nossos Serviços, você reconhece que leu e compreendeu esta Política de Privacidade. Caso não concorde, por favor interrompa o uso dos nossos Serviços.",
    ],
    sections: [
      {
        title: "1. Informações que Coletamos",
        body: [
          { type: "p", text: "Coletamos informações que você fornece diretamente e informações geradas automaticamente quando você usa nossos Serviços." },
          { type: "h3", text: "1.1 Informações que Você Fornece" },
          { type: "ul", items: [
            "Dados de identidade: nome completo, data de nascimento, nacionalidade, documento de identidade emitido pelo governo (passaporte, CNH, RG).",
            "Dados de contato: endereço de e-mail, telefone e endereço postal.",
            "Dados financeiros: dados bancários, endereços de carteiras de stablecoin e histórico de transações.",
            "Dados empresariais (para clientes corporativos): nome da empresa, CNPJ, informações de beneficiários finais e documentação KYB.",
            "Dados biométricos: geometria facial ou dados de detecção de vivacidade usados exclusivamente para verificação de identidade pelo nosso provedor de KYC. Esses dados não são armazenados pela Zelt.",
          ]},
          { type: "h3", text: "1.2 Informações Coletadas Automaticamente" },
          { type: "ul", items: [
            "Dados de dispositivo e uso: endereço IP, tipo de navegador, sistema operacional, páginas visitadas e duração da sessão.",
            "Dados de transação: registros de transações de cartão, eventos de autorização, detalhes do comerciante, valores e timestamps.",
            "Dados de log: registros de requisições de API, relatórios de erros e eventos de autenticação.",
          ]},
          { type: "h3", text: "1.3 Dados On-Chain" },
          { type: "p", text: "Transações com stablecoin executadas em blockchains públicas (Ethereum, Solana, Tron, Polygon) são registradas em ledgers públicos imutáveis. A Zelt não controla nem exclui registros on-chain. Seu endereço de carteira pode ser publicamente visível nessas redes." },
        ],
      },
      {
        title: "2. Como Usamos Suas Informações",
        body: [
          { type: "p", text: "Usamos as informações coletadas para os seguintes fins:" },
          { type: "ul", items: [
            "Prestação de serviços: para provisionar e gerenciar seu programa de cartão, processar pagamentos e operar sua conta.",
            "Verificação de identidade e compliance: para realizar verificações KYC/KYB, verificar elegibilidade e cumprir regulamentações AML/CFT aplicáveis e triagem de sanções.",
            "Prevenção a fraudes e segurança: para detectar, investigar e prevenir acessos não autorizados, transações fraudulentas e abuso dos nossos Serviços.",
            "Suporte ao cliente: para responder a consultas, resolver disputas e fornecer assistência técnica.",
            "Obrigações legais: para cumprir leis aplicáveis, responder a solicitações regulatórias e cumprir obrigações de reporte.",
            "Melhoria dos serviços: para analisar padrões de uso e melhorar nossos Serviços. Não vendemos seus dados pessoais.",
            "Comunicações: para enviar notificações operacionais. Comunicações de marketing são enviadas somente com seu consentimento.",
          ]},
        ],
      },
      {
        title: "3. Como Compartilhamos Suas Informações",
        body: [
          { type: "p", text: "Não vendemos seus dados pessoais. Compartilhamos informações somente nas seguintes circunstâncias:" },
          { type: "h3", text: "3.1 Prestadores de Serviço" },
          { type: "p", text: "Contratamos prestadores de serviço terceirizados confiáveis, incluindo verificação de identidade (Sumsub), análise de blockchain e monitoramento AML (Chainalysis), custódia de ativos digitais (Fireblocks), infraestrutura em nuvem e operadores de redes de pagamento. Todos os prestadores estão vinculados por acordos de processamento de dados." },
          { type: "h3", text: "3.2 Parceiros de Rede de Cartão" },
          { type: "p", text: "Se você utilizar um cartão emitido sob o programa de um parceiro, esse parceiro pode ter acesso a dados do titular do cartão sob sua própria política de privacidade. A Zelt não é responsável pela forma como os parceiros tratam os dados que controlam de forma independente." },
          { type: "h3", text: "3.3 Divulgação Regulatória e Legal" },
          { type: "p", text: "Podemos divulgar suas informações a autoridades governamentais, reguladores financeiros, agências de aplicação da lei ou tribunais quando exigido por lei ou para proteger os direitos e a segurança da Zelt, nossos usuários ou terceiros." },
          { type: "h3", text: "3.4 Transferências Empresariais" },
          { type: "p", text: "Em caso de fusão, aquisição ou venda de ativos, seus dados poderão ser transferidos para a entidade adquirente, sujeitos às mesmas proteções de privacidade descritas nesta Política." },
        ],
      },
      {
        title: "4. Retenção de Dados",
        body: [
          { type: "p", text: "Retemos seus dados pessoais pelo tempo necessário para fornecer nossos Serviços e cumprir nossas obrigações legais:" },
          { type: "ul", items: [
            "Dados de conta são retidos durante o período do seu relacionamento com a Zelt e por no mínimo 5 anos após o encerramento da conta para cumprir requisitos de registro AML/CFT.",
            "Registros de transações são retidos por no mínimo 7 anos conforme exigido pelas regulamentações financeiras aplicáveis.",
            "Documentação KYC pode ser retida por até 10 anos dependendo dos requisitos da jurisdição.",
            "Contas inativas sem atividade por mais de 5 anos terão identificadores pessoais removidos.",
          ]},
        ],
      },
      {
        title: "5. Seus Direitos",
        body: [
          { type: "p", text: "Dependendo da sua jurisdição, você pode ter os seguintes direitos em relação aos seus dados pessoais:" },
          { type: "ul", items: [
            "Acesso: solicitar uma cópia dos dados pessoais que mantemos sobre você.",
            "Correção: solicitar a correção de dados imprecisos ou incompletos.",
            "Exclusão: solicitar a exclusão dos seus dados pessoais, sujeito às nossas obrigações legais de retenção.",
            "Restrição: solicitar que restrinjamos o processamento dos seus dados em determinadas circunstâncias.",
            "Portabilidade: solicitar seus dados em formato estruturado e legível por máquina.",
            "Oposição: opor-se ao processamento baseado em nossos interesses legítimos.",
            "Retirada do consentimento: onde o processamento é baseado em consentimento, retirar esse consentimento a qualquer momento.",
          ]},
          { type: "p", text: "Para exercer qualquer um desses direitos, entre em contato pelo e-mail privacy@zelt.finance. Responderemos em até 10 dias úteis." },
        ],
      },
      {
        title: "6. Segurança",
        body: [
          { type: "p", text: "Implementamos medidas técnicas e organizacionais padrão do setor para proteger seus dados pessoais, incluindo:" },
          { type: "ul", items: [
            "Criptografia AES-256 para dados em repouso.",
            "TLS 1.3 para todos os dados em trânsito.",
            "Custódia com computação multipartidária (MPC) para ativos digitais.",
            "Controles de acesso baseados em funções e registro de auditoria.",
            "Conformidade PCI-DSS para dados de cartão.",
            "Avaliações de segurança e testes de penetração regulares.",
          ]},
          { type: "p", text: "Nenhum sistema é completamente seguro. Em caso de violação de dados que represente risco aos seus direitos, notificaremos você e os reguladores aplicáveis conforme exigido por lei." },
        ],
      },
      {
        title: "7. Transferências Internacionais de Dados",
        body: [
          { type: "p", text: "A Zelt opera globalmente. Seus dados podem ser transferidos e processados em países diferentes do seu país de residência. Garantimos que tais transferências sejam protegidas por salvaguardas adequadas para manter um nível de proteção de dados equivalente ao da sua jurisdição." },
        ],
      },
      {
        title: "8. Alterações nesta Política",
        body: [
          { type: "p", text: "Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças materiais publicando a política atualizada em nosso site. O uso continuado dos nossos Serviços após a data de vigência de qualquer atualização constitui sua aceitação da Política revisada." },
        ],
      },
      {
        title: "9. Fale Conosco",
        body: [
          { type: "p", text: "Se tiver dúvidas ou preocupações sobre esta Política de Privacidade, entre em contato:" },
          { type: "contact", name: "Zelt LTDA", role: "Privacidade e Proteção de Dados", email: "privacy@zelt.finance" },
        ],
      },
    ],
  },

  es: {
    back: "Volver al inicio",
    label: "Legal",
    title: "Política de Privacidad",
    updated: "Última actualización: 17 de abril de 2026",
    intro: [
      `Zelt LTDA ("Zelt", "nosotros", "nuestro" o "nos") está comprometida con la protección de tu información personal. Esta Política de Privacidad describe cómo recopilamos, usamos, compartimos y protegemos los datos personales cuando accedes a nuestro sitio web, APIs, panel o servicios de tarjeta (colectivamente, los "Servicios").`,
      "Al usar nuestros Servicios, reconoces que has leído y comprendido esta Política de Privacidad. Si no estás de acuerdo, por favor deja de usar nuestros Servicios.",
    ],
    sections: [
      {
        title: "1. Información que Recopilamos",
        body: [
          { type: "p", text: "Recopilamos información que proporcionas directamente e información generada automáticamente cuando usas nuestros Servicios." },
          { type: "h3", text: "1.1 Información que Proporcionas" },
          { type: "ul", items: [
            "Datos de identidad: nombre completo, fecha de nacimiento, nacionalidad, documento de identidad emitido por el gobierno (pasaporte, licencia de conducir, DNI).",
            "Datos de contacto: dirección de correo electrónico, teléfono y dirección postal.",
            "Datos financieros: datos bancarios, direcciones de carteras de stablecoin e historial de transacciones.",
            "Datos empresariales (para clientes corporativos): nombre de la empresa, número de registro, información de beneficiarios finales y documentación KYB.",
            "Datos biométricos: geometría facial o datos de detección de vivacidad usados exclusivamente para verificación de identidad por nuestro proveedor KYC. Estos datos no son almacenados por Zelt.",
          ]},
          { type: "h3", text: "1.2 Información Recopilada Automáticamente" },
          { type: "ul", items: [
            "Datos de dispositivo y uso: dirección IP, tipo de navegador, sistema operativo, páginas visitadas y duración de la sesión.",
            "Datos de transacciones: registros de transacciones de tarjeta, eventos de autorización, detalles del comercio, montos y marcas de tiempo.",
            "Datos de registro: logs de solicitudes de API, reportes de errores y eventos de autenticación.",
          ]},
          { type: "h3", text: "1.3 Datos On-Chain" },
          { type: "p", text: "Las transacciones de stablecoin ejecutadas en blockchains públicas (Ethereum, Solana, Tron, Polygon) se registran en ledgers públicos inmutables. Zelt no controla ni elimina registros on-chain. Tu dirección de billetera puede ser públicamente visible en estas redes." },
        ],
      },
      {
        title: "2. Cómo Usamos tu Información",
        body: [
          { type: "p", text: "Usamos la información recopilada para los siguientes fines:" },
          { type: "ul", items: [
            "Prestación de servicios: para provisionar y gestionar tu programa de tarjeta, procesar pagos y operar tu cuenta.",
            "Verificación de identidad y cumplimiento: para realizar verificaciones KYC/KYB, verificar elegibilidad y cumplir con las regulaciones AML/CFT aplicables y el escrutinio de sanciones.",
            "Prevención de fraudes y seguridad: para detectar, investigar y prevenir accesos no autorizados, transacciones fraudulentas y abuso de nuestros Servicios.",
            "Soporte al cliente: para responder consultas, resolver disputas y brindar asistencia técnica.",
            "Obligaciones legales: para cumplir con las leyes aplicables, responder a solicitudes regulatorias y cumplir obligaciones de reporte.",
            "Mejora del servicio: para analizar patrones de uso y mejorar nuestros Servicios. No vendemos tus datos personales.",
            "Comunicaciones: para enviar notificaciones operativas. Las comunicaciones de marketing se envían solo con tu consentimiento.",
          ]},
        ],
      },
      {
        title: "3. Cómo Compartimos tu Información",
        body: [
          { type: "p", text: "No vendemos tus datos personales. Compartimos información solo en las siguientes circunstancias:" },
          { type: "h3", text: "3.1 Proveedores de Servicios" },
          { type: "p", text: "Contratamos proveedores de terceros de confianza, incluyendo verificación de identidad (Sumsub), análisis de blockchain y monitoreo AML (Chainalysis), custodia de activos digitales (Fireblocks), infraestructura en la nube y operadores de redes de pago. Todos los proveedores están vinculados por acuerdos de procesamiento de datos." },
          { type: "h3", text: "3.2 Socios de Red de Tarjetas" },
          { type: "p", text: "Si usas una tarjeta emitida bajo el programa de un socio, ese socio puede tener acceso a los datos del titular de la tarjeta bajo su propia política de privacidad. Zelt no es responsable de cómo los socios manejan los datos que controlan de forma independiente." },
          { type: "h3", text: "3.3 Divulgación Regulatoria y Legal" },
          { type: "p", text: "Podemos divulgar tu información a autoridades gubernamentales, reguladores financieros, agencias de aplicación de la ley o tribunales cuando lo exija la ley o para proteger los derechos y la seguridad de Zelt, nuestros usuarios o terceros." },
          { type: "h3", text: "3.4 Transferencias Empresariales" },
          { type: "p", text: "En caso de fusión, adquisición o venta de activos, tus datos podrán ser transferidos a la entidad adquirente, sujetos a las mismas protecciones de privacidad descritas en esta Política." },
        ],
      },
      {
        title: "4. Retención de Datos",
        body: [
          { type: "p", text: "Conservamos tus datos personales durante el tiempo necesario para prestar nuestros Servicios y cumplir nuestras obligaciones legales:" },
          { type: "ul", items: [
            "Los datos de cuenta se conservan durante la vigencia de tu relación con Zelt y por un mínimo de 5 años tras el cierre de la cuenta para cumplir los requisitos de registro AML/CFT.",
            "Los registros de transacciones se conservan por un mínimo de 7 años según lo exigen las regulaciones financieras aplicables.",
            "La documentación KYC puede conservarse hasta 10 años según los requisitos de la jurisdicción.",
            "Las cuentas inactivas sin actividad por más de 5 años tendrán sus identificadores personales eliminados.",
          ]},
        ],
      },
      {
        title: "5. Tus Derechos",
        body: [
          { type: "p", text: "Según tu jurisdicción, puedes tener los siguientes derechos sobre tus datos personales:" },
          { type: "ul", items: [
            "Acceso: solicitar una copia de los datos personales que mantenemos sobre ti.",
            "Corrección: solicitar la corrección de datos inexactos o incompletos.",
            "Eliminación: solicitar la eliminación de tus datos personales, sujeto a nuestras obligaciones legales de retención.",
            "Restricción: solicitar que restrinjamos el procesamiento de tus datos en determinadas circunstancias.",
            "Portabilidad: solicitar tus datos en formato estructurado y legible por máquina.",
            "Oposición: oponerte al procesamiento basado en nuestros intereses legítimos.",
            "Retirada del consentimiento: donde el procesamiento se basa en el consentimiento, retirarlo en cualquier momento.",
          ]},
          { type: "p", text: "Para ejercer cualquiera de estos derechos, contáctanos en privacy@zelt.finance. Responderemos en un plazo de 10 días hábiles." },
        ],
      },
      {
        title: "6. Seguridad",
        body: [
          { type: "p", text: "Implementamos medidas técnicas y organizativas estándar del sector para proteger tus datos personales, incluyendo:" },
          { type: "ul", items: [
            "Cifrado AES-256 para datos en reposo.",
            "TLS 1.3 para todos los datos en tránsito.",
            "Custodia con computación multipartidaria (MPC) para activos digitales.",
            "Controles de acceso basados en roles y registro de auditoría.",
            "Cumplimiento PCI-DSS para datos de tarjeta.",
            "Evaluaciones de seguridad y pruebas de penetración regulares.",
          ]},
          { type: "p", text: "Ningún sistema es completamente seguro. En caso de una violación de datos que represente un riesgo para tus derechos, te notificaremos a ti y a los reguladores aplicables según lo exija la ley." },
        ],
      },
      {
        title: "7. Transferencias Internacionales de Datos",
        body: [
          { type: "p", text: "Zelt opera globalmente. Tus datos pueden ser transferidos y procesados en países distintos al tuyo. Garantizamos que dichas transferencias estén protegidas por salvaguardas adecuadas para mantener un nivel de protección de datos equivalente al de tu jurisdicción." },
        ],
      },
      {
        title: "8. Cambios en esta Política",
        body: [
          { type: "p", text: "Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos sobre cambios materiales publicando la política actualizada en nuestro sitio web. El uso continuado de nuestros Servicios después de la fecha de vigencia de cualquier actualización constituye tu aceptación de la Política revisada." },
        ],
      },
      {
        title: "9. Contáctanos",
        body: [
          { type: "p", text: "Si tienes preguntas o inquietudes sobre esta Política de Privacidad, contáctanos:" },
          { type: "contact", name: "Zelt LTDA", role: "Privacidad y Protección de Datos", email: "privacy@zelt.finance" },
        ],
      },
    ],
  },
} as const;

type Locale = keyof typeof content;

// ─── Page ──────────────────────────────────────────────────────────────────

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = content[(locale as Locale) in content ? (locale as Locale) : "en"];

  return (
    <>
      <NavbarWrapper />
      <main className="pt-24 pb-20" style={{ background: "#030b18" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm mb-8 transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {c.back}
            </Link>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#60a5fa" }}>{c.label}</p>
            <h1 className="text-4xl font-bold tracking-tight mb-4">{c.title}</h1>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>{c.updated}</p>
          </div>

          <div className="space-y-10">
            {/* Intro */}
            <Section>
              {c.intro.map((p, i) => (
                <p key={i} className={i > 0 ? "mt-4" : ""} style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.8" }}>{p}</p>
              ))}
            </Section>

            {/* Sections */}
            {c.sections.map((sec) => (
              <Section key={sec.title} title={sec.title}>
                {sec.body.map((block, i) => {
                  if (block.type === "p") return <p key={i} className="mt-3 first:mt-0 text-sm" style={{ color: "rgba(255,255,255,0.65)", lineHeight: "1.8" }}>{block.text}</p>;
                  if (block.type === "h3") return <h3 key={i} className="text-base font-semibold text-white mt-6 mb-2">{block.text}</h3>;
                  if (block.type === "ul") return (
                    <ul key={i} className="mt-3 space-y-2 list-none">
                      {"items" in block && block.items.map((item: string, j: number) => (
                        <li key={j} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#3b82f6" }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                  if (block.type === "contact") return (
                    <div key={i} className="mt-5 rounded-2xl p-6" style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.15)" }}>
                      <p className="font-semibold text-white mb-1">{"name" in block ? block.name : ""}</p>
                      <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{"role" in block ? block.role : ""}</p>
                      <p className="text-sm"><a href={`mailto:${"email" in block ? block.email : ""}`} style={{ color: "#60a5fa" }}>{"email" in block ? block.email : ""}</a></p>
                    </div>
                  );
                  return null;
                })}
              </Section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
      {title && (
        <h2 className="text-xl font-bold text-white mb-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "0.75rem" }}>
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}
