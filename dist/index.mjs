// src/components/SelfManagementPage/SelfManagementPage.tsx
import { Button } from "@faststore/ui";
import { jsx, jsxs } from "react/jsx-runtime";
var SelfManagementPage = ({ content, buttonLabel, onClick }) => /* @__PURE__ */ jsxs("div", { children: [
  /* @__PURE__ */ jsx("div", { children: content }),
  /* @__PURE__ */ jsx(Button, { onClick, children: buttonLabel })
] });
export {
  SelfManagementPage
};
