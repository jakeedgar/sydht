export const Head = (list: Array<number>) => list[0]

const a: Array<string> = ['all sellers', 'jump ship', 'aaa', 'booty patrol']
let s: string = 'all sellers'

export const customSort = (arr: Array<string>, str: string) => {
  const sorted: Array<string> = [...arr.sort()]
  let output: Array<string> = []
  output.push(str)
  sorted.forEach((element: string) => {
    {
      element != output[0] ? output.push(element) : str
    }
  })
  return output
}

console.log(customSort(a, s))
