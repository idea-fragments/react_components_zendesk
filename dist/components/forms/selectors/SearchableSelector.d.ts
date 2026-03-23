import { SelectorOption, SelectorProps } from "components/forms/selectors/types";
import { ReactNode } from "react";
export type SearchableSelectorProps<T> = {
    children?: (o: SelectorOption<T>) => void | ReactNode;
    dynamicSearching?: boolean;
    onSearchTextChange?: (text: string) => Promise<void>;
    skipResetOnSelection?: boolean;
} & SelectorProps<T>;
export declare let SearchableSelector: <T>({ children, disabled, dynamicSearching, onSearchTextChange, onStateChange, skipResetOnSelection, ...props }: SearchableSelectorProps<T>) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SearchableSelector.d.ts.map