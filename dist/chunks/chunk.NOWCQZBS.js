// src/internal/debounce.ts
var TIMER_ID_KEY = Symbol();
var debounce = (delay) => {
  return (_target, _propertyKey, descriptor) => {
    const fn = descriptor.value;
    descriptor.value = function(...args) {
      clearTimeout(this[TIMER_ID_KEY]);
      this[TIMER_ID_KEY] = window.setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  };
};

export {
  debounce
};
