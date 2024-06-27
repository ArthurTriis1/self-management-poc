"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfManagementPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@faststore/ui");
const SelfManagementPage = ({ content, buttonLabel, onClick }) => ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { children: content }), (0, jsx_runtime_1.jsx)(ui_1.Button, { onClick: onClick, children: buttonLabel })] }));
exports.SelfManagementPage = SelfManagementPage;
