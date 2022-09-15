import type { TComp, THoc } from '../../types'

export * from './withFormItem'
export * from './withCol'

/**
 * 注册方向 从左到右 从内到外包裹
 *
 * exp:
 * hocArr = [withA , withB]
 * target = Comp
 *
 * 最终会产出
 * <B>
 *    <A>
 *      <Comp />
 *    </A>
 * </B>
 */
export const wrap = (hocArr: THoc[], target: TComp) => {
  return hocArr.reduce((comp, HOC) => {
    return HOC(comp)
  }, target)
}
