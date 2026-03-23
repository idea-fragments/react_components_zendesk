/// <reference types="react" />
import * as react from 'react';
import react__default, { FC, ReactNode, ElementType, PropsWithChildren, Dispatch, SetStateAction, ComponentType, SVGAttributes, Ref } from 'react';
import * as styled_components from 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components';
import { ValueOf } from 'utils/types';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { Nullable } from 'global';
import * as _zendeskgarden_react_grid from '@zendeskgarden/react-grid';
import * as _zendeskgarden_react_tables_dist_typings_elements_OverflowButton from '@zendeskgarden/react-tables/dist/typings/elements/OverflowButton';

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

type Props$2 = {
    actions: Array<ReactNode>;
    fixed?: boolean;
    logo?: ElementType;
    onBackClicked?: () => void;
    onLogoClicked: () => void;
    showBackButton?: boolean;
    title: ElementType;
} & ContainerProps;
declare let AppBar: FC<Props$2>;

declare const SECTION_PADDING_SIZES: {
    readonly DEFAULT: "default";
    readonly MEDIUM: "medium";
    readonly SMALL: "small";
};
type SectionPaddingSize = ValueOf<typeof SECTION_PADDING_SIZES>;
type SectionProps = {
    bordered?: boolean;
    compact?: boolean;
    rounded?: boolean;
    shadowed?: boolean;
} & ColorProps & CSSProp;
declare const Section: styled_components.StyledComponent<"section", styled_components.DefaultTheme, {
    bordered?: boolean | undefined;
    compact?: boolean | undefined;
    rounded?: boolean | undefined;
    shadowed?: boolean | undefined;
} & ColorProps & CSSProp<any>, never>;

type CardProps = PropsWithChildren<{
    borderedSections?: boolean;
    compact?: boolean;
    footerActions?: ReactNode;
    headerActions?: ReactNode;
    onClick?: () => void;
    title?: ReactNode;
}> & ColorProps & CSSProp & Pick<SectionProps, "shadowed">;
declare const Card: FC<CardProps>;

type AppBarLayoutV2Props = {
    appBar: ReactNode;
    mainContent: ReactNode;
};
declare const AppBarLayoutV2: FC<AppBarLayoutV2Props>;

declare const ComputersOnly: FC<PropsWithChildren>;

type MediaQuery = (styles: CSS) => CSS;

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
    reversed?: boolean;
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
    reversed?: boolean | undefined;
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
    reversed?: boolean | undefined;
    withRows?: boolean | undefined;
    wrapped?: boolean | undefined;
} & CSSProp<any> & {
    withRows: boolean;
}, "withRows">;

type Props$1 = {
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
declare let Carousel: ({ children, className, disableNextButton, disablePreviousButton, inline, onEndClick, onNextClick, onPreviousClick, onStartClick, }: Props$1) => react_jsx_runtime.JSX.Element;

type StyledComponentProps = {
    className?: string;
};

declare const DRAWER_SIZES: {
    DEFAULT: string;
    FULL_WIDTH: string;
    LARGE: string;
};
type DrawerContent = {
    body: ReactNode;
    onClose?: () => void;
    size: ValueOf<typeof DRAWER_SIZES>;
    title?: string;
    withCancelButton?: boolean;
    withNoActions?: boolean;
};
type DrawerProps = {
    closeDrawer: () => void;
    drawerContent: Nullable<DrawerContent>;
    isOpen: boolean;
    width?: string;
} & CSSProp & StyledComponentProps;
declare let Drawer: FC<DrawerProps>;

declare const DrawerModalManager: FC;

declare const DrawerModalStateProvider: FC<PropsWithChildren<{}>>;

type DrawerContentState = Record<string, any>;
type DrawerState = {
    isDrawerOpen: boolean;
    drawerContent?: DrawerContent;
    drawerContentState: DrawerContentState;
};
type DrawerStateWithDispatch = {
    drawerState: Readonly<DrawerState>;
    setDrawerState: Dispatch<SetStateAction<DrawerState>>;
};
declare const defaultUiState: DrawerStateWithDispatch;
declare const DrawerStateContext: react.Context<DrawerStateWithDispatch>;

type DrawerHelperFunctions = {
    closeDrawer: () => void;
    openDrawerWith: (c: DrawerContent) => void;
    setDrawerContentState: (s: DrawerContentState) => void;
};
declare const useDrawerState: () => DrawerStateWithDispatch & DrawerHelperFunctions;

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
    Component: ComponentType<PropsWithChildren<{
        href: string;
    }>>;
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
    activeAction?: string;
    actionIconSize?: string;
    bordered?: boolean;
    fallbackToText?: boolean;
    scrollable?: boolean;
};
declare let IconAppBar: FC<IconAppBarProps>;

