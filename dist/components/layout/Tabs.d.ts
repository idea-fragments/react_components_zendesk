import { SectionProps } from "components/layout/Section";
import { FC, ReactNode } from "react";
export type TabsProps = {
    children: ReactNode;
    onChange?: (selectedTab: string) => void;
    selectedItem?: string;
} & SectionProps;
export type TabProps = {
    children: ReactNode;
    disabled?: boolean;
    onSelect: (tabKey: string) => void;
    tabKey: string;
    visibleTab: string;
};
export type TabPanelProps = {
    children: ReactNode;
    item: string;
    visibleTab: string;
};
export declare const Tabs: FC<TabsProps>;
export declare const Tab: FC<TabProps>;
export declare const TabPanel: FC<TabPanelProps>;
export declare const TabList: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    alignItems?: string | undefined;
    gap?: string | null | undefined;
    fluid?: boolean | undefined;
    inline?: boolean | undefined;
    justifyContent?: string | undefined;
    responsivePropsList?: import("components/layout/FlexBox").ResponsiveProps<import("components/layout/FlexBox").FlexBoxProps>[] | undefined;
    withRows?: boolean | undefined;
    wrapped?: boolean | undefined;
} & import("../../styles/types").CSSProp<any>, never>;
//# sourceMappingURL=Tabs.d.ts.map