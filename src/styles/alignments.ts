import { ValueOf } from "utils/types"

export const ALIGNMENTS = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
} as const

export type Alignment = ValueOf<typeof ALIGNMENTS>
