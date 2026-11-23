// 新增主题：在 src/styles/themes/ 创建 CSS、于 index.css 引入，再修改这里的 id 与浏览器颜色。
export const activeTheme = {
  id: 'editorial-dark',
  browserColor: '#101318',
} as const;

// 案例页可在全站主题之上使用独立的纸面配色。
export const roadmapPaper = {
  id: 'roadmap-paper',
  browserColor: '#edf0f1',
} as const;
