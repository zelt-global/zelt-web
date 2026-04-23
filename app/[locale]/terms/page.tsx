import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";

const content = {
  en: {
    lastUpdated: "April 17, 2026",
    back: "Back to home",
    label: "Legal",
    title: "Terms of Use",
    intro: [
      `These Terms of Use ("Terms") govern your access to and use of the website, APIs, dashboard, and card-as-a-service platform operated by Zelt LTDA ("Zelt", "we", "us", or "our"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, do not use our Services.`,
      `These Terms apply to all users, including corporate clients ("Partners") integrating Zelt's API to offer card programs, and end users ("Cardholders") issued cards through Partner programs.`,
    ],
    sections: [
      {
        title: "1. Definitions",
        type: "definitions",
        items: [
          ['"Services"', "Zelt's website, API, dashboard, card issuance infrastructure, KYC/AML tooling, and related products."],
          ['"Partner"', "A business entity that has entered into a separate agreement with Zelt to access and integrate the Services."],
          ['"Cardholder"', "An individual who has been issued a payment card by a Partner using Zelt's infrastructure."],
          ['"Card Program"', "A configured program through which Partners issue cards to Cardholders."],
          ['"Stablecoins"', "Digital assets pegged to fiat currencies (e.g., USDC, USDT) used as the funding source for card programs."],
          ['"KYC/AML"', "Know Your Customer and Anti-Money Laundering procedures required by applicable law."],
        ],
      },
      {
        title: "2. Eligibility",
        type: "bullets",
        intro: "To use our Services, you must:",
        items: [
          "Be at least 18 years of age (or the age of majority in your jurisdiction).",
          "Have the legal capacity to enter into a binding agreement.",
          "Not be located in, or a national or resident of, any country subject to comprehensive sanctions (including but not limited to Cuba, Iran, North Korea, Russia, Syria, and the Crimea, Donetsk, and Luhansk regions).",
          "Not be listed on any sanctions list maintained by the U.S. Office of Foreign Assets Control (OFAC), the United Nations, or the European Union.",
          "Successfully complete Zelt's KYC/KYB verification process.",
          "Use the Services solely for lawful purposes and in compliance with these Terms.",
        ],
        outro: "Zelt reserves the right to deny access or suspend accounts that do not meet eligibility requirements at any time.",
      },
      {
        title: "3. Partner Obligations",
        type: "bullets",
        intro: "Partners who access the Zelt API and dashboard agree to the following obligations:",
        items: [
          "Maintain a valid commercial agreement with Zelt and comply with all applicable terms therein.",
          "Ensure that all Cardholders issued cards through their program have completed the required KYC verification.",
          "Comply with applicable AML/CFT regulations in all jurisdictions where they operate.",
          "Not resell, sublicense, or otherwise transfer access to the Services without Zelt's prior written consent.",
          "Maintain adequate collateral as required by Zelt to cover card program spend volumes.",
          "Promptly notify Zelt of any security incidents, suspected fraud, or regulatory inquiries related to their use of the Services.",
          "Accurately represent the nature of their business and intended card program use to Zelt.",
        ],
      },
      {
        title: "4. Prohibited Uses",
        type: "bullets",
        intro: "You may not use the Services to:",
        items: [
          "Engage in any illegal, fraudulent, deceptive, or abusive activity.",
          "Fund or facilitate transactions related to illegal goods, services, gambling, or adult content prohibited under applicable law.",
          "Circumvent, bypass, or attempt to undermine Zelt's KYC/AML controls or sanctions screening.",
          "Reverse engineer, decompile, or derive source code from Zelt's software, APIs, or infrastructure.",
          "Use automated tools, bots, or scripts to access the Services in a manner that disrupts or overloads our systems.",
          "Share API credentials, access tokens, or account credentials with unauthorized third parties.",
          "Attempt to access systems, data, or networks beyond your authorized scope.",
          "Transmit malware, viruses, or any malicious code through the Services.",
          "Infringe any third-party intellectual property, privacy, or other rights.",
        ],
        outro: "Violation of these prohibitions may result in immediate suspension or termination of your account and may be reported to relevant authorities.",
      },
      {
        title: "5. Card Services & Transactions",
        type: "bullets",
        intro: "Zelt provides card issuance infrastructure. Cards issued through Zelt are funded by stablecoin balances (USDC and/or USDT) held in accordance with your Card Program configuration:",
        items: [
          "All transactions are subject to real-time authorization controls configured in your Card Program.",
          "Stablecoin balances are converted at point of sale based on prevailing rates. Zelt does not guarantee specific exchange rates.",
          "You are solely responsible for ensuring sufficient stablecoin collateral to cover authorized spend.",
          "Zelt is not liable for declined transactions due to insufficient funds, network outages, or merchant-side issues.",
          "Transaction records are final and binding once settled on the card network. Disputes must be raised through the designated chargeback process.",
          "Cardholders must use cards only for personal or authorized business expenses as defined in their cardholder agreement with the Partner.",
        ],
      },
      {
        title: "6. Intellectual Property",
        type: "text",
        paragraphs: [
          `All content, software, trademarks, logos, trade names, APIs, and other materials made available through the Services ("Zelt IP") are owned by Zelt LTDA or its licensors and are protected by applicable intellectual property laws.`,
          "Subject to these Terms and any applicable Partner agreement, Zelt grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services solely for their intended purpose. No other rights are granted. You may not copy, reproduce, modify, distribute, or create derivative works from Zelt IP without express written permission.",
        ],
      },
      {
        title: "7. Availability & Disclaimers",
        type: "text",
        paragraphs: [
          `THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.`,
          "Zelt does not warrant that the Services will be uninterrupted, error-free, or free from harmful components. We reserve the right to modify, suspend, or discontinue any part of the Services at any time, with or without notice, though we will use reasonable efforts to provide advance notice of material changes.",
        ],
      },
      {
        title: "8. Limitation of Liability",
        type: "text",
        paragraphs: [
          "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ZELT AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS INTERRUPTION — ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
          "In no event shall Zelt's total aggregate liability to you for direct damages exceed the greater of (a) the fees paid by you to Zelt in the twelve (12) months preceding the claim, or (b) USD $500.",
          "Some jurisdictions do not allow the exclusion or limitation of certain damages. In such jurisdictions, Zelt's liability shall be limited to the greatest extent permitted by law.",
        ],
      },
      {
        title: "9. Indemnification",
        type: "bullets",
        intro: "You agree to defend, indemnify, and hold harmless Zelt and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or in connection with:",
        items: [
          "Your breach of these Terms.",
          "Your violation of any applicable law or regulation.",
          "Your infringement of any third-party rights, including intellectual property rights.",
          "Any fraud, negligence, or willful misconduct by you or your Cardholders.",
          "Any claims arising from your Card Program operations.",
        ],
      },
      {
        title: "10. Termination",
        type: "termination",
        byYou: "You may terminate your use of the Services at any time by ceasing use and notifying Zelt in writing. Partners must follow termination procedures as specified in their commercial agreement.",
        byZelt: "Zelt may suspend or terminate your access to the Services:",
        items: [
          "With 15 days' written notice, for any reason.",
          "Immediately and without notice, for breach of these Terms, violation of applicable law, fraudulent activity, or actions that pose risk to Zelt or third parties.",
        ],
        outro: "Upon termination, your right to access the Services ceases immediately. Provisions that by their nature should survive termination (including Sections 6, 8, 9, and 11) shall survive.",
      },
      {
        title: "11. Governing Law & Dispute Resolution",
        type: "text",
        paragraphs: [
          "These Terms shall be governed by and construed in accordance with applicable law in the jurisdiction where Zelt LTDA operates, without regard to conflict of law provisions.",
          "Any dispute arising out of or relating to these Terms or the Services that cannot be resolved through good-faith negotiation shall be submitted to binding arbitration. The arbitration shall be conducted in the language agreed between the parties.",
          "Class action waiver: You waive any right to bring or participate in a class action, class arbitration, or representative action against Zelt.",
        ],
      },
      {
        title: "12. Changes to These Terms",
        type: "text",
        paragraphs: [
          "Zelt may update these Terms at any time. We will notify you of material changes by posting the revised Terms on our website and, where appropriate, by email. Your continued use of the Services after the effective date of any change constitutes your acceptance of the revised Terms.",
        ],
      },
      {
        title: "13. Contact Us",
        type: "contact",
        intro: "If you have questions about these Terms, please contact us:",
        company: "Zelt LTDA",
        department: "Legal & Compliance",
        email: "legal@zelt.finance",
      },
    ],
  },
  "pt-BR": {
    lastUpdated: "17 de abril de 2026",
    back: "Voltar para a home",
    label: "Legal",
    title: "Termos de Uso",
    intro: [
      `Estes Termos de Uso ("Termos") regem seu acesso e uso do website, APIs, dashboard e plataforma de card-as-a-service operada pela Zelt LTDA ("Zelt", "nós", "nosso" ou "nossa"). Ao acessar ou usar nossos Serviços, você concorda em cumprir estes Termos. Se você não concordar, não use nossos Serviços.`,
      `Estes Termos se aplicam a todos os usuários, incluindo clientes corporativos ("Parceiros") que integram a API da Zelt para oferecer programas de cartão, e usuários finais ("Portadores de Cartão") que recebem cartões por meio de programas de Parceiros.`,
    ],
    sections: [
      {
        title: "1. Definições",
        type: "definitions",
        items: [
          ['"Serviços"', "Website, API, dashboard, infraestrutura de emissão de cartões, ferramentas de KYC/AML e produtos relacionados da Zelt."],
          ['"Parceiro"', "Entidade empresarial que celebrou um acordo separado com a Zelt para acessar e integrar os Serviços."],
          ['"Portador de Cartão"', "Indivíduo que recebeu um cartão de pagamento de um Parceiro usando a infraestrutura da Zelt."],
          ['"Programa de Cartão"', "Programa configurado por meio do qual os Parceiros emitem cartões para Portadores de Cartão."],
          ['"Stablecoins"', "Ativos digitais indexados a moedas fiduciárias (ex.: USDC, USDT) usados como fonte de financiamento para programas de cartão."],
          ['"KYC/AML"', "Procedimentos de Conheça Seu Cliente e Prevenção à Lavagem de Dinheiro exigidos pela legislação aplicável."],
        ],
      },
      {
        title: "2. Elegibilidade",
        type: "bullets",
        intro: "Para usar nossos Serviços, você deve:",
        items: [
          "Ter pelo menos 18 anos (ou a maioridade em sua jurisdição).",
          "Ter capacidade legal para celebrar um contrato vinculante.",
          "Não estar localizado em, nem ser nacional ou residente de, qualquer país sujeito a sanções abrangentes (incluindo, entre outros, Cuba, Irã, Coreia do Norte, Rússia, Síria e as regiões da Crimeia, Donetsk e Lugansk).",
          "Não estar listado em nenhuma lista de sanções mantida pelo OFAC dos EUA, pela ONU ou pela União Europeia.",
          "Concluir com sucesso o processo de verificação KYC/KYB da Zelt.",
          "Usar os Serviços exclusivamente para fins lícitos e em conformidade com estes Termos.",
        ],
        outro: "A Zelt reserva o direito de negar acesso ou suspender contas que não atendam aos requisitos de elegibilidade a qualquer momento.",
      },
      {
        title: "3. Obrigações do Parceiro",
        type: "bullets",
        intro: "Os Parceiros que acessam a API e o dashboard da Zelt concordam com as seguintes obrigações:",
        items: [
          "Manter um acordo comercial válido com a Zelt e cumprir todos os termos aplicáveis.",
          "Garantir que todos os Portadores de Cartão emitidos por meio do seu programa tenham concluído a verificação KYC exigida.",
          "Cumprir os regulamentos de AML/CFT aplicáveis em todas as jurisdições onde operam.",
          "Não revender, sublicenciar ou transferir o acesso aos Serviços sem o consentimento prévio por escrito da Zelt.",
          "Manter garantias adequadas conforme exigido pela Zelt para cobrir os volumes de gastos do programa de cartão.",
          "Notificar prontamente a Zelt sobre quaisquer incidentes de segurança, fraudes suspeitas ou consultas regulatórias relacionadas ao uso dos Serviços.",
          "Representar com precisão a natureza de seu negócio e o uso pretendido do programa de cartão para a Zelt.",
        ],
      },
      {
        title: "4. Usos Proibidos",
        type: "bullets",
        intro: "Você não pode usar os Serviços para:",
        items: [
          "Envolver-se em atividades ilegais, fraudulentas, enganosas ou abusivas.",
          "Financiar ou facilitar transações relacionadas a bens, serviços, jogos de azar ou conteúdo adulto ilegais conforme a lei aplicável.",
          "Contornar, ignorar ou tentar minar os controles de KYC/AML ou triagem de sanções da Zelt.",
          "Fazer engenharia reversa, descompilar ou derivar código-fonte do software, APIs ou infraestrutura da Zelt.",
          "Usar ferramentas automatizadas, bots ou scripts para acessar os Serviços de forma que interrompa ou sobrecarregue nossos sistemas.",
          "Compartilhar credenciais de API, tokens de acesso ou credenciais de conta com terceiros não autorizados.",
          "Tentar acessar sistemas, dados ou redes além do seu escopo autorizado.",
          "Transmitir malware, vírus ou qualquer código malicioso por meio dos Serviços.",
          "Violar direitos de propriedade intelectual, privacidade ou outros direitos de terceiros.",
        ],
        outro: "A violação dessas proibições pode resultar na suspensão ou encerramento imediato da sua conta e pode ser reportada às autoridades competentes.",
      },
      {
        title: "5. Serviços de Cartão e Transações",
        type: "bullets",
        intro: "A Zelt fornece infraestrutura de emissão de cartões. Os cartões emitidos pela Zelt são financiados por saldos em stablecoin (USDC e/ou USDT) mantidos de acordo com a configuração do seu Programa de Cartão:",
        items: [
          "Todas as transações estão sujeitas a controles de autorização em tempo real configurados no seu Programa de Cartão.",
          "Os saldos em stablecoin são convertidos no ponto de venda com base nas taxas vigentes. A Zelt não garante taxas de câmbio específicas.",
          "Você é o único responsável por garantir garantias suficientes em stablecoin para cobrir os gastos autorizados.",
          "A Zelt não se responsabiliza por transações recusadas devido a fundos insuficientes, interrupções de rede ou problemas do lado do comerciante.",
          "Os registros de transações são definitivos e vinculantes após a liquidação na rede de cartões. As disputas devem ser levantadas por meio do processo de chargeback designado.",
          "Os Portadores de Cartão devem usar os cartões apenas para despesas pessoais ou empresariais autorizadas, conforme definido no acordo do portador de cartão com o Parceiro.",
        ],
      },
      {
        title: "6. Propriedade Intelectual",
        type: "text",
        paragraphs: [
          `Todo conteúdo, software, marcas registradas, logotipos, nomes comerciais, APIs e outros materiais disponibilizados por meio dos Serviços ("Propriedade Intelectual da Zelt") são de propriedade da Zelt LTDA ou de seus licenciadores e são protegidos pelas leis de propriedade intelectual aplicáveis.`,
          "Sujeito a estes Termos e a qualquer acordo de Parceiro aplicável, a Zelt concede a você uma licença limitada, não exclusiva, intransferível e revogável para acessar e usar os Serviços exclusivamente para o fim pretendido. Nenhum outro direito é concedido. Você não pode copiar, reproduzir, modificar, distribuir ou criar trabalhos derivados da Propriedade Intelectual da Zelt sem permissão expressa por escrito.",
        ],
      },
      {
        title: "7. Disponibilidade e Isenções de Responsabilidade",
        type: "text",
        paragraphs: [
          `OS SERVIÇOS SÃO FORNECIDOS "NO ESTADO EM QUE SE ENCONTRAM" E "CONFORME DISPONÍVEIS", SEM GARANTIAS DE QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS, INCLUINDO, MAS NÃO SE LIMITANDO A, GARANTIAS DE COMERCIABILIDADE, ADEQUAÇÃO A UMA FINALIDADE ESPECÍFICA OU NÃO VIOLAÇÃO.`,
          "A Zelt não garante que os Serviços serão ininterruptos, sem erros ou livres de componentes prejudiciais. Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer parte dos Serviços a qualquer momento, com ou sem aviso prévio, embora nos esforcemos para fornecer aviso prévio razoável sobre mudanças materiais.",
        ],
      },
      {
        title: "8. Limitação de Responsabilidade",
        type: "text",
        paragraphs: [
          "NA MÁXIMA EXTENSÃO PERMITIDA PELA LEI APLICÁVEL, A ZELT E SEUS DIRETORES, FUNCIONÁRIOS, AGENTES E LICENCIADORES NÃO SERÃO RESPONSÁVEIS POR QUAISQUER DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU PUNITIVOS — INCLUINDO, MAS NÃO SE LIMITANDO A, PERDA DE LUCROS, RECEITA, DADOS, GOODWILL OU INTERRUPÇÃO DE NEGÓCIOS — DECORRENTES OU RELACIONADOS AO SEU USO DOS SERVIÇOS, MESMO QUE AVISADOS DA POSSIBILIDADE DE TAIS DANOS.",
          "Em nenhum caso a responsabilidade agregada total da Zelt para você por danos diretos excederá o maior valor entre (a) as taxas pagas por você à Zelt nos doze (12) meses anteriores à reclamação, ou (b) USD $500.",
          "Algumas jurisdições não permitem a exclusão ou limitação de certos danos. Nessas jurisdições, a responsabilidade da Zelt será limitada à maior extensão permitida por lei.",
        ],
      },
      {
        title: "9. Indenização",
        type: "bullets",
        intro: "Você concorda em defender, indenizar e isentar a Zelt e suas afiliadas, diretores, funcionários e agentes de e contra quaisquer reivindicações, responsabilidades, danos, perdas e despesas (incluindo honorários advocatícios razoáveis) decorrentes de ou relacionados a:",
        items: [
          "Sua violação destes Termos.",
          "Sua violação de qualquer lei ou regulamento aplicável.",
          "Sua violação de quaisquer direitos de terceiros, incluindo direitos de propriedade intelectual.",
          "Qualquer fraude, negligência ou má conduta intencional por você ou seus Portadores de Cartão.",
          "Quaisquer reivindicações decorrentes das operações do seu Programa de Cartão.",
        ],
      },
      {
        title: "10. Rescisão",
        type: "termination",
        byYou: "Você pode encerrar seu uso dos Serviços a qualquer momento cessando o uso e notificando a Zelt por escrito. Os Parceiros devem seguir os procedimentos de rescisão especificados em seu acordo comercial.",
        byZelt: "A Zelt pode suspender ou encerrar seu acesso aos Serviços:",
        items: [
          "Com aviso prévio de 15 dias por escrito, por qualquer motivo.",
          "Imediatamente e sem aviso prévio, por violação destes Termos, violação da lei aplicável, atividade fraudulenta ou ações que representem risco para a Zelt ou terceiros.",
        ],
        outro: "Após a rescisão, seu direito de acessar os Serviços cessa imediatamente. As disposições que, por sua natureza, devem sobreviver à rescisão (incluindo as Seções 6, 8, 9 e 11) sobreviverão.",
      },
      {
        title: "11. Lei Aplicável e Resolução de Disputas",
        type: "text",
        paragraphs: [
          "Estes Termos serão regidos e interpretados de acordo com a legislação aplicável na jurisdição em que a Zelt LTDA opera, sem consideração às disposições de conflito de leis.",
          "Qualquer disputa decorrente de ou relacionada a estes Termos ou aos Serviços que não possa ser resolvida por meio de negociação de boa-fé será submetida a arbitragem vinculante, conduzida no idioma acordado entre as partes.",
          "Renúncia a ação coletiva: Você renuncia a qualquer direito de propor ou participar de uma ação coletiva, arbitragem coletiva ou ação representativa contra a Zelt.",
        ],
      },
      {
        title: "12. Alterações nestes Termos",
        type: "text",
        paragraphs: [
          "A Zelt pode atualizar estes Termos a qualquer momento. Notificaremos você sobre mudanças materiais publicando os Termos revisados em nosso website e, quando apropriado, por e-mail. Seu uso continuado dos Serviços após a data de vigência de qualquer alteração constitui sua aceitação dos Termos revisados.",
        ],
      },
      {
        title: "13. Entre em Contato",
        type: "contact",
        intro: "Se você tiver dúvidas sobre estes Termos, entre em contato conosco:",
        company: "Zelt LTDA",
        department: "Jurídico e Compliance",
        email: "legal@zelt.finance",
      },
    ],
  },
  es: {
    lastUpdated: "17 de abril de 2026",
    back: "Volver al inicio",
    label: "Legal",
    title: "Términos de Uso",
    intro: [
      `Estos Términos de Uso ("Términos") rigen su acceso y uso del sitio web, APIs, dashboard y plataforma de card-as-a-service operada por Zelt LTDA ("Zelt", "nosotros", "nos" o "nuestro"). Al acceder o utilizar nuestros Servicios, usted acepta estar vinculado por estos Términos. Si no está de acuerdo, no utilice nuestros Servicios.`,
      `Estos Términos se aplican a todos los usuarios, incluidos los clientes corporativos ("Socios") que integran la API de Zelt para ofrecer programas de tarjeta, y los usuarios finales ("Titulares de Tarjeta") a quienes se les emiten tarjetas a través de los programas de los Socios.`,
    ],
    sections: [
      {
        title: "1. Definiciones",
        type: "definitions",
        items: [
          ['"Servicios"', "El sitio web, la API, el dashboard, la infraestructura de emisión de tarjetas, las herramientas de KYC/AML y los productos relacionados de Zelt."],
          ['"Socio"', "Entidad comercial que ha celebrado un acuerdo separado con Zelt para acceder e integrar los Servicios."],
          ['"Titular de Tarjeta"', "Individuo al que un Socio le ha emitido una tarjeta de pago utilizando la infraestructura de Zelt."],
          ['"Programa de Tarjeta"', "Programa configurado a través del cual los Socios emiten tarjetas a los Titulares de Tarjeta."],
          ['"Stablecoins"', "Activos digitales vinculados a monedas fiduciarias (p. ej., USDC, USDT) utilizados como fuente de financiamiento para los programas de tarjeta."],
          ['"KYC/AML"', "Procedimientos de Conozca a Su Cliente y Prevención del Lavado de Dinero requeridos por la ley aplicable."],
        ],
      },
      {
        title: "2. Elegibilidad",
        type: "bullets",
        intro: "Para utilizar nuestros Servicios, usted debe:",
        items: [
          "Tener al menos 18 años (o la mayoría de edad en su jurisdicción).",
          "Tener capacidad legal para celebrar un acuerdo vinculante.",
          "No estar ubicado en, ni ser nacional ni residente de, ningún país sujeto a sanciones integrales (incluyendo, entre otros, Cuba, Irán, Corea del Norte, Rusia, Siria y las regiones de Crimea, Donetsk y Lugansk).",
          "No estar incluido en ninguna lista de sanciones mantenida por la OFAC de EE. UU., las Naciones Unidas o la Unión Europea.",
          "Completar con éxito el proceso de verificación KYC/KYB de Zelt.",
          "Utilizar los Servicios únicamente para fines lícitos y de conformidad con estos Términos.",
        ],
        outro: "Zelt se reserva el derecho de denegar el acceso o suspender cuentas que no cumplan con los requisitos de elegibilidad en cualquier momento.",
      },
      {
        title: "3. Obligaciones del Socio",
        type: "bullets",
        intro: "Los Socios que acceden a la API y el dashboard de Zelt aceptan las siguientes obligaciones:",
        items: [
          "Mantener un acuerdo comercial válido con Zelt y cumplir con todos los términos aplicables.",
          "Garantizar que todos los Titulares de Tarjeta emitidos a través de su programa hayan completado la verificación KYC requerida.",
          "Cumplir con las regulaciones de AML/CFT aplicables en todas las jurisdicciones donde operan.",
          "No revender, sublicenciar ni transferir el acceso a los Servicios sin el consentimiento previo por escrito de Zelt.",
          "Mantener el colateral adecuado según lo requiera Zelt para cubrir los volúmenes de gasto del programa de tarjeta.",
          "Notificar de inmediato a Zelt sobre cualquier incidente de seguridad, fraude sospechoso o consulta regulatoria relacionada con el uso de los Servicios.",
          "Representar con precisión la naturaleza de su negocio y el uso previsto del programa de tarjeta ante Zelt.",
        ],
      },
      {
        title: "4. Usos Prohibidos",
        type: "bullets",
        intro: "No puede utilizar los Servicios para:",
        items: [
          "Participar en actividades ilegales, fraudulentas, engañosas o abusivas.",
          "Financiar o facilitar transacciones relacionadas con bienes, servicios, juegos de azar o contenido para adultos ilegales según la ley aplicable.",
          "Eludir, omitir o intentar socavar los controles de KYC/AML o la verificación de sanciones de Zelt.",
          "Realizar ingeniería inversa, descompilar o derivar código fuente del software, APIs o infraestructura de Zelt.",
          "Utilizar herramientas automatizadas, bots o scripts para acceder a los Servicios de manera que interrumpa o sobrecargue nuestros sistemas.",
          "Compartir credenciales de API, tokens de acceso o credenciales de cuenta con terceros no autorizados.",
          "Intentar acceder a sistemas, datos o redes más allá de su ámbito autorizado.",
          "Transmitir malware, virus o cualquier código malicioso a través de los Servicios.",
          "Infringir los derechos de propiedad intelectual, privacidad u otros derechos de terceros.",
        ],
        outro: "La violación de estas prohibiciones puede resultar en la suspensión o terminación inmediata de su cuenta y puede ser reportada a las autoridades competentes.",
      },
      {
        title: "5. Servicios de Tarjeta y Transacciones",
        type: "bullets",
        intro: "Zelt proporciona infraestructura de emisión de tarjetas. Las tarjetas emitidas a través de Zelt están financiadas por saldos en stablecoin (USDC y/o USDT) mantenidos de acuerdo con la configuración de su Programa de Tarjeta:",
        items: [
          "Todas las transacciones están sujetas a controles de autorización en tiempo real configurados en su Programa de Tarjeta.",
          "Los saldos en stablecoin se convierten en el punto de venta según las tasas vigentes. Zelt no garantiza tasas de cambio específicas.",
          "Usted es el único responsable de garantizar el colateral suficiente en stablecoin para cubrir el gasto autorizado.",
          "Zelt no se responsabiliza por transacciones rechazadas debido a fondos insuficientes, interrupciones de red o problemas del lado del comerciante.",
          "Los registros de transacciones son definitivos y vinculantes una vez liquidados en la red de tarjetas. Las disputas deben plantearse a través del proceso de chargeback designado.",
          "Los Titulares de Tarjeta deben utilizar las tarjetas únicamente para gastos personales o empresariales autorizados según lo definido en su acuerdo de titular de tarjeta con el Socio.",
        ],
      },
      {
        title: "6. Propiedad Intelectual",
        type: "text",
        paragraphs: [
          `Todo el contenido, software, marcas registradas, logotipos, nombres comerciales, APIs y otros materiales disponibles a través de los Servicios ("Propiedad Intelectual de Zelt") son propiedad de Zelt LTDA o de sus licenciantes y están protegidos por las leyes de propiedad intelectual aplicables.`,
          "Sujeto a estos Términos y a cualquier acuerdo de Socio aplicable, Zelt le otorga una licencia limitada, no exclusiva, intransferible y revocable para acceder y utilizar los Servicios únicamente para su propósito previsto. No se otorgan otros derechos. No puede copiar, reproducir, modificar, distribuir ni crear obras derivadas de la Propiedad Intelectual de Zelt sin permiso expreso por escrito.",
        ],
      },
      {
        title: "7. Disponibilidad y Exenciones de Responsabilidad",
        type: "text",
        paragraphs: [
          `LOS SERVICIOS SE PROPORCIONAN "TAL CUAL" Y "SEGÚN DISPONIBILIDAD" SIN GARANTÍAS DE NINGÚN TIPO, EXPRESAS O IMPLÍCITAS, INCLUYENDO PERO NO LIMITADAS A GARANTÍAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR O NO INFRACCIÓN.`,
          "Zelt no garantiza que los Servicios sean ininterrumpidos, sin errores o libres de componentes dañinos. Nos reservamos el derecho de modificar, suspender o descontinuar cualquier parte de los Servicios en cualquier momento, con o sin previo aviso, aunque haremos esfuerzos razonables para proporcionar aviso previo sobre cambios materiales.",
        ],
      },
      {
        title: "8. Limitación de Responsabilidad",
        type: "text",
        paragraphs: [
          "EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY APLICABLE, ZELT Y SUS DIRECTIVOS, EMPLEADOS, AGENTES Y LICENCIANTES NO SERÁN RESPONSABLES DE NINGÚN DAÑO INDIRECTO, INCIDENTAL, ESPECIAL, CONSECUENTE O PUNITIVO — INCLUYENDO PERO NO LIMITADO A PÉRDIDA DE GANANCIAS, INGRESOS, DATOS, FONDO DE COMERCIO O INTERRUPCIÓN DEL NEGOCIO — QUE SURJA O ESTÉ RELACIONADO CON SU USO DE LOS SERVICIOS, INCLUSO SI SE LES ADVIRTIÓ DE LA POSIBILIDAD DE TALES DAÑOS.",
          "En ningún caso la responsabilidad agregada total de Zelt hacia usted por daños directos excederá el mayor valor entre (a) las tarifas pagadas por usted a Zelt en los doce (12) meses anteriores al reclamo, o (b) USD $500.",
          "Algunas jurisdicciones no permiten la exclusión o limitación de ciertos daños. En dichas jurisdicciones, la responsabilidad de Zelt se limitará en la mayor medida permitida por la ley.",
        ],
      },
      {
        title: "9. Indemnización",
        type: "bullets",
        intro: "Usted acepta defender, indemnizar y eximir de responsabilidad a Zelt y sus afiliados, directivos, empleados y agentes frente a cualquier reclamación, responsabilidad, daño, pérdida y gasto (incluidos los honorarios razonables de abogados) que surjan de o estén relacionados con:",
        items: [
          "Su incumplimiento de estos Términos.",
          "Su violación de cualquier ley o regulación aplicable.",
          "Su infracción de los derechos de terceros, incluidos los derechos de propiedad intelectual.",
          "Cualquier fraude, negligencia o mala conducta intencional por parte de usted o sus Titulares de Tarjeta.",
          "Cualquier reclamación derivada de las operaciones de su Programa de Tarjeta.",
        ],
      },
      {
        title: "10. Terminación",
        type: "termination",
        byYou: "Puede terminar su uso de los Servicios en cualquier momento cesando su uso y notificando a Zelt por escrito. Los Socios deben seguir los procedimientos de terminación especificados en su acuerdo comercial.",
        byZelt: "Zelt puede suspender o terminar su acceso a los Servicios:",
        items: [
          "Con 15 días de aviso previo por escrito, por cualquier motivo.",
          "De forma inmediata y sin previo aviso, por incumplimiento de estos Términos, violación de la ley aplicable, actividad fraudulenta o acciones que representen un riesgo para Zelt o terceros.",
        ],
        outro: "Tras la terminación, su derecho a acceder a los Servicios cesa de inmediato. Las disposiciones que por su naturaleza deben sobrevivir a la terminación (incluyendo las Secciones 6, 8, 9 y 11) sobrevivirán.",
      },
      {
        title: "11. Ley Aplicable y Resolución de Disputas",
        type: "text",
        paragraphs: [
          "Estos Términos se regirán e interpretarán de acuerdo con la legislación aplicable en la jurisdicción donde opera Zelt LTDA, sin consideración a las disposiciones sobre conflictos de leyes.",
          "Cualquier disputa que surja de o esté relacionada con estos Términos o los Servicios que no pueda resolverse mediante negociación de buena fe se someterá a arbitraje vinculante, realizado en el idioma acordado entre las partes.",
          "Renuncia a acción colectiva: Usted renuncia a cualquier derecho a presentar o participar en una demanda colectiva, arbitraje colectivo o acción representativa contra Zelt.",
        ],
      },
      {
        title: "12. Cambios en estos Términos",
        type: "text",
        paragraphs: [
          "Zelt puede actualizar estos Términos en cualquier momento. Le notificaremos sobre cambios materiales publicando los Términos revisados en nuestro sitio web y, cuando corresponda, por correo electrónico. Su uso continuado de los Servicios después de la fecha de entrada en vigor de cualquier cambio constituye su aceptación de los Términos revisados.",
        ],
      },
      {
        title: "13. Contáctenos",
        type: "contact",
        intro: "Si tiene preguntas sobre estos Términos, contáctenos:",
        company: "Zelt LTDA",
        department: "Legal y Cumplimiento",
        email: "legal@zelt.finance",
      },
    ],
  },
} as const;

type Locale = keyof typeof content;

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
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
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>Last updated: {c.lastUpdated}</p>
          </div>

          <div className="space-y-10" style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.8" }}>

            <Section>
              {c.intro.map((p, i) => (
                <p key={i} className={i > 0 ? "mt-4" : ""}>{p}</p>
              ))}
            </Section>

            {c.sections.map((sec) => (
              <Section key={sec.title} title={sec.title}>
                {sec.type === "definitions" && (
                  <ul className="space-y-3 list-none">
                    {(sec as { items: readonly (readonly string[])[] }).items.map(([term, def], i) => (
                      <li key={i} className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                        <strong className="text-white">{term}</strong> — {def}
                      </li>
                    ))}
                  </ul>
                )}
                {sec.type === "bullets" && (
                  <>
                    {"intro" in sec && <p>{(sec as { intro: string }).intro}</p>}
                    <ul className="mt-4 space-y-2 list-none">
                      {(sec as { items: readonly string[] }).items.map((item, i) => (
                        <BulletItem key={i}>{item}</BulletItem>
                      ))}
                    </ul>
                    {"outro" in sec && <p className="mt-4">{(sec as { outro: string }).outro}</p>}
                  </>
                )}
                {sec.type === "text" && (
                  <>
                    {(sec as { paragraphs: readonly string[] }).paragraphs.map((p, i) => (
                      <p key={i} className={i > 0 ? "mt-4" : ""}>{p}</p>
                    ))}
                  </>
                )}
                {sec.type === "termination" && (
                  <>
                    <p><strong className="text-white">
                      {locale === "pt-BR" ? "Por você:" : locale === "es" ? "Por usted:" : "By you:"}
                    </strong> {(sec as { byYou: string }).byYou}</p>
                    <p className="mt-4"><strong className="text-white">
                      {locale === "pt-BR" ? "Pela Zelt:" : locale === "es" ? "Por Zelt:" : "By Zelt:"}
                    </strong> {(sec as { byZelt: string }).byZelt}</p>
                    <ul className="mt-3 space-y-2 list-none">
                      {(sec as { items: readonly string[] }).items.map((item, i) => (
                        <BulletItem key={i}>{item}</BulletItem>
                      ))}
                    </ul>
                    {"outro" in sec && <p className="mt-4">{(sec as { outro: string }).outro}</p>}
                  </>
                )}
                {sec.type === "contact" && (
                  <>
                    <p>{"intro" in sec ? (sec as { intro: string }).intro : ""}</p>
                    <div className="mt-5 rounded-2xl p-6" style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.15)" }}>
                      <p className="font-semibold text-white mb-1">{(sec as { company: string }).company}</p>
                      <p>{"department" in sec ? (sec as { department: string }).department : ""}</p>
                      <p><a href={`mailto:${(sec as { email: string }).email}`} style={{ color: "#60a5fa" }}>{(sec as { email: string }).email}</a></p>
                    </div>
                  </>
                )}
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

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#3b82f6" }} />
      <span>{children}</span>
    </li>
  );
}
