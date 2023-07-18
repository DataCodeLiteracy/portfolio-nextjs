const debounce = <T extends number[]>(func: (...args: T) => void, delay: number) => {
  let timerId: NodeJS.Timeout | undefined
  return function (this: number, ...args: T): void {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export default debounce
