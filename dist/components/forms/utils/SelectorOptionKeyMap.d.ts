import { SelectorOption, SelectorProps } from "components/forms/selectors/types";
export type SelectorOptionKeyMapParams<T> = Pick<SelectorProps<T>, "keyField" | "options" | "optionsKeyMap">;
export declare class SelectorOptionKeyMap {
    static call<T>({ keyField, options, optionsKeyMap, }: SelectorOptionKeyMapParams<T>): {
        [key: string]: SelectorOption<T>;
    };
}
//# sourceMappingURL=SelectorOptionKeyMap.d.ts.map