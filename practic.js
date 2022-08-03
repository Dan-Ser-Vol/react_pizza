const f = debounce(console.log, 1000);

f(1);
f(2);
f(3);
f(4);

function debounce(callback, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}
