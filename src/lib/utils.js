import compose from 'lodash/fp/compose'
import cond from 'lodash/fp/cond'
import postcss from 'postcss'
import cssnext from 'postcss-cssnext'
import atImport from 'postcss-import'
import camelCase from 'lodash/fp/camelCase'

const isDev = () => process.env.NODE_ENV === 'development'
const isProd = () => !isDev()

const toProdExport = (code) => `export default ${code}`
const toDevExport = (code) => `export default ${code}`
const toES5Export = (code) => `module.exports = ${code}`

const toExport = cond([
  [isDev, toDevExport],
  [isProd, toProdExport]
])

const toString = (data) => `${JSON.stringify(data, null, '\t')}`

const objectify = (root, filepath) => {
  const result = {}

  if (!root) {
    return result
  }

  root.walkDecls((rule) => {
    if (rule.source.input.file !== filepath) {
      return
    }
    if (rule.parent && rule.parent.selectors.find((sel) => sel === ':root')) {
      const { value } = rule
      const key = rule.prop.replace(/^-+/, '') // replace "--"

      result[camelCase(key)] = /* value.endsWith('px') ? parseInt(value, 10) : */ value
    }
  })
  return result
}

export const toConfig = compose(toExport, toString, objectify)
export const toES5Config = compose(toES5Export, toString, objectify)
export const getPostcss = (async) => postcss()
  .use(atImport({ async }))
  .use(cssnext({ features: { customProperties: { preserve: 'computed' } } }))
