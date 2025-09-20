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
      { text: 'Examples', link: '/id' }
    ],

    sidebar: [
      {
        text: 'ID分享',
        items: [
          { text: 'Examples', link: '/id' }
        ]
      }
    ],

    socialLinks: [
      { text: '官网', link: 'https://jiesuo.cc' }
    ]
  },
  srcDir: './src'
})
