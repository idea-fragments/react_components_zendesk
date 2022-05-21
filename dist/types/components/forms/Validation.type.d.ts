import { VALIDATION_STATES } from "components/forms/validationStates";
import { ReactNode } from "react";
import { ValueOf } from "utils/types";
export declare type ValidationState = ValueOf<typeof VALIDATION_STATES>;
export declare type Validation = {
    validation: ValidationState;
    message?: ReactNode;
};
//# sourceMappingURL=Validation.type.d.ts.map