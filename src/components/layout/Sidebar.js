// @flow

// import { Button }              from "components/forms/Button"
// import { IconButton }          from "components/forms/IconButton"
// import { FlexBlock }           from "components/layout/FlexBlock"
// import { H3 }                  from "components/text/Header"
// import React, { type ElementType }  from "react"
// import styled                  from "styled-components"
// import { mdiArrowLeft }        from "@mdi/js"
// import { SPACINGS }            from "styles/spacings"
// import type { ContainerProps } from "styles/types"
import { DO_NOTHING }          from "utils/functionHelpers"
//
// const Container = styled(FlexBlock)`
//   height: 100%;
//   padding: ${SPACINGS.LG};
//   width: ${({ width }) => width};
// `
//
// const Header = styled(H3)`
//   color: ${({ theme }) => theme.styles.colorPrimary} !important;
//   margin: 0;
// `
//
// const ActionContainer = styled(FlexBlock)`
//   flex: 1;
// `
//
// const ActionItem = styled(Button).attrs({
//     flat: true, fluid: true,
// })`
//   && {
//     text-align: left;
//   }
// `

// export type Action = {
//     name :string,
//     onClick :() => void,
// }

// type Props = {
//     title :string,
//     actions :Array<Action>,
//     showBackButton :boolean,
//     onBackClicked :() => void,
//     onLogoClicked :() => void,
//     logo? :ElementType,
//     width :string,
// } & ContainerProps

export const Sidebar = () => {
    throw new Error("Not Completed Yet")
}

// export const Sidebar = ({
                            // title,
                            // actions,
                            // showBackButton,
                            // onBackClicked,
                            // onLogoClicked,
                            // logo,
                            // width,
                        // } :Props) => {
    // throw "Not Completed Yet"
    // return <Container
    //     data-component-name={Sidebar.COMPONENT_NAME}
    //     spacing={SPACINGS.SM}
    //     withRows
    //     width={width}
    // >
    //     <FlexBlock>
    //         {
    //             showBackButton
    //             ? <IconButton icon={mdiArrowLeft}
    //                           flat
    //                           onClick={onBackClicked} />
    //             : null
    //         }
    //
    //         <FlexBlock alignItems={"center"}
    //                    onClick={onLogoClicked}
    //                    css={`cursor: pointer;`}>
    //             {logo ? logo : null}
    //             <Header>{title}</Header>
    //         </FlexBlock>
    //     </FlexBlock>
    //
    //     <ActionContainer withRows>
    //         {
    //             actions.map(({ name, onClick } :Action) => {
    //                 return <ActionItem onClick={onClick}>{name}</ActionItem>
    //             })
    //         }
    //     </ActionContainer>
    // </Container>
// }

Sidebar.defaultProps = {
    actions       : [],
    showBackButton: false,
    onBackClicked : DO_NOTHING,
    onLogoClicked : DO_NOTHING,
    width         : "250px",
}

Sidebar.COMPONENT_NAME = "Sidebar"
