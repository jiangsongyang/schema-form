/* eslint-disable no-undef */
export type TComp = (props: any) => JSX.Element

export type THoc = (Comp: TComp) => (props: any) => JSX.Element