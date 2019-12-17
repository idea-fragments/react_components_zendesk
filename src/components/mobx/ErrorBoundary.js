// @flow

import React, { useEffect } from "react"
import { useStores }        from "stores/useStores"
import { loggable }         from "utils/logging/loggable"
import type { LoggerI }     from "utils/logging/Logger.type"


type Props = {
    children :any,
    logger? :LoggerI,
}

type State = {
    error :Error,
}

@loggable
export class ErrorBoundary extends React.Component<Props, State> {
    static defaultProps   = {}
    static COMPONENT_NAME = "ErrorBoundary"
    state                 = { error: null }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { error }
    }

    componentDidCatch(error :Error, errorInfo) :void {
        this.props.logger.writeInfo("componentDidCatch", error, errorInfo)
    }

    render() {
        return (
            <ErrorHandler error={this.state.error} autoReload={this.props.autoReload}>
                {this.props.children}
            </ErrorHandler>
        )
    }
}

const ErrorHandler = ({ error, children, autoReload } :{ error :Error }) => {
    const { errorStore } = useStores()

    useEffect(() => {
        if (!error) return
        errorStore.addUnknown(error)
    }, [error, children])

    if (error && !autoReload) return <h1>Something went wrong.</h1>

    return children
}
