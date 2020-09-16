// @flow

export type Styles = {
    appBar :{
        background :string,
        zIndex :number,
    },
    buttons :{
        textTransform :string,
    },
    colorAccent :string,
    colorPrimary :string,
    colorWarning :string,
    colorDanger :string,
    colorSuccess :string,
    container :{ horizontalPadding :string },
    footer :{
        background :string
    },
    infoPanel :{
        background :string,
    },
    nav :{
        linkColor :string,
    },
    overlayBackground :string,
    pageBackground :string,
    scrollbar :{
        thumbColor :string,
        trackColor :string,
    },
    scrollbarColor :string,
    sidebar :{
        background :string,
        zIndex :number
    },
    tooltip :{
        darkBackground :string,
    },
    textColorPrimary :string,
    textColorOverPrimaryBg :string,
    textColorSecondary :string,

    // eslint-disable-next-line no-use-before-define
    getTextColorForBackground :({ color :string, theme :Theme }) => string
}

export type Theme = {
    isDark :boolean,
    styles :Styles,
}
