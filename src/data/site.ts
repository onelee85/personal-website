// 网站公开内容的单一来源。职业事实以公开简历与案例口径为准。
export const identity = {
  name: '李皎',
  mark: 'LI JIAO',
  roleTag: 'TECH LEAD / R&D DIRECTOR',
  roleEn: 'Engineering leadership, architecture & AI-augmented delivery',
  roleZh: '技术负责人 / 研发总监 · 系统架构 · AI 协同研发',
  basedIn: '上海',
  status: 'OPEN TO NEW OPPORTUNITIES',
  startYear: '2007',
} as const;

export const hero = {
  thesis: ['你好 我是李皎', '从 0 到 1 构建产品', '从 1 到 N 持续创造价值', '以 AI 为生产力'],
  lead: '18+ 年互联网研发、架构与技术管理经验。曾负责约 80 人项目协作与 30 人直属团队；近期在精简团队下基本独立承担直播平台架构、前后端与生产运维，并以 AI 辅助真实研发。',
} as const;

export const nav = [
  { label: '专业能力', href: '#focus' },
  { label: '项目案例', href: '#work' },
  { label: '职业经历', href: '#journey' },
  { label: '工作方法', href: '#about' },
  { label: '简历', href: '/resume/' },
  { label: 'Blog', href: '/blog/' },
  { label: '联系我', href: '#contact' },
] as const;

export const aiTracks = [
  {
    code: '01 / BUILD WITH AI',
    title: 'AI 原生软件研发',
    status: '真实研发实践 · 治理建设中',
    description: '将 AI 融入分析、设计、研发与验证，通过明确目标、上下文和工程约束组织协作。AI 已辅助真实直播平台研发，工程师始终负责方案取舍、关键实现与交付结果。',
  },
  {
    code: '02 / BUILD AI PRODUCTS',
    title: 'AI 应用工程',
    status: 'LLM / RAG 内部试点',
    description: '围绕主播、客服与运营场景进行 LLM API 和 RAG 试点，未面向真实业务上线。根据问题选择确定性程序、工作流或模型能力，不为使用 AI 而使用 AI。',
  },
] as const;

export const lifecycle = [
  { index: '01', label: '需求发现', english: 'DISCOVER' },
  { index: '02', label: '产品规划', english: 'DEFINE' },
  { index: '03', label: '体验设计', english: 'DESIGN' },
  { index: '04', label: '架构设计', english: 'ARCHITECT' },
  { index: '05', label: '全栈研发', english: 'BUILD' },
  { index: '06', label: '质量验证', english: 'VERIFY' },
  { index: '07', label: '发布运维', english: 'OPERATE' },
  { index: '08', label: '运营迭代', english: 'EVOLVE' },
] as const;

export const futureDirections = ['Agent 产品化', 'AI Evals / LLMOps', '多 Agent 编排', '规格驱动研发与效能度量'] as const;

