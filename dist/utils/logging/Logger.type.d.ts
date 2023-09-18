export interface LoggerI {
    writeInfo: (...args: any) => void;
    writeError: (...args: any) => void;
    writeWarning: (...args: any) => void;
}
export type LoggableFunc = (logger: LoggerI) => any;
//# sourceMappingURL=Logger.type.d.ts.map