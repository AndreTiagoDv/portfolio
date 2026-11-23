<script setup lang="ts">
  const technologies = [
    'TypeScript',
    'JavaScript',
    'React',
    'Next.js',
    'Vue.js',
    'Node.js',
    'NestJS',
    'SQL Server',
    'MongoDB',
    'Git',
    'Azure DevOps',
    'Docker',
    'Jest',
    'Playwright',
  ];
  const projects = [
    {
      id: '01',
      category: 'IA APLICADA · INTEGRAÇÕES',
      name: 'Uma conversa com os dados.',
      type: 'Chat com IA e MCP',
      description:
        'Consultar estoque e validade de produtos usando linguagem natural, conectando modelos de linguagem a ferramentas de domínio.',
      tags: ['MCP', 'LLMs', 'APIs REST'],
      visual: 'chat',
      challenge:
        'Transformar perguntas em consultas úteis, mantendo o acesso aos dados controlado.',
      contribution:
        'Participação na integração do chat com ferramentas MCP e um API gateway. As consultas são somente leitura e o modelo utiliza ferramentas de domínio, sem escrever SQL livremente.',
    },
    {
      id: '02',
      category: 'DESENVOLVIMENTO WEB · NEGÓCIO',
      name: 'Da informação à decisão.',
      type: 'Portal de compras',
      description:
        'Uma aplicação interna que conecta regras de estoque, demanda e compras para apoiar o trabalho de quem opera o ERP.',
      tags: ['TypeScript', 'React / Next.js', 'SQL Server'],
      visual: 'purchase',
      challenge: 'Traduzir regras de compras e estoque em uma interface útil para a operação.',
      contribution:
        'Evolução de interfaces e regras de negócio para sugestão e acompanhamento de compras, com integração ao ERP por meio de APIs.',
    },
    {
      id: '03',
      category: 'BACKEND · AUTOMAÇÃO',
      name: 'Integrações que conectam.',
      type: 'API de logística',
      description:
        'Cotação de frete, rastreamento e monitoramento de entregas reunidos em uma integração para as aplicações internas.',
      tags: ['NestJS', 'MongoDB', 'APIs REST'],
      visual: 'logistics',
      challenge: 'Lidar com respostas e regras diferentes entre transportadoras.',
      contribution:
        'Participação nas integrações para cotação e rastreio, normalização de respostas e tarefas agendadas de monitoramento.',
    },
  ];
  const courses = [
    {
      title: 'Claude Code in Action',
      topic: 'Desenvolvimento assistido por IA',
      url: 'https://verify.skilljar.com/c/yxmo5oxymwru',
    },
    {
      title: 'Introduction to Model Context Protocol',
      topic: 'Conexão entre IA e ferramentas',
      url: 'https://verify.skilljar.com/c/xyv4k7uzi52f',
    },
    {
      title: 'Claude with the Anthropic API',
      topic: 'Integração com modelos de linguagem',
      url: 'https://verify.skilljar.com/c/an4h8atn8rhd',
    },
    {
      title: 'Introduction to Agent Skills',
      topic: 'Fundamentos de habilidades para agentes',
      url: '',
    },
  ];
</script>

