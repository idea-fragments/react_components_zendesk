export type InvalidFields = {
    [key: string]: string[];
};
export declare const validateFields: (fieldLabels: {
    [key: string]: string;
}) => (invalidFields: InvalidFields, field: string) => {
    validation: "error";
    message: string;
} | {
    validation: undefined;
    message?: undefined;
};
//# sourceMappingURL=validateFields.d.ts.map