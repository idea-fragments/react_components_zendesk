/// <reference types="react" />
import * as react from 'react';
import react__default, { FC, ReactNode, ElementType, PropsWithChildren, ComponentType, Ref } from 'react';
import * as styled_components from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { Nullable } from 'global';
import * as _zendeskgarden_react_grid from '@zendeskgarden/react-grid';
import { ValueOf } from 'utils/types';
import * as _zendeskgarden_react_tables_dist_typings_elements_OverflowButton from '@zendeskgarden/react-tables/dist/typings/elements/OverflowButton';
import * as _zendeskgarden_react_tabs from '@zendeskgarden/react-tabs';

type ColorProps = {
    accent?: boolean;
    color?: string;
    danger?: boolean;
    neutral?: boolean;
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    warning?: boolean;
};
type ContainerProps = {
    _css?: CSS;
    color?: string;
    compact?: boolean;
    fluid?: boolean;
    className?: any;
};
type CSS<T = any> = FlattenSimpleInterpolation | string | T;
type CSSProp<T = any> = {
    _css?: CSS<T>;
    className?: string;
};

type Props$6 = {
    actions: Array<ReactNode>;
    fixed?: boolean;
    logo?: ElementType;
    onBackClicked?: () => void;
    onLogoClicked: () => void;
    showBackButton?: boolean;
    title: ElementType;
} & ContainerProps;
declare let AppBar: FC<Props$6>;

type Props$5 = {
    alertView: ReactNode;
    appBar: ReactNode;
    appBarHeight: string;
    className?: string;
    content: ReactNode;
    drawerView: ReactNode;
};
declare const AppBarLayout: {
    ({ alertView, appBar, className, content, drawerView, }: Props$5): react_jsx_runtime.JSX.Element;
    COMPONENT_NAME: string;
};

type AppBarLayoutV2Props = {
    appBar: ReactNode;
    mainContent: ReactNode;
};
declare const AppBarLayoutV2: FC<AppBarLayoutV2Props>;

declare const ComputersOnly: FC<PropsWithChildren>;

type Styles = FlattenSimpleInterpolation;
type MediaQuery = (styles: Styles) => Styles;

type ResponsiveProps<P> = {
    mediaQueryFunc: MediaQuery;
    props: P;
};
type FlexBoxProps = {
    alignItems?: string;
    gap?: string | null | "unset";
    fluid?: boolean;
    inline?: boolean;
    justifyContent?: string;
    responsivePropsList?: ResponsiveProps<FlexBoxProps>[];
    withRows?: boolean;
    wrapped?: boolean;
} & CSSProp;
declare const FlexBox: styled_components.StyledComponent<"div", styled_components.DefaultTheme, {
    alignItems?: string | undefined;
    gap?: string | null | undefined;
    fluid?: boolean | undefined;
    inline?: boolean | undefined;
    justifyContent?: string | undefined;
    responsivePropsList?: ResponsiveProps<FlexBoxProps>[] | undefined;
    withRows?: boolean | undefined;
    wrapped?: boolean | undefined;
} & CSSProp<any>, never>;

declare const Container: styled_components.StyledComponent<"div", styled_components.DefaultTheme, {
    alignItems?: string | undefined;
    gap?: string | null | undefined;
    fluid?: boolean | undefined;
    inline?: boolean | undefined;
    justifyContent?: string | undefined;
    responsivePropsList?: ResponsiveProps<FlexBoxProps>[] | undefined;
    withRows?: boolean | undefined;
    wrapped?: boolean | undefined;
} & CSSProp<any> & {
    withRows: boolean;
}, "withRows">;

type Props$4 = {
    children: ReactNode;
    className?: string;
    disableNextButton?: boolean;
    disablePreviousButton?: boolean;
    inline?: boolean;
    onEndClick?: () => void;
    onNextClick: () => void;
    onPreviousClick: () => void;
    onStartClick?: () => void;
} & CSSProp;
declare let Carousel: ({ children, className, disableNextButton, disablePreviousButton, inline, onEndClick, onNextClick, onPreviousClick, onStartClick, }: Props$4) => react_jsx_runtime.JSX.Element;

type StyledComponentProps = {
    className?: string;
};

type DrawerContent = {
    body: ReactNode;
    title?: string;
    withCancelButton?: boolean;
    withNoActions?: boolean;
    onClose?: () => void;
};
type Props$3 = {
    closeDrawer: () => void;
    drawerContent: Nullable<DrawerContent>;
    isOpen: boolean;
} & StyledComponentProps;
declare let Drawer: FC<Props$3>;

