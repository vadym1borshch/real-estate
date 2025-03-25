export const useDetectCardSystem = () => {

  return (cardNumber: string) => {
    const number = cardNumber.replace(/\s|-/g, '')

    if (number.length < 4) return null

    if (/^4/.test(number)) {
      return 'Visa'
    }

    if (
      /^5[1-5]/.test(number) ||
      /^2(2[2-9]|[3-6]|7[01]|720)/.test(number)
    ) {
      return 'Mastercard'
    }

    if (/^3[47]/.test(number)) {
      return 'American Express'
    }

    if (/^3(0[0-5]|[68])/.test(number)) {
      return "Diner's Club"
    }

    if (/^6(011|5)/.test(number)) {
      return 'Discover'
    }

    if (/^35(2[89]|[3-8])/.test(number)) {
      return 'JCB'
    }

    if (/^(5018|5020|5038|5893|6304|6759|676[1-3])/.test(number)) {
      return 'Maestro'
    }
    return null
  }
}
