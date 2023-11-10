import clone from "lodash/cloneDeep"
import { Theme } from "styles/theme/Theme.type"
import { light } from "styles/theme/light"
import { SPACINGS } from "styles/spacings"

export const light2: Theme = clone<Theme>(light)
light2.styles = {
  ...light2.styles,
  appBar: {
    ...light2.styles.appBar,
    shadow: "#0000000d 0 0 15px 0",
  },
  pageBackground: "#f7f7f7",
  section: {
    ...light2.styles.section,
    background: "#fff",
    borderRadius: "3px",
    margin: `${SPACINGS.XXXL} 0`,
    padding: "2rem",
    shadow: "#00000014 0 6px 14px 0",
  },
}
