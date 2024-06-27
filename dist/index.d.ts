import * as react_jsx_runtime from 'react/jsx-runtime';

type SelfManagementPageProps = {
    onClick(): void;
    content: string;
    buttonLabel: string;
};
declare const SelfManagementPage: ({ content, buttonLabel, onClick }: SelfManagementPageProps) => react_jsx_runtime.JSX.Element;

export { SelfManagementPage, type SelfManagementPageProps };
