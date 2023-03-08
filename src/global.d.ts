import {}        from "styled-components/cssprop"
import { Theme } from "styles/theme/Theme.type"
import "styled-components"

declare module "@zendeskgarden/react-accordions"
declare module "@zendeskgarden/react-avatars"
declare module "@zendeskgarden/react-breadcrumbs"
declare module "@zendeskgarden/react-buttons"
declare module "@zendeskgarden/react-datepickers"
declare module "@zendeskgarden/react-forms"
declare module "@zendeskgarden/react-grid"
declare module "@zendeskgarden/react-loaders"
declare module "@zendeskgarden/react-modals"
declare module "@zendeskgarden/react-notifications"
declare module "@zendeskgarden/react-pagination"
declare module "@zendeskgarden/react-tables"
declare module "@zendeskgarden/react-tags"
declare module "@zendeskgarden/react-tooltips"
declare module "@zendeskgarden/react-theming"
declare module "@zendeskgarden/react-typography"
declare module "@zendeskgarden/react-utilities"

declare global {
  interface Window {
    DEBUG_MODULES: Set<string>,
  }
}

export type Nullable<T> = T | null | undefined

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
