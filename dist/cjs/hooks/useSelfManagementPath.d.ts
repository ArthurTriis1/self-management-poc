import React from "react";
export type Route = {
    path: string;
    component: React.ComponentType<any>;
};
export type RouterProps = {
    routes: Route[];
    url: string;
    Page404: React.ComponentType<any>;
};
export declare const SelfManagementRouter: React.FC<RouterProps>;
export declare const useSelfManagementPath: () => {
    url: string;
    setUrl: React.Dispatch<React.SetStateAction<string>>;
    getLinkProps: (path: string) => {
        href: string;
        onClick: () => void;
    };
};
//# sourceMappingURL=useSelfManagementPath.d.ts.map