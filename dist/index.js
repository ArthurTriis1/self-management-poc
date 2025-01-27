"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  SelfManagementPage: () => SelfManagementPage
});
module.exports = __toCommonJS(src_exports);

// src/components/SelfManagementPage/SelfManagementPage.tsx
var import_ui = require("@faststore/ui");
var import_jsx_runtime = require("react/jsx-runtime");
var SelfManagementPage = ({ content, buttonLabel, onClick }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: content }),
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, { onClick, children: buttonLabel })
] });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SelfManagementPage
});
