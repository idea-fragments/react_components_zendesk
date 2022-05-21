import React, { ComponentType as RComponentType } from "react"
import { LoggerI }                           from "utils/logging/Logger.type"
import { withModuleLogging }                      from "utils/logging/with_module_logging"

type ComponentType<T> = RComponentType<T> & {
  COMPONENT_NAME: string
}

export const loggable = <T, >(C: ComponentType<T>): ComponentType<T> => (
  withModuleLogging(C.COMPONENT_NAME, (logger: LoggerI) => (
    class Loggable extends React.Component<T> {
      render() {
        return <C {...this.props} logger={logger} />
      }
    }
  ))
)
