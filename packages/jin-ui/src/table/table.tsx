import { defineComponent, isVNode } from 'vue'
import { filterEmpty, isBaseType } from '@v-c/utils'
import { useClassnames } from '@jin-ui/utils'
import type { TableProps } from './interface'
import { Header } from './header'
import { Body } from './body'

export default defineComponent((props: TableProps, { slots }) => {
  const { c, ce } = useClassnames('table')

  return () => {
    const { columns, data, stripe } = props
    console.log(stripe)
    const children = filterEmpty(slots.default?.() || [])
    const myColumns: any[] = columns ?? []
    if (myColumns?.length < 1) { // 如果没有columns，就获取slots中的jin-table-column 获取jin-table-column 中的 key和title
      myColumns.length = 0
      children.forEach((child) => {
        if (isBaseType(child) || !isVNode(child))
          return

        if (child.type && (child as any).type.displayName && (child as any).type.displayName === 'JinTableColumn')
          myColumns.push(child.props)
      })
    }

    const cls = {
      [c()]: true,
      [c(ce('stripe'))]: stripe,
    }

    return (
      <table class={cls}>
        <Header columns={myColumns} v-slots={slots} />
        <Body columns={myColumns} data={data} stripe={stripe} />
      </table>
    )
  }
}, {
  name: 'JinTable',
})
