import { defineComponent } from 'vue'
import { useClassnames } from '@bilibili-jin-ui/utils'
import type { BodyProps } from './interface'

export const Body = defineComponent<BodyProps>({
  name: 'Body',
  setup(props = { columns: [], data: [], stripe: false }) {
    return () => {
      const { c, ce } = useClassnames('table')
      const cellCls = {
        [c(ce('cell'))]: true,
        [c('body__cell')]: true,
      }
      const { columns, data } = props
      const renderCell = (item: any) => {
        return columns?.map((column) => {
          return <td class={cellCls}>{item[column.key]}</td>
        })
      }

      const rowCls = {
        [c(ce('row'))]: true,
        [c('body__row')]: true,
        [c('row__stripe')]: props.stripe,
      }

      console.log(rowCls)

      const renderData = () => {
        return data?.map((v) => {
          return (
            <tr class={rowCls}>
              {renderCell(v)}
            </tr>
          )
        })
      }
      const cls = {
        [c('body')]: true,
      }

      return (
        <tbody class={cls}>
          {renderData()}
        </tbody>
      )
    }
  },
})
