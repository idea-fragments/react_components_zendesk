declare type IndexedMap<T> = ({
    [key in string | number]: T;
});
export declare type Matrix<T> = Array<Array<T>>;
export declare type NullableArray<T = any> = ArrayLike<T> | null | undefined;
declare type ObjectWithProperty<Prop extends string> = {
    [key in Prop]: any;
};
export declare const arrayOfSizeN: (n: number) => Array<any>;
export declare const excludeBlanks: <T = any>(a: T[]) => NonNullable<T>[];
export declare const flatten: <T>(m: Matrix<T>) => T[];
export declare const indexBy: <FieldName extends string, T extends ObjectWithProperty<FieldName>>(a: T[], fieldName: FieldName) => IndexedMap<T>;
export declare const isEmpty: (a: NullableArray) => boolean;
export declare const isLastIndex: (a: any[], i: number) => boolean;
export declare const isLastItem: <E>(a: ArrayLike<E>, item: E) => boolean;
export declare const isNotEmpty: (a: NullableArray) => boolean;
export declare const isNotLastIndex: (a: any[], i: number) => boolean;
export declare const isNotLastItem: <E>(a: ArrayLike<E>, item: E) => boolean;
export declare const lastItem: <E>(a: ArrayLike<E>) => E;
export declare const splitArray: (arr: any[], index: number) => any[][];
export declare const takeOutItem: <T>(arr: T[], index: number) => T[];
export {};
//# sourceMappingURL=arrayHelpers.d.ts.map