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
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'product'
          }
        },
        { default: () => '产品展示' }
      ),
    key: 'product'
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'news'
          }
        },
        { default: () => '公司动态' }
      ),
    key: 'news'
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'contact'
          }
        },
        { default: () => '关注我们' }
      ),
    key: 'contact'
  }
]
