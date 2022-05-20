// @flow


import { Logger } from "utils/logging/Logger"

export type ScrollPassedNavBarListener = (b :boolean) => void

const listeners = new Set<ScrollPassedNavBarListener>()
let navBar :HTMLDivElement
let scrolledPassedNavBar :boolean
const logger = new Logger("NavBarScrollWatcher")

const checkNavPosition = () => {
    if (!navBar) return

    const { height: bottomPixel } = navBar.getBoundingClientRect()
    const isCurrentlyPassedBar    = window.scrollY > bottomPixel

    logger.writeInfo(
        "window.scrollY",
        window.scrollY,
        "bottomPixel",
        bottomPixel,
        "scrolledPassedNavBar",
        scrolledPassedNavBar,
    )

    if ((scrolledPassedNavBar == null) ||
        (!scrolledPassedNavBar && isCurrentlyPassedBar) ||
        (scrolledPassedNavBar && !isCurrentlyPassedBar)) {
        notifyListeners(isCurrentlyPassedBar)
    }

    scrolledPassedNavBar = isCurrentlyPassedBar
}

const notifyListeners = (b :boolean) => {
    listeners.forEach((f :ScrollPassedNavBarListener) => { f(b) })
}

export class NavBarScrollWatcher {
    static onScrollPassedNavBar = (f :ScrollPassedNavBarListener) => {
        listeners.add(f)
        if (listeners.size === 1) {
            window.addEventListener("scroll", checkNavPosition)
        }

        return () => {
            listeners.delete(f)
            if (listeners.size === 0) {
                window.removeEventListener("scroll", checkNavPosition)
            }
        }
    }

    static setNavBar = (n :HTMLDivElement) => { navBar = n }

    static setInitialState = () => { checkNavPosition() }
}
