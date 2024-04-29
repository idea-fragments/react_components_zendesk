import * as styled_components from 'styled-components';
import * as prop_types from 'prop-types';
import * as react from 'react';
import { PropsWithChildren, ReactNode, ComponentType, SVGAttributes, FC } from 'react';
import * as _zendeskgarden_react_tooltips from '@zendeskgarden/react-tooltips';

type Placement = "start" | "end" | "auto" | "top" | "bottom" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "end-top" | "end-bottom" | "start-top" | "start-bottom";
type TooltipProps = PropsWithChildren<{
    arrow?: boolean;
    maxWidth?: string;
    placement?: Placement;
    content: ReactNode;
    type?: "light";
}>;
declare const Tooltip: styled_components.StyledComponent<{
    ({ id, delayMS, isInitialVisible, content, refKey, placement, eventsEnabled, popperModifiers, children, hasArrow, size, type, appendToNode, zIndex, isVisible: externalIsVisible, ...otherProps }: _zendeskgarden_react_tooltips.ITooltipProps): react.JSX.Element;
    displayName: string;
    propTypes: {
        appendToNode: prop_types.Requireable<any>;
        hasArrow: prop_types.Requireable<boolean>;
        delayMS: prop_types.Requireable<number>;
        eventsEnabled: prop_types.Requireable<boolean>;
        id: prop_types.Requireable<string>;
        content: prop_types.Validator<NonNullable<prop_types.ReactNodeLike>>;
        placement: prop_types.Requireable<"top" | "bottom" | "end" | "start" | "auto" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "end-top" | "end-bottom" | "start-top" | "start-bottom">;
        popperModifiers: prop_types.Requireable<any>;
        size: prop_types.Requireable<"small" | "large" | "medium" | "extra-large">;
        type: prop_types.Requireable<"light" | "dark">;
        zIndex: prop_types.Requireable<NonNullable<string | number | null | undefined>>;
        isInitialVisible: prop_types.Requireable<boolean>;
        refKey: prop_types.Requireable<string>;
    };
    defaultProps: {
        hasArrow: boolean;
        eventsEnabled: boolean;
        type: string;
        placement: string;
        delayMS: number;
        refKey: string;
    };
}, styled_components.DefaultTheme, {
    arrow?: boolean | undefined;
    maxWidth?: string | undefined;
    placement?: Placement | undefined;
    content: ReactNode;
    type?: "light" | undefined;
} & {
    children?: ReactNode;
}, never>;

type SVGComponent = ComponentType<SVGAttributes<any>>;
type Props$1 = {
    color?: string;
    size?: number | string;
    svg: string | Array<string> | SVGComponent;
    title?: string;
    onClick?: () => void;
};
type IconProps = Props$1;

type Props = Omit<TooltipProps, "content"> & {
    icon: string;
    iconProps?: IconProps;
};
declare let IconTooltip: FC<PropsWithChildren<Props>>;

export { IconTooltip, Tooltip, TooltipProps };
