import React, { ErrorInfo } from "react";
declare type Props = {
    children: any;
    autoReload: boolean;
};
declare type State = {
    error: Error;
};
export declare class ErrorBoundary extends React.Component<Props, State> {
    static defaultProps: {
        autoReload: boolean;
    };
    static COMPONENT_NAME: string;
    state: {
        error: null;
    };
    static getDerivedStateFromError(error: Error): {
        error: Error;
    };
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=ErrorBoundary.d.ts.map