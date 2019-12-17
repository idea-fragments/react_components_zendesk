// @flow

import { Icon }                      from "components/Icon"
import { FlexBlock }                 from "components/layout/FlexBlock"
import React, { Children, Fragment } from "react"
import type { ComponentType, Node }  from "react"
import styled                        from "styled-components"
import { COLORS }                    from "styles/colors"
import { SPACINGS }                  from "styles/spacings"
import { FONT_SIZES, FONT_WEIGHTS }  from "styles/typography"


export const Breadcrumbs :ComponentType<*> = ({ children }) => {
    const numChildren    = Children.count(children)
    const isNotLastChild = (index :number) => index !== numChildren - 1
    const separator      = <Icon name={"arrow-ios-forward-outline"}
                                 color={COLORS.TEXT_COLOR_SECONDARY} />


    return <Container data-component-name={Breadcrumbs.COMPONENT_NAME}>
        {Children.map(children, (c :Node, i) => (
            isNotLastChild(i) ? (
                <Fragment>
                    {c}
                    {separator}
                </Fragment>
            ) : <span>{c}</span>
        ))}
    </Container>
}

Breadcrumbs.COMPONENT_NAME = "Breadcrumbs"

const Container = styled(FlexBlock)`
  margin-top: ${SPACINGS.SM};
  align-items: center;

  color: ${COLORS.TEXT_COLOR_SECONDARY};
  font-weight: ${FONT_WEIGHTS.REGULAR} !important;
  
  & > *:last-child {
    margin-top: -.15em;
    font-size: ${FONT_SIZES.MD};
  }
`
