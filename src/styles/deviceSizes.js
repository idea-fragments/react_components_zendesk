// @flow

type DeviseSizes = {
    phoneSize        :number,
    tabletSize       :number,
    largeTabletSize  :number,
    smallComputerSize:number,
}

/* Size key name represents all devices with a pixel width up to the number
specified */
const REGULAR_SIZES = {
    phoneSize        : 575,
    tabletSize       : 767,
    largeTabletSize  : 991,
    smallComputerSize: 1199,
}

const WIDE_SIZES = {
    phoneSize        : 560,
    tabletSize       : 840,
    largeTabletSize  : 991,
    smallComputerSize: 1350,
}

export const deviseSizes = (wideLayout = false) :DeviseSizes => {
    return wideLayout ? WIDE_SIZES : REGULAR_SIZES
}
