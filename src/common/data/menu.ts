import type { MenuOption } from 'naive-ui'
import { h } from 'vue'
import { RouterLink } from 'vue-router'

export const menus: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home'
          }
        },
        { default: () => '首页' }
      ),
    key: 'home'
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'about'
          }
        },
        { default: () => '关于中酒' }
      ),
    key: 'about'
  },
  {
    label: '产品展示',
    key: 'products'
  },
  {
    label: '公司动态',
    key: 'news'
  },
  {
    label: '关注我们',
    key: 'attention'
  }
]
