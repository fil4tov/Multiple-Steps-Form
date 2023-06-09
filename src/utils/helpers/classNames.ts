type Mods = Record<string, boolean>
type BaseClasses = string[] | Array<string | undefined>

export const classNames = (baseClasses: BaseClasses, mods: Mods = {}): string => {
  return [
    ...baseClasses.filter(Boolean),
    ...Object.keys(mods).filter(key => mods[key])
  ].join(' ')
}
