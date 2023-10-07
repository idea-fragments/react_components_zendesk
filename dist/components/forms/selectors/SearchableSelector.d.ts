import { SelectorOption, SelectorProps } from "components/forms/selectors/types";
import { FC, ReactNode } from "react";
type Props = {
    children?: (o: SelectorOption) => void | ReactNode;
    onSearchTextChange?: (s: string) => void;
} & SelectorProps;
export declare let SearchableSelector: FC<Props>;
export {};
//# sourceMappingURL=SearchableSelector.d.ts.map