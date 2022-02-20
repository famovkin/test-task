export const getSqrtNumber = number => Math.pow(number, 2);
// решил немного изменить функцию, чтобы она возвращала квадрат числа

export const getAsyncNumber = number => {
  return new Promise((res, rej) => {
    setTimeout(() => res(number), 1000);
    // throw new Error('Произошла непредвиденная ошибка');
    // для проверки обработки ошибки
  });
};