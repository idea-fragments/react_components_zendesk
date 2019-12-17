// @flow

export type Theme = {
    isDark :boolean,
    styles :{
        colorAccent :string,
        colorPrimary :string,

        nav :{
            linkColor :string,
        },

        footer: {
            background: string
        }

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

        getTextColorForBackground :({ color :string, theme :Theme }) => string
    }
}