type _ResponsiveProps = {
    mediaQueryFunc: Function;
    props: FlexBlockProps;
};
type FlexBlockProps = {
    alignItems?: string;
    compactAxis?: boolean;
    compact?: boolean;
    fluid?: boolean;
    hidden?: boolean;
    withRows?: boolean;
    justify?: string;
    spacing?: string | null;
    responsivePropsList?: Array<_ResponsiveProps>;
};
declare const FlexBlock: styled_components.StyledComponent<"div", styled_components.DefaultTheme, FlexBlockProps, never>;
declare const PaddedFlexBlock: styled_components.StyledComponent<"div", styled_components.DefaultTheme, FlexBlockProps, never>;

type FullScreenProps = PropsWithChildren<{
    className?: string;
    fluidContent?: boolean;
    onCloseClicked: () => void;
    visible?: boolean;
}>;
declare let FullScreen: styled_components.StyledComponent<FC<FullScreenProps>, styled_components.DefaultTheme, {}, never>;

declare const Grid: styled_components.StyledComponent<react.ForwardRefExoticComponent<_zendeskgarden_react_grid.IGridProps & react.RefAttributes<HTMLDivElement>>, styled_components.DefaultTheme, {}, never>;
declare const Row: styled_components.StyledComponent<react.ForwardRefExoticComponent<_zendeskgarden_react_grid.IRowProps & react.RefAttributes<HTMLDivElement>>, styled_components.DefaultTheme, CSSProp<any>, never>;
declare const Col: styled_components.StyledComponent<react.ForwardRefExoticComponent<_zendeskgarden_react_grid.IColProps & react.RefAttributes<HTMLDivElement>>, styled_components.DefaultTheme, {}, never>;

type NavigationAction = {
    alwaysActive?: boolean;
    as?: ComponentType<{
        href: string;
    }>;
    href?: string;
    icon?: any | ComponentType;
    label: string;
    onClick?: () => void;
} & (NavigationLinkProps | NavigationButtonProps);
type NavigationLinkProps = {
    href: string;
};
type NavigationButtonProps = {
    onClick: () => void;
};

type IconAppBarProps = {
    actions: NavigationAction[];
    actionIconSize?: string;
    activeAction?: string;
    fallbackToText?: boolean;
    bordered?: boolean;
};
declare let IconAppBar: FC<IconAppBarProps>;

type Props$2 = {
    color?: string;
};
declare const Line: styled_components.StyledComponent<"hr", styled_components.DefaultTheme, Props$2, never>;

declare const OpacityTransition: styled_components.StyledComponent<"div", styled_components.DefaultTheme, {
    opacity: number;
}, never>;

declare const ALIGNMENTS: {
    readonly start: "flex-start";
    readonly center: "center";
    readonly end: "flex-end";
};
type Alignment = ValueOf<typeof ALIGNMENTS>;

type PromiseFunc<T = any, Rtn = any> = (...o: T[]) => Promise<Rtn>;

declare const BUTTON_SIZES: {
    readonly SMALL: "small";
    readonly LARGE: "large";
};
type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
type AutoLoadable = {
    autoLoadable: true;
    onClick: PromiseFunc;
};
type ButtonBaseProps = PropsWithChildren<{
    alignItems?: string;
    alignSelf?: Alignment;
    autoLoadable?: boolean;
    disabled?: boolean;
    flat?: boolean;
    groupKey?: string;
    icon?: string | ComponentType;
    iconPosition?: "left" | "right";
    iconSize?: string;
    inline?: boolean;
    innerAs?: string;
    innerRef?: Ref<HTMLButtonElement>;
    loading?: boolean;
    pill?: boolean;
    primary?: boolean;
    size?: ButtonSize;
    wrapInlineText?: false;
    onClick: () => void;
}> & CSSProp & ColorProps & ContainerProps;
type ControlledLoadable = {
    loading?: boolean;
    onClick: () => void;
};
type Props$1 = (ButtonBaseProps & ControlledLoadable) | (ButtonBaseProps & AutoLoadable);

type MenuPlacement = "start" | "auto" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "end" | "end-top" | "end-bottom" | "start-top" | "start-bottom";

