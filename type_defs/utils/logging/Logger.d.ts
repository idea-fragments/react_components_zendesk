import type { LoggerI } from "utils/logging/Logger.type";
export declare class Logger implements LoggerI {
    #private;
    moduleName: string;
    constructor(moduleName: string);
    writeInfo: (...args: any) => void;
    writeError: (...args: any) => void;
    writeWarning: (...args: any) => void;
}
//# sourceMappingURL=Logger.d.ts.map