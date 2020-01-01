// @flow

import React, { useEffect } from "react"
import { useStores }        from "stores/useStores"
import { Logger }           from "utils/logging/Logger"

const logger = new Logger("ErrorBoundary")

type Props = {
    children :any,
    autoReload :boolean,
}

type State = {
    error :Error,
}

export class ErrorBoundary extends React.Component<Props, State> {
    static defaultProps   = { autoReload: false }
    static COMPONENT_NAME = "ErrorBoundary"
    state                 = { error: null }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { error }
    }

    componentDidCatch(error :Error, errorInfo) :void {
        logger.writeInfo("componentDidCatch", error, errorInfo)
    }

    render() {
        return (
            <ErrorHandler error={this.state.error}
                          {...this.props} />
        )
    }
}

const ErrorHandler = ({ error, children, autoReload, fallback } :{ error :Error }) => {
    const { errorStore } = useStores()

    useEffect(() => {
        if (!error) return
        errorStore.addUnknown(error)
    }, [error, children, errorStore])

    if (error && !autoReload) {
        return fallback ? fallback : <h1>Something went wrong.</h1>
    }

    return children
}
