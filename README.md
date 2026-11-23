# 李皎 · Personal Website

> 让复杂业务，长成可靠系统。

基于 [Astro 5](https://astro.build/) 构建的静态个人网站，展示技术负责人 / 架构方向的工作经历、代表项目与方法论。全站中文，零前端框架运行时，构建产物为纯静态 HTML/CSS/JS，可直接托管在任意静态站点服务上。

仓库：<https://github.com/onelee85/personal-website>

**Astro 5 · TypeScript · Static Output · 原生 CSS · 可切换主题 · 零运行时框架**

---

## 目录

- [项目简介](#项目简介)
- [特性](#特性)
- [技术栈](#技术栈)
- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [内容维护](#内容维护)
- [样式与交互](#样式与交互)
- [路由与构建](#路由与构建)
- [部署](#部署)
- [内容口径约定](#内容口径约定)
- [待补充事项](#待补充事项)
- [版权](#版权)

---

## 项目简介

网站围绕「工程坐标 → 项目记录 → 职业路径 → 工作方法 → 联系方式」组织内容：

- **首页**：个人介绍、能力板块、可切换的项目预览、职业时间线、技术与实践、目标方向和联系区。
- **项目案例**：4 个真实案例（么么直播、匿名直播平台、星艾工程效能、相亲交友社交产品），每个案例包含事实与口径、关键决策与案例详述。
- **404 页**：与站点视觉一致的兜底页面。

所有展示文案集中在一个数据文件中，项目正文以 Markdown 维护，新增案例不需要改动页面代码。

## 特性

- **静态生成**：`output: 'static'`，构建后输出 6 个页面，无服务端依赖、无外部 API 调用。
- **内容集合（Content Layer）**：`src/content.config.ts` 用 Zod 定义项目 frontmatter schema，类型安全且构建时校验。
- **单一内容来源**：`src/data/site.ts` 统一维护身份信息、导航、经历、技能、文案与 SEO 描述。
- **字体本地化**：通过 `@fontsource` 打包 Archivo Variable、JetBrains Mono Variable、Noto Sans SC、Noto Serif SC，不依赖 CDN。
- **可切换主题**：颜色、字体、圆角、动效令牌按 `[data-theme]` 分组存放在 `src/styles/themes/`，在 `src/config/theme.ts` 一处切换；与主题无关的结构令牌留在 `tokens.css`，组件内不写死颜色。
- **可访问性与降级**：跳转主内容链接、语义化标签与 `aria-*`、`prefers-reduced-motion` 支持、无 JS 环境内容仍可见。
- **轻量交互**：滚动显现（IntersectionObserver）、指针光晕、项目预览切换均为原生 JS，无第三方运行时。

## 技术栈

| 类别 | 选型 |
| --- | --- |
| 框架 | Astro `^5.4.2`（静态输出） |
| 语言 | TypeScript（继承 `astro/tsconfigs/strict`） |
| 内容 | Astro Content Layer + `glob` loader + Zod schema（Markdown） |
| 样式 | 原生 CSS、CSS 自定义属性、组件内 `<style>` 作用域隔离、可切换主题（`src/config/theme.ts`） |
| 字体 | `@fontsource-variable/archivo`、`jetbrains-mono`、`@fontsource/noto-sans-sc`、`noto-serif-sc` |
| 工具 | `@astrojs/check`（类型检查）、npm |
| 部署 | 任意静态托管（GitHub Pages / Vercel / Netlify / Cloudflare Pages 等） |

## 快速开始

### 环境要求

- Node.js：`18.20.8+` / `20.3.0+` / `22.0.0+`（推荐 22 LTS，本项目在 v22 上构建验证）
- npm 10+（仓库包含 `package-lock.json`，推荐使用 `npm ci` 保证依赖一致）

### 本地运行

```bash
git clone https://github.com/onelee85/personal-website.git
cd personal-website
npm ci                # 或 npm install

npm run dev            # 启动开发服务器：http://127.0.0.1:4321
```

### 命令一览

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 本地开发，监听 `127.0.0.1:4321`（见 `astro.config.mjs`） |
| `npm run build` | 类型检查并生成静态站点到 `dist/` |
| `npm run preview` | 本地预览 `dist/` 构建产物 |
| `npm run check` | 运行 `astro check`，检查 `.astro` / TypeScript 类型 |

> `node_modules/`、`dist/`、`.astro/`、`.DS_Store` 与 `.env*` 已在 `.gitignore` 中排除。项目当前不使用任何环境变量。

## 项目结构

```text
.
├── astro.config.mjs              # Astro 配置：静态输出、本地开发服务器
├── tsconfig.json                 # 继承 astro strict 配置
├── package.json                  # 依赖与脚本
├── public/
│   └── favicon.svg               # 站点图标（原样拷贝到 dist/）
└── src/
    ├── content.config.ts         # 项目案例集合定义与 Zod schema
    ├── content/projects/         # 案例正文（Markdown）
    │   ├── memolive.md
    │   ├── anonymous-live.md
    │   ├── engineering-system.md
    │   └── social-product.md
    ├── config/theme.ts           # 当前启用的主题 id 与浏览器主题色
    ├── data/site.ts              # 全站文案与数据的单一来源
    ├── layouts/
    │   └── BaseLayout.astro      # HTML 骨架、meta/SEO、字体、主题与全局样式、导航与页脚
    ├── components/               # Hero、能力板、项目展示、经历、关于、联系等区块
    ├── pages/
    │   ├── index.astro           # 首页
    │   ├── work/[...slug].astro  # 案例详情页（由内容集合静态生成）
    │   └── 404.astro             # 404 页
    └── styles/
        ├── tokens.css            # 与主题无关的结构令牌（间距 / 容器宽度 / 阅读宽度）
        ├── themes/               # 可切换的视觉主题
        │   ├── index.css         # 主题入口，统一 @import 各主题
        │   └── editorial-dark.css  # 默认深色主题的全部视觉令牌
        ├── global.css            # 基础样式与通用组件类
        └── motion.css            # 动效、显现动画与 reduced-motion 降级
```

## 内容维护

### 修改全站文案

编辑 `src/data/site.ts`。其中 `identity`、`hero`、`nav`、`capabilities`、`experience`、`principles`、`skillGroups`、`targetRoles`、`contact`、`seo`、`sections`、`ui`、`projectVisuals` 均为带 `as const` 的常量对象，改动后类型检查会覆盖引用处。界面上的固定短文案（如导航的 `Menu` / `Close`、地点代码、案例标签）也统一放在 `ui` 中，组件里不直接写死中文或英文文案。

### 新增一个项目案例

1. 在 `src/content/projects/` 下新建 `your-slug.md`，文件名即 URL 中的 slug（`/work/your-slug/`）。
2. 按以下结构填写 frontmatter（schema 定义见 `src/content.config.ts`）：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `title` | `string` | 案例标题 |
| `tagline` | `string` | 副标题，展示在标题下方 |
| `summary` | `string` | 首页预览卡片摘要 |
| `order` | `number` | 排序序号，首页与案例页按此升序排列 |
| `period` | `string` | 时间区间或阶段说明 |
| `role` | `string` | 本人角色 |
| `domain` | `string` | 业务 / 技术领域 |
| `status` | `string` | 案例状态与证据说明 |
| `theme` | 枚举 | `live` / `anonymous` / `delivery` / `social`，决定示意图样式 |
| `stack` | `string[]` | 技术与实践标签 |
| `facts` | `{ value, label, note? }[]` | 事实与口径卡片，可为空数组 |
| `decisions` | `{ title, description }[]` | 关键决策列表，可为空数组 |

最小示例：

```markdown
---
title: 示例项目
tagline: 一句话说明
summary: 首页卡片上的摘要
order: 5
period: 2024.01 — 2024.12
role: 技术负责人
domain: 示例领域
status: 真实项目 · 定性展示
theme: delivery
stack: [Java, Redis]
facts: []
decisions: []
---

## 业务与职责

正文使用标准 Markdown。
```

3. 运行 `npm run check && npm run build`。路由会由 `getStaticPaths()` 自动生成，首页预览与「NEXT CASE」导航也会自动纳入新案例，无需手写链接。

> 若新增自定义 `theme` 值，需要同步扩展 `content.config.ts` 中的枚举、`src/data/site.ts` 的 `projectVisuals` 以及 `ProjectVisual.astro` 的样式映射。

## 样式与交互

### 主题系统

主题通过 `<html data-theme="...">` 生效，视觉变量按主题分组，组件只引用 `var(--...)`，因此换主题不需要改动组件代码。

| 文件 | 职责 |
| --- | --- |
| `src/config/theme.ts` | `activeTheme.id`（当前主题）与 `activeTheme.browserColor`（`<meta name="theme-color">`） |
| `src/styles/themes/index.css` | 主题入口，统一 `@import` 各主题文件 |
| `src/styles/themes/editorial-dark.css` | 默认深色主题，在 `[data-theme='editorial-dark']` 下定义颜色、字体、圆角、阴影、渐变与动效等全部视觉令牌 |
| `src/styles/tokens.css` | 与主题无关的结构令牌：间距、最大宽度、内容边距、阅读宽度 |

`BaseLayout.astro` 引入 `themes/index.css`，并把 `activeTheme.id` 写到 `<html data-theme>`、把 `browserColor` 写到 meta 标签。当前内置主题为 `editorial-dark`。

新增一个主题：

1. 复制 `editorial-dark.css` 为 `your-theme.css`，把选择器改为 `[data-theme='your-theme']`，调整变量值但**保持变量名一致**。
2. 在 `src/styles/themes/index.css` 添加 `@import './your-theme.css';`。
3. 将 `src/config/theme.ts` 的 `id` 改为 `'your-theme'`，同步更新 `browserColor`。
4. 运行 `npm run build` 检查构建与视觉效果。

> 组件与 `global.css` / `motion.css` 中不应出现硬编码颜色或渐变，统一走主题变量，否则切换主题时会残留旧配色。

### 样式与交互细则

- **全局样式**：`src/styles/global.css` 负责 reset、排版、按钮、容器、标签等通用类；组件专属样式写在各 `.astro` 文件的 `<style>` 中，由 Astro 自动作用域隔离。
- **动效**：`src/styles/motion.css` 与 `BaseLayout.astro` 中的脚本实现滚动显现、指针环境光和标题入场动画；`prefers-reduced-motion: reduce` 下关闭动画。
- **无 JS 降级**：`<html>` 默认带 `no-js` 类，脚本执行后替换为 `js`；未启用 JS 时正文内容仍完整可见。

## 路由与构建

| 路径 | 来源 | 说明 |
| --- | --- | --- |
| `/` | `src/pages/index.astro` | 首页 |
| `/work/<slug>/` | `src/pages/work/[...slug].astro` | 4 个案例详情页，由内容集合静态生成 |
| `/404.html` | `src/pages/404.astro` | 404 页 |

`npm run build` 输出 `dist/`，包含 HTML、打包后的 CSS/JS 与字体资源。构建过程会执行 Astro 的内容 schema 校验，frontmatter 缺字段或类型不匹配会直接报错。

## 部署

项目为纯静态站点，将 `dist/` 目录发布到任意静态托管即可，无需 Node 运行时。

**通用平台（Vercel / Netlify / Cloudflare Pages）**

| 配置项 | 值 |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | 22（或 20.3+） |

**GitHub Pages（仓库子路径）**

若部署到 `https://onelee85.github.io/personal-website/`，需要在 `astro.config.mjs` 中设置 `site` 与 `base`，否则资源路径与 canonical 链接会指向域名根目录：

```js
export default defineConfig({
  site: 'https://onelee85.github.io',
  base: '/personal-website',
  output: 'static',
  server: { host: '127.0.0.1', port: 4321 },
});
```

若使用自定义域名或部署在域名根路径，则无需 `base`。当前配置**未设置** `site` / `base`，适合根路径托管。

## 内容口径约定

本站刻意区分「已确认事实」与「待补证据」，维护内容时请延续这一原则：

- 案例中的数字必须带有明确口径说明（`facts[].note`），不把团队成果、同期人员变化等归因于单一因素。
- 未经核实的用户规模、交易规模、可用性、覆盖率、效率提升等数据不写入公开页面。
- 匿名项目需保持公司 / 产品名称脱敏，`status` 字段标注公开版本性质。
- 项目封面为架构示意图（`SCHEMATIC / NOT SCREENSHOT`），不是生产系统截图。

## 待补充事项

- 联系方式（邮箱、GitHub 等）目前为占位状态，见 `src/data/site.ts` 的 `contact`。
- 近期任职的正式职称与全职 / 服务合作分段待确认。
- 部分历史项目的指标定义、统计周期与监控来源待补证。
- 主题系统目前只内置 `editorial-dark` 一个配色，其他主题可按「新增主题」步骤扩展。
- 部署上线后补充 `site` / `base` 配置与公开访问地址。

## 版权

本仓库为个人作品，未指定开源许可证。未经作者许可，请勿将站点内容或代码用于商业用途或二次分发。

© 李皎 · Shanghai
