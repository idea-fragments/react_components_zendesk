// @flow

export type Styles = {
    colorAccent :string,
    colorPrimary :string,
    colorDanger :string,
    colorSuccess :string,

    container :{ horizontalPadding :string },

    nav :{
        linkColor :string,
    },

    footer :{
        background :string
    },

    overlayBackground :string,
    pageBackground :string,

    scrollbar :{
        thumbColor :string,
        trackColor :string,
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