type OverflowMenuItem = {
    label: string;
    action: () => void;
};
type Props = {
    appendToNode?: HTMLElement;
    placement?: MenuPlacement;
    actions: Array<OverflowMenuItem>;
};
declare const OverflowButton: styled_components.StyledComponent<react__default.ForwardRefExoticComponent<_zendeskgarden_react_tables_dist_typings_elements_OverflowButton.IOverflowButtonProps & react__default.RefAttributes<HTMLButtonElement>>, styled_components.DefaultTheme, {
    icon: string;
    "data-component-name": string;
    compact: boolean;
    color: string;
    "aria-label": "Row actions";
    size: string;
    primary: boolean;
    iconSize: string;
    as: react__default.ComponentType<Props$1>;
}, "color" | "primary" | "size" | "data-component-name" | "aria-label" | "compact" | "icon" | "iconSize" | "as">;
declare const OverflowMenu: ({ actions, appendToNode, placement }: Props) => react_jsx_runtime.JSX.Element;

declare const PhonesOnly: FC<PropsWithChildren>;

declare const PhonesAndTabletsOnly: FC<PropsWithChildren>;

type SectionProps = {
    bordered?: boolean;
    rounded?: boolean;
    shadowed?: boolean;
} & ColorProps & CSSProp;
declare const Section: styled_components.StyledComponent<"section", styled_components.DefaultTheme, {
    bordered?: boolean | undefined;
    rounded?: boolean | undefined;
    shadowed?: boolean | undefined;
} & ColorProps & CSSProp<any>, never>;

declare const SectionBody: styled_components.StyledComponent<"div", styled_components.DefaultTheme, {
    noHorizontalPadding?: boolean | undefined;
    scrollable?: boolean | undefined;
} & CSSProp<any>, never>;

type SectionFooterProps = PropsWithChildren<{
    actions?: ReactNode;
    bordered?: boolean;
    caption?: ReactNode;
    title?: ReactNode;
}> & CSSProp;
declare const SectionFooter: styled_components.StyledComponent<({ actions, bordered, className, }: SectionFooterProps) => JSX.Element, styled_components.DefaultTheme, {}, never>;

type SectionHeaderProps = PropsWithChildren<{
    actions?: ReactNode;
    bordered?: boolean;
    caption?: ReactNode;
    title?: ReactNode;
}> & CSSProp;
declare const SectionHeader: styled_components.StyledComponent<react.ForwardRefExoticComponent<{
    actions?: ReactNode;
    bordered?: boolean | undefined;
    caption?: ReactNode;
    title?: ReactNode;
} & {
    children?: ReactNode;
} & CSSProp<any> & react.RefAttributes<HTMLDivElement>>, styled_components.DefaultTheme, {}, never>;

type Action = NavigationAction;
type SidebarProps = {
    actions: Action[];
    actionIconSize?: string;
    activeAction?: string;
    logo: ReactNode;
    lowerActions?: Action[];
};
declare const Sidebar: FC<SidebarProps>;

type SidebarLayoutProps = {
    mainContent: ReactNode;
    sidebar: ReactNode;
};
declare const SidebarLayout: FC<SidebarLayoutProps>;

declare const TabletsOnly: FC<PropsWithChildren>;

declare const Tabs: styled_components.StyledComponent<react.ForwardRefExoticComponent<_zendeskgarden_react_tabs.ITabsProps & react.RefAttributes<HTMLDivElement>>, styled_components.DefaultTheme, {}, never>;
declare const TabPanel: react.ForwardRefExoticComponent<_zendeskgarden_react_tabs.ITabPanelProps & react.RefAttributes<HTMLDivElement>>;

export { AppBar, AppBarLayout, AppBarLayoutV2, AppBarLayoutV2Props, Carousel, Col, ComputersOnly, Container, Drawer, DrawerContent, FlexBlock, FlexBlockProps, FlexBox, FlexBoxProps, FullScreen, FullScreenProps, Grid, IconAppBar, IconAppBarProps, Line, NavigationAction, OpacityTransition, OverflowButton, OverflowMenu, OverflowMenuItem, PaddedFlexBlock, PhonesAndTabletsOnly, PhonesOnly, ResponsiveProps, Row, Section, SectionBody, SectionFooter, SectionFooterProps, SectionHeader, SectionHeaderProps, SectionProps, Sidebar, SidebarLayout, SidebarLayoutProps, SidebarProps, TabPanel, TabletsOnly, Tabs };