export const capabilities = [
  {
    id: 'business', index: '01', status: '已有实践', tone: 'proven',
    title: '业务与商业分析', english: 'Business & Commercial Thinking',
    blurb: '识别真实需求，评估业务价值与投入产出。',
    evidenceLabel: '项目证据',
    evidence: [
      { label: '社交平台', href: '/work/social-product/' },
      { label: '容易网电商', href: '/work/rongyi-commerce/' },
    ],
  },
  {
    id: 'product', index: '02', status: '已有实践', tone: 'proven',
    title: '产品规划与设计', english: 'Product Planning & Design',
    blurb: '从业务构想到产品规格、用户路径与验收边界。',
    evidenceLabel: '项目证据',
    evidence: [
      { label: '社交平台', href: '/work/social-product/' },
      { label: '容易网电商', href: '/work/rongyi-commerce/' },
    ],
  },
  {
    id: 'experience', index: '03', status: '正在建设', tone: 'building',
    title: 'UI/UX 与交互设计', english: 'UI/UX & Interaction Design',
    blurb: '具备原型与多端协作基础，持续建设体验设计与视觉验收能力。',
    evidenceLabel: '相关经历',
    evidence: [
      { label: '社交平台', href: '/work/social-product/' },
      { label: '容易网电商', href: '/work/rongyi-commerce/' },
    ],
  },
  {
    id: 'architecture', index: '04', status: '核心优势', tone: 'proven',
    title: '系统架构与技术设计', english: 'Software Architecture & Technical Design',
    blurb: '权衡复杂度、成本、性能与系统稳定性。',
    evidenceLabel: '项目证据',
    evidence: [
      { label: '么么直播', href: '/work/memolive/' },
      { label: '匿名直播平台', href: '/work/anonymous-live/' },
    ],
  },
  {
    id: 'fullstack', index: '05', status: '已有实践', tone: 'proven',
    title: '全栈软件研发', english: 'Full Stack Engineering',
    blurb: '贯通前端、后端、数据层与第三方服务。',
    evidenceLabel: '项目证据',
    evidence: [{ label: '匿名直播平台', href: '/work/anonymous-live/' }],
  },
  {
    id: 'quality', index: '06', status: '已有实践', tone: 'proven',
    title: '测试与质量保障', english: 'Quality Engineering',
    blurb: '建立自动化验证与可复查的质量门禁。',
    evidenceLabel: '项目证据',
    evidence: [
      { label: '星艾工程效能', href: '/work/engineering-system/' },
      { label: '社交平台', href: '/work/social-product/' },
    ],
  },
  {
    id: 'devops', index: '07', status: '核心优势', tone: 'proven',
    title: '部署与生产运维', english: 'DevOps & Site Reliability Engineering',
    blurb: '保障软件可靠发布、稳定运行与故障恢复。',
    evidenceLabel: '项目证据',
    evidence: [
      { label: '匿名直播平台', href: '/work/anonymous-live/' },
      { label: '么么直播', href: '/work/memolive/' },
    ],
  },
  {
    id: 'growth', index: '08', status: '正在建设', tone: 'building',
    title: '数据运营与产品迭代', english: 'Data Analytics & Product Growth',
    blurb: '从运营与经营反馈出发，持续建设数据分析与实验验证能力。',
    evidenceLabel: '运营实践',
    evidence: [{ label: '社交平台', href: '/work/social-product/' }],
  },
  {
    id: 'ai-application', index: '09', status: '内部试点', tone: 'building',
    title: 'AI 应用工程', english: 'AI Application Engineering',
    blurb: '将 LLM 与 RAG 转化为可验证的业务功能试点，未宣称生产上线。',
    evidenceLabel: '内部试点',
    evidence: [{ label: '匿名直播平台', href: '/work/anonymous-live/' }],
  },
  {
    id: 'ai-collaboration', index: '10', status: '实践与建设并行', tone: 'building',
    title: 'AI 协同研发与治理', english: 'AI Native Software Engineering & Governance',
    blurb: '以 AI 辅助真实研发，持续沉淀可复用、可验证的人机协同流程。',
    evidenceLabel: '真实研发',
    evidence: [{ label: '匿名直播平台', href: '/work/anonymous-live/' }],
  },
] as const;

export const experience = [
  {
    period: '2025.06 入职 · 2026.09 后转长期技术服务合作',
    org: '上海顺天浩网络科技有限公司',
    title: '实际技术负责人',
    note: '负责研发团队管理及直播平台技术；2025 年底团队人员变化后，基本独立承担架构、前后端、服务器与运维，并通过 AI 辅助完成跨岗位研发任务。目前为长期技术服务合作。',
  },
  {
    period: '2024.04 — 2025.06',
    org: '上海匀腾信息科技有限公司',
    title: '联合创始人 / 技术合伙人',
    note: '参与整体产研体系与核心项目研发，推进 Android、iOS、Web 三端产品及经营资质、上架与合规事项。',
  },
  {
    period: '2014.06 — 2024.03',
    org: '上海星艾网络科技有限公司',
    title: '技术总监',
    note: '负责么么直播等产品的核心研发、架构设计、平台搭建与性能优化；负责约 80 人项目团队，其中直属 30 人。',
  },
  {
    period: '2013.08 — 2014.06',
    org: '天天动听 · 上海水渡石信息技术有限公司',
    title: '架构师',
    note: '负责后端整体架构和核心业务开发，参与需求评估、设计评审、质量把控和关键问题定位。',
  },
  {
    period: '2012.01 — 2013.06',
    org: '上海容易网电子商务股份有限公司',
    title: '技术经理',
    note: '参与 B2B2C 商城、会员、交易、营销、WMS / TMS 与多终端后台建设，推动 Scrum 与研发管理流程。',
  },
  {
    period: '2011.04 — 2012.01',
    org: '上海海航优悦电子商务有限公司',
    title: '技术经理',
    note: '参与生活网上商城体系建设，负责技术指导、技术验证、规范制定、进度与质量。',
  },
  {
    period: '2007.10 — 2011.03',
    org: '上海斯微达软件 · Infostrategy Software',
    title: '高级软件工程师',
    note: '参与客户需求与概要设计，负责数据库分析设计、应用框架、核心模块开发、实施与维护。',
  },
] as const;

