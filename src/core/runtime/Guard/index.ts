import type { Rule } from 'antd/es/form'
import type { FormInstance } from 'antd'
import type { TSchema, TComponentChildren, TEffect } from '../../types'
import { JSRunner } from '../JsRunner'



type TEffectMap = {
  [key: string]: any
}

type TValidateRule = {
  jsContent: string
  validateTrigger: string
}

export class Guard {
  /** guard id , value is node name */
  id: string
  /** global form instance */
  _form: any
  /** the schema config */
  _schema: TSchema
  _node: TComponentChildren
  /** current node effects in schema */
  _effects: TEffect[]
  /**
   * {
   *  [componentAction.type] : effect[]
   * }
   */
  _effectsMap: TEffectMap


  /** current node hidden state */
  hidden: boolean
  disabled: boolean


  /** component update function */
  updateFn: () => void

  /**
   * the input component init value
   */
  initValue: unknown

  JSRunner: JSRunner

  constructor(form: FormInstance, node: TComponentChildren, schema: TSchema) {
    this.id = node.uuid

    this._form = form
    this._node = node
    this._schema = schema
    this._effects = node.effects || []
    this._effectsMap = {}

    this.hidden = !!node.config.hidden
    this.disabled = !!node.config.disabled


    this.updateFn = () => { }


    this.initValue = schema.config?.initialValues?.[node?.config?.name]

    this.JSRunner = new JSRunner()

    this.init()
  }

  private init() {
    this.add2Manager()
    this.initEffectMap()
  }

  public addReload(fn: () => void) {
    if (fn) this.updateFn = fn
  }

  public reload() {
    // re render component
    this.updateFn && this.updateFn()
  }

  private add2Manager() {
    this._form.manager.addGuard(this.id, this)
  }

  public getVisible() {
    return this.hidden
  }

  public setVisible(hidden: boolean) {
    this.hidden = hidden
  }

  public setDisable(disable: boolean) {
    this.disabled = disable
  }

  private initEffectMap() {
    const { _effectsMap, _effects } = this
    _effects.forEach(effect => {
      this._effectsMap[effect.type] = this.createEffectList(_effectsMap, effect)
    })
  }

  private createEffectList(_effectsMap: any, effect: TEffect) {
    return _effectsMap[effect.type] ? [...this._effectsMap[effect.type], effect] : [effect]
  }

  public dispatch<T extends string, P>(type: T, payload: P) {
    const pluginMap = this._form.manager.getPluginMap()
    const scheduler = this._form.manager.getScheduler()

    const currentEffects = this._effectsMap[type]

    if (!currentEffects) return

    currentEffects.forEach(({ target, action, jsContent }: TEffect) => {
      const plugin = pluginMap.get(action)

      scheduler.nextTick(() => {
        plugin?.run(jsContent || '', this).call(
          {
            target,
            payload,
          },
          this
        )
      })
    })
  }
}
