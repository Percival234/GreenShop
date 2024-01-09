export default function debounce(func, time) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(this, arguments);
    }, time);
  };
}