export const principles = [
  {
    index: '01',
    title: '从业务约束出发',
    text: '先理解交易、互动、交付和经营的实际约束，再决定服务边界、数据一致性与技术方案。',
  },
  {
    index: '02',
    title: '为核心链路留下证据',
    text: '架构决策需要监控、测试与复盘支撑；没有统计口径的数据，不被包装成确定成果。',
  },
  {
    index: '03',
    title: '让系统与团队一起演进',
    text: '从核心代码到 CI/CD、自动化测试和跨部门协作，让技术方案最终变成稳定的交付能力。',
  },
] as const;

export const skillGroups = [
  {
    label: 'LANGUAGES',
    items: ['Java', 'Kotlin', 'Python', 'Golang', 'JavaScript', 'Vue'],
  },
  {
    label: 'ARCHITECTURE',
    items: ['Spring / Spring Boot', 'MySQL', 'MongoDB', 'Redis', 'RabbitMQ', 'Microservices'],
  },
  {
    label: 'PLATFORM',
    items: ['Nginx / Keepalived', 'Kubernetes', 'Nacos', 'SkyWalking', 'Grafana', 'GitLab / Jenkins'],
  },
  {
    label: 'AI PRACTICE',
    items: ['LLM API / RAG 内部试点', 'Vibe Coding', 'Codex / OpenCode', 'Human review', 'CI/CD quality gates'],
  },
] as const;

export const targetRoles = [
  '技术负责人 / 研发总监',
  '系统架构 / 全栈交付',
  'AI Native 研发负责人',
] as const;

export const contact = {
  eyebrow: 'Contact / Next conversation',
  panelLabel: 'PUBLIC CONTACT',
  headline: '如果你正在寻找技术负责人，或需要解决复杂系统与团队交付问题，我们可以聊聊。',
  note: '可查看公开职业简历，或通过以下方式联系。工作机会、项目合作与工程问题都欢迎沟通。',
  panelTitle: '欢迎联系',
  channelsAria: '公开联系方式',
  channels: [
    { label: 'EMAIL', value: 'onelee85@qq.com', href: 'mailto:onelee85@qq.com', external: false },
    { label: 'GITHUB', value: 'github.com/onelee85', href: 'https://github.com/onelee85/', external: true },
    { label: 'WECHAT', value: 'onelee85', href: '', external: false },
  ],
  marquee: 'ENGINEERING LEADERSHIP · ARCHITECTURE · AI-AUGMENTED DELIVERY · SHANGHAI · ',
} as const;

export const seo = {
  homeDescription: '李皎的个人网站：技术负责人 / 研发总监，18+ 年研发、架构与技术管理经验，覆盖复杂系统、团队交付、全栈研发与 AI 协同研发。',
  notFoundTitle: '页面未找到',
} as const;

export const sections = {
  model: {
    eyebrow: 'AI native delivery model',
    index: 'S / 01',
    title: '两条主线，一个交付闭环',
    description: 'Build with AI 改变研发方式，Build AI Products 解决业务问题；两者都以真实场景和可验证结果为边界。',
  },
  focus: {
    eyebrow: 'Capability system / Evidence linked',
    index: 'S / 02',
    title: '十大核心能力',
    description: '不是技能进度条。每项能力都标明当前阶段，并链接到能够支撑它的真实项目或相关经历。',
  },
  work: {
    eyebrow: 'Selected work / Evidence based',
    index: 'S / 03',
    title: '项目记录',
    description: '保留完整项目概要，用本人职责、关键决策和已核实成果说明能力如何落到交付。',
  },
  journey: {
    eyebrow: 'Experience / 2007 — Now',
    index: 'S / 04',
    title: '职业路径',
    description: '从核心开发、架构到技术管理，再到小团队全栈交付与 AI 协同研发。不同资源条件，关注同一个交付结果。',
  },
  about: {
    eyebrow: 'How I work',
    index: 'S / 05',
    title: '工作方法',
  },
} as const;

