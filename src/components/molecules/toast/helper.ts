

export const getToastColor = (type: string, opacity: number = 1) => {
  switch (type) {
    case 'success':
      return `rgba(214,253,176, ${opacity})`;
    case 'error':
      return `rgba(247,100,111, ${opacity})`;
    case 'warning':
      return `rgba(255,188,62, ${opacity})`;
    case 'info':
    default:
      return `rgba(0,190,250, ${opacity})`;
  }
};

export const getToastTextColor = (type: string) => {
  switch (type) {
    case 'success':
      return 'green';
    case 'error':
      return `red`;
    case 'warning':
      return 'yellow';
    case 'info':
    default:
      return 'rgba(0,190,250)';
  }
};
