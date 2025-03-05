export const BREAKPOINTS = {
  'sm': 340,
  'xsm': 480,
  'pre-sm': 560,
  'xmd': 620,
  'md': 768,
  'pre-md': 850,
  'lg': 1024,
  'xl': 1280,
  '2xl': 1536,
} as const;


export const sleep = async (ms: number) =>
  new Promise<void>((resolve) => {
    const id = setTimeout(() => {
      resolve()
      clearTimeout(id)
    }, ms)
  })
