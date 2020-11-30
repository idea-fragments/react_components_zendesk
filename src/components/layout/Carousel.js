// @flow

import { mdiArrowLeft, mdiArrowRight } from "@mdi/js"
import { IconButton }                  from "components/forms/IconButton"
import { FlexBox }                     from "components/layout/FlexBox"
import React, { type Node }            from "react"
import styled                          from "styled-components"

type Props = {
    children :Node,
    className? :string,
    disableNextButton? :boolean,
    disablePreviousButton? :boolean,
    inline? :boolean,
    onNextClick :() => void,
    onPreviousClick :() => void,
}

export let Carousel = ({
                           children,
                           className,
                           disableNextButton,
                           disablePreviousButton,
                           inline,
                           onNextClick,
                           onPreviousClick,
                       } :Props) => (
    <FlexBox alignItems={"center"} className={className} inline={inline}>
        <NavButton disabled={disablePreviousButton}
                   icon={mdiArrowLeft}
                   onClick={onPreviousClick} />
        <FlexBox css={`flex: 1;`}
                 justify={"center"}>
            {children}
        </FlexBox>
        <NavButton disabled={disableNextButton}
                   icon={mdiArrowRight}
                   onClick={onNextClick} />
    </FlexBox>
)

Carousel = styled(Carousel)``

const NavButton = styled(IconButton).attrs({
    flat   : false,
    primary: true,
})``