export const ui = {
  a11y: {
    skipToContent: '跳至主要内容',
    homeSuffix: '首页',
    primaryNav: '主导航',
    mobileNav: '移动端导航',
    personalIntro: '个人介绍',
    careerOverview: '职业概览',
    projectIndex: '代表项目索引',
    workDirection: '工作方向',
    selectedProjects: '精选项目',
    targetRoles: '目标方向',
    technologyPractice: '技术与实践',
    caseDetails: '案例详述',
    caseNavigation: '案例导航',
  },
  actions: {
    viewProjects: '查看代表项目',
    viewJourney: '职业路径',
    viewResume: '查看 / 保存简历',
    readCase: '查看项目详情',
    backToWork: '返回项目集',
    allProjects: '全部项目',
    backHome: '返回首页',
    backToTop: '回到顶部',
  },
  nav: {
    menu: '菜单',
    close: '关闭',
    locationCode: 'SHANGHAI',
  },
  labels: {
    nextCase: 'NEXT CASE',
    stack: 'STACK',
  },
  hero: {
    basedInLabel: 'Based in',
    sinceLabel: 'Since',
    proofs: [
      { value: '18+', label: '年研发与架构' },
      { value: '约 80 人', label: '项目协作规模' },
      { value: '30 人', label: '直属团队' },
    ],
    systemCard: {
      eyebrow: 'PRODUCT OPERATING MODEL',
      version: 'V.02',
      coreTitle: 'VALUE',
      coreSubtitle: '业务问题 / 产品价值',
      layers: [
        { index: '01', code: 'DISCOVER', label: '需求与产品' },
        { index: '02', code: 'DELIVER', label: '研发与质量' },
        { index: '03', code: 'OPERATE', label: '运营与演进' },
      ],
      footer: 'HUMAN JUDGMENT · AI COLLABORATION · EVIDENCE',
    },
  },
  about: {
    statementBefore: '我关注的不只是代码，',
    statementBridge: '而是',
    statementAccent: '业务、产品与 AI',
    statementAfter: '能否一起持续交付。',
    skillsEyebrow: 'Tools are not the story',
    skillsTitleLines: ['技术服务于问题，', '而不是反过来。'],
    skillsDescription: '主方向为技术负责人 / 研发总监，也接受系统架构与全栈交付岗位；AI Native 研发负责人是围绕现有 AI 协同研发实践延伸的方向。',
  },
  footer: {
    signature: '业务、产品与工程之间，持续构建。',
  },
  projectVisual: {
    schematic: 'SCHEMATIC / NOT SCREENSHOT',
    coreSystem: 'CORE SYSTEM',
    flow: 'INPUT → DECISION → FEEDBACK',
  },
  case: {
    studyLabel: 'CASE STUDY',
    period: 'PERIOD',
    role: 'ROLE',
    domain: 'DOMAIN',
    systemContext: 'System context',
    specsTitle: '项目规格',
    evidenceNote: '以下事实与指标均注明适用范围；架构示意图用于说明系统结构与本人职责。',
    factsEyebrow: 'Verified facts',
    factsIndex: 'F / 01',
    factsTitle: '事实与口径',
    decisionsEyebrow: 'Key decisions',
    decisionsIndex: 'D / 03',
    decisionsTitle: '关键决策',
    capabilitiesEyebrow: 'Capability evidence',
    capabilitiesIndex: 'C / 02',
    capabilitiesTitle: '本案例证明的能力',
    capabilitiesNote: '只关联本案例能够支撑的能力，不要求一个项目覆盖完整能力体系。',
  },
  notFound: {
    eyebrow: '404 / Off the map',
    titleLines: ['这条链路，', '暂时没有响应。'],
    description: '你访问的页面不存在，或者已经调整位置。',
  },
} as const;

export const projectVisuals = {
  live: { code: 'LIVE / PLATFORM', center: 'ROOM', nodes: ['CLIENT', 'GATEWAY', 'CACHE', 'MESSAGE', 'DATA', 'TRACE'] },
  anonymous: { code: 'ASSET / LEDGER', center: 'TX', nodes: ['REQUEST', 'BALANCE', 'REVENUE', 'LEDGER', 'EVENT', 'ASYNC'] },
  delivery: { code: 'TEAM / FLOW', center: 'SHIP', nodes: ['PLAN', 'CODE', 'REVIEW', 'TEST', 'BUILD', 'DEPLOY'] },
  social: { code: 'PRODUCT / LOOP', center: 'USER', nodes: ['IDEA', 'DESIGN', 'BUILD', 'LAUNCH', 'GROW', 'LEARN'] },
} as const;

export const liveRoadmapChapters = [
  {
    id: 'systems', label: '系统分层', english: 'SYSTEM LAYERS', prefix: 'S',
    question: '一个直播间要用到哪些系统？',
    heading: '直播间背后的四层系统',
    intro: '选一层，查看它承担的工作、请求去向和使用的组件。',
  },
  {
    id: 'flows', label: '关键链路', english: 'REQUEST PATHS', prefix: 'P',
    question: '进房、弹幕和送礼分别走哪条路？',
    heading: '沿着观众的三次操作，看请求去向',
    intro: '从客户端发起操作，到观众看到结果，逐步看系统怎样处理。',
  },
  {
    id: 'evolution', label: '架构演进', english: 'PLATFORM EVOLUTION', prefix: 'T',
    question: '这些能力是在什么时候建起来的？',
    heading: '从首次上线到平台成熟',
    intro: '按三个时期回看架构。图中每个点代表一年，着色的点对应这一阶段。',
  },
] as const;
