export const getToastColor = (type: string) => {
  switch (type) {
    case 'success':
      return `text-green`
    case 'error':
      return `text-red `
    case 'warning':
      return `text-coral`
    case 'info':
    default:
      return `text-blue`
  }
}
