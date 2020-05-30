// @flow

export type Styles = {
    appBar :{
        background :string,
        zIndex :number,
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
    sidebar :{
        background :string,
        zIndex :number
    },
    textColorPrimary :string,
    textColorOverPrimaryBg :string,
    textColorSecondary :string,
    scrollbarColor :string,

    // eslint-disable-next-line no-use-before-define
    getTextColorForBackground :({ color :string, theme :Theme }) => string
}

export type Theme = {
    isDark :boolean,
    styles :Styles,
}
