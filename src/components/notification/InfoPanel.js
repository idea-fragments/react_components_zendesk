// @flow

import { mdiInformation }   from "@mdi/js"
import React, { type Node } from "react"
import { FlexBlock }        from "components/layout/FlexBlock"
import { Icon }             from "components/Icon"
import { COLORS }           from "styles/colors"
import styled               from "styled-components"

type Props = {
    children :Node,
    className? :string,
    iconVerticalAlignment? :"center"
}

export let InfoPanel = ({ children, className, iconVerticalAlignment } :Props) => {
    const alignItems = iconVerticalAlignment === "center"
                       ? "center" : undefined
    return <Container alignItems={alignItems}
                      className={className}>
        <Icon svg={mdiInformation} color={COLORS.LIGHT_BLUE} />
        <div css={`flex: 1`}>
            {children}
        </div>
    </Container>
}

InfoPanel = styled(InfoPanel)``

const Container = styled(FlexBlock)`
  background: ${({ theme }) => theme.styles.infoPanel.background};
  border-radius: 1rem;
  padding: 1.5rem;
`
