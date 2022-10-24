import { IItemProps } from "@zendeskgarden/react-dropdowns/dist/typings/types";
import { SelectorOption } from "components/forms/selectors/types";
import { ComponentType } from "react";
export declare type ItemProps = IItemProps & {
    danger?: boolean;
};
export declare const Item: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<IItemProps & import("react").RefAttributes<HTMLLIElement>>, any, {
    color: any;
    primary: boolean;
} & IItemProps & {
    danger?: boolean | undefined;
}, "color" | "primary">;
export declare const getItemType: (o: SelectorOption) => ComponentType<ItemProps> | typeof Item;
//# sourceMappingURL=Item.d.ts.map