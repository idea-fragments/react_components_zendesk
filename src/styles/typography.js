const XXS    = ".8rem"
const XS     = ".9rem"
const SM     = "1rem"
const MD     = "1.3rem"
const LG     = "1.7rem"
const XL     = "2.3rem"
const XXL    = "3.3rem" // h1
const XXXL   = "4rem"
const XXXXL  = "5rem"
const XXXXXL = "6rem"

const THIN    = "100"
const LIGHT   = "300"
const REGULAR = "400"
const MEDIUM  = "500"
const BOLD    = "700"
const BLACK   = "800"

const H1   = "h1"
const H2   = "h2"
const H3   = "h3"
const H4   = "h4"
const H5   = "h5"
const H6   = "h6"
const P    = "p"
const SPAN = "span"
const DIV  = "div"

export const FONT_TAGS = Object.freeze({
    H1, H2, H3, H4, H5, H6, P, SPAN, DIV,
})

export const FONT_SIZES = Object.freeze({
    XXS, XS, SM, MD, LG, XL, XXL, XXXL, XXXXL, XXXXXL,
})

export const FONT_WEIGHTS = {
    THIN, LIGHT, REGULAR, MEDIUM, BOLD, BLACK,
}

export type FontSize = XS | SM | MD | LG | XL | XXL | XXXL
export type FontWeight = THIN | LIGHT | REGULAR | MEDIUM | BOLD | BLACK
export type FontTag = H1 | H2 | H3 | H4 | H5 | H6 | P | SPAN | DIV
export type TextAlignment = "center" | "left" | "right"

export type TextProps = {
    align? :TextAlignment,
    as? :FontTag,
    hasSubText? :boolean,
    size? :FontSize,
    weight? :FontWeight,
}
