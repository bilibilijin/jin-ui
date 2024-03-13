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
      }, componentClass)
    }
    else {
      return componentClass
    }
  }

  const ce = (e: string) => [e, 'E'] as BEMType
  const cm = (m: string) => [m, 'M'] as BEMType
  const cx = (cls: () => Record<string, boolean>) => {
    return computed(() => classNames(cls()))
  }

  return {
    c,
    cx,
    ce,
    cm,
  }
}
