import type { Guard } from '../Guard'

const getType = (t: any) => Object.prototype.toString.call(t).slice(8, -1).toLowerCase()

type TGetValueWithKey = (value: any) => unknown
export class JSRunner {
  private getActualParameters(target: string, currentWorkGuard: Guard, context: any) {
    /**
     *  if you give me a context
     *  i will read value from context
     */
    if (context) return context[target]

    /**
     * this is form original value
     */
    let currentValue = currentWorkGuard._form.getFieldsValue()

    const getValueWithKey: TGetValueWithKey = (value: any) => {
      let res = null
      for (const key in value) {
        if (key === target) {
          res = value[key]
          break
        }
        if (getType(value[key]) === 'object') {
          res = getValueWithKey(value[key])
          if (res) break
        }
        if (getType(value[key]) === 'array') {
          res = value[key].find(getValueWithKey)
          if (res) break
        }
      }
      return res
    }

    const value = getValueWithKey(currentValue)

    return value
  }

  private getArguments(strFun: string, currentWorkGuard: Guard, context: any) {
    const s = strFun.indexOf('(')
    const e = strFun.indexOf(')')
    const args = strFun
      .slice(s + 1, e)
      .split(',')
      .map(i => i.trim())
    let res = ''
    args.forEach(i => {
      res += `${this.transformValue(this.getActualParameters(i, currentWorkGuard, context))},`
    })
    /** delete last , */
    res = res.slice(0, res.length - 1)
    return res
  }

  private transformValue(v: any) {
    if (typeof v === 'string') return `"${v}"`
    if (this.shouldStringify(v)) return JSON.stringify(v)
    return v
  }

  private shouldStringify(v: any) {
    const WHITE_LIST = ['array', 'object']
    return WHITE_LIST.includes(getType(v))
  }

  private genCode(strFun: string, currentWorkGuard: Guard, context: any) {
    let code = ';('
    code += `${strFun}`
    code += ')('
    code += this.getArguments(strFun, currentWorkGuard, context)
    code += ')'
    return code
  }

  public run(strFun: string, currentWorkGuard: Guard, context: any = null) {
    if (!strFun) return null
    const code = this.genCode(strFun, currentWorkGuard, context)

    let res
    try {
      /* eslint-disable no-eval */
      res = eval(code)
    } catch (err) {
      console.error(err)
    } finally {
      /* eslint-disable no-unsafe-finally */
      return res
    }
  }
}
