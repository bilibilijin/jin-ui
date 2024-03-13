import classNames from 'classnames'
import { computed } from 'vue'

// BEM
// Block .block{}
// Element  .block__element{}
// Modifier .block--modifier{}

type BEMType = string | [string, 'B' | 'E' | 'M' | undefined]

export function useClassnames(componentName: string) {
  const prefix = 'jin'
  const componentClass = `${prefix}-${componentName}`
  const c = (...arg: BEMType[]) => {
    // return `${componentClass}-${suffix}`
    if (arg.length) {
      // reduce 第一个参数是回调函数，第二个参数可选，是初始值
      return arg.reduce((prev, cur) => {
        if (Array.isArray(cur)) {
          // 第一个参数是string类型
          const arg1 = cur[0]
          // 第二个参数是{'B' | 'E' | 'M' | undefined}
          const arg2 = cur[1]
          if (arg2 === 'E')
            return `${prev}__${arg1}`

          else if (arg2 === 'M')
            return `${prev}--${arg1}`
        }
        return `${prev}-${cur}`
      }, componentClass) as string
    }
    else {
      return componentClass
    }
  }

  const ce = (e: string) => [e, 'E'] as BEMType
  const cm = (m: string) => [m, 'M'] as BEMType

  // 定义了一个名为'cx'的函数， 接收一个参数'cls', 返回一个对象，key是类名，value是布尔值
  // 然后将cls函数传递给classNames函数，返回的对象给classNames
  const cx = (cls: () => Record<string, boolean>) => {
    console.log(cls())
    // classNames的传递参数是cls返回的对象{string, boolean}, 最后用computed包裹
    return computed(() => classNames(cls()))
  }

  return {
    c,
    cx,
    ce,
    cm,
  }
}
