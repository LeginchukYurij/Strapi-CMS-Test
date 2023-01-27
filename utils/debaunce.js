export const debaunce = function (func, timeout) {
  let timer;

  return () => {
    clearTimeout(timer);

    setTimeout(func, timeout);
  };
};
