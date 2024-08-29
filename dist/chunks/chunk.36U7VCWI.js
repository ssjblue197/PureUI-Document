// src/utilities/object.ts
function getNestedValue(obj, key) {
  const keys = key.replace(/\[(\d+)\]/g, ".$1").split(".");
  return keys.reduce((o, i) => o && o[i] !== void 0 ? o[i] : void 0, obj);
}

export {
  getNestedValue
};
