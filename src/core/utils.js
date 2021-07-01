export function capitalize(string) {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toLocaleUpperCase() + string.slice(1)
}
