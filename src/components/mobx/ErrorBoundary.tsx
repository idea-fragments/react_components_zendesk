import React, { ErrorInfo, FC, PropsWithChildren, useEffect } from "react"
import { useStores }                                          from "stores/useStores"
import { Logger }                                             from "utils/logging/Logger"

const logger = new Logger("ErrorBoundary")

type Props = {
  children: any,
  autoReload: boolean,
}

type State = {
  error: Error,
}

export class ErrorBoundary extends React.Component<Props, State> {
  static defaultProps   = { autoReload: false }
  static COMPONENT_NAME = "ErrorBoundary"
  // @ts-ignore
  state                 = { error: null }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    logger.writeError("componentDidCatch", error, errorInfo)
  }

  render() {
    return (
      <ErrorHandler error={this.state.error}
                    {...this.props} />
    )
  }
}

const ErrorHandler: FC<PropsWithChildren<{
  error: Error | null,
  autoReload: boolean,
  fallback?: JSX.Element,
}>> = ({ error, children, autoReload, fallback }) => {
  const { errorStore } = useStores()

  useEffect(() => {
    if (!error) return
    errorStore.addUnknown(error)
  }, [error, children, errorStore])

  if (error && !autoReload) {
    return fallback ? fallback : <h1>Something went wrong.</h1>
  }

  return <>{children}</>
}
