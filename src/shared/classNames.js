export default (classes) =>  {
  return classes.filter(it => it != null).join(' ')
}