<template>
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <header class="header wrap">
    <a class="wordmark" href="#inicio" aria-label="Andre Tiago, início"
      >andre<span>tiago</span><span class="brand-dot">.</span></a
    >
    <nav aria-label="Navegação principal">
      <a href="#projetos">Projetos</a><a href="#sobre">Sobre mim</a
      ><a href="#aprendizado">Aprendizado</a>
    </nav>
    <a class="header-contact" href="mailto:andretiago.dev@gmail.com"
      >Vamos conversar <span aria-hidden="true">↗</span></a
    >
  </header>
  <main id="conteudo">
    <section id="inicio" class="hero wrap" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow availability"><span></span> EM BUSCA DE ESTÁGIO EM TECNOLOGIA</p>
        <h1 id="hero-title">
          Código com<br />propósito.<br /><span
            >Aprendizado<br class="small-break" />
            constante.</span
          >
        </h1>
        <p class="hero-description">
          Sou Andre Tiago, desenvolvedor e estudante de ADS. Construo aplicações, conecto sistemas e
          exploro como a IA pode resolver problemas de verdade.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#projetos"
            >Conheça meu trabalho <span aria-hidden="true">↗</span></a
          ><a class="text-link" href="/andre-tiago-curriculo.pdf" download
            >Baixar currículo <span aria-hidden="true">↓</span></a
          >
        </div>
        <div class="hero-location">
          <span class="location-icon" aria-hidden="true">◎</span> Belo Horizonte, MG
          <span class="separator">/</span> Disponível para oportunidades remotas
        </div>
      </div>
      <div
        class="hero-art"
        aria-label="Ilustração das conexões entre código, APIs e inteligência artificial"
        role="img"
      >
        <div class="art-grid"></div>
        <div class="orbit orbit-one"></div>
        <div class="orbit orbit-two"></div>
        <div class="floating-label label-code"><span>&lt;/&gt;</span> desenvolvimento</div>
        <div class="floating-label label-data"><span>↔</span> integrações</div>
        <div class="central-object">
          <div class="object-top"><span class="tiny-dot"></span> EM CONSTRUÇÃO CONTÍNUA</div>
          <span class="object-symbol">a<span>t</span><i>.</i></span>
          <div class="object-bottom">
            <span>IDEIA</span><span class="object-line"></span><span>CÓDIGO</span>
          </div>
        </div>
        <div class="floating-label label-ai"><span>✳</span> inteligência artificial</div>
        <div class="art-caption">CURIOSIDADE → PRÁTICA → EVOLUÇÃO</div>
      </div>
    </section>
    <div class="fact-strip wrap">
      <p><strong>01 ano</strong><span>de experiência como desenvolvedor PJ</span></p>
      <p>
        <strong>ADS <span class="fact-arrow">↗</span></strong
        ><span>Estácio · conclusão em dez. 2027</span>
      </p>
      <p><strong>Software + IA</strong><span>integrações, automação e aplicações web</span></p>
    </div>
    <section id="projetos" class="projects-section wrap" aria-labelledby="projects-title">
      <div class="section-top">
        <div>
          <p class="eyebrow">01 / EXPERIÊNCIA EM PRÁTICA</p>
          <h2 id="projects-title">Problemas reais.<br /><span>Soluções construídas.</span></h2>
        </div>
        <p class="section-description">
          Uma seleção dos projetos em que participo pela Olympio, alocado na ICELTEC. O foco está no
          problema, nas tecnologias e na minha contribuição.
        </p>
      </div>
      <div class="project-grid">
        <article v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-visual" :class="project.visual" aria-hidden="true">
            <template v-if="project.visual === 'chat'"
              ><div class="mini-window chat-window">
                <div class="mini-top">
                  <span class="window-dots">● ● ●</span><span>ASSISTENTE DE ESTOQUE</span>
                </div>
                <div class="chat-message question">Como consultar o estoque?</div>
                <div class="chat-message answer">
                  <span class="ai-mark">✳</span>
                  <div>
                    Uma pergunta.<br /><strong>Dados conectados.</strong>
                    <div class="chat-chips">
                      <span>MCP</span><span>API</span><span>Somente leitura</span>
                    </div>
                  </div>
                </div>
                <div class="chat-input">Pergunte em linguagem natural <span>↑</span></div>
              </div></template
            >
            <template v-else-if="project.visual === 'purchase'"
              ><div class="mini-window purchase-window">
                <div class="mini-top"><span>PAINEL DE COMPRAS</span><span>↗</span></div>
                <div class="mini-stat-row">
                  <div>Estoque<strong>Visibilidade</strong></div>
                  <div>Demanda<strong>Planejamento</strong></div>
                </div>
                <div class="chart"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                <div class="chart-legend"><span></span> Informação para decidir</div>
              </div></template
            >
            <template v-else
              ><div class="integration-map">
                <div class="map-node node-left">ERP</div>
                <span class="connector connector-left"></span>
                <div class="map-center">API<span>logística</span></div>
                <span class="connector connector-right"></span>
                <div class="node-stack">
                  <div class="map-node">Cotação</div>
                  <div class="map-node">Rastreio</div>
                  <div class="map-node">Monitoramento</div>
                </div>
              </div></template
            >
            <span class="visual-disclaimer">Ilustração conceitual</span>
          </div>
          <div class="project-content">
            <p class="project-category">{{ project.category }}</p>
            <p class="project-type">{{ project.type }}</p>
            <h3>{{ project.name }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <ul class="tags" aria-label="Tecnologias">
              <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
            </ul>
            <details>
              <summary>Contexto e contribuição <span aria-hidden="true">+</span></summary>
              <div class="project-detail">
                <h4>O desafio</h4>
                <p>{{ project.challenge }}</p>
                <h4>Minha contribuição</h4>
                <p>{{ project.contribution }}</p>
              </div>
            </details>
          </div>
        </article>
      </div>
      <p class="project-note">
        <span aria-hidden="true">↳</span> Projetos profissionais com código proprietário. As
        ilustrações são conceituais e não exibem telas ou dados internos.
      </p>
    </section>
    <section id="sobre" class="about-section" aria-labelledby="about-title">
      <div class="wrap about-grid">
        <div>
          <p class="eyebrow">02 / QUEM ESTÁ POR TRÁS DO CÓDIGO</p>
          <h2 id="about-title">Aprendo fazendo.<br /><span>E fazendo perguntas.</span></h2>
          <p class="about-intro">
            Da regra de negócio à interface, gosto de entender o problema antes de escrever a
            solução.
          </p>
          <p>
            Atuo há um ano como desenvolvedor PJ pela Olympio, alocado na ICELTEC, participando de
            sistemas de compras, estoque e logística. Nesse caminho, tenho trabalhado com
            desenvolvimento web, APIs, bancos de dados e automação.
          </p>
          <p>
            Estudo Análise e Desenvolvimento de Sistemas na Estácio e quero dar o próximo passo em
            um estágio: contribuir com a experiência que já construí e evoluir ao lado de um time.
          </p>
          <a
            class="text-link"
            href="https://www.linkedin.com/in/andre-tiago-de-souza-80773a298/"
            target="_blank"
            rel="noopener noreferrer"
            >Meu perfil no LinkedIn <span aria-hidden="true">↗</span></a
          >
        </div>
        <div class="about-aside">
          <div class="education-card">
            <span class="education-icon" aria-hidden="true">↗</span>
            <p class="eyebrow">FORMAÇÃO EM ANDAMENTO</p>
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <p>Estácio · Tecnólogo</p>
            <div class="education-bottom">
              <span>3º de 5 semestres</span><strong>Dez. 2027</strong>
            </div>
          </div>
          <div class="toolbox">
            <p class="eyebrow">NA MINHA CAIXA DE FERRAMENTAS</p>
            <ul class="tech-list">
              <li v-for="technology in technologies" :key="technology">{{ technology }}</li>
            </ul>
            <p class="languages">Português nativo <span>·</span> Inglês básico</p>
          </div>
        </div>
      </div>
    </section>
    <section id="aprendizado" class="learning-section wrap" aria-labelledby="learning-title">
      <div class="section-top">
        <div>
          <p class="eyebrow">03 / CURIOSIDADE EM MOVIMENTO</p>
          <h2 id="learning-title">O próximo passo<br /><span>começa aprendendo.</span></h2>
        </div>
        <p class="section-description">
          Estudos que complementam a prática, com foco em IA aplicada, integração com ferramentas e
          desenvolvimento de software.
        </p>
      </div>
      <div class="course-grid">
        <article v-for="course in courses" :key="course.title" class="course-card">
          <div class="course-top">
            <span class="course-brand">Anthropic</span><span>MAI. 2026</span>
          </div>
          <h3>{{ course.title }}</h3>
          <p>{{ course.topic }}</p>
          <a v-if="course.url" :href="course.url" target="_blank" rel="noopener noreferrer"
            >Ver credencial <span aria-hidden="true">↗</span></a
          ><a
            v-else
            href="https://www.linkedin.com/in/andre-tiago-de-souza-80773a298/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            >Ver no LinkedIn <span aria-hidden="true">↗</span></a
          >
        </article>
      </div>
      <div class="aws-course">
        <span class="aws-brand">aws<span>↗</span></span>
        <div>
          <h3>Official Practice Question Set: AWS Certified Cloud Practitioner (CLF-C02)</h3>
          <p>Amazon Web Services · Maio de 2026 · Preparação para o exame</p>
        </div>
        <span class="aws-label">ESTUDO COMPLEMENTAR</span>
      </div>
    </section>
    <section id="contato" class="contact-section">
      <div class="wrap contact-inner">
        <p class="eyebrow availability"><span></span> ABERTO A NOVAS CONVERSAS</p>
        <h2>Vamos construir<br /><span>o próximo capítulo?</span></h2>
        <p>
          Busco estágio em desenvolvimento de software e IA aplicada.<br />Se você procura alguém
          com curiosidade e vontade de contribuir, vamos conversar.
        </p>
        <a class="button primary" href="mailto:andretiago.dev@gmail.com"
          >andretiago.dev@gmail.com <span aria-hidden="true">↗</span></a
        >
        <div class="contact-links">
          <a
            href="https://www.linkedin.com/in/andre-tiago-de-souza-80773a298/"
            target="_blank"
            rel="noopener noreferrer"
            >LinkedIn ↗</a
          ><a href="https://github.com/AndreTiagoDv" target="_blank" rel="noopener noreferrer"
            >GitHub ↗</a
          ><a href="/andre-tiago-curriculo.pdf" download>Currículo ↓</a>
        </div>
      </div>
    </section>
  </main>
  <footer class="footer wrap">
    <a class="wordmark" href="#inicio">andre<span>tiago</span><span class="brand-dot">.</span></a>
    <p>Belo Horizonte, MG · Código, curiosidade e café.</p>
    <a href="#inicio">Voltar ao topo ↑</a>
  </footer>
</template>
