"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfManagementPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@faststore/ui");
const SelfManagementPage = ({ title, content, buttonLabel, onClick, }) => ((0, jsx_runtime_1.jsxs)("section", { "data-fs-self-management-section": true, children: [(0, jsx_runtime_1.jsx)("h1", { "data-fs-self-management-title": true, children: title }), (0, jsx_runtime_1.jsx)("code", { "data-fs-self-management-code": true, children: content }), (0, jsx_runtime_1.jsx)(ui_1.Button, { variant: "primary", onClick: onClick, children: buttonLabel })] }));
exports.SelfManagementPage = SelfManagementPage;
