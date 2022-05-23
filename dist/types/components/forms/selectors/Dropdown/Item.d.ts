import { IItemProps } from "@zendeskgarden/react-dropdowns/dist/typings/types";
import { SelectorOption } from "components/forms/selectors/types";
import { ComponentType } from "react";
import { Theme } from "styles/theme/Theme.type";
export declare const Item: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<IItemProps & import("react").RefAttributes<HTMLLIElement>>, any, Partial<IItemProps & import("react").RefAttributes<HTMLLIElement> & {
    danger?: boolean | undefined;
    theme: Theme;
}> & {
    [others: string]: any;
} & {
    color: string;
    flat?: boolean | undefined;
    inline?: boolean | undefined;
    primary?: boolean | undefined;
}, string | number>;
export declare const getItemType: (o: SelectorOption) => ComponentType<IItemProps> | typeof Item;
//# sourceMappingURL=Item.d.ts.map