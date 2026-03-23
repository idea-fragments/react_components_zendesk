import { Logger } from "@idea-fragments/logger-js"
// @ts-ignore
import packageJson from "../../../package.json"

export const enableLogging = () =>
  Logger.addModules([
    "DatePickerSelector",
    "DateRangePickerSelector",
    "Drawer",
    "Dropdown",
    "Loadable",
    "NavBarScrollWatcher",
    "PhotoBooth",
    "SearchableSelector",
    "TableFilter",
    "Toggles",
    "useTextQualityDetection",
  ])

Logger.packageName = packageJson.name

export { Logger }
