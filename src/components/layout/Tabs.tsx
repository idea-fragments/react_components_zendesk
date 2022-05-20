// @ts-ignore
import { TabPanel as ZTabPanel, Tabs as ZTabs } from "@zendeskgarden/react-tabs"
import styled                                   from "styled-components"
import { COLORS }                               from "styles/colors"
import { FONT_WEIGHTS }                         from "styles/typography"

export const Tabs = styled(ZTabs)`
  &&& {
    //overflow: unset;

    *[data-garden-id="tabs.tab"], *[data-garden-id="tabs.tablist"] {
      font-size: inherit;
    }

    *[data-garden-id="tabs.tablist"] {
      //border-bottom: none;
      overflow-x: auto;
    }

    *[data-garden-id="tabs.tab"] {
      padding: 10px 15px 6px;

      &[aria-selected="true"] {
        font-weight: ${FONT_WEIGHTS.BOLD};
      }

      :hover:not(&[aria-selected="true"]) {
        color: ${({ theme }) => theme.styles.textColorPrimary};
        border-bottom: 3px solid ${COLORS.LIGHT_GREY};
      }

      :focus, &[aria-selected="true"] {
        color: ${({ theme }) => theme.styles.colorPrimary} !important;
      }
    }
  }
`

export const TabPanel = ZTabPanel
