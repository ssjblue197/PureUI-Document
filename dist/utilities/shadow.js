import "../chunks/chunk.KIILAQWQ.js";

// src/utilities/shadow.ts
function shadowQuery(selector, rootNode = document) {
  const selectors = String(selector).split(">>>");
  let currentNode = rootNode;
  selectors.find((_, index) => {
    if (index === 0) {
      currentNode = rootNode.querySelector(selectors[index]);
    } else if (currentNode instanceof Element) {
      currentNode = currentNode.shadowRoot.querySelector(selectors[index]);
    }
    return currentNode === null;
  });
  if (currentNode === rootNode) {
    return null;
  }
  return currentNode;
}
export {
  shadowQuery
};