type Props = {
    color?: string;
};
declare const Line: styled_components.StyledComponent<"hr", styled_components.DefaultTheme, Props, never>;

declare const OpacityTransition: styled_components.StyledComponent<"div", styled_components.DefaultTheme, {
    opacity: number;
}, never>;

type SVGComponent = ComponentType<SVGAttributes<any>>;

declare const ALIGNMENTS: {
    readonly start: "flex-start";
    readonly center: "center";
    readonly end: "flex-end";
};
type Alignment = ValueOf<typeof ALIGNMENTS>;

type PromiseFunc<T = any, Rtn = any> = (...o: T[]) => Promise<Rtn>;

declare const BUTTON_SIZES: {
    readonly LARGE: "large";
    readonly MEDIUM: "medium";
    readonly SMALL: "small";
    readonly X_SMALL: "x_small";
};
type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
type AutoLoadable = {
    autoLoadable: true;
    onClick: PromiseFunc;
};
type ButtonBaseProps = PropsWithChildren<{
    alignItems?: string;
    alignSelf?: Alignment;
    ariaLabel?: string;
    autoLoadable?: boolean;
    disabled?: boolean;
    flat?: boolean;
    groupKey?: string;
    icon?: Nullable<string | SVGComponent | ComponentType | ReactNode>;
    iconPosition?: "left" | "right";
    iconSize?: string;
    inline?: boolean;
    innerAs?: string;
    innerRef?: Ref<HTMLButtonElement>;
    loading?: boolean;
    pill?: boolean;
    primary?: boolean;
    size?: ButtonSize;
    wrapInlineText?: boolean;
    onClick: () => void;
}> & CSSProp & ColorProps & ContainerProps;
type ControlledLoadable = {
    loading?: boolean;
    onClick: () => void;
};
type ButtonProps = (ButtonBaseProps & ControlledLoadable) | (ButtonBaseProps & AutoLoadable);

type MenuPlacement = "start" | "auto" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "end" | "end-top" | "end-bottom" | "start-top" | "start-bottom";

type OverflowMenuItem = {
    action: () => void;
    label: string;
};
type OverflowButtonProps = ButtonProps & CSSProp;
declare const OverflowButton: styled_components.StyledComponent<react__default.ForwardRefExoticComponent<_zendeskgarden_react_tables_dist_typings_elements_OverflowButton.IOverflowButtonProps & react__default.RefAttributes<HTMLButtonElement>>, styled_components.DefaultTheme, {}, never>;
type OverflowMenuProps = {
    actions: Array<OverflowMenuItem>;
    appendToNode?: HTMLElement;
    overflowButtonProps?: OverflowButtonProps;
    placement?: MenuPlacement;
};
declare const OverflowMenu: FC<OverflowMenuProps>;

declare const PhonesOnly: FC<PropsWithChildren>;

declare const PhonesAndTabletsOnly: FC<PropsWithChildren>;

type SectionBodyProps = {
    noHorizontalPadding?: boolean;
    paddingSize?: SectionPaddingSize;
    scrollable?: boolean;
} & CSSProp;
declare const SectionBody: styled_components.StyledComponent<"div", styled_components.DefaultTheme, {
    noHorizontalPadding?: boolean | undefined;
    paddingSize?: SectionPaddingSize | undefined;
    scrollable?: boolean | undefined;
} & CSSProp<any>, never>;

type SectionFooterProps = PropsWithChildren<{
    actions?: ReactNode;
    bordered?: boolean;
    caption?: ReactNode;
    paddingSize?: SectionPaddingSize;
    title?: ReactNode;
}> & CSSProp;
declare const SectionFooter: styled_components.StyledComponent<({ actions, bordered, className, paddingSize, }: SectionFooterProps) => JSX.Element, styled_components.DefaultTheme, {}, never>;

type SectionHeaderProps = PropsWithChildren<{
    actions?: ReactNode;
    bordered?: boolean;
    caption?: ReactNode;
    paddingSize?: SectionPaddingSize;
    title?: ReactNode;
}> & CSSProp;
declare const SectionHeader: styled_components.StyledComponent<react.ForwardRefExoticComponent<{
    actions?: ReactNode;
    bordered?: boolean | undefined;
    caption?: ReactNode;
    paddingSize?: SectionPaddingSize | undefined;
    title?: ReactNode;
} & {
    children?: ReactNode;
} & CSSProp<any> & react.RefAttributes<HTMLDivElement>>, styled_components.DefaultTheme, {}, never>;

