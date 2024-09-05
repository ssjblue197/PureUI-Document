// src/components/file-upload/library.ts
var HttpMethod = /* @__PURE__ */ ((HttpMethod2) => {
  HttpMethod2["PATCH"] = "PATCH";
  HttpMethod2["POST"] = "POST";
  HttpMethod2["PUT"] = "PUT";
  HttpMethod2["GET"] = "GET";
  return HttpMethod2;
})(HttpMethod || {});
var hasValidExtension = (file, acceptedExtension) => {
  return acceptedExtension === file.name.split(".").pop();
};
var hasValidBaseType = (file, acceptedBaseType) => {
  acceptedBaseType = acceptedBaseType.replace("/*", "");
  const fileBaseType = file.type.replace(/\/[a-z*]{0,20}$/, "");
  return acceptedBaseType === fileBaseType;
};
var hasValidFileSize = (file, maxFileSize) => {
  if (!maxFileSize) {
    return true;
  }
  return file.size <= maxFileSize;
};
var hasValidFileType = (file, accept) => {
  if (accept === "*") {
    return true;
  }
  const acceptedTypes = accept.split(",");
  return acceptedTypes.some((acceptedType) => {
    acceptedType = acceptedType.trim();
    if (acceptedType === file.type) {
      return true;
    }
    if (acceptedType.startsWith(".")) {
      return hasValidExtension(file, acceptedType.slice(1));
    }
    if (acceptedType.endsWith("/*")) {
      return hasValidBaseType(file, acceptedType);
    }
    return false;
  });
};

export {
  HttpMethod,
  hasValidExtension,
  hasValidBaseType,
  hasValidFileSize,
  hasValidFileType
};
