import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "jiesuo.cc使用文档",
  description: "jiesuo.cc使用文档",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '官网', link: 'https://jiesuo.cc/' }
    ],

    sidebar: [
      {
        text: 'ID分享',
        items: [
          { text: '全球区', link: '/id' }
        ]
      }
    ],

    socialLinks: [
      // 1. 内置邮件图标
      { icon: 'email', link: 'mailto:hi@52id.top' },

      // 2. 自定义 iMessage 图标
      {
        icon: {
          svg: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20">
              <circle cx="128" cy="128" r="120" fill="#34C759"/>
              <path d="M80 140c0 22 21 40 48 40 6 0 12-1 18-3l28 17-7-25c7-6 11-15 11-24 0-22-21-40-48-40s-48 18-48 40z" fill="#fff"/>
            </svg>
          `
        },
        link: 'imessage://hi@52id.top'
      }
    ]
  },
  srcDir: './src'
})
