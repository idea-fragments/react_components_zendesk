// @flow

import { newIdGenerator } from "utils/idGenerator"
import { deviseSizes }    from "styles/deviceSizes"
import { unit }           from "styles/mediaQueries"
import { nextId }         from "utils/idGenerator"
import { Logger }         from "utils/logging/Logger"

export type DeviceSize = number
export type DeviceSizeChangeListener = (DeviceSize) => void

const DEVICES :{ [string] :DeviceSize } = {
    phone        : 0,
    tablet       : 1,
    largeTablet  : 2,
    smallComputer: 3,
    largeComputer: 4,
}

const deviceQueries = (isSkinnyLayout) :{ [DeviceSize] :string } => {
    const {
              phoneSize,
              tabletSize,
              largeTabletSize,
              smallComputerSize,
          } = deviseSizes(!isSkinnyLayout)

    return {
        [DEVICES.phone]        : `(max-width: ${unit(phoneSize)})`,
        [DEVICES.tablet]       : `(min-width: ${unit(phoneSize + 1)}) and (max-width: ${unit(
            tabletSize)})`,
        [DEVICES.largeTablet]  : `(min-width: ${unit(tabletSize + 1)}) and (max-width: ${unit(
            largeTabletSize)})`,
        [DEVICES.smallComputer]: `(min-width: ${unit(largeTabletSize + 1)}) and (max-width: ${unit(
            smallComputerSize)})`,
        [DEVICES.largeComputer]: `(min-width: ${unit(smallComputerSize + 1)})`,
    }
}

const logger = new Logger("DeviceSizeWatcher")

class DeviceSizeWatcher {
    #subscribers = {}
    #idGen       = newIdGenerator()
    #currentSize :DeviceSize
    constructor() {
        this.#createAllListeners()
    }
    subscribe = (callBack :Function) :number => {
        const id              = nextId(this.#idGen)
        this.#subscribers[id] = callBack
        return id
    }

    unsubscribe = (id :number) => {
        this.#subscribers[id] = null
        delete this.#subscribers[id]
    }

    #notifyReceivers = (s :DeviceSize) => {
        Object.values(this.#subscribers)
              .forEach((f :DeviceSizeChangeListener) => { f(s) })
    }

    isPhone         = () => this.#currentSize === DEVICES.phone
    isTablet        = () => this.#currentSize === DEVICES.tablet
    isLargeTablet   = () => this.#currentSize === DEVICES.largeTablet
    isSmallComputer = () => this.#currentSize === DEVICES.smallComputer
    isLargeComputer = () => this.#currentSize === DEVICES.largeComputer

    getSize = () :DeviceSize => this.#currentSize

    #createAllListeners = () => {
        logger.writeInfo("#createAllListeners")

        const queries = deviceQueries(false)
        logger.writeInfo("queries", queries)

        Object.entries(DEVICES).forEach(([name :string, s :DeviceSize]) :void => {
        logger.writeInfo("name", name)
            const ml :MediaQueryList = window.matchMedia(queries[s])
            ml.addListener((e :MediaQueryListEvent) => {
                if (!e.matches) return

                this.#currentSize = s
                logger.writeInfo("Changed to size:", name)
                this.#notifyReceivers(s)
            })

            if (ml.matches) {
                this.#currentSize = s
                logger.writeInfo("Initial size:", name)
            }
        })
    }
}

export const deviceSizeWatcher = new DeviceSizeWatcher()