declare const SEPARATOR_ORIENTATIONS: {
    readonly HORIZONTAL: "horizontal";
    readonly VERTICAL: "vertical";
};
type SeparatorProps = {
    color?: string;
    fluid?: boolean;
    orientation?: ValueOf<typeof SEPARATOR_ORIENTATIONS>;
} & CSSProp;
type StyledSeparatorProps = SeparatorProps & {
    className?: string;
};
declare const Separator: styled_components.StyledComponent<FC<StyledSeparatorProps>, styled_components.DefaultTheme, {
    color?: string | undefined;
    fluid?: boolean | undefined;
    orientation?: ValueOf<{
        readonly HORIZONTAL: "horizontal";
        readonly VERTICAL: "vertical";
    }> | undefined;
} & CSSProp<any>, never>;

type Action$1 = NavigationAction;
type SidebarProps = {
    actions: Action$1[];
    actionIconSize?: string;
    activeAction?: string;
    logo: ReactNode;
    lowerActions?: Action$1[];
};
declare const Sidebar: FC<SidebarProps>;

type Action = NavigationAction;
type SidebarV2Props = {
    actions: Action[];
    actionIconSize?: string;
    activeAction?: string;
    logo: ReactNode;
    lowerActions?: Action[];
    scrollable?: boolean;
};
declare const SidebarV2: FC<SidebarV2Props>;

type SidebarLayoutProps = {
    mainContent: ReactNode;
    sidebar: ReactNode;
};
declare const SidebarLayout: FC<SidebarLayoutProps>;

declare const TabletsOnly: FC<PropsWithChildren>;

type TabsProps = {
    children: ReactNode;
    onChange?: (selectedTab: string) => void;
    selectedItem?: string;
} & SectionProps;
type TabProps = {
    children: ReactNode;
    disabled?: boolean;
    onSelect: (tabKey: string) => void;
    tabKey: string;
    visibleTab: string;
};
type TabPanelProps = {
    children: ReactNode;
    item: string;
    visibleTab: string;
} & CSSProp;
declare const Tabs: FC<TabsProps>;
declare const Tab: FC<TabProps>;
declare const TabPanel: styled_components.StyledComponent<({ children, className, item, visibleTab }: TabPanelProps) => react_jsx_runtime.JSX.Element | null, styled_components.DefaultTheme, {}, never>;
declare const TabList: styled_components.StyledComponent<"div", styled_components.DefaultTheme, {
    alignItems?: string | undefined;
    gap?: string | null | undefined;
    fluid?: boolean | undefined;
    inline?: boolean | undefined;
    justifyContent?: string | undefined;
    responsivePropsList?: ResponsiveProps<FlexBoxProps>[] | undefined;
    reversed?: boolean | undefined;
    withRows?: boolean | undefined;
    wrapped?: boolean | undefined;
} & CSSProp<any>, never>;

export { AppBar, AppBarLayoutV2, AppBarLayoutV2Props, Card, CardProps, Carousel, Col, ComputersOnly, Container, DRAWER_SIZES, Drawer, DrawerContent, DrawerContentState, DrawerHelperFunctions, DrawerModalManager, DrawerModalStateProvider, DrawerProps, DrawerState, DrawerStateContext, DrawerStateWithDispatch, FlexBox, FlexBoxProps, FullScreen, FullScreenProps, Grid, IconAppBar, IconAppBarProps, Line, NavigationAction, OpacityTransition, OverflowButton, OverflowButtonProps, OverflowMenu, OverflowMenuItem, OverflowMenuProps, PhonesAndTabletsOnly, PhonesOnly, ResponsiveProps, Row, SECTION_PADDING_SIZES, SEPARATOR_ORIENTATIONS, Section, SectionBody, SectionBodyProps, SectionFooter, SectionFooterProps, SectionHeader, SectionHeaderProps, SectionPaddingSize, SectionProps, Separator, SeparatorProps, Sidebar, SidebarLayout, SidebarLayoutProps, SidebarProps, SidebarV2, SidebarV2Props, Tab, TabList, TabPanel, TabPanelProps, TabProps, TabletsOnly, Tabs, TabsProps, defaultUiState, useDrawerState };
