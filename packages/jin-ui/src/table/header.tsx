import { defineComponent } from 'vue'
import { useClassnames } from '@blibli-jin-ui/utils'
import type { HeaderProps } from './interface'

export const Header = defineComponent<HeaderProps>({
  name: 'Header',
  setup(props = { columns: [] }) {
    const { c, ce } = useClassnames('table')
    return () => {
      const cellCls = {
        [c(ce('cell'))]: true,
        [c('header__cell')]: true,
      }
      const renderColumns = () => {
        return (props.columns ?? []).map((column) => {
          return <th class={cellCls}>{column.title}</th>
        })
      }

      const rowCls = {
        [c('header__row')]: true,
      }
      const cls = {
        [c('header')]: true,
      }

      return (
        <thead class={cls}>
          <tr class={rowCls}>
            {renderColumns()}
          </tr>
        </thead>
      )
    }
  },
})
