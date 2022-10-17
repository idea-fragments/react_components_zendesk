import { LoggerI } from "utils/logging/Logger.type"

const LEVEL_STYLES = {
  info:  "background: #499cc8; color: white;",
  error: "background: #c14a4f; color: white;",
  warn:  "background: #e0a270; color: black;",
} as const

export class Logger implements LoggerI {
  moduleName: string

  constructor(moduleName: string) {
    this.moduleName = moduleName
  }

  log = (level: keyof typeof LEVEL_STYLES) => (...args: any) => {
    if (typeof window === "undefined" ||
        !window.DEBUG_MODULES.has(this.moduleName)) return

    console[level](
      `%c${this.moduleName}`,
      `${LEVEL_STYLES[level]} padding: 2px 6px;`,
      ...args,
    )
  }

  writeInfo    = this.log("info")
  writeError   = this.log("error")
  writeWarning = this.log("warn")
}

if (typeof window !== `undefined`) {
  window.DEBUG_MODULES = new Set([
    // "Dropdown",
    // "SearchableSelector",
  ])
}
