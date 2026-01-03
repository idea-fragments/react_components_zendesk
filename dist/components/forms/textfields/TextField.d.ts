import React from "react";
export declare let TextField: React.ForwardRefExoticComponent<Pick<React.InputHTMLAttributes<HTMLInputElement>, "type" | "placeholder" | "inputMode" | "autoComplete" | "step"> & {
    faux?: boolean | undefined;
    onChange: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    small?: boolean | undefined;
    symbolProp?: string | undefined;
    value?: string | undefined;
} & {
    disabled?: boolean | undefined;
    emptyState?: React.ReactNode;
    hint?: React.ReactNode;
    label?: React.ReactNode;
    message?: React.ReactNode;
    required?: boolean | undefined;
    validation?: import("../Validation.type").Validation | undefined;
} & import("styles/types").ContainerProps & React.RefAttributes<unknown>>;
//# sourceMappingURL=TextField.d.ts.map