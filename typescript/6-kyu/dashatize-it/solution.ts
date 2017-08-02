export const dashatize = (num: number) => {
  return !isNaN(num)
  ? num
    .toString()
    .split('')
    .map((n: string) => Number(n) % 2 === 0 ? n : `-${n}-` )
    .join('')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '')
  : 'NaN'
}
