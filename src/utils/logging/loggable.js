// @flow

import React                  from "react"
import type { ComponentType } from "components/Component.type"
import type { LoggerI }       from "utils/logging/Logger.type"
import { withModuleLogging }  from "utils/logging/with_module_logging"

export const loggable = <T = *>(C :ComponentType<T>) :ComponentType<T> => (
    withModuleLogging(C.COMPONENT_NAME, (logger :LoggerI) => (
        class Loggable extends React.Component<T> {
            render() {
                return <C {...this.props} logger={logger} />
            }
        }
    ))
)
