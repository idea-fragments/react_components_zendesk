import { PropsWithChildren, ReactNode } from "react";
declare type Placement = "start" | "end" | "auto" | "top" | "bottom" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "end-top" | "end-bottom" | "start-top" | "start-bottom";
export declare type TooltipProps = PropsWithChildren<{
    arrow?: boolean;
    maxWidth?: string;
    placement?: Placement;
    content: ReactNode;
    type?: "light" | null;
}>;
export declare const Tooltip: import("styled-components").StyledComponent<{
    ({ id, delayMS, isInitialVisible, content, refKey, placement, eventsEnabled, popperModifiers, children, hasArrow, size, type, appendToNode, zIndex, isVisible: externalIsVisible, ...otherProps }: import("@zendeskgarden/react-tooltips").ITooltipProps): JSX.Element;
    displayName: string;
    propTypes: {
        appendToNode: import("prop-types").Requireable<any>;
        hasArrow: import("prop-types").Requireable<boolean>;
        delayMS: import("prop-types").Requireable<number>;
        eventsEnabled: import("prop-types").Requireable<boolean>;
        id: import("prop-types").Requireable<string>;
        content: import("prop-types").Validator<string | number | boolean | import("prop-types").ReactElementLike | import("prop-types").ReactNodeArray>;
        placement: import("prop-types").Requireable<"end" | "auto" | "start" | "top" | "bottom" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "end-top" | "end-bottom" | "start-top" | "start-bottom">;
        popperModifiers: import("prop-types").Requireable<any>;
        size: import("prop-types").Requireable<"small" | "large" | "medium" | "extra-large">;
        type: import("prop-types").Requireable<"light" | "dark">;
        zIndex: import("prop-types").Requireable<string | number>;
        isInitialVisible: import("prop-types").Requireable<boolean>;
        refKey: import("prop-types").Requireable<string>;
    };
    defaultProps: {
        hasArrow: boolean;
        eventsEnabled: boolean;
        type: string;
        placement: string;
        delayMS: number;
        refKey: string;
    };
}, any, {
    arrow?: boolean | undefined;
    maxWidth?: string | undefined;
    placement?: Placement | undefined;
    content: ReactNode;
    type?: "light" | null | undefined;
} & {
    children?: ReactNode;
}, never>;
export {};
//# sourceMappingURL=Tooltip.d.ts.map