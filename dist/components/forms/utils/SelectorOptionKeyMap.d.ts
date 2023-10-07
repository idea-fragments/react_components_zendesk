import { SelectorOption, SelectorProps } from "components/forms/selectors/types";
export type SelectorOptionKeyMapParams = Pick<SelectorProps, "keyField" | "options" | "optionsKeyMap">;
export declare class SelectorOptionKeyMap {
    static call({ keyField, options, optionsKeyMap }: SelectorOptionKeyMapParams): {
        [key: string]: SelectorOption;
    };
}
//# sourceMappingURL=SelectorOptionKeyMap.d.ts.map