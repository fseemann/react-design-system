export function className (classes) {
  return classes.filter(it => it != null).join(' ')
}