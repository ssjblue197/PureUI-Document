// src/utilities/base-path.ts
var basePath = "";
function setBasePath(path) {
  basePath = path;
}
function getBasePath(subpath = "") {
  if (!basePath) {
    const scripts = [...document.getElementsByTagName("script")];
    const configScript = scripts.find((script) => script.hasAttribute("data-pure-ui"));
    if (configScript) {
      setBasePath(configScript.getAttribute("data-pure-ui"));
    } else {
      const fallbackScript = scripts.find((s) => {
        return /pure-ui(\.min)?\.js($|\?)/.test(s.src) || /pure-ui-autoloader(\.min)?\.js($|\?)/.test(s.src);
      });
      let path = "";
      if (fallbackScript) {
        path = fallbackScript.getAttribute("src");
      }
      setBasePath(path.split("/").slice(0, -1).join("/"));
    }
  }
  return basePath.replace(/\/$/, "") + (subpath ? `/${subpath.replace(/^\//, "")}` : ``);
}

export {
  setBasePath,
  getBasePath
};
