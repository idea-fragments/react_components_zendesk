// @flow

import { Logger }            from "utils/logging/Logger"
import { LoggableFunc } from "utils/logging/Logger.type"

export const withModuleLogging = (moduleName :string, f :LoggableFunc) => {
    return f(Object.freeze(new Logger(moduleName)))
}
