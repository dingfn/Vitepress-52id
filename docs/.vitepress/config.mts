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

  },
  srcDir: './src'
})
