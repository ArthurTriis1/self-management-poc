import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
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
export const SelfManagementRouter = ({ routes, url, Page404 = () => _jsx("div", { children: "Hello" }), }) => {
    for (const route of routes) {
        const params = matchPath(route.path, url);
        if (params) {
            const Component = route.component;
            return _jsx(Component, Object.assign({}, params));
        }
    }
    return _jsx(Page404, {});
};
export const useSelfManagementPath = () => {
    const [url, setUrl] = useState("#");
    useEffect(() => {
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
