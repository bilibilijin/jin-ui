import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Jin UI',
  description: 'This is a vue component library',
  rewrites: {
    'docs/(.*)': '(.*)',
    'packages/tov-ui/src/:comp/(.*)': 'components/:comp/(.*)',
    'packages/utils/src/(.*)': 'utils/(.*)',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/introduction/' },
      { text: '组件', link: '/components/' },
      { text: '工具', link: '/utils/' },
    ],

    sidebar: {
      '/components/': [
        {
          text: 'Basic基础组件',
          items: [
            { text: 'Button按钮', link: '/components/button/' },
          ],
        },
      ],
      '/introduction/': [
        {
          text: '基础',
          items: [
            { text: '安装', link: '/introduction/install' },
            { text: '快速开始', link: '/introduction/quick-start' },
          ],
        },
      ],
      '/utils/': [
        {
          text: 'genClass',
          link: '/utils/gen-class',
        },
      ],

    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bilibilijin/tov-ui' },
    ],
  },
})
