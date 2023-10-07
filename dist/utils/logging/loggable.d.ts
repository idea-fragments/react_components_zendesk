import { ComponentType as RComponentType } from "react";
type ComponentType<T> = RComponentType<T> & {
    COMPONENT_NAME: string;
};
export declare const loggable: <T>(C: ComponentType<T>) => ComponentType<T>;
export {};
//# sourceMappingURL=loggable.d.ts.map