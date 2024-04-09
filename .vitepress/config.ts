import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Jin UI',
  description: 'This is a vue component library',
  rewrites: {
    'docs/(.*)': '(.*)',
    'packages/jin-ui/src/:comp/(.*)': 'components/:comp/(.*)',
    'packages/utils/src/(.*)': 'utils/(.*)',
    'packages/icons/docs/(.*)': 'icons/(.*)',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/introduction/' },
      { text: '组件', link: '/components/' },
      { text: '工具', link: '/utils/' },
      { text: '图标', link: '/icons/' },
    ],

    sidebar: {
      '/components/': [
        {
          text: 'Basic基础组件',
          items: [
            { text: 'Button按钮', link: '/components/button/' },
            { text: 'Input输入框', link: '/components/input/' },
            { text: 'Tooltip提示', link: '/components/tooltip/' },
            { text: 'Table表格', link: '/components/table/' },
            { text: 'Infinite Scroll 无限滚动', link: '/components/virtual-list/' },
            { text: 'Notification通知', link: '/components/notification/' },
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
      '/icons/': [
        {
          text: '基础',
          link: '/icons/',
        },
      ],

    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bilibilijin/tov-ui' },
    ],
  },
})
