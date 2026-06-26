import * as styled_components from 'styled-components';
import * as prop_types from 'prop-types';
import * as react from 'react';
import { PropsWithChildren, ReactNode, ComponentProps, ComponentType, SVGAttributes, FC, ReactElement, RefObject } from 'react';
import * as _zendeskgarden_react_tooltips from '@zendeskgarden/react-tooltips';
import { Tooltip as Tooltip$1 } from '@zendeskgarden/react-tooltips';

type Placement = "start" | "end" | "auto" | "top" | "bottom" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "end-top" | "end-bottom" | "start-top" | "start-bottom";
type TooltipProps = PropsWithChildren<{
    arrow?: boolean;
    maxWidth?: string;
    placement?: Placement;
    content: ReactNode;
    type?: "light";
    isVisible?: boolean;
} & Pick<ComponentProps<typeof Tooltip$1>, "appendToNode" | "popperModifiers">>;
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
        type: prop_types.Requireable<"dark" | "light">;
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
    isVisible?: boolean | undefined;
} & Pick<_zendeskgarden_react_tooltips.ITooltipProps, "popperModifiers" | "appendToNode"> & {
    children?: ReactNode;
}, never>;

type SVGComponent = ComponentType<SVGAttributes<any>>;
type Props$1 = {
    color?: string;
    size?: number | string;
    svg: string | Array<string> | SVGComponent | ReactNode;
    title?: string;
    onClick?: () => void;
};
type IconProps = Props$1;

type Props = Omit<TooltipProps, "content"> & {
    icon: string;
    iconProps?: IconProps;
};
declare let IconTooltip: FC<PropsWithChildren<Props>>;

type SteppedTooltipStep = {
    label?: string;
    isAction?: boolean;
    title: ReactNode;
    body: ReactNode;
    actionHint?: ReactNode;
};
type SteppedTooltipProps = {
    children: ReactElement;
    step?: SteppedTooltipStep | null;
    placement?: TooltipProps["placement"];
    width?: number;
    dotCount?: number;
    activeDotIndex?: number;
    onBack?: () => void;
    onNext?: () => void;
    isFinish?: boolean;
    onExit?: () => void;
    offset?: number;
    arrow?: boolean;
    detached?: boolean;
};
declare const SteppedTooltip: FC<SteppedTooltipProps>;

type FocusedHelperProps = {
    active: boolean;
    children?: ReactElement;
    resolveTarget?: () => Element | null;
    targetRef?: RefObject<Element>;
    renderTooltip?: (anchor: ReactElement) => ReactNode;
    zIndex?: number;
    ringPadding?: number;
    ringBorderRadius?: number | string;
    recomputeKey?: unknown;
};
declare const FocusedHelper: FC<FocusedHelperProps>;

export { FocusedHelper, FocusedHelperProps, IconTooltip, SteppedTooltip, SteppedTooltipProps, SteppedTooltipStep, Tooltip, TooltipProps };
