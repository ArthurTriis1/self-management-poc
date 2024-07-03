"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelfManagementPath = exports.SelfManagementRouter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const matchPath = (path, url) => {
    const pathParts = path.split("/").filter(Boolean);
    const urlParts = url.split("/").filter(Boolean);
    if (pathParts.length !== urlParts.length)
        return null;
    const params = pathParts.reduce((acc, part, index) => {
        if (acc === null)
            return null;
        if (part.startsWith(":")) {
            acc[part.slice(1)] = urlParts[index];
        }
        else if (part !== urlParts[index]) {
            return null;
        }
        return acc;
    }, {});
    return params;
};
const SelfManagementRouter = ({ routes, url, Page404 = () => (0, jsx_runtime_1.jsx)("div", { children: "Hello" }), }) => {
    for (const route of routes) {
        const params = matchPath(route.path, url);
        if (params) {
            const Component = route.component;
            return (0, jsx_runtime_1.jsx)(Component, Object.assign({}, params));
        }
    }
    return (0, jsx_runtime_1.jsx)(Page404, {});
};
exports.SelfManagementRouter = SelfManagementRouter;
const useSelfManagementPath = () => {
    const [url, setUrl] = (0, react_1.useState)("#");
    (0, react_1.useEffect)(() => {
        var _a, _b;
        console.log(window === null || window === void 0 ? void 0 : window.location);
        setUrl((_b = (_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.hash) === null || _b === void 0 ? void 0 : _b.substring(1));
    }, []);
    const getLinkProps = (path) => {
        return {
            href: `#${path}`,
            onClick: () => setUrl(path),
        };
    };
    return {
        url,
        setUrl,
        getLinkProps,
    };
};
exports.useSelfManagementPath = useSelfManagementPath;
