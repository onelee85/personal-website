// 网站公开内容的单一来源。待确认任职信息在公开前补充。
export const identity = {
  name: '李皎',
  mark: 'LI JIAO',
  roleTag: 'TECH LEAD / ARCHITECT',
  roleEn: 'Engineering leader, architect & AI practitioner',
  roleZh: '技术负责人、系统架构与 AI 应用实践',
  basedIn: '上海',
  status: 'OPEN TO NEW OPPORTUNITIES',
  startYear: '2007',
} as const;

export const hero = {
  thesis: ['你好，我是李皎', '让复杂业务，长成可靠系统'],
  lead: '18+ 年互联网研发与架构经验，穿过直播、社交、电商、音乐与企业软件。关注核心链路、平台演进和团队交付，也在把 LLM API 与 RAG 带进真实业务场景。',
} as const;

export const nav = [
  { label: '专业能力', href: '#focus' },
  { label: '项目案例', href: '#work' },
  { label: '职业经历', href: '#journey' },
  { label: '工作方法', href: '#about' },
  { label: 'Blog', href: '/blog/' },
  { label: '联系我', href: '#contact' },
] as const;

export const capabilities = [
  {
    status: 'ARCH',
    tag: 'SYSTEM',
    title: '高并发与平台架构',
    blurb: '微服务、缓存、消息队列、服务发现与可观测性',
    stat: '18+',
    statLabel: '年研发与架构经验',
  },
  {
    status: 'LEAD',
    tag: 'DELIVERY',
    title: '技术团队与复杂交付',
    blurb: '技术决策、跨部门协作、质量与持续交付',
    stat: '80 / 30',
    statLabel: '项目协作 / 直属团队',
  },
  {
    status: 'BUILD',
    tag: 'BUSINESS',
    title: '核心链路与业务系统',
    blurb: '直播互动、资产交易、电商、WMS / TMS',
    stat: '0 → 1',
    statLabel: '产品、平台与持续演进',
  },
  {
    status: 'AI',
    tag: 'APPLICATION',
    title: '企业 AI 应用实践',
    blurb: '主播自动回复 LLM API、客服与运营 RAG',
    stat: 'API + RAG',
    statLabel: '使用范围与效果持续补证',
  },
] as const;

export const experience = [
  {
    period: '近期',
    org: '上海顺天浩网络科技有限公司',
    title: '全栈与平台架构',
    note: '负责后端、前端、部署运维与监控，并推进 LLM API、RAG 与 AI 辅助研发。正式职称与任职分段待确认。',
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
    items: ['LLM API', 'RAG', 'Claude Code', 'Cursor', 'Human review', 'CI/CD quality gates'],
  },
] as const;

export const targetRoles = [
  'AI Agent',
  '全栈开发',
  '技术负责人',
  '研发总监',
  '后端开发',
] as const;

export const contact = {
  eyebrow: 'Contact / Next conversation',
  panelLabel: 'PUBLIC CONTACT',
  headline: '如果你正在解决复杂系统、技术团队或 AI 应用落地的问题，我们可以聊聊。',
  note: '以下是可直接使用的公开联系方式。关于工作机会、项目合作或工程问题，都欢迎来信。',
  panelTitle: '欢迎联系',
  channelsAria: '公开联系方式',
  channels: [
    { label: 'EMAIL', value: 'onelee85@qq.com', href: 'mailto:onelee85@qq.com', external: false },
    { label: 'GITHUB', value: 'github.com/onelee85', href: 'https://github.com/onelee85/', external: true },
    { label: 'WECHAT', value: 'onelee85', href: '', external: false },
  ],
  marquee: 'ARCHITECTURE · ENGINEERING LEADERSHIP · AI APPLICATION · SHANGHAI · BUILD WITH EVIDENCE · ',
} as const;

export const seo = {
  homeDescription: '李皎的个人网站：18+ 年互联网研发与架构经验，关注技术领导、复杂系统、团队交付与 AI 应用实践。',
  notFoundTitle: '页面未找到',
} as const;

export const sections = {
  focus: {
    eyebrow: 'Engineering coordinates',
    index: 'S / 01',
    title: '工程坐标',
    description: '不把技能写成进度条。这里展示的是经验所在的真实业务、系统与组织语境。',
  },
  work: {
    eyebrow: 'Selected work / Evidence based',
    index: 'S / 02',
    title: '项目记录',
  },
  journey: {
    eyebrow: 'Experience / 2007 — Now',
    index: 'S / 03',
    title: '职业路径',
    description: '从核心开发、架构到技术管理，再到小团队全栈交付与 AI 应用实践。不同资源条件，关注同一个交付结果。',
  },
  about: {
    eyebrow: 'How I work',
    index: 'S / 04',
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
      { value: '80 / 30', label: '项目协作 / 直属团队' },
      { value: 'LLM + RAG', label: '企业场景实践' },
    ],
    systemCard: {
      eyebrow: 'OPERATING SYSTEM',
      version: 'V.01',
      coreTitle: 'BUSINESS',
      coreSubtitle: '问题定义 / 业务约束',
      layers: [
        { index: '01', code: 'ARCHITECTURE', label: '可靠系统' },
        { index: '02', code: 'DELIVERY', label: '团队交付' },
        { index: '03', code: 'AI APPLICATION', label: '场景落地' },
      ],
      footer: 'SYSTEMS THINKING · HUMAN JUDGMENT',
    },
  },
  about: {
    statementBefore: '我关注的不只是架构图，',
    statementBridge: '而是',
    statementAccent: '业务、系统与团队',
    statementAfter: '能否一起持续交付。',
    skillsEyebrow: 'Tools are not the story',
    skillsTitleLines: ['技术服务于问题，', '而不是反过来。'],
    skillsDescription: '当前关注上海的技术负责人、研发总监、架构与工程岗位，也接受能够深入核心代码的全栈和后端方向。',
  },
  footer: {
    signature: '技术与业务之间，持续构建。',
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
    evidenceNote: '本页将已确认事实与待补证据分开，不使用缺乏统计口径的规模或效果数字。',
    factsEyebrow: 'Verified facts',
    factsIndex: 'F / 01',
    factsTitle: '事实与口径',
    decisionsEyebrow: 'Key decisions',
    decisionsIndex: 'D / 02',
    decisionsTitle: '关键决策',
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
