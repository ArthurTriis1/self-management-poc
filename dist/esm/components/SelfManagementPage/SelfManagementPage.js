import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@faststore/ui";
export const SelfManagementPage = ({ title, content, buttonLabel, onClick, }) => (_jsxs("section", { "data-fs-self-management-section": true, children: [_jsx("h1", { "data-fs-self-management-title": true, children: title }), _jsx("code", { "data-fs-self-management-code": true, children: content }), _jsx(Button, { variant: "primary", onClick: onClick, children: buttonLabel })] }));
