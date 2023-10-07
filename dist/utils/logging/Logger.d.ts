import { LoggerI } from "utils/logging/Logger.type";
declare const LEVEL_STYLES: {
    readonly info: "background: #499cc8; color: white;";
    readonly error: "background: #c14a4f; color: white;";
    readonly warn: "background: #e0a270; color: black;";
};
export declare class Logger implements LoggerI {
    moduleName: string;
    constructor(moduleName: string);
    log: (level: keyof typeof LEVEL_STYLES) => (...args: any) => void;
    writeInfo: (...args: any) => void;
    writeError: (...args: any) => void;
    writeWarning: (...args: any) => void;
}
export {};
//# sourceMappingURL=Logger.d.ts.map