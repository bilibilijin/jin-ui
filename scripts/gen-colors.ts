import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { blue, gold, gray, green, red } from '@ant-design/colors'

let colors = ''
blue.forEach((color, index) => {
  console.log(color)
  // css variable 变量
  // --jin-color-primary: #1677ff;
  colors += `--jin-color-primary-${index + 1}: ${color};\n`
})

colors += '\n'

green.forEach((color, index) => {
  console.log(color)
  // css variable 变量
  // --jin-color-primary: #1677ff;
  colors += `--jin-color-success-${index + 1}: ${color};\n`
})

colors += '\n'

gold.forEach((color, index) => {
  console.log(color)
  // css variable 变量
  // --jin-color-primary: #1677ff;
  colors += `--jin-color-warning-${index + 1}: ${color};\n`
})

colors += '\n'

red.forEach((color, index) => {
  console.log(color)
  // css variable 变量
  // --jin-color-primary: #1677ff;
  colors += `--jin-color-error-${index + 1}: ${color};\n`
})

colors += '\n'

gray.forEach((color, index) => {
  console.log(color)
  // css variable 变量
  // --jin-color-primary: #1677ff;
  colors += `--jin-color-normal-${index + 1}: ${color};\n`
})

// 找到了根目录的路径
const baseUrl = fileURLToPath(new URL('../', import.meta.url))
const cssFile = path.resolve(baseUrl, 'packages/tov-ui/src/style/theme/colors.css')
fs.writeFileSync(cssFile, `:root{\n${colors}\n}`)
