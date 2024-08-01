import {
  registerTranslation
} from "../chunks/chunk.K6K6S6E6.js";
import "../chunks/chunk.KIILAQWQ.js";

// src/translations/vi.ts
var translation = {
  $code: "vi",
  $name: "Ti\u1EBFng Vi\u1EC7t",
  $dir: "ltr",
  carousel: "B\u0103ng chuy\u1EC1n",
  clearEntry: "X\xF3a m\u1EE5c nh\u1EADp",
  close: "\u0110\xF3ng",
  copied: "\u0110\xE3 sao ch\xE9p",
  copy: "Sao ch\xE9p",
  currentValue: "Gi\xE1 tr\u1ECB hi\u1EC7n t\u1EA1i",
  error: "L\u1ED7i",
  goToSlide: (slide, count) => `Chuy\u1EC3n \u0111\u1EBFn trang ${slide} trong ${count}`,
  hidePassword: "\u1EA8n m\u1EADt kh\u1EA9u",
  loading: "\u0110ang t\u1EA3i",
  nextMonth: "Th\xE1ng sau",
  nextSlide: "Trang ti\u1EBFp theo",
  numOptionsSelected: (num) => {
    if (num === 0)
      return "Kh\xF4ng c\xF3 l\u1EF1a ch\u1ECDn n\xE0o";
    if (num === 1)
      return "1 l\u1EF1a ch\u1ECDn \u0111\xE3 \u0111\u01B0\u1EE3c ch\u1ECDn";
    return `${num} l\u1EF1a ch\u1ECDn \u0111\xE3 \u0111\u01B0\u1EE3c ch\u1ECDn`;
  },
  previousMonth: "Th\xE1ng tr\u01B0\u1EDBc",
  previousSlide: "Trang tr\u01B0\u1EDBc",
  progress: "Ti\u1EBFn \u0111\u1ED9",
  remove: "X\xF3a",
  resize: "Thay \u0111\u1ED5i k\xEDch th\u01B0\u1EDBc",
  scrollToEnd: "Cu\u1ED9n \u0111\u1EBFn cu\u1ED1i",
  scrollToStart: "Cu\u1ED9n \u0111\u1EBFn \u0111\u1EA7u",
  selectAColorFromTheScreen: "Ch\u1ECDn m\u1ED9t m\xE0u t\u1EEB m\xE0n h\xECnh",
  showPassword: "Hi\u1EC7n m\u1EADt kh\u1EA9u",
  slideNum: (slide) => `Trang ${slide}`,
  toggleColorFormat: "Chuy\u1EC3n \u0111\u1ED5i \u0111\u1ECBnh d\u1EA1ng m\xE0u"
};
registerTranslation(translation);
var vi_default = translation;
export {
  vi_default as default
};
