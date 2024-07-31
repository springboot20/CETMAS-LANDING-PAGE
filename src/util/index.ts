export const classNames = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

export const isFileExtValid = (fileExtensions: string[][], file: string) => {
  return fileExtensions.some((ext) => ext.includes(file));
};


export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-NG', {
    currency: 'NGN',
    style: 'currency',
  }).format(price);
};