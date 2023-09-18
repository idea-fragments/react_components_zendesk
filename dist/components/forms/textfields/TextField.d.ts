import React from "react";
export declare let TextField: React.ForwardRefExoticComponent<{
    autoComplete?: string | undefined;
    faux?: boolean | undefined;
    small?: boolean | undefined;
    type?: string | undefined;
    value?: string | undefined;
    onChange: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
} & {
    disabled?: boolean | undefined;
    emptyState?: React.ReactNode;
    hint?: React.ReactNode;
    label?: React.ReactNode;
    message?: React.ReactNode;
    required?: boolean | undefined;
    validation?: import("../Validation.type").Validation | undefined;
} & import("../../../styles/types").ContainerProps & React.RefAttributes<unknown>>;
//# sourceMappingURL=TextField.d.ts.map