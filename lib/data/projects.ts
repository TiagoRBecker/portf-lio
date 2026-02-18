import { Project } from "@/lib/types";
import { validateHeaderValue } from "http";

export const projects: Project[] = [
  {
    slug: "fintech-dashboard",
    name: "Ecossistema de Gestão Editorial e Financeira (ERP)",
    shortDescription:
      "Painel de trading em tempo real com gestão de portfólio e ferramentas de análise de mercado.",
    tags: [
      "Next.js",
      "Express",
      "Docker",
      "Redis",
      "SOLID",
      "Tailwind CSS",
      "NextAuth",
    ],
    status: "private",
    isPublic: false,
    githubAccessRequired: true,
    modules: [
      {
        id: "architecture",
        exist: true,
        title: "Arquitetura Backend",
        icon: "architecture",
        description:
          "API REST robusta com foco em desacoplamento, performance com cache em memória e integridade transacional.",
        images: [
          "/Projects/editora/api/1.png",
          "/Projects/editora/api/2.png",
          "/Projects/editora/api/3.png",
          "/Projects/editora/api/4.png",
          "/Projects/editora/api/5.png",
          "/Projects/editora/api/6.png",
        ],

        explanation:
          "Backend desenvolvido em Node.js utilizando o padrão de Arquitetura Hexagonal (Ports and Adapters) para isolar as regras de negócio de dependências de infraestrutura. A aplicação utiliza o TSyringe para a inversão de controle e injeção de dependências entre controllers, casos de uso e repositórios.\n\nO sistema gerencia um fluxo financeiro completo: desde o processamento de vendas via Webhooks até o crédito automático em uma Wallet digital, utilizando transações atômicas com Prisma para garantir a integridade dos saldos. A camada de persistência é otimizada com cache em Redis para reduzir a carga no PostgreSQL em rotas de alta demanda. Todo o fluxo de dados é validado por DTOs e protegido por middlewares de autenticação e autorização baseada em cargos (RBAC).",
      },
      {
        id: "admin",
        exist: true,
        title: "Painel Administrativo",
        icon: "admin",
        description:
          "Plataforma Enterprise completa com gestão de Revenue Share, auditoria por logs e controle hierárquico de acessos (RBAC).",
        images: [
          "/Projects/editora/admin/1.png",
          "/Projects/editora/admin/2.png",
          "/Projects/editora/admin/3.png",
          "/Projects/editora/admin/4.png",
          "/Projects/editora/admin/5.png",
          "/Projects/editora/admin/6.png",
          "/Projects/editora/admin/7.png",
          "/Projects/editora/admin/8.png",
          "/Projects/editora/admin/9.png",
          "/Projects/editora/admin/10.png",
          "/Projects/editora/admin/11.png",
          "/Projects/editora/admin/12.png",
          "/Projects/editora/admin/13.png",
          "/Projects/editora/admin/14.png",
          "/Projects/editora/admin/15.png",
          "/Projects/editora/admin/16.png",
          "/Projects/editora/admin/17.png",
          "/Projects/editora/admin/18.png",
          "/Projects/editora/admin/19.png",
          "/Projects/editora/admin/20.png",
          "/Projects/editora/admin/21.png",
          "/Projects/editora/admin/22.png",
          "/Projects/editora/admin/23.png",
        ],
        explanation:
          "Este projeto representa o desenvolvimento de um ecossistema de nível industrial ao longo de 1 ano e 6 meses de engenharia contínua. Diferente de um CMS comum, construí um ERP robusto capaz de gerenciar desde o ciclo de vida editorial (Revistas e Artigos) até a inteligência financeira da plataforma.\n\nImplementei um sistema avançado de RBAC (Role-Based Access Control), separando privilégios entre Administradores, Colaboradores e Parceiros, garantindo que áreas críticas como o módulo de 'Divisão de Lucro' e 'Logs de Auditoria' sejam acessíveis apenas por pessoal autorizado. O motor financeiro automatiza o cálculo de Revenue Share, processando comissões e repasses de forma precisa através de uma API NestJS escalável.\n\nUm dos maiores diferenciais técnicos é o sistema de rastreabilidade (Logs Info), que registra cada operação crítica no banco de dados, oferecendo uma camada de segurança e transparência indispensável para auditorias. A interface em Next.js utiliza estados complexos e Dashboards analíticos para transformar dados brutos em métricas de negócio (KPIs), enquanto a infraestrutura garante a integridade de relacionamentos complexos entre múltiplos módulos, provando ser uma solução pronta para operação em larga escala.",
      },
      {
        id: "infrastructure",
        exist: true,
        title: "Infraestrutura & Docker",
        icon: "infrastructure",
        description:
          "Implantação de alta disponibilidade com Hot Standby e failover sub-segundo.",
        images: [
          "/Projects/editora/infra/1.png",
          "/Projects/editora/infra/2.png",
          "/Projects/editora/infra/3.png",
          "/Projects/editora/infra/4.png",
          "/Projects/editora/infra/5.png",
          "/Projects/editora/infra/6.png",
        ],

        explanation:
          "Projetada para disponibilidade de 99,999% com implantação ativo-ativo entre data centers. Replicação de banco síncrona para dados críticos. Feeds de mercado possuem conexões redundantes com failover automático. Toda a stack pode ser alternada para o site de desastre em menos de 30 segundos.",
      },
      {
        id: "client",
        exist: true,
        title: "Aplicação do Cliente",
        icon: "client",
        description:
          "Plataforma de consumo de conteúdo digital com autenticação segura, checkout integrado e leitor de revistas otimizado.",
        images: [
          "/Projects/editora/client/1.png",
          "/Projects/editora/client/2.png",
          "/Projects/editora/client/3.png",
          "/Projects/editora/client/4.png",
          "/Projects/editora/client/5.png",
          "/Projects/editora/client/6.png",
          "/Projects/editora/client/7.png",
          "/Projects/editora/client/8.png",
          "/Projects/editora/client/9.png",
          "/Projects/editora/client/10.png",
          "/Projects/editora/client/11.png",
          "/Projects/editora/client/12.png",
          "/Projects/editora/client/13.png",
          "/Projects/editora/client/14.png",
          "/Projects/editora/client/15.png",
          "/Projects/editora/client/16.png",
          "/Projects/editora/client/17.png",
          "/Projects/editora/client/18.png",
          "/Projects/editora/client/19.png",
          "/Projects/editora/client/20.png",
          "/Projects/editora/client/21.png",
          "/Projects/editora/client/22.png",
          "/Projects/editora/client/23.png",
          "/Projects/editora/client/24.png",
          "/Projects/editora/client/25.png",
          "/Projects/editora/client/26.png",
          "/Projects/editora/client/27.png",
          "/Projects/editora/client/28.png",
          "/Projects/editora/client/29.png",
          "/Projects/editora/client/30.png",
          "/Projects/editora/client/31.png",
          "/Projects/editora/client/32.png",
        ],
        explanation:
          "Interface de larga escala desenvolvida em Next.js, estruturada para gerenciar um ecossistema complexo de mais de 30 rotas distintas, incluindo áreas de vitrine, gestão de perfil, fluxos de pagamento e biblioteca de conteúdo. A arquitetura foca em performance e SEO, utilizando o roteamento avançado do Next.js para segmentar a experiência entre áreas públicas e restritas.\n\nA segurança é centralizada no NextAuth, que coordena o acesso a rotas privadas e a persistência de sessão em comunicação direta com a API Core. O projeto inclui um fluxo de checkout multicamadas e uma área de leitura otimizada para grandes volumes de ativos digitais, garantindo que a navegação entre as dezenas de páginas seja fluida e que o estado da aplicação (como carrinho e progresso de leitura) seja preservado de forma consistente.",
      },
    ],
  },
  {
    slug: "logistics-platform",
    name: "Sistema de Gestão e Vendas de documentos online",
    shortDescription:
      "Solução Full Stack para comercialização automatizada de arquivos digitais, com integração de pagamentos e entrega imediata via Webhooks.",
    tags: ["Next.js", "NestJS", "Docker"],
    status: "production",
    isPublic: true,
    liveUrl: "https://example-logistics.com",
    modules: [
      {
        id: "architecture",
        exist: true,
        title: "Arquitetura Backend",
        icon: "architecture",
        description:
          "API robusta desenvolvida com NestJS, seguindo princípios de Clean Architecture e alta tipagem com TypeScript.",
        images: [
          "/Projects/ficha/api/1.png",
          "/Projects/ficha/api/2.png",
          "/Projects/ficha/api/3.png",
          "/Projects/ficha/api/4.png",
        ],
        explanation: `Para este projeto, construí uma API utilizando NestJS, focando em uma organização que permite ao sistema crescer sem se tornar bagunçado. Em vez de misturar tudo, separei as funções principais em 'Casos de Uso', o que torna a manutenção muito mais simples e rápida.

Usei o Prisma para conversar com o banco de dados de forma segura e eficiente, garantindo que as informações dos produtos e vendas estejam sempre corretas. Além disso, a segurança é prioridade: implementei travas de acesso (JWT) para que apenas usuários autorizados cheguem ao painel administrativo.

Por fim, toda a estrutura roda dentro de containers Docker. Isso significa que o sistema é 'blindado' contra erros de ambiente, rodando com a mesma performance e confiança tanto no meu computador quanto no servidor final.`,
      },
      {
        id: "admin",
        exist: true,
        title: "Painel Administrativo",
        icon: "admin",
        description:
          "Painel de controle integrado à API NestJS para gerenciamento de produtos, categorias e fluxos de vendas.",
        images: [
          "/Projects/ficha/admin/1.png",
          "/Projects/ficha/admin/2.png",
          "/Projects/ficha/admin/3.png",
          "/Projects/ficha/admin/4.png",
          "/Projects/ficha/admin/5.png",
          "/Projects/ficha/admin/6.png",
        ],
        explanation: `O Painel Admin foi desenvolvido para servir como o centro de operações do sistema, sendo totalmente alimentado por uma API robusta em NestJS. A interface, construída em Next.js, oferece uma experiência de gerenciamento fluida e reativa, permitindo o controle total sobre o ecossistema da plataforma.

Implementei um Dashboard inteligente que apresenta métricas em tempo real, como receita total, volume de produtos e status de inventário, utilizando estados complexos no Front-end para refletir os dados processados no Back-end. O sistema conta com módulos completos de CRUD (Create, Read, Update, Delete) para produtos e categorias, incluindo suporte a upload de arquivos e gerenciamento de documentos técnicos (PDF/PPTX).

Um diferencial importante é o Sistema de Carrinho e Vendas, que permite monitorar carrinhos pendentes e finalizados, fornecendo uma visão clara do fluxo comercial. Todo o ambiente é conteinerizado com Docker, garantindo que a comunicação entre o Admin e a API seja consistente em qualquer ambiente de hospedagem, mantendo a integridade dos dados e a segurança das operações.`,
      },
      {
        id: "infrastructure",
        exist: true,
        title: "Infraestrutura",
        icon: "infrastructure",
        description:
          "Ecossistema Conteinerizado com Docker Descrição: Infraestrutura moderna focada em isolamento de processos, consistência entre ambientes e escalabilidade.",
        images: [
          "/Projects/ficha/docker/1.png",
          "/Projects/ficha/docker/2.png",
          "/Projects/ficha/docker/3.png",
          "/Projects/ficha/docker/4.png",
        ],
        explanation: `A infraestrutura do projeto foi projetada para ser resiliente e escalável, utilizando Docker para orquestrar todos os serviços. Através da conteinerização, isolei a API (NestJS), o Front-end (Next.js) e o Banco de Dados, garantindo que o sistema funcione exatamente da mesma forma em qualquer ambiente, eliminando conflitos de dependências.

Essa abordagem permite um fluxo de Deploy Contínuo muito mais seguro, onde cada parte do sistema pode ser atualizada de forma independente. Além disso, a configuração da rede interna entre os containers garante que a comunicação entre a API e o Banco de Dados seja protegida e de altíssima velocidade, proporcionando uma base sólida para suportar picos de acesso sem perda de performance.`,
      },
      {
        id: "client",
        exist: true,
        title: "Aplicação do Cliente",
        icon: "client",
        description:
          "Experiência de Compra Fluida e Intuitiva Descrição: Front-end moderno desenvolvido em Next.js, focado em performance e facilidade no acesso a produtos digitais.",
        images: [
          "/Projects/ficha/client/1.png",
          "/Projects/ficha/client/2.png",
          "/Projects/ficha/client/3.png",
          "/Projects/ficha/client/4.png",
          "/Projects/ficha/client/5.png",
          "/Projects/ficha/client/6.png",
          "/Projects/ficha/client/7.png",
          "/Projects/ficha/client/8.png",
        ],
        explanation: `O front-end voltado ao consumidor final foi projetado para ser extremamente rápido e intuitivo, utilizando o poder do Next.js para entregas de página quase instantâneas. Implementei um fluxo de navegação focado em conversão, onde o usuário pode explorar o catálogo, gerenciar seu carrinho de compras e finalizar o pagamento de forma segura.

Um dos grandes diferenciais é a Área da Biblioteca, onde, após a confirmação automática do pagamento, o cliente encontra seus documentos prontos para download. A interface é totalmente responsiva, garantindo que o usuário possa comprar e acessar seus arquivos de qualquer dispositivo, com uma identidade visual moderna que transmite profissionalismo e confiança.`,
      },
    ],
  },
  {
    slug: "institucional-gueds",
    name: "Site Institucional Guedes Bampi",
    shortDescription:
      "Site institucional com múltiplas páginas, rotas dinâmicas para artigos e serviços, construído em Next.js com SSR e SEO. Possui formulário de contato integrado via Nodemailer e painel simples de gerenciamento de conteúdo",
    tags: ["Next.js", "Tailwind Css"],
    status: "production",
    isPublic: true,
    liveUrl: "https://www.guedesbampi.com.br/",

    modules: [
      {
        id: "",
        exist: false,
        title: " ",
        icon: "",
        description: "",
        images: [],
        explanation: "",
      },
      {
        id: "",
        exist: false,
        title: "",
        icon: "",
        description: "",
        images: ["", "", ""],
        explanation: "",
      },
      {
        id: "",
        exist: false,
        title: "",
        icon: "",
        description: ".",
        images: ["", "", ""],
        explanation: "",
      },
      {
        id: "landing-page",
        exist: true,
        title: "Aplicação do Cliente",
        icon: "client",
        description:
          "Landing page otimizada para conversão de leads, com foco em campanhas jurídicas e contato direto com o escritório.",
        images: [
          "/Projects/inst/1.png",
          "/Projects/inst/2.png",
          "/Projects/inst/3.png",
          "/Projects/inst/4.png",
        ],
        explanation:
          "A landing page foi desenvolvida em Next.js, priorizando performance, SEO e experiência do usuário. A estrutura é organizada em seções estratégicas, como hero com CTA, conteúdo informativo, reforço de autoridade, FAQ para redução de objeções e chamada final para contato. O formulário é integrado a um serviço em Node.js utilizando Nodemailer, garantindo o envio seguro das informações para o escritório. O projeto foi pensado para campanhas específicas, com layout reutilizável e fácil adaptação para novos temas, mantendo consistência visual e eficiência operacional.",
      },
    ],
  },
  {
    slug: "Landing-Page-Cotas-Raciais",
    name: "Landing Page Cotas Raciais",
    shortDescription: `Este projeto consiste em uma landing page institucional desenvolvida para um escritório de advocacia, com foco exclusivo em conversão de leads relacionados a casos de cotas raciais e inclusão educacional.
O objetivo principal é orientar o usuário, gerar confiança e incentivar o contato direto com o escritório.`,
    tags: ["Next.js", "Tailwind Css"],
    status: "production",
    isPublic: true,
    liveUrl: "https://cotasraciais.guedesbampi.com.br",
    modules: [
      {
        id: "",
        exist: false,
        title: "",
        icon: "",
        description: "",
        images: [],
        explanation: "",
      },
      {
        id: "",
        exist: false,
        title: "",
        icon: "admin",
        description: "",
        images: ["", "", ""],
        explanation: "",
      },
      {
        id: "",
        exist: false,
        title: "",
        icon: "",
        description: "",
        images: ["", "", ""],
        explanation: "",
      },
      {
        id: "landing-page",
        exist: true,
        title: "Landing Page Institucional",
        icon: "client",
        description:
          "Landing page institucional focada em conversão, com mensagem clara, navegação objetiva e formulário de contato integrado.",
        images: [
          "/Projects/cotas/1.png",
          "/Projects/cotas/2.png",
          "/Projects/cotas/3.png",
          "/Projects/cotas/4.png",
        ],
        explanation:
          "Landing page desenvolvida em Next.js com foco total em performance, SEO e conversão de leads. A estrutura é composta por seções bem definidas que guiam o usuário de forma progressiva até o contato, incluindo apresentação do serviço, conteúdo informativo, reforço de autoridade, FAQ e chamadas estratégicas para ação. O formulário de contato é integrado via Nodemailer no backend em Node.js, garantindo envio confiável de mensagens diretamente para o e-mail do escritório. O projeto prioriza carregamento rápido, responsividade e uma experiência simples e objetiva para o usuário.",
      },
    ],
  },
  {
    slug: "Landing-Page-Dividas",
    name: "Landing Page Institucional",
    shortDescription:
      "Dashboard de análise em tempo real para negócios SaaS com faturamento de assinatura e gestão de equipes.",
    tags: ["Next.js", "Tailwind Css"],
    status: "production",
    isPublic: true,
    liveUrl: "https://dividas.guedesbampi.com.br",

    modules: [
      {
        id: "",
        exist: false,
        title: " ",
        icon: "",
        description: "",
        images: [],
        explanation: "",
      },
      {
        id: "",
        exist: false,
        title: "",
        icon: "",
        description: "",
        images: ["", "", ""],
        explanation: "",
      },
      {
        id: "",
        exist: false,
        title: "",
        icon: "",
        description: ".",
        images: ["", "", ""],
        explanation: "",
      },
      {
        id: "landing-page",
        exist: true,
        title: "Aplicação do Cliente",
        icon: "client",
        description:
          "Landing page otimizada para conversão de leads, com foco em campanhas jurídicas e contato direto com o escritório.",
        images: [
          "/Projects/dividas/1.png",
          "/Projects/dividas/2.png",
          "/Projects/dividas/3.png",
          "/Projects/dividas/4.png",
          "/Projects/dividas/5.png",
        ],
        explanation:
          "A landing page foi desenvolvida em Next.js, priorizando performance, SEO e experiência do usuário. A estrutura é organizada em seções estratégicas, como hero com CTA, conteúdo informativo, reforço de autoridade, FAQ para redução de objeções e chamada final para contato. O formulário é integrado a um serviço em Node.js utilizando Nodemailer, garantindo o envio seguro das informações para o escritório. O projeto foi pensado para campanhas específicas, com layout reutilizável e fácil adaptação para novos temas, mantendo consistência visual e eficiência operacional.",
      },
    ],
  },

 
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getPublicProjects(): Project[] {
  return projects.filter((p) => p.isPublic);
}

export function getPrivateProjects(): Project[] {
  return projects.filter((p) => !p.isPublic);
}

export function getSaaSProjects(): Project[] {
  return projects.filter((p) => p.status === "saas");
}
