// @flow

export const ALIGNMENTS = {
    start : "flex-start",
    center: "center",
    end   : "flex-end",
}

export type Alignment = $Values<typeof ALIGNMENTS>
