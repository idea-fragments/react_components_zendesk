// @flow

import { Tabs as ZTabs, TabPanel as ZTabPanel } from "@zendeskgarden/react-tabs"
import styled           from "styled-components"
import { FONT_WEIGHTS } from "styles/typography"

export const Tabs = styled(ZTabs)`
  &&& {
    overflow: unset;
    *[data-garden-id="tabs.tab"], *[data-garden-id="tabs.tablist"] { 
      font-size: inherit; 
      font-weight: ${FONT_WEIGHTS.MEDIUM};
      
      :hover, :focus, &[aria-selected="true"] {
        color: ${({ theme }) => theme.styles.colorPrimary};
        font-weight: ${FONT_WEIGHTS.BOLD};
      }
    }
  }
`

export const TabPanel = ZTabPanel